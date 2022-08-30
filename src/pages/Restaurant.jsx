import React from 'react'
import { PreguntasFrecuentes, Productos, SobreNosotros } from '../components'
import { Contactanos } from '../components/Contactanos'


export const Restaurant = () => {
    return (
        <>
            <SobreNosotros />
            <Productos />
            <Contactanos />
            <PreguntasFrecuentes />
        </>
    )
}
