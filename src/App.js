import "./App.css";
import logo from "./logo.png";

/* import of the main styles of Bootstrap and its components */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
	return (
		<>
			<header className="py-3 mb-4 border-bottom">
				<div className="container d-flex flex-wrap justify-content-center">
					<div className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
						<img src={logo} className="logo me-2" alt="logo" />
						<span className="fs-3 text-success">Farmacias de turno</span>
					</div>
					<form className="col-12 col-lg-3 d-flex align-items-center mb-3 mb-lg-0">
						<input
							type="search"
							className="form-control"
							placeholder="Buscar por comuna"
							aria-label="Search"
						/>
					</form>
				</div>
			</header>
		</>
	);
}

export default App;
