import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(2),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

export default function newprojectform() {
	const list = [
		"Abstract",
		"Introduction",
		"Methodology",
		"Model Architecture",
		"Datasets",
		"Results",
	];
	return (
		<form>
			<Box sx={{ flexGrow: 1 }}>
				<Typography variant="h4" component="h3" className="mb-6">
					New Project
				</Typography>
				<Item>
					<div class="mb-6 ">
						<label
							for="small-input"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Title
						</label>
						<input
							type="text"
							id="small-input"
							class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Add title..."
						/>
					</div>
				</Item>
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}
					className="mt-6"
				>
					{Array.from(Array(6)).map((_, index) => (
						<Grid item xs={2} sm={4} md={4} key={index}>
							<Item>
								<div class="mb-6">
									<label
										for="message"
										class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										{list[index]}
									</label>
									<textarea
										id="message"
										rows="4"
										class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="Add text..."
									></textarea>
								</div>
							</Item>
						</Grid>
					))}

					<button
						type="submit"
						class="text-white m-8 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
					>
						Submit Project
					</button>
				</Grid>
			</Box>
		</form>
	);
}
