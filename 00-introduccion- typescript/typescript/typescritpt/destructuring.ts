// Destructuring
(() => {
    let avanger = {
        nombre: 'Steve',
        clave: 'Capitan america',
        poder: 'cocinar'
    }

    // destructuración de objetos en variables
    /* 
    let {nombre, clave, poder} = avanger;
    console.log(nombre);
    console.log(clave);
    console.log(poder);
    */
    

    // destructuración de objetos en funnciones de flecha
    /*
    let extraer = ({nombre, poder, clave}: any) => {
        console.log(nombre);
        console.log(poder);
        console.log(clave);
    }
    extraer(avanger);
    */

    
    let avangers: string[] = ['Thor', 'Iroman', 'Spiderman'];
    // destructuración de arreglos
    /*
    let [thor, iroman, spiderman] = avangers;
    console.log(thor);
    console.log(iroman);
    console.log(spiderman);
    */

    // destructuración de arreglos en funnciones de flecha
    let extraerArray = ([thor, iroman, spiderman]: string[]) => {
        console.log(thor);
        console.log(iroman);
        console.log(spiderman);
    }
    extraerArray(avangers);
})();



