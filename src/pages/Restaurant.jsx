import { useContext, useRef, useEffect } from 'react';
import { Header, PreguntasFrecuentes, ProductosPreview, Contactanos, SobreNosotrosPreview, ScrollToTop, Mapa } from '../components';
import AuthContext from '../context/AuthProvider';
import ProductosContext from '../context/ProductosProvider';


export const Restaurant = () => {

    const inicio = useRef(null);
    const nosotros = useRef(null);
    const productos = useRef(null);
    const contactanos = useRef(null);
    const sugerencias = useRef(null);
    const referencias = { inicio, nosotros, productos, contactanos, sugerencias };

    const { salida } = useContext(AuthContext);
    const { obtenerProductos } = useContext(ProductosContext);

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

    useEffect(() => {
        obtenerProductos();
    }, [salida])

    return (
        <>
            <Header enlace={inicio} scrollToSection={scrollToSection} referencias={referencias} />
            <ScrollToTop />
            <main className='d-flex flex-column justify-content-center align-items-center container-md shadow px-0'>
                <SobreNosotrosPreview enlace={nosotros} />
                <ProductosPreview enlace={productos} />
                <Contactanos enlace={contactanos} />
                <Mapa />
                <PreguntasFrecuentes enlace={sugerencias} />
            </main>
        </>
    )
}
