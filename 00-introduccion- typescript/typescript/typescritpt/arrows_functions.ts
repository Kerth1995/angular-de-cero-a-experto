// Funciones de flecha

(function(){
    let miFuncion = function(data: string){
        return data.toUpperCase();
    }

    let miFuncionFlecha = (data: string) => data.toUpperCase();

    let sumarNormal = function(num1: number, num2: number){
        return num1 + num2;
    }

    let sumarFlecha = (num1: number, num2: number) => num1 + num2;


    console.log(miFuncion("Normal"));
    console.log(miFuncionFlecha("Flecha"));
    console.log(sumarNormal(2, 4));
    console.log(sumarFlecha(6, 8));

    window.nombre = 'Iron Man';
    let nombre = 'Demos';

    let hulk = {
        nombre: 'Hulk',

        smash(){
            setTimeout(function() {
                // con la funcion tradicional se hace referencia a la variable del objeto window
                console.log(`${this.nombre} smash!!!!!`);
                // con la funcion tradicional se hace referencia a la variable global
                console.log(`${nombre} smash!!!!!`);
            }, 1000)
        },

        smashFlecha(){
            setTimeout(() => {
                // con la funcion de flecha si se hace referencia al objeto
                console.log(`${this.nombre} smash!!!!!`);
            }, 1000)
        }
    }

    hulk.smash();
    hulk.smashFlecha();
})();



