export const formatearFecha = fecha => {
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