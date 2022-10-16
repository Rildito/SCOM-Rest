import React from 'react'

export const Mapa = () => {

    return (
        <div className='d-flex flex-column container-md px-0'>
            <h3 className='my-5 fs-1 text-primary text-center'>NUESTRA UBICACION</h3>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.612057101499!2d-68.18617468508126!3d-16.495169944974815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edfc99165718b%3A0x8770b8b1d08712ef!2sAv.%20La%20Paz%2C%20El%20Alto!5e0!3m2!1ses!2sbo!4v1665869403874!5m2!1ses!2sbo" style={{
                width: '100%',
                height: '450px',
                border: '0px'
            }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}