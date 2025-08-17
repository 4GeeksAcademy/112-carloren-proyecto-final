import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const WorkerCard = ({ id }) => {

    const { store, dispatch } = useGlobalReducer()

    let worker = store.workers.filter((w) => w.id === id)[0]

    console.log(worker);


    return (
        <div className="col align-items-start text-start">
            <div className="d-flex align-items-start border border-primary rounded-4 rounded-bottom-0 p-3 w-100">
                <div className="text-center">
                    <img src={worker.image} width="50" className="rounded-5 border border-dark" />
                    <p className="my-0">{worker.rating}/5</p>
                    <i className="bi bi-star-fill text-warning"></i>
                </div>
                <div className="ms-2 inline-limit">
                    <h3 className="fw-bold mb-0 fs-4 inline-limit">{worker.name}</h3>
                    <h3 className="fw-bold mb-0 fs-4 inline-limit">{worker.surname}</h3>
                    <p className="mb-0">{worker.phone}</p>
                    <p className="mb-0 inline-limit">{worker.works.map((w) => <span class=" mx-1 badge rounded-pill border border-primary text-primary">{w}</span>)}</p>
                </div>
            </div>
            <div className="d-flex text-bg-primary border-top-0 rounded-4 rounded-top-0 p-3 py-2 w-100">

                <p className="mb-0 ms-2 pt-1"><i class="bi bi-geo"></i> {worker.distance} km</p>
                <Link className="ms-auto btn btn-light rounded-pill">Contratar</Link>
            </div>
        </div>
    )
}
