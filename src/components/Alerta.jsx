import React from 'react'

export const Alerta = ({ mensaje, tipoAlerta }) => {

    return (
        <div className={`alert alert-${tipoAlerta} text-uppercase mb-0 mt-3 text-center w-auto position-absolute top-0 end-0 mw-100`} role="alert">
            <h2 className="fs-4 fw-bolder mb-0 fs-6">{mensaje}</h2>
        </div>
    )
}
