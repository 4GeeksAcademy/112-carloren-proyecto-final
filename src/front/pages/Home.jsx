import React, { useEffect } from "react"
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<div className="container col-xxl-8 px-4 py-5 bg-primary rounded" >
				<div className="row flex-lg-row-reverse align-items-center g-5 py-5">
					<div className="col-10 col-sm-8 col-lg-6">
						<img src="https://profesionales-malaga.com/multiservicios/imagenes/Blog/ventajas-de-contratar-una-empresa.jpg" className="d-block mx-lg-auto img-fluid rounded" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
					</div>
					<div className="col-lg-6 text-justify">
						<h1 className="fw-bold text-white lh-1 mb-3">¡Encuentra un profesional en segundos!</h1>
						<p className="lead text-white"> Aquí podrás encontrar en un par de pasos un profesional que relice el servicio que necesitas. ¡Registrate y contrata ya tu primer servicio!</p>

						<div className="d-grid gap-2 d-md-flex justify-content-md-start  mb-3">
							<form className="d-flex w-100 mb-lg-0" role="search">
								<input className="form-control me-2" type="search" placeholder="Buscar un servicio" aria-label="Search" />
								<button className="btn btn-dark btn-lg me-2" type="submit">Buscar</button>
							</form>
							<Link className="btn btn-light btn-lg me-2" to="/discover">Explorar</Link>
						</div>
						<div className="lead d-flex">
							<Link className="btn btn-outline-light me-auto" to="/login">Iniciar Sesión</Link>
							<Link className="btn btn-outline-light mx-auto" to="/signup">Registrarse</Link>
							<Link className="btn btn-outline-light ms-auto" to="/signup">Soy trabajador</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}; 