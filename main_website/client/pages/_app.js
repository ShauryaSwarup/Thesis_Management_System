import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";

import { useRouter } from "next/router";

import "../styles/globals.css";
import "flowbite";
import React, { createContext, useState } from "react";

const AuthContext = createContext();
function MyApp({ Component, pageProps }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const router = useRouter();
  return (
    <>
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        {router.pathname === "/" ? (
          <div className="mx-[2%] mt-[2%]">
            <Navbar />
            <div>
              <Component {...pageProps} AuthContext={AuthContext} />
            </div>
            <Footer />
          </div>
        ) : (
          <div className="mx-[2%] mt-[2%]">
            <div className="flex flex-row">
              {isAuthenticated && <Sidebar />}
              <div>
                <Component {...pageProps} AuthContext={AuthContext} />
              </div>
            </div>
            <Footer />
          </div>
        )}
      </AuthContext.Provider>
    </>
  );
}

export default MyApp;
