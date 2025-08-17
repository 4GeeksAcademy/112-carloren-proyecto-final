import React, { useEffect } from "react"
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const Discover = () => {

    const { store, dispatch } = useGlobalReducer()

    return (
        <div className="text-center mt-5 container">
            <form className="d-flex w-100 mb-3" role="search">
                <input className="form-control me-2" type="search" placeholder="Buscar un servicio" aria-label="Search" />
                <button className="btn btn-dark btn-lg me-2" type="submit">Buscar</button>
            </form>
        </div>
    );
}; 