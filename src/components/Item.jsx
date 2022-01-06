import duplex from "../utils/dataDuplex";
import { Link } from "react-router-dom";

export default function Item( {id, duplexName, capacity, mainImg} ){
    return(
        <>
           <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src= {mainImg} class="img-fluid rounded-start" alt={id} />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Duplex: {duplexName}</h5>
                            <p class="card-text">Capacidad: {capacity}</p>
                            <p className="card-text"> El id es: {id}</p>
                            <Link to={`/duplex/${id}`} type="button" class="btn btn-secondary">Ver imágenes</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}