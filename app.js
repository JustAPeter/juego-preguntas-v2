function barraProgreso(jugador, puntos){
    $(`#${jugador}`).css('width', puntos + '%');
}

function obtenerNumero(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var app = new Vue({
    el: '#app',
    data: {
        jugador1: {
            preguntasAcertadas: 0,
            puntos: 0,
            nombre: '',
            icono: ''
        },
        jugador2: {
            preguntasAcertadas: 0,
            puntos: 0,
            nombre: '',
            icono: ''
        },
        preguntas: [],
        pregunta:[],
        puntos: 0,
        turno: 1
    },
    methods:{
        nuevaPartida(){
            this.limpiar();
            barraProgreso('j1', this.jugador1.puntos)
            barraProgreso('j2', this.jugador2.puntos)
            this.preguntas = listaPreguntas;
            this.preguntar();
        },
        limpiar(){
            this.jugador1 = {
                preguntasAcertadas: 0,
                puntos: 0,
                nombre: '',
                icono: ''   
            }
            this.jugador2 = {
                preguntasAcertadas: 0,
                puntos: 0,
                nombre: '',
                icono: ''
            }  
            this.pregunta = []
            this.preguntas = [] 
        },
        preguntar(){
            let n = obtenerNumero(this.preguntas.length,0)
            this.pregunta = this.preguntas.splice(n,1);
            this.puntos = obtenerNumero(16,5);
        },
        respuesta(opcion){
            if(this.pregunta[0].opciones[opcion].esCorrecta){
                if(this.turno == 1){
                    this.jugador1.puntos += this.puntos;
                    this.jugador1.preguntasAcertadas ++
                    if (this.jugador1.puntos >= 100){
                        this.jugador1.puntos = 100
                        barraProgreso('j1', this.jugador1.puntos)
                        alert(this.jugador1.nombre + ' vince!!!')
                    }                    
                    barraProgreso('j1', this.jugador1.puntos)
                    this.limpiar()
                }
                else{
                    this.jugador2.puntos += this.puntos;
                    this.jugador2.preguntasAcertadas ++
                    if (this.jugador2.puntos >= 100){
                        this.jugador2.puntos = 100
                        barraProgreso('j2', this.jugador2.puntos)
                        alert(this.jugador2.nombre + ' vince!!!')
                    }                    
                    barraProgreso('j2', this.jugador2.puntos)
                    this.limpiar()
                }
            }
            else{
                if(this.turno == 1){
                    this.jugador1.puntos -= this.puntos;
                    if (this.jugador1.puntos < 0) this.jugador1.puntos = 0
                    barraProgreso('j1', this.jugador1.puntos)
                }
                else{
                    this.jugador2.puntos -= this.puntos;
                    if (this.jugador2.puntos < 0) this.jugador2.puntos = 0
                    barraProgreso('j2', this.jugador2.puntos)
                }
            }
            if(this.turno == 1) this.turno = 2
            else this.turno = 1 
            this.preguntar();
        }
    }

})

var listaPreguntas = [
    {
        pregunta: '¿Cuántos tentáculos tiene un pulpo? ',
        opciones: [
            {
                texto: 'a- 4',
                esCorrecta: false
            },
            {
                texto: 'b- 8',
                esCorrecta: true
            },
            {
                texto: 'c- 10',
                esCorrecta: false
            }
        ]
    }
]