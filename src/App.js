import React from "react";

import "./App.css";
import logo from "./logo.png";

import MyApi from "./components/MyApi";

/* import of the main styles of Bootstrap and its components */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
	return (
		<div className="container-sm">
			<header className="py-3 mb-4">
				<div className="d-flex flex-column justify-content-center align-items-center">
					<img src={logo} className="logo me-2 mb-2" alt="logo" />
					<span className="fs-3 mb-2">Usuarios de GitHub</span>
					<form className="col-12 col-lg-4 d-flex align-items-center mb-2 mb-lg-0">
						<input
							type="search"
							className="form-control"
							placeholder="Buscar..."
							aria-label="Search"
						/>
					</form>
				</div>
			</header>
			<MyApi />
		</div>
	);
}

export default App;
