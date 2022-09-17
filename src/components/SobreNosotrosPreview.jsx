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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam temporibus, facilis dicta perferendis expedita accusamus officiis praesentium accusantium quos officia maxime voluptas corrupti dolor est fugit ad quo illum minus. Assumenda corrupti odit ab laudantium iure nihil hic perferendis neque. Quo iste atque ea modi? Nulla labore repudiandae incidunt in.</p>
                    <Link to="nosotros" className='btn btn-secondary w-md-50 w-100 mt-3'>VER MAS</Link>
                </div>
            </div>
        </>
    )
}
