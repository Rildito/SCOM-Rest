import { useRef, useEffect } from 'react';
import { Header, PreguntasFrecuentes, ProductosPreview, Contactanos, SobreNosotrosPreview } from '../components';


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
            <main className='d-flex flex-column justify-content-center align-items-center container-md shadow px-0'>
                <SobreNosotrosPreview enlace={nosotros} />
                <ProductosPreview enlace={productos} />
                <Contactanos enlace={contactanos} />
                <PreguntasFrecuentes enlace={sugerencias} />
            </main>

        </>
    )
}
