// Clases
(() => {

    class Avanger {
        private nombre: string;
        private equipo: string;
        private nombreReal: string;
        private puedePelear: boolean;
        private peleasGanadas: number;

        constructor(){
            this.nombre = '';
            this.equipo = '';
            this.nombreReal = '';
            this.puedePelear = true;
            this.peleasGanadas = 0;
        }

        setNombre(nombre: string){
            this.nombre = nombre;
        }
        getNombre(){
            return this.nombre;
        }

        setEquipo(equipo: string){
            this.equipo = equipo;
        }
        getEquipo(){
            return this.equipo;
        }

        setNombreReal(nombreReal: string){
            this.nombreReal = nombreReal;
        }
        getNombreReal(){
            return this.nombreReal;
        }

        setPuedePelear(puedePelear: boolean){
            this.puedePelear = puedePelear;
        }
        getPuedePelear(){
            return this.puedePelear;
        }

        setPeleasGanadas(peleasGanadas: number){
            this.peleasGanadas = peleasGanadas;
        }
        getPeleasGanadas(){
            return this.peleasGanadas;
        }
    }

    let antman = new Avanger();
    antman.setNombre('Jordan Kerth');
    console.log(antman.getNombre());
    console.log(antman);

})();



