

export const PreguntasFrecuentes = ({ enlace }) => {
    return (
        <div className="my-5 px-md-5 px-3" ref={enlace}>
            <h1 className="text-primary text-center mb-4">PREGUNTAS FRECUENTES</h1>
            <div className="mb-4 text-justify">
                <h3>¿En qué horario podemos comer o cenar en el restaurante?</h3>
                <p>Servicio de restaurante: <br/>
                    Mediodía: todos los días de 12:30 a 15:30h.<br/>
                    Noche: miércoles, jueves viernes y sábado de 20:00h a 22:30h.</p>
            </div>
            <div className="mb-4 text-justify">
                <h3>¿Cuáles son las medidas COVID-19 que debo conocer antes de acudir a las instalaciones?</h3>
                <p>Scom-Rest ha sido preparado para ser un lugar seguro en cumplimiento de todas las medidas de prevención, los máximos niveles de seguridad.
                    Todo el centro se somete periódicamente a intervenciones de limpieza, higiene y desinfección. La colaboración de los
                    usuarios es fundamental de cara a garantizar la efectividad de estas medidas.</p>
            </div>
            <div className="mb-4 text-justify">
                <h3> ¿Está abierto todos los días de la semana? </h3>
                <p>En función de la temporada abrimos o cerramos algunos espacios del restaurante.
                    Scom-Rest cierra 3 días al año: el 25 de diciembre, el 1 y 6 de Enero.</p>
            </div>
            <div className="mb-4 text-justify">
                <h3>¿Scom-Rest dispone de parking? ¿Es de pago?</h3>
                <p>No disponemos de parking, sí de un  acuerdo con el Parking de La Concha, situado a 10 minutos caminando del restaurante Scom-Rest.</p>
            </div>
            <div className="text-justify">
                <h3>¿Hay menús infantiles?</h3>
                <p>No disponemos de un menú infantil cerrado pero sí ofrecemos alternativas para niños.</p>
            </div>
        </div>
    )
}
