// import { data } from "../components/pie";

import dynamic from "next/dynamic";
import Table from "../components/table";
import homeStyles from "../styles/Home.module.css";
import ProgressBar from "../components/progress-bar";
import LinearWithValueLabel from "../components/linearprogresswithlabel";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

const Dashboard = ({ AuthContext }) => {
    const router = useRouter();
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const [user, setUser] = useState(null);

  const isAuth = async () => {
    try {
      const allCookies = document.cookie.split(";");
      for (let item of allCookies) {
        if (item.startsWith("token=")) {
          localStorage.setItem("token", item.slice(6));
          break;
        }
      }
      const res = await fetch("http://localhost:5000/auth/is-verify", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "jwt-token": localStorage.getItem("token"),
        },
      });
      const result = await res.json();
      console.log("result", result);
      result === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.log("Ohno, errro");
      console.error(err.message);
    }
  };

  const getUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/dashboard", {
        method: "GET",
        headers: { "Content-Type": "application/json", "jwt-token": token },
      });
      const user = await res.json();
      console.log(user);
      setUser(user);
    } catch (error) {
      console.error(error.message);
    }
  };

  const getCookie = (name) => {
    return document.cookie.split(";").some((c) => {
      return c.trim().startsWith(name + "=");
    });
  };

  const deleteCookie = (name, path, domain) => {
    if (getCookie(name)) {
      document.cookie =
        name +
        "=" +
        (path ? ";path=" + path : "") +
        (domain ? ";domain=" + domain : "") +
        ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
    }
  };

  const logout = async (cookieName) => {
    deleteCookie("token");
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };


  useEffect(() => {
    isAuth();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/dashboard")
	}
	  else{	
		router.push("/auth/login");}
    }
  , [isAuthenticated]);

  return (
	  <div className="">
		<button className="ml-6 bg-blue-600 p-3 rounded-full" onClick={logout}>Logout</button>
      <div className="">
        <div className=" p-6 flex flex-col md:space-y-[2%]">
          <span>Personal Progress</span>
          <LinearWithValueLabel progress1="75" />
        </div>
        <div className="p-6 flex flex-col md:space-y-[2%]">
          <span>Assignment Progress</span>
          <LinearWithValueLabel progress1="63" />
        </div>
      </div>
      <div className="flex">
        <Table type="student" />
        <Table type="prof" />
      </div>
    </div>
  );
};
export default Dashboard;

//progress self prof
//todo list checklist selfgoals, professor
//flex flex-col space-y-[10%] my-[4%]         flex space-x-[10%]             flex space-x-12
