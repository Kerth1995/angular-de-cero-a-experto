// Promesas
(() => {

    let prom1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(true){
                resolve('Se termino el timeout');
            }else{
                reject('Se termino el timeout');
            }
        }, 1000);
    })

    prom1
        .then(data => {console.log(data)})
        .catch(error => {console.error(error)})

})();