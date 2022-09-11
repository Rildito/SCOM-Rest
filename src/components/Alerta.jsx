import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react'
import UsuarioContext from '../context/UsuarioProvider';

export const Alerta = ({ mensaje, tipoAlerta }) => {

    const { setAlerta, alerta } = useContext(UsuarioContext);
    useEffect(() => {
        setTimeout(() => {
            setAlerta(false);
        }, 3000)
    }, []);

    return (
        <div class={`alert alert-${tipoAlerta} text-uppercase mb-0 mt-3 text-center w-25 position-absolute top-0 end-0`} role="alert">
            <h2 class="fs-4 fw-bolder">{mensaje}</h2>
        </div>
    )
}
