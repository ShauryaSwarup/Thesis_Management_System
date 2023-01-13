import React, { useState, useEffect } from 'react'
import axios from 'axios'
import tododata from '../../data/tododata'
import taskdata from '../../data/taskdata'

function TodoList() {
	const [todos, setTodos] = useState([])
	const [newTodo, setNewTodo] = useState('')
	const [professorTaskCompleted, setProfessorTaskCompleted] = useState(0);
	const [studentTaskCompleted, setStudentTaskCompleted] = useState(0);
	

	function handleSubmit(e) {
		e.preventDefault()
		// axios
		// 	.post('https://jsonplaceholder.typicode.com/todos', {
		// 		title: newTodo,
		// 		completed: false,
		// 	})
		// 	.then((response) => {
		// 		setTodos([...todos, response.data])
		// 		setNewTodo('')
		// 	})
		// 	.catch((error) => console.log(error))
	}

	function handleComplete(id) {
		// axios
		// 	.patch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
		// 		completed: true,
		// 	})
		// 	.then((response) => {
		// 		setTodos(
		// 			todos.map((todo) => (todo.id === id ? response.data : todo))
		// 		)
		// 	})
		// 	.catch((error) => console.log(error))
		
	}

	return (
		<div className="mx-auto p-6">
			<div className="my-auto bg-white rounded-lg h-80 overflow-y-auto shadow-md p-6">
				<form onSubmit={handleSubmit} className="flex items-center">
					
					<input
						className="bg-gray-200 p-2 rounded-lg w-full"
						type="text"
						value={newTodo}
						onChange={(e) => setNewTodo(e.target.value)}
					/>
					<button className="bg-green-500 p-2 rounded-lg ml-2 text-white">
						Add task
					</button>
				</form>
				<ul className="mt-4">
					{todos.map((todo, index) => (
						<li
							key={index}
							className="bg-gray-300 p-2 rounded-lg my-2 flex items-center"
						>
							<span className="mr-2">{todo.title}</span>
							<button
								className={`px-2 py-1 rounded-lg ${
									todo.completed
										? 'bg-green-500 text-white'
										: 'bg-red-500 text-white'
								}`}
								onClick={() => handleComplete(todo.id)}
							>
								{todo.completed ? 'Completed' : 'Complete'}
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default TodoList