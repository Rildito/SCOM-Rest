import React from 'react'

export const Contactanos = () => {
    return (
        <div className='w-75 mt-5'>
            <h1 className='text-center text-primary'>CONTACTANOS</h1>
            <div className="mb-3 mt-5 border shadow p-sm-5 p-0">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-7 bg-danger-gradient py-4 px-5">
                        <form className='d-flex flex-column align-items-center text-white'>
                            <div className="mb-3 w-100">
                                <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Nombre</label>
                                <input type="text" className="form-control red" id="exampleInputPassword1" />
                            </div>

                            <div className="mb-3 w-100">
                                <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Apellido</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" />
                            </div>

                            <div className="mb-3 w-100">
                                <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>

                            <div className="mb-3 w-100">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label fw-bold">Mensaje</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-dark text-uppercase w-auto">Enviar</button>
                        </form>
                    </div>

                    <div className="col-md-5 text-center bg-warning-gradient">
                        <ul className="list-unstyled mb-0 d-flex aling-items-center justify-content-center flex-column h-100 mt-md-0 mt-3" >
                            <li><i className="fas fa-map-marker-alt fa-2x"></i>
                                <p>La Paz, CA 94126, Bolivia</p>
                            </li>

                            <li><i className="fas fa-phone mt-4 fa-2x"></i>
                                <p>77522512</p>
                            </li>

                            <li ><i className="fas fa-envelope mt-4 fa-2x"></i>
                                <p >SComRest@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}
