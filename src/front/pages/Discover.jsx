import React, { useEffect } from "react"
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import { WorkerCard } from "../components/WorkerCard.jsx";

export const Discover = () => {

    const { store, dispatch } = useGlobalReducer()

    return (
        <div className="text-center mt-5 container">
            <form className="d-flex w-100 mb-3" role="search">
                <input className="form-control me-2 rounded-5 border border-primary" type="search" placeholder="Buscar un servicio" aria-label="Search" />
                <button className="btn btn-dark btn-lg me-2 rounded-5" type="submit">Buscar</button>
            </form>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
                {store.workers.map((w) => <WorkerCard id={w.id} />)}
            </div>
        </div>
    );
}; 