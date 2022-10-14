export const formatearFecha = (fecha = '0/0/0') => {
    const nuevaFecha = new Date(fecha.split('T')[0].split('-'));

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }

    return nuevaFecha.toLocaleDateString('es-ES', options)
};

export const obtenerEdad = fecha => {
    
    const ageInMilliseconds = new Date() - new Date(fecha);
    return Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365); 
}

export const obtenerFechaActual = () => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    return formatearFecha(`${month}-${day}-${year}`);
};