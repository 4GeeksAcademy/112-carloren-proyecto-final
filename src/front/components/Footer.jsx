import { Link } from "react-router-dom";

export const Footer = () => (
	<div className="border-top">
		<footer className="container d-flex flex-wrap justify-content-between align-items-center py-3 my-4 ">
			<p className="col-md-4 mb-0 text-body-secondary">© 2025 ReBusque</p>
			<Link className="navbar-brand p-0" to="/">
				<img src="src/front/assets/img/ReBusque-logo.png" alt="logo" height="40" />
				<img src="src/front/assets/img/ReBusque-title.png" alt="title" height="30" className="ps-1" />
			</Link>
			<ul className="nav col-md-4 justify-content-end">
				<li className="nav-item">
					<a href="#" className="nav-link px-2 text-body-secondary">Home</a>
				</li>
				<li className="nav-item">
					<a href="#" className="nav-link px-2 text-body-secondary">Features</a>
				</li>
				<li className="nav-item">
					<a href="#" className="nav-link px-2 text-body-secondary">Pricing</a>
				</li>
				<li className="nav-item">
					<a href="#" className="nav-link px-2 text-body-secondary">FAQs</a>
				</li>
				<li className="nav-item">
					<a href="#" className="nav-link px-2 text-body-secondary">About</a>
				</li>
			</ul>
		</footer>
	</div>
);
