import Image from '../assets/img/restaurant.jpg'
import { Link } from 'react-router-dom';

export const SobreNosotrosPreview = ({ enlace }) => {
    return (
        <>
            <h1 className='text-uppercase mb-5 text-primary fw-semibold text-center mt-5' ref={enlace}>Sobre nosotros</h1>
            <div className='row mb-5 mw-100 d-flex justify-content-center align-items-center flex-lg-row flex-column px-0 px-4'>
                <div className='col-lg-5 col-12'>
                    <img src={Image} className="d-block mx-auto rounded-2 w-75 w-100" />
                </div>
                <div className='col-lg-5 col-12 text-center'>
                    <h2 className='text-danger mt-lg-0 mt-4'>Historia</h2>
                    <p>Hace treinta años, en este barrio entrañable, empezamos a cocinar entre amigos para los amigos. La propuesta de un lugar relajado y cercano que acompañara el retorno de los jóvenes al viejo barrio, aunado al interés en una comida con corazón y honesta fue la idea de donde nació <span className='fw-bold'>SCom-Rest</span>. Hoy nos hemos transformado en consonancia con el entorno aprovechando la experiencia y cuidando en todo momento sus principios originales: un servicio de amigos, comida con corazón, honesta y ser un buen lugar para comer. Hemos remodelado el espacio para ofrecer satisfacción a todos los gustos, desde nuestra clásica terraza sumergida en el alegre ambiente de la calle, pet friendly, los íntimos espacios interiores, barras de copeo y una terraza única, a cielo abierto, aislada en el primer nivel con la mejor vista de los alrededores.</p>
                    <Link to="nosotros" className='btn btn-secondary w-md-50 w-100 mt-3'>VER MAS</Link>
                </div>
            </div>
        </>
    )
}
