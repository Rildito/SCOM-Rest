import { useRef, useEffect } from 'react';
import { Header, PreguntasFrecuentes, Productos, SobreNosotros, Contactanos } from '../components';


export const Restaurant = () => {

    const inicio = useRef(null);
    const nosotros = useRef(null);
    const productos = useRef(null);
    const contactanos = useRef(null);
    const sugerencias = useRef(null);
    const referencias = { inicio, nosotros, productos, contactanos, sugerencias };

    useEffect(() => {
        window.scrollTo({
            top: 0
        })
    }, [])

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop - 50,
            behavior: "smooth",
        });
    };
    return (
        <>
            <Header enlace={inicio} scrollToSection={scrollToSection} referencias={referencias} />
            <main className='d-flex flex-column justify-content-center align-items-center'>
                <SobreNosotros enlace={nosotros} />
                <Productos enlace={productos} />
                <Contactanos enlace={contactanos} />
                <PreguntasFrecuentes enlace={sugerencias} />
            </main>

        </>
    )
}
