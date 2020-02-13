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
                texto: 'a- Burro',
                esCorrecta: false
            },
            {
                texto: 'b- Asno',
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
                texto: 'b- Carnecia',
                esCorrecta: false
            },
            {
                texto: 'c- Camizza',
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
                texto: 'c- Pintare',
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
    {
        pregunta: 'acqua.png',
        opciones: [
            {
                texto: 'a- Acua',
                esCorrecta: false
            },
            {
                texto: 'b- Acqua',
                esCorrecta: true
            },
            {
                texto: 'c- Agua',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'aereo.png',
        opciones: [
            {
                texto: 'a- Avion',
                esCorrecta: false
            },
            {
                texto: 'b- Avione',
                esCorrecta: false
            },
            {
                texto: 'c- Aereo',
                esCorrecta: true
            }
        ]
    },
    {
        pregunta: 'ananas.png',
        opciones: [
            {
                texto: 'a- Ananas',
                esCorrecta: true
            },
            {
                texto: 'b- Pigna',
                esCorrecta: false
            },
            {
                texto: 'c- Pinya',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'anguria.png',
        opciones: [
            {
                texto: 'a- Anguria',
                esCorrecta: true
            },
            {
                texto: 'b- Sandia',
                esCorrecta: false
            },
            {
                texto: 'c- Melancia',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'ape.png',
        opciones: [
            {
                texto: 'a- Abeille',
                esCorrecta: false
            },
            {
                texto: 'b- Abella',
                esCorrecta: false
            },
            {
                texto: 'c- Ape',
                esCorrecta: true
            }
        ]
    },    
    {
        pregunta: 'asciugamano.png',
        opciones: [
            {
                texto: 'a- Toalla',
                esCorrecta: false
            },
            {
                texto: 'b- Asciugamano',
                esCorrecta: true
            },
            {
                texto: 'c- Tuáille',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'barca.png',
        opciones: [
            {
                texto: 'a- Bote',
                esCorrecta: false
            },
            {
                texto: 'b- Barco',
                esCorrecta: false
            },
            {
                texto: 'c- Barca',
                esCorrecta: true
            }
        ]
    },
    {
        pregunta: 'birra.png',
        opciones: [
            {
                texto: 'a- Pivo',
                esCorrecta: false
            },
            {
                texto: 'b- Birra',
                esCorrecta: true
            },
            {
                texto: 'c- Cerveze',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'biscotto.png',
        opciones: [
            {
                texto: 'a- Galhetta',
                esCorrecta: false
            },
            {
                texto: 'b- Biscotto',
                esCorrecta: true
            },
            {
                texto: 'c- Bicoito',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'calcolatrice.png',
        opciones: [
            {
                texto: 'a- Calcolatrice',
                esCorrecta: true
            },
            {
                texto: 'b- Calcoladora',
                esCorrecta: false
            },
            {
                texto: 'c- Calculatora',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'cane.png',
        opciones: [
            {
                texto: 'a- Perro',
                esCorrecta: false
            },
            {
                texto: 'b- Cane',
                esCorrecta: true
            },
            {
                texto: 'c- Can',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'capelli.png',
        opciones: [
            {
                texto: 'a- Capelli',
                esCorrecta: true
            },
            {
                texto: 'b- Capelo',
                esCorrecta: false
            },
            {
                texto: 'c- Cabello',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'chitarra.png',
        opciones: [
            {
                texto: 'a- Guitarra',
                esCorrecta: false
            },
            {
                texto: 'b- Chitarra',
                esCorrecta: true
            },
            {
                texto: 'c- Citarre',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'cinque.png',
        opciones: [
            {
                texto: 'a- Cinque',
                esCorrecta: true
            },
            {
                texto: 'b- Cinco',
                esCorrecta: false
            },
            {
                texto: 'c- Cinche',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'cipolla.png',
        opciones: [
            {
                texto: 'a- Cipolla',
                esCorrecta: true
            },
            {
                texto: 'b- Cebola',
                esCorrecta: false
            },
            {
                texto: 'c- Capolle',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'coltello.png',
        opciones: [
            {
                texto: 'a- Cortadore',
                esCorrecta: false
            },
            {
                texto: 'b- Coltello',
                esCorrecta: true
            },
            {
                texto: 'c- Cutillo',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'dente.png',
        opciones: [
            {
                texto: 'a- Dienti',
                esCorrecta: false
            },
            {
                texto: 'b- Dento',
                esCorrecta: false
            },
            {
                texto: 'c- Dente',
                esCorrecta: true
            }
        ]
    },
    {
        pregunta: 'donna.png',
        opciones: [
            {
                texto: 'a- Mulher',
                esCorrecta: false
            },
            {
                texto: 'b- Done',
                esCorrecta: false
            },
            {
                texto: 'c- Donna',
                esCorrecta: true
            }
        ]
    },
    {
        pregunta: 'due.png',
        opciones: [
            {
                texto: 'a- Dos',
                esCorrecta: false
            },
            {
                texto: 'b- Doi',
                esCorrecta: false
            },
            {
                texto: 'c- Due',
                esCorrecta: true
            }
        ]
    },
    {
        pregunta: 'farfalla.png',
        opciones: [
            {
                texto: 'a- Farmella',
                esCorrecta: false
            },
            {
                texto: 'b- Farfalla',
                esCorrecta: true
            },
            {
                texto: 'c- Fartella',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'formaggio.png',
        opciones: [
            {
                texto: 'a- Formatge',
                esCorrecta: false
            },
            {
                texto: 'b- Quesso',
                esCorrecta: false
            },
            {
                texto: 'c- Formaggio',
                esCorrecta: true
            }
        ]
    },
    {
        pregunta: 'formica.png',
        opciones: [
            {
                texto: 'a- Formicce',
                esCorrecta: false
            },
            {
                texto: 'b- Formica',
                esCorrecta: true
            },
            {
                texto: 'c- Antina',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'fragole.png',
        opciones: [
            {
                texto: 'a- Fragole',
                esCorrecta: true
            },
            {
                texto: 'b- Fressere',
                esCorrecta: false
            },
            {
                texto: 'c- Fraise',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'grigio.png',
        opciones: [
            {
                texto: 'a- Grigio',
                esCorrecta: true
            },
            {
                texto: 'b- Grice',
                esCorrecta: false
            },
            {
                texto: 'c- Graisse',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'labbra.png',
        opciones: [
            {
                texto: 'a- Labie',
                esCorrecta: false
            },
            {
                texto: 'b- Labbra',
                esCorrecta: true
            },
            {
                texto: 'c- Lèvre',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'lingua.png',
        opciones: [
            {
                texto: 'a- Lingua',
                esCorrecta: true
            },
            {
                texto: 'b- Lengua',
                esCorrecta: false
            },
            {
                texto: 'c- Langue',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'luna.png',
        opciones: [
            {
                texto: 'a- Lunne',
                esCorrecta: false
            },
            {
                texto: 'b- Lluna',
                esCorrecta: false
            },
            {
                texto: 'c- Luna',
                esCorrecta: true
            }
        ]
    },
    {
        pregunta: 'mela.png',
        opciones: [
            {
                texto: 'a- Melana',
                esCorrecta: false
            },
            {
                texto: 'b- Mela',
                esCorrecta: true
            },
            {
                texto: 'c- Macana',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'metropolitana.png',
        opciones: [
            {
                texto: 'a- Metro',
                esCorrecta: false
            },
            {
                texto: 'b- Metropolitana',
                esCorrecta: true
            },
            {
                texto: 'c- Meitreo',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'occhiali.png',
        opciones: [
            {
                texto: 'a- Occhiali',
                esCorrecta: true
            },
            {
                texto: 'b- Ochelari',
                esCorrecta: false
            },
            {
                texto: 'c- Lenti',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'ombrello.png',
        opciones: [
            {
                texto: 'a- Umbrella',
                esCorrecta: false
            },
            {
                texto: 'b- Sombrella',
                esCorrecta: false
            },
            {
                texto: 'c- Ombrello',
                esCorrecta: true
            }
        ]
    },
    {
        pregunta: 'palloncino.png',
        opciones: [
            {
                texto: 'a- Glove',
                esCorrecta: false
            },
            {
                texto: 'b- Ballon',
                esCorrecta: false
            },
            {
                texto: 'c- Palloncino',
                esCorrecta: true
            }
        ]
    },
    {
        pregunta: 'pane.png',
        opciones: [
            {
                texto: 'a- Pani',
                esCorrecta: false
            },
            {
                texto: 'b- Pan',
                esCorrecta: false
            },
            {
                texto: 'c- Pane',
                esCorrecta: true
            }
        ]
    },
    {
        pregunta: 'parco.png',
        opciones: [
            {
                texto: 'a- Parque',
                esCorrecta: false
            },
            {
                texto: 'b- Parco',
                esCorrecta: true
            },
            {
                texto: 'c- Parca',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'pettine.png',
        opciones: [
            {
                texto: 'a- Penilla',
                esCorrecta: false
            },
            {
                texto: 'b- Pettine',
                esCorrecta: true
            },
            {
                texto: 'c- Peine',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'pianoforte.png',
        opciones: [
            {
                texto: 'a- Pianoforte',
                esCorrecta: true
            },
            {
                texto: 'b- Piano',
                esCorrecta: false
            },
            {
                texto: 'c- Pianino',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'prosciutto.png',
        opciones: [
            {
                texto: 'a- Prosciutto',
                esCorrecta: true
            },
            {
                texto: 'b- Proscuito',
                esCorrecta: false
            },
            {
                texto: 'c- Proscella',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'salvagente.png',
        opciones: [
            {
                texto: 'a- Salvavitta',
                esCorrecta: false
            },
            {
                texto: 'b- Salvagente',
                esCorrecta: true
            },
            {
                texto: 'c- Salvavidas',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'saponetta.png',
        opciones: [
            {
                texto: 'a- Saponetta',
                esCorrecta: true
            },
            {
                texto: 'b- Saponne',
                esCorrecta: false
            },
            {
                texto: 'c- Saportta',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'scarpe.png',
        opciones: [
            {
                texto: 'a- Sapatti',
                esCorrecta: false
            },
            {
                texto: 'b- Scapatto',
                esCorrecta: false
            },
            {
                texto: 'c- Scarpe',
                esCorrecta: true
            }
        ]
    },
    {
        pregunta: 'schiena.png',
        opciones: [
            {
                texto: 'a- Spaldetta',
                esCorrecta: false
            },
            {
                texto: 'b- Schiena',
                esCorrecta: true
            },
            {
                texto: 'c- Spalda',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'sedia.png',
        opciones: [
            {
                texto: 'a- Sedia',
                esCorrecta: true
            },
            {
                texto: 'b- Silia',
                esCorrecta: false
            },
            {
                texto: 'c- Sedatta',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'specchio.png',
        opciones: [
            {
                texto: 'a- Spegio',
                esCorrecta: false
            },
            {
                texto: 'b- Specchio',
                esCorrecta: true
            },
            {
                texto: 'c- Spagio',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'succo.png',
        opciones: [
            {
                texto: 'a- Succo',
                esCorrecta: true
            },
            {
                texto: 'b- Summo',
                esCorrecta: false
            },
            {
                texto: 'c- Suggio',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'tavolo.png',
        opciones: [
            {
                texto: 'a- Tavla',
                esCorrecta: false
            },
            {
                texto: 'b- Tavolo',
                esCorrecta: true
            },
            {
                texto: 'c- Tabbala',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'uomo.png',
        opciones: [
            {
                texto: 'a- Uomo',
                esCorrecta: true
            },
            {
                texto: 'b- Uomino',
                esCorrecta: false
            },
            {
                texto: 'c- Homme',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'uovo.png',
        opciones: [
            {
                texto: 'a- Uovo',
                esCorrecta: true
            },
            {
                texto: 'b- Uevo',
                esCorrecta: false
            },
            {
                texto: 'c- Huevo',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'vaso.png',
        opciones: [
            {
                texto: 'a- Vaso',
                esCorrecta: true
            },
            {
                texto: 'b- Frassello',
                esCorrecta: false
            },
            {
                texto: 'c- Floritto',
                esCorrecta: false
            }
        ]
    },
    {
        pregunta: 'verme.png',
        opciones: [
            {
                texto: 'a- Virmino',
                esCorrecta: false
            },
            {
                texto: 'b- Vermano',
                esCorrecta: false
            },
            {
                texto: 'c- Verme',
                esCorrecta: true
            }
        ]
    },
    {
        pregunta: 'zucchero.png',
        opciones: [
            {
                texto: 'a- Azuccaro',
                esCorrecta: false
            },
            {
                texto: 'b- Zucchero',
                esCorrecta: true
            },
            {
                texto: 'c- L`azucar',
                esCorrecta: false
            }
        ]
    },
]