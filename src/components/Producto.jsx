import React, { useContext } from 'react'
import Imagen from '../assets/img/bg.jpg';
import ProductosContext from '../context/ProductosProvider';

export const Producto = () => {

    const { modal } = useContext(ProductosContext);


    return (
        <>
            <div style={{ width: "23rem" }} className="col-3 card px-0 rounded overflow-hidden tini mb-4"
            >
                <img src={Imagen} />
                <div className="card-body">
                    <h5 className="card-title text-danger fw-semibold fs-4">Producto 1</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </p>
                </div>
                <input type="button" className='btn btn-danger text-uppercase fw-bolder' onClick={() => modal.show()} value="pedir" />
            </div>


        </>
    )
}
