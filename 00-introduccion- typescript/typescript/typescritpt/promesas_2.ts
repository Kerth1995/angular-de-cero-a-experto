// Promesas
(() => {

    let retirarDinero = (montoRetirar: number): Promise<number> =>{
        let dineroActual = 10000;

        return new Promise((resolve, reject) => {
            if(montoRetirar > dineroActual){
                reject('No hay suficiente saldo');
            }else{
                dineroActual -= montoRetirar;
                resolve(dineroActual);
            }
        })
    }

    retirarDinero(423)
        .then(data => {console.log(data)})
        .catch(error => {console.warn(error)});

})();