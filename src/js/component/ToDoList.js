import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";


const Todo = () => {

	const { store, actions } = useContext(Context);
	const [inputValue, setInputValue] = useState("")


	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputValue !== "") {
			actions.addTask(inputValue);
			setInputValue("");
		}
		  
	};

	function handleDeleteTask(i) {
		console.log("handleDeleteTask task",i);
		actions.deleteTask(i);
	}
	

	return (
		<div className="container d-flex flex-column">
			<div className="text-center">
				<h1>To-Dos</h1>
			</div>
			<form onSubmit={handleSubmit}>
				<input
					onChange={(e) => { setInputValue(e.target.value) }}
					value={inputValue}
					type="text"
					placeholder="Add Tasks"
				/>
				<ul className="list-group">
					{store.toDoList.map((task, index) => (
						<li key={index} className="list-group-item d-flex justify-content-between">
							<span>
								{task}
							</span>
							<button
								type="button"
								className="btn-close"
								onClick={() => {handleDeleteTask(index)}
								}>
							</button>
						</li>
					))}
				</ul>
			</form>
		</div>
	);
};

export default Todo;