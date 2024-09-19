const formulario = document.getElementById('formulario-calculadora');
const mensaje_error = document.getElementById('mje-error');
let datos_validos = true;


const validar_datos_vacio = dato =>{
    return dato === '';     
}

const validar_datos_numerico = dato =>{
    return parseInt(dato)
}


formulario.addEventListener('submit', (e) => {
    e.preventDefault(); //Detiene el evento predefinido.

    const datos = {
        cantidad: formulario['Amount'].value,
        plazo: formulario['Term'].value,
        tasa: formulario['Rate'].value,
        tipo: formulario['Type'].value
    };

    Object.keys(datos).map(key => {
        if((validar_datos_vacio(datos[key]))){
            datos_validos = false;
            mensaje_error.innerHTML = 'Falta completar datos';
            return 0;
        }
/*        if((validar_datos_numerico(datos[key]))){
            datos_validos = false;
            mensaje_error.innerHTML = 'Datos erroneos';
            return 0;
        }  */  
    })

    if (datos_validos){
        document.getElementById('pantalla2-inicio').style.display = 'none';
        document.getElementById('pantalla2-resultado').style.display = 'block';

        document.getElementById('cuota-monto').innerHTML = '£1,797.74'
        document.getElementById('falta-pagar').innerHTML = '£539,322.94'

    }

})

