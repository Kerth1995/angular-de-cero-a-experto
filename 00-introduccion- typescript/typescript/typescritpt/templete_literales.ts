// Templete Literales

(function(){
    const nombre = 'Jordan';
    const apellido = 'Cotrina';
    const edad = 50;

    function getNombre(){
        return nombre;
    }

    function getApellido(){
        return apellido;
    }

    function getEdad(){
        return edad;
    }

    const salida = `${nombre} ${apellido} (Edad: ${edad + 100})`;
    const salidaDos = `${getNombre()} ${getApellido()} (Edad: ${getEdad()})`;
    console.log(salida);
    console.log(salidaDos);
})();
