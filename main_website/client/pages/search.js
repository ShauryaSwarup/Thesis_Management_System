import React from "react";
import { searchdata } from "../../data/searchdata";

function search() {
	let i = 1;
	const search = () => {
		// console.log(searchdata[i].title);
		i = i < searchdata.length? i+1 : 1;
		return <div>{searchdata.title}</div>;
	};

	return (
		<div className="px-28 my-28 flex flex-col space-y-12 ml-24 ">
			<label htmlFor="search-thesis" className="text-4xl ">
				Search Research Papers
			</label>
			<input
				type="text"
				id="search-thesis"
				class="block w-full p-2 w-[100%] text-center flex justify-center text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				placeholder="Search..."
				onChange={search}
			/>
		</div>
	);
}

export default search;
