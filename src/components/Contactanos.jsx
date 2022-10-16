import { useState, useContext } from 'react'
import axios from 'axios';
import AuthContext from '../context/AuthProvider';

export const Contactanos = ({ enlace }) => {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [error, setError] = useState('');
    const [errores, setErrores] = useState([]);

    const handleSubmit = async e => {
        e.preventDefault();

        if ([nombre, apellido, email, mensaje].includes('')) {
            setError('Todos los campos son obligatorios');
            return
        }

        const opinion = {
            nombre,
            apellido,
            email,
            mensaje
        }

        console.log(opinion);
        
        const { data: { data, error } } = axios.post('https://scom-rest.herokuapp.com/api/opinion', opinion)

        if (error?.length > 0) {
            setErrores(error);
            return
        }
    };

    return (
        <div className='w-md-50 w-100 mt-5 overflow-hidden' ref={enlace}>
            <h1 className='text-center text-primary'>CONTACTANOS</h1>
            <div className="mt-5 border shadow">
                <div className="row d-flex justify-content-center mx-0">
                    <div className="col-md-6 bg-primary-gradient ">
                        {
                            Boolean(error) && <p className='text-white text-center mt-3 mb-0 bg-danger p-1 rounded'>{error}</p>
                        }

                        {
                            errores.length > 0 && errores?.map(error => (
                                <p key={error.mensaje} className='text-white text-center mt-3 mb-0 bg-danger p-1 rounded'>{error}</p>
                            ))
                        }
                        
                        <form className='d-flex flex-column align-items-center text-white p-3' onSubmit={handleSubmit}>
                            <div className="mb-3 w-100">
                                <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Nombre</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" onChange={e => setNombre(e.target.value)} />
                            </div>

                            <div className="mb-3 w-100">
                                <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Apellido</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" onChange={e => setApellido(e.target.value)} />
                            </div>

                            <div className="mb-3 w-100">
                                <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    onChange={e => setEmail(e.target.value)} />
                            </div>

                            <div className="mb-3 w-100">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label fw-bold">Mensaje</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={e => setMensaje(e.target.value)}></textarea>
                            </div>
                            <button type="submit" className="btn btn-dark text-uppercase w-md-auto w-100">Enviar</button>
                        </form>
                    </div>

                    <div className="col-md-6 text-center bg-warning-gradient">
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
