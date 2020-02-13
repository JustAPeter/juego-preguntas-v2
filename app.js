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
            turno = 1
        },
        preguntar(){
            let n = obtenerNumero(this.preguntas.length,0)
            this.pregunta = this.preguntas.splice(n,1);
            this.puntos = obtenerNumero(26,8);
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
                        this.limpiar()
                    }                    
                    barraProgreso('j1', this.jugador1.puntos)
                }
                else{
                    this.jugador2.puntos += this.puntos;
                    this.jugador2.preguntasAcertadas ++
                    if (this.jugador2.puntos >= 100){
                        this.jugador2.puntos = 100
                        barraProgreso('j2', this.jugador2.puntos)
                        alert(this.jugador2.nombre + ' vince!!!')
                        this.limpiar()
                    }                    
                    barraProgreso('j2', this.jugador2.puntos)
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
        pregunta: 'anatra.png',
        opciones: [
            {
                texto: 'a- Anatra',
                esCorrecta: true
            },
            {
                texto: 'b- Patto',
                esCorrecta: false
            },
            {
                texto: 'c- Patcio',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'arcobaleno.png',
        opciones: [
            {
                texto: 'a- Arcoris',
                esCorrecta: false,
            },
            {
                texto: 'b- Arcobaleno',
                esCorrecta: true,
            },
            {
                texto: 'c- Arbacchio',
                esCorrecta: false,
            }
        ]
    },
    {
        pregunta: 'asino.png',
        opciones: [
            {
                texto: 'a- burro',
                esCorrecta: false
            },
            {
                texto: 'b- ',
                esCorrecta: false
            },
            {
                texto: 'c- Asino',
                esCorrecta: true
            }
        ]
    },
    {
        pregunta: 'auto.png',
        opciones: [
            {
                texto: 'a- Auto',
                esCorrecta: true
            },
            {
                texto: 'b- Automove',
                esCorrecta: false
            },
            {
                texto: 'c- Carre', 
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'baseball.png',
        opciones: [
            {
                texto: 'a- Beisbol',
                esCorrecta: false,
            },
            {
                texto: 'b- Baseball',
                esCorrecta: true,
            },
            {
                texto: 'c- Bianco', 
                esCorrecta: false,
            }
        ]
    },
    {
        pregunta: 'blu.png',
        opciones: [
            {
                texto: 'a- Amico', 
                esCorrecta: false
            },
            {
                texto: 'b- Azzurro',
                esCorrecta: false
            },
            {
                texto: 'c- Blu',
                esCorrecta: true
            }
        ]
    },
    {
        pregunta: 'burro.png',
        opciones: [
            {
                texto: 'a- Burro',
                esCorrecta: true
            },
            {
                texto: 'b- Mantechila',
                esCorrecta: false
            },
            {
                texto: 'c- Mondo', 
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'calcio.png',
        opciones: [
            {
                texto: 'a- Fut',
                esCorrecta: false,
            },
            {
                texto: 'b- Calcio',
                esCorrecta: true,
            },
            {
                texto: 'c- Futbole',
                esCorrecta: false,
            }
        ]
    },
    {
        pregunta: 'calze.png',
        opciones: [
            {
                texto: 'a- Mela', 
                esCorrecta: false
            },
            {
                texto: 'b- Medias',
                esCorrecta: false
            },
            {
                texto: 'c- Calze',
                esCorrecta: true
            }
        ]
    },
    {
        pregunta: 'camicia.png',
        opciones: [
            {
                texto: 'a- Camicia',
                esCorrecta: true
            },
            {
                texto: 'b- Carne',
                esCorrecta: false
            },
            {
                texto: 'c- Camiza',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'carta.png',
        opciones: [
            {
                texto: 'a- Folio',
                esCorrecta: false,
            },
            {
                texto: 'b- Carta',
                esCorrecta: true,
            },
            {
                texto: 'c- Papiro',
                esCorrecta: false,
            }
        ]
    },
    {
        pregunta: 'cartella.png',
        opciones: [
            {
                texto: 'a- Carpie',
                esCorrecta: false
            },
            {
                texto: 'b- Cucina', 
                esCorrecta: false
            },
            {
                texto: 'c- Cartella',
                esCorrecta: true
            }
        ]
    },
    {
        pregunta: 'cerchio.png',
        opciones: [
            {
                texto: 'a- Cerchio',
                esCorrecta: true
            },
            {
                texto: 'b- Cavallo', 
                esCorrecta: false
            },
            {
                texto: 'c- Forchetta', 
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'cioccolato.png',
        opciones: [
            {
                texto: 'a- Chocolatte',
                esCorrecta: false,
            },
            {
                texto: 'b- Cioccolato',
                esCorrecta: true,
            },
            {
                texto: 'c- Ciotoretto',
                esCorrecta: false,
            }
        ]
    },
    {
        pregunta: 'colla.png',
        opciones: [
            {
                texto: 'a- Pegantie',
                esCorrecta: false
            },
            {
                texto: 'b- Gomma',
                esCorrecta: false
            },
            {
                texto: 'c- Cola',
                esCorrecta: true
            }
        ]
    },
    {
        pregunta: 'coniglio.png',
        opciones: [
            {
                texto: 'a- Coniglio',
                esCorrecta: true
            },
            {
                texto: 'b- Comiglio', 
                esCorrecta: false
            },
            {
                texto: 'c- Boni',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'cravatta.png',
        opciones: [
            {
                texto: 'a- Crabata', 
                esCorrecta: false,
            },
            {
                texto: 'b- Cravatta',
                esCorrecta: true,
            },
            {
                texto: 'c- Corvatinne',
                esCorrecta: false,
            }
        ]
    },
    {
        pregunta: 'croce.png',
        opciones: [
            {
                texto: 'a- Doppio',
                esCorrecta: false
            },
            {
                texto: 'b- Cruce',
                esCorrecta: false
            },
            {
                texto: 'c- Croce',
                esCorrecta: true
            }
        ]
    },
    {
        pregunta: 'dipingere.png',
        opciones: [
            {
                texto: 'a- Dipingere',
                esCorrecta: true
            },
            {
                texto: 'b- Diavolo',
                esCorrecta: false
            },
            {
                texto: 'c- pintare',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'ditta.png',
        opciones: [
            {
                texto: 'a- Ditto',
                esCorrecta: false,
            },
            {
                texto: 'b- Ditta',
                esCorrecta: true,
            },
            {
                texto: 'c- Dita',
                esCorrecta: false,
            }
        ]
    },
    {
        pregunta: 'fattoria.png',
        opciones: [
            {
                texto: 'a- Ghiaccio',
                esCorrecta: false
            },
            {
                texto: 'b- Grancia',
                esCorrecta: false
            },
            {
                texto: 'c- Fattoria',
                esCorrecta: true
            }
        ]
    },
    {
        pregunta: 'forbici.png',
        opciones: [
            {
                texto: 'a- Forbici',
                esCorrecta: true
            },
            {
                texto: 'b- Ticera',
                esCorrecta: false
            },
            {
                texto: 'c- Fugo',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'giallo.png',
        opciones: [
            {
                texto: 'a- Giorno',
                esCorrecta: false,
            },
            {
                texto: 'b- Giallo',
                esCorrecta: true,
            },
            {
                texto: 'c- Amarelo',
                esCorrecta: false,
            }
        ]
    },
    {
        pregunta: 'grattugiare.png',
        opciones: [
            {
                texto: 'a- Gioco', 
                esCorrecta: false
            },
            {
                texto: 'b- Ragelo',
                esCorrecta: false
            },
            {
                texto: 'c- Grattugiare',
                esCorrecta: true
            }
        ]
    },
    {
        pregunta: 'latte.png',
        opciones: [
            {
                texto: 'a- Latte',
                esCorrecta: true
            },
            {
                texto: 'b- Lette',
                esCorrecta: false
            },
            {
                texto: 'c- Melone',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'letto.png',
        opciones: [
            {
                texto: 'a- Camie',
                esCorrecta: false,
            },
            {
                texto: 'b- Letto',
                esCorrecta: true,
            },
            {
                texto: 'c- Ledone',
                esCorrecta: false,
            }
        ]
    },
    {
        pregunta: 'lucertola.png',
        opciones: [
            {
                texto: 'a- Lalerta', 
                esCorrecta: false
            },
            {
                texto: 'b- Lagarte',
                esCorrecta: false
            },
            {
                texto: 'c- Lucertola',
                esCorrecta: true
            }
        ]
    },
    {
        pregunta: 'matita.png',
        opciones: [
            {
                texto: 'a- Matita',
                esCorrecta: true
            },
            {
                texto: 'b- Penna',
                esCorrecta: false
            },
            {
                texto: 'c- Lapice',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'mucca.png',
        opciones: [
            {
                texto: 'a- Mucchia',
                esCorrecta: false,
            },
            {
                texto: 'b- Mucca',
                esCorrecta: true,
            },
            {
                texto: 'c- Vacca',
                esCorrecta: false,
            }
        ]
    },
    {
        pregunta: 'nuotare.png',
        opciones: [
            {
                texto: 'a- Nadare',
                esCorrecta: false
            },
            {
                texto: 'b- Narancia',
                esCorrecta: false
            },
            {
                texto: 'c- Nuotare',
                esCorrecta: true
            }
        ]
    },
    {
        pregunta: 'nuvola.png',
        opciones: [
            {
                texto: 'a- Nuvola',
                esCorrecta: true
            },
            {
                texto: 'b- Nuve',
                esCorrecta: false
            },
            {
                texto: 'c- Nero',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'occhi.png',
        opciones: [
            {
                texto: 'a- Eye',
                esCorrecta: false,
            },
            {
                texto: 'b- Occhi',
                esCorrecta: true,
            },
            {
                texto: 'c- Ochio',
                esCorrecta: false,
            }
        ]
    },
    {
        pregunta: 'pallacanestro.png',
        opciones: [
            {
                texto: 'a- Bolecanestro', 
                esCorrecta: false
            },
            {
                texto: 'b- Baloncesto',
                esCorrecta: false
            },
            {
                texto: 'c- Pallacanestro',
                esCorrecta: true
            }
        ]
    },
    {
        pregunta: 'panino.png',
        opciones: [
            {
                texto: 'a- Panino',
                esCorrecta: true
            },
            {
                texto: 'b- Sandwich',
                esCorrecta: false
            },
            {
                texto: 'c- Letto',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'panna montata.png',
        opciones: [
            {
                texto: 'a- Palta voltida', 
                esCorrecta: false,
            },
            {
                texto: 'b- Panna montata',
                esCorrecta: true,
            },
            {
                texto: 'c- Creme batie',
                esCorrecta: false,
            }
        ]
    },
    {
        pregunta: 'penna.png',
        opciones: [
            {
                texto: 'a- Polpo',
                esCorrecta: false
            },
            {
                texto: 'b- Tintero',
                esCorrecta: false
            },
            {
                texto: 'c- Penna',
                esCorrecta: true
            }
        ]
    },
    {
        pregunta: 'pioggia.png',
        opciones: [
            {
                texto: 'a- Pioggia',
                esCorrecta: true
            },
            {
                texto: 'b- Lluglia',
                esCorrecta: false
            },
            {
                texto: 'c- Pericolo',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'pizza.png',
        opciones: [
            {
                texto: 'a- Pesci',
                esCorrecta: false,
            },
            {
                texto: 'b- Pizza',
                esCorrecta: true,
            },
            {
                texto: 'c- Pitza',
                esCorrecta: false,
            }
        ]
    },
    {
        pregunta: 'pomodoro.png',
        opciones: [
            {
                texto: 'a- Tometo',
                esCorrecta: false
            },
            {
                texto: 'b- Napole', 
                esCorrecta: false
            },
            {
                texto: 'c- Pomodoro',
                esCorrecta: true
            }
        ]
    },
    {
        pregunta: 'quadrato.png',
        opciones: [
            {
                texto: 'a- Quadrato',
                esCorrecta: true
            },
            {
                texto: 'b- Quadro',
                esCorrecta: false
            },
            {
                texto: 'c- Squalo',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'righello.png',
        opciones: [
            {
                texto: 'a- Ristorante', 
                esCorrecta: false
            },
            {
                texto: 'b- Righello',
                esCorrecta: true
            },
            {
                texto: 'c- Risotto',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'sedersi.png',
        opciones: [
            {
                texto: 'a- Sentare',
                esCorrecta: false
            },
            {
                texto: 'b- Spavento', 
                esCorrecta: false
            },
            {
                texto: 'c- Sedersi',
                esCorrecta: true
            }
        ]
    },
    {
        pregunta: 'sole.png',
        opciones: [
            {
                texto: 'a- Sole',
                esCorrecta: true
            },
            {
                texto: 'b- Secco',
                esCorrecta: false
            },
            {
                texto: 'c- Sale',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'spezie.png',
        opciones: [
            {
                texto: 'a- Squalo',
                esCorrecta: false
            },
            {
                texto: 'b- Spezie',
                esCorrecta: true
            },
            {
                texto: 'c- Scarpa', 
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'stella.png',
        opciones: [
            {
                texto: 'a- Stare',
                esCorrecta: false
            },
            {
                texto: 'b- Squatra', 
                esCorrecta: false
            },
            {
                texto: 'c- Stella',
                esCorrecta: true
            }
        ]
    },
    {
        pregunta: 'taccuino.png',
        opciones: [
            {
                texto: 'a- Taccuino',
                esCorrecta: true
            },
            {
                texto: 'b- Libretta',
                esCorrecta: false
            },
            {
                texto: 'c- Trapano', 
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'temperino.png',
        opciones: [
            {
                texto: 'a- Sacamina',
                esCorrecta: false
            },
            {
                texto: 'b- Temperino',
                esCorrecta: true
            },
            {
                texto: 'c- Sperenza', 
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'tenda.png',
        opciones: [
            {
                texto: 'a- Tiziano',
                esCorrecta: false
            },
            {
                texto: 'b- Courtine',
                esCorrecta: false
            },
            {
                texto: 'c- Tenda',
                esCorrecta: true
            }
        ]
    },
    {
        pregunta: 'zaino.png',
        opciones: [
            {
                texto: 'a- Zaino',
                esCorrecta: true
            },
            {
                texto: 'b- Bolsa',
                esCorrecta: false
            },
            {
                texto: 'c- Tiziano',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'zanzara.png',
        opciones: [
            {
                texto: 'a- Sorbet',
                esCorrecta: false
            },
            {
                texto: 'b- Zanzara',
                esCorrecta: true
            },
            {
                texto: 'c- Mosquite',
                esCorrecta: false
            }
        ]
    },
]