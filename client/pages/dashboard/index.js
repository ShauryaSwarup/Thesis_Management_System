import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";


const index = ({AuthContext}) => {
    const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext)

    const router = useRouter();

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
    
      useEffect(() => {
        if (!isAuthenticated) {
          router.push("auth/login");
        }
        console.log("You are authenticated");
      }, [isAuthenticated]);

      const logout = async (cookieName) => {
        deleteCookie("token");
        localStorage.removeItem("token");
        setIsAuthenticated(false);
      };

    return (
        <button onClick={logout}>
            Logout
        </button>
    );
}

export default index;