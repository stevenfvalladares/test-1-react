import React, { useState } from "react";

import "./App.css";
import logo from "./logo.png";

import MyApi from "./components/MyApi";

/* import of the main styles of Bootstrap and its components */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


function App() {
	/* initial state of the Array */
	const [users, setUsers] = useState([]);
	/* initial state of the search */
	const [searchValue, setSearchValue] = useState("");

	/* local variable to store searches in an array */
	let searchedUsers = [];

	/* logic to filter users  */
	if (!searchValue.length >= 1) {
		searchedUsers = users;
	} else {
		searchedUsers = users.filter((user) => {
			const userName = user.login.toLowerCase();
			const searchedName = searchValue.toLowerCase();
			return userName.includes(searchedName);
		});
	}

	const onSearchValueChange = (event) => {
		setSearchValue(event.target.value);
	}

	return (
		<div className="container-sm">
			<header className="py-3 mb-2">
				<div className="d-flex flex-column justify-content-center align-items-center">
					<img src={logo} className="logo me-2 mb-2" alt="logo" />
					<span className="fs-3 mb-2">Usuarios de GitHub</span>
					<form className="col-12 col-lg-4 d-flex align-items-center mb-2 mb-lg-0">
						<input
							type="search"
							className="form-control"
							placeholder="Buscar..."
							aria-label="Search"
							value={searchValue}
							onChange={onSearchValueChange}
						/>
					</form>
				</div>
			</header>
			<MyApi users={setUsers} search={searchedUsers} />
		</div>
	);
}

export default App;
