// Funciones

(function(){
    function activar(
        quien: string, // parametro obligatorio
        momento?: string, // parametro opcional
        objeto: string = 'batiseñal' // parametro por defecto y que no es obligatorio
    ){
        if(momento){
            console.log(`${quien} activó la ${objeto} por la ${momento}`);
        }else{
            console.log(`${quien} activó la ${objeto}`);
        }
    }

    activar('Gordon', 'tarde');
})();