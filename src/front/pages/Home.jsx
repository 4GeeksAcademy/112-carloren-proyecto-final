import React, { useEffect } from "react"
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";


export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<div className="container col-xxl-8 px-4 py-5 text-bg-primary rounded-5" >
				<div className="row flex-lg-row-reverse align-items-center g-5">
					<div className="mx-auto col-10 col-sm-8 col-lg-6">
						<img src="https://profesionales-malaga.com/multiservicios/imagenes/Blog/ventajas-de-contratar-una-empresa.jpg" className="d-block mx-lg-auto img-fluid rounded-4" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
					</div>
					<div className="col-lg-6 text-start">
						<h1 className="fw-bold lh-1 mb-3">¡Encuentra un profesional en segundos!</h1>
						<p className="lead"> Aquí podrás encontrar en un par de pasos un profesional que relice el servicio que necesitas. ¡Registrate para contratar servicios o para poder ofrecerlos!</p>
						<div className="d-grid gap-2 d-md-flex justify-content-md-start  mb-3">
							<form className="d-flex w-100 mb-lg-0" role="search">
								<input className="form-control me-2 rounded-5" type="search" placeholder="Buscar un servicio" aria-label="Search" />
								<button className="btn btn-dark btn-lg rounded-5 me-2" type="submit">Buscar</button>
							</form>
							<Link className="btn btn-light btn-lg rounded-5 me-2" to="/discover">Explorar</Link>
						</div>
						<div className="lead d-flex">
							<Link className="btn btn-outline-light rounded-5 ms-auto me-2" to="/login">Iniciar Sesión</Link>
							<Link className="btn btn-outline-light rounded-5 me-auto ms-2" to="/signup">Registrarse</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="container px-4 py-5" id="featured-3">
				<div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
					<div className="feature col d-flex flex-column">
						<div className="border rounded-4 text-bg-primary fs-4 mb-3 py-2 px-3 mx-auto">
							<i class="bi bi-pin-angle"></i>
						</div>
						<h3 className="fs-2 text-body-emphasis">Quiénes somos</h3>
						<p>ReBusque es un marketplace que conecta trabajadores informales con usuarios que necesitan servicios a domicilio de forma segura, rápida y eficiente.</p>
					</div>

					<div className="feature col d-flex flex-column">
						<div className="border rounded-4 text-bg-primary fs-4 mb-3 py-2 px-3 mx-auto">
							<i class="bi bi-bullseye"></i>
						</div>
						<h3 className="fs-2 text-body-emphasis">Objetivo</h3>
						<p>Ser una plataforma accesible e intuitiva que permita solicitar o brindar servicios a domicilio, 
							contribuyendo a la formalización del trabajo informal y ofreciendo beneficios económicos tanto a los trabajadores como al país.</p>
					</div>

					<div className="feature col d-flex flex-column">
						<div className="border rounded-4 text-bg-primary fs-4 mb-3 py-2 px-3 mx-auto">
							<i class="bi bi-search"></i>
						</div>
						<h3 className="fs-2 text-body-emphasis">Cómo funciona</h3>
						<p>Como usuario podrás buscar filtrando por tipo de servicio o cercanía.
							Deberás registrarte para contactar con el profesional.
							Como profesional podrás crear una cuenta ofreciendo tus servicios para que los usuarios puedan encontrarte y solicitar tu trabajo</p>
					</div>
				</div>
			</div>
		</div>
	);
}; 