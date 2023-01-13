import React, { useState } from "react";

function Todolist() {
	const [activity, setActivity] = useState("");
	const [listData, setlistData] = useState([]);
	function addActivity() {
		// setlistData([...listData, activity]);
		// console.log(listData);
		setlistData((listData) => {
			const updatedList = [...listData, activity];
			console.log(updatedList);
			setActivity("");
			return updatedList;
		});
	}
	function removeAcivity(i) {
		const updatedListData = listData.filter((elem, id) => {
			return i != id;
		});
		setlistData(updatedListData);
	}
	function removeAll() {
		setlistData([]);
	}

	return (
		<div className="bg-gray-500 w-[100%] m-8">
			<div className="header">
				<div
					className="w-[100%] text-white bg-teal-900 flex 
           rounded-md p-2
          py-3
          hover:bg-green-700 items-center space-x-2 hover:text-white text-xl text-center"
				>
					Todolist
				</div>
				<div className="w-[100%]">
					<input
						type="text"
						placeholder="Add Activity"
						value={activity}
						onChange={(e) => setActivity(e.target.value)}
					/>
				</div>
				<div>
					<button onClick={addActivity}>Add</button>
				</div>
				{/* <p className="List-heading">Here is your List :{")"}</p> */}
				{listData != [] &&
					listData.map((data, i) => {
						return (
							<>
								<p key={i}>
									<div className="listData">{data}</div>
									<div className="btn-postion">
										<button onClick={() => removeAcivity(i)}>(-)remove</button>
									</div>
								</p>
							</>
						);
					})}
				{listData.length >= 1 && (
					<button onClick={removeAll}>Remove All</button>
				)}
			</div>
		</div>
	);
}

export default Todolist;
