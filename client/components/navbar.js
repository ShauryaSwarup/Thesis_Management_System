import VjtiLogoImg from "./pageComponents/vjtiLogoImg";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

function navbar({ AuthContext }) {
  console.log(AuthContext);
  // const router = useRouter();
  // const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  // const [user, setUser] = useState(null);

  // const isAuth = async () => {
  //   try {
  //     const allCookies = document.cookie.split(";");
  //     for (let item of allCookies) {
  //       if (item.startsWith("token=")) {
  //         localStorage.setItem("token", item.slice(6));
  //         break;
  //       }
  //     }
  //     const res = await fetch("http://localhost:5000/auth/is-verify", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "jwt-token": localStorage.getItem("token"),
  //       },
  //     });
  //     const result = await res.json();
  //     console.log("result", result);
  //     result === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
  //   } catch (err) {
  //     console.log("Ohno, errro");
  //     console.error(err.message);
  //   }
  // };

  // const getUser = async () => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     const res = await fetch("http://localhost:5000/dashboard", {
  //       method: "GET",
  //       headers: { "Content-Type": "application/json", "jwt-token": token },
  //     });
  //     const user = await res.json();
  //     console.log(user);
  //     setUser(user);
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };

  // const getCookie = (name) => {
  //   return document.cookie.split(";").some((c) => {
  //     return c.trim().startsWith(name + "=");
  //   });
  // };

  // const deleteCookie = (name, path, domain) => {
  //   if (getCookie(name)) {
  //     document.cookie =
  //       name +
  //       "=" +
  //       (path ? ";path=" + path : "") +
  //       (domain ? ";domain=" + domain : "") +
  //       ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
  //   }
  // };

  // const logout = async (cookieName) => {
  //   console.log("Inside lgout function");
  //   deleteCookie("token");
  //   localStorage.removeItem("token");
  //   setIsAuthenticated(false);
  // };

  // useEffect(() => {
  //   isAuth();
  // }, []);

  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     router.push("auth/login");
  //   }
  //   getUser();
  // }, [isAuthenticated]);
  const logout = () => {}

  return  (
		<div>
			<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
				<div class="container flex flex-wrap items-center justify-between mx-auto">
					<VjtiLogoImg/>
					<div class="flex items-center md:order-2">
						<button
							type="button"
							class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
							id="user-menu-button"
							aria-expanded="false"
							data-dropdown-toggle="user-dropdown"
							data-dropdown-placement="bottom"
						>
							<span class="sr-only">Open user menu</span>
						</button>
						<div
							class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
							id="user-dropdown"
						>
							<div class="px-4 py-3">
								<span class="block text-sm text-gray-900 dark:text-white">
									Bonnie Green
								</span>
								<span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
									name@flowbite.com
								</span>
							</div>
							<ul class="py-1" aria-labelledby="user-menu-button">
								<li>
									<a
										href="/profile"
										class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
									>
										Profile
									</a>
								</li>
								<li>
									<a
										href="#"
										class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
									>
										Settings
									</a>
								</li>
								<li>
									<a
										href="#"
										class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
									>
										Earnings
									</a>
								</li>
								<li>
									<a
										href="#"
										class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
									>
										Sign out
									</a>
								</li>
							</ul>
						</div>
						<button
							data-collapse-toggle="mobile-menu-2"
							type="button"
							class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
							aria-controls="mobile-menu-2"
							aria-expanded="false"
						>
							<span class="sr-only">Open main menu</span>
							<svg
								class="w-6 h-6"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
									clip-rule="evenodd"
								></path>
							</svg>
						</button>
					</div>
					<div
						class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
						id="mobile-menu-2"
					>
						
					</div>
				</div>
			</nav>
		</div>
	);
}

export default navbar;
