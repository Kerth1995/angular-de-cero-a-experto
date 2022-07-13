// Interfaces
(() => {

    interface Xmen {
        nombre: string,
        edad: number,
        poder?: string // este campo es opcional
    }

    let enviarMision = (xmen: Xmen)=>{
        console.log(`Enviado a misión a ${xmen.nombre}`);
    }

    let regresarMision = (xmen: Xmen)=>{
        console.log(`Regresando de misión a ${xmen.nombre}`);
    }

    let Wolverine: Xmen = {
        nombre: 'logan',
        edad: 50
    }

    enviarMision(Wolverine);
    regresarMision(Wolverine);

})();



