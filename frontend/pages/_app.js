import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";

import { useRouter } from "next/router";

import "../styles/globals.css";
import "flowbite";

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	return (
		<>
			{router.pathname === "/" ? (
				<div className="mx-[2%] mt-[2%]">
					<Navbar />
					<div>
						<Component {...pageProps} />
					</div>
					<Footer />
				</div>
			) : (
				<div className="mx-[2%] mt-[2%]">
					<Navbar />
					<div className="flex flex-row">
						<Sidebar />
						<div>
							<Component {...pageProps} />
						</div>
					</div>
					<Footer />
				</div>
			)}
		</>
	);
}

export default MyApp;
