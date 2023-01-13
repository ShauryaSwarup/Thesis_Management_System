import * as React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { tododata } from "../../data/tododata";
import { taskdata } from "../../data/taskdata";
// import data from '../../data/userdata'

let studentProgress = 0;
let professorProgress = 0;

function LinearProgressWithLabel(props) {
	const [professorTaskCompleted, setProfessorTaskCompleted] = useState(0);
	const [studentTaskCompleted, setStudentTaskCompleted] = useState(0);

	console.log(tododata, taskdata);
	useEffect(() => {
		let count = 0;

		tododata.map((todo) => {
			if (todo.completed == "true") count++;
			setProfessorTaskCompleted(count);
		});

		count = 0;

		taskdata.map((task) => {
			if (task.completed == "true") count++;
			setStudentTaskCompleted(count);
		});

		studentProgress = (studentTaskCompleted / tododata.length) * 100;
		professorProgress = (professorTaskCompleted / taskdata.length) * 100;
	}, []);

	return (
		<Box sx={{ display: "flex", alignItems: "center" }}>
			<Box sx={{ width: "100%", mr: 1 }}>
				<LinearProgress variant="determinate" {...props} />
			</Box>
			<Box sx={{ minWidth: 35 }}>
				<Typography variant="body2" color="text.secondary">{`${Math.round(
					props.value
				)}%`}</Typography>
			</Box>
		</Box>
	);
}

LinearProgressWithLabel.propTypes = {
	/**
	 * The value of the progress indicator for the determinate and buffer variants.
	 * Value between 0 and 100.
	 */
	value: PropTypes.number.isRequired,
};

export default function LinearWithValueLabel(props) {
	const { type } = props;

	const latestProgress =
		type === "student" ? studentProgress : professorProgress;
	const [progress, setProgress] = React.useState(
		latestProgress - 10 > 0 ? latestProgress - 10 : latestProgress
	);
	React.useEffect(() => {
		setTimeout(() => {
			if (progress < latestProgress) {
				setProgress(progress + 1);
			}
		}, 50);
	}, [progress]);

	return (
		<Box sx={{ width: "100%" }}>
			<LinearProgressWithLabel value={progress} />
		</Box>
	);
}
