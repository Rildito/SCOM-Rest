import React from 'react'

export const Alerta = ({ mensaje, tipoAlerta }) => {

    return (
        <div className={`alert alert-${tipoAlerta} text-uppercase mb-0 mt-3 text-center w-25 position-absolute top-0 end-0`} role="alert">
            <h2 className="fs-4 fw-bolder">{mensaje}</h2>
        </div>
    )
}
