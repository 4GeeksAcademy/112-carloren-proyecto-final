import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer()

	const profileDrop = store.authState === 0 ?
		<div>< button className="btn btn-primary rounded-5 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
			<i className="fa-regular fa-user"></i>
		</button >
			<ul className="dropdown-menu dropdown-menu-end">
				<li><Link className="dropdown-item" to="/login">Iniciar sesión</Link></li>
				<li><Link className="dropdown-item" to="/signup">Registrarse</Link></li>
			</ul>
		</div>
		:
		<div>
			<button className="btn btn-primary rounded-5 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
				<i className="fa-solid fa-user"></i>
			</button>
			<ul className="dropdown-menu dropdown-menu-end py-0">
				<li><Link className="dropdown-item mt-2" to="#">{store.authState === 1 ? "Panel del usuario" : "Panel del trabajador"}</Link></li>
				<li><hr className="dropdown-divider" /></li>
				<li><Link className="dropdown-item pt-2" to="#">{store.authState === 1 ? "Mis pedidos" : "Mis trabajos"}</Link></li>
				<li><Link className="dropdown-item pt-2" to="#">Mi perfil</Link></li>
				<li><Link className="dropdown-item pt-2" to="#">Mensajes</Link></li>
				<li><Link className="dropdown-item pt-2" to="#">Notificaciones</Link></li>
				<li><hr className="dropdown-divider mb-0" /></li>
				<li><Link className="btn btn-danger w-100 rounded-top-0 py-2 ps-3 text-start" href="#">Cerrar sesión</Link></li>
			</ul>
		</div>


	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container">
				<Link className="navbar-brand p-0" to="/">
					<img src="src/front/assets/img/ReBusque-logo.png" alt="logo" height="40" />
					<img src="src/front/assets/img/ReBusque-title.png" alt="title" height="30" className="ps-1" />
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link " to="/discover">Descubre</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link " to="#contact">Contacto</Link>
						</li>
					</ul>
					<form className="d-flex mb-2 mb-lg-0" role="search">
						<input className="form-control me-2 rounded-5" type="search" placeholder="Buscar" aria-label="Search" />
						<button className="btn btn-dark rounded-5 me-2" type="submit">Buscar</button>
					</form>
					<li className="nav-link dropdown text-end">
						{profileDrop}
					</li>
				</div>
			</div>
		</nav>
	);
};