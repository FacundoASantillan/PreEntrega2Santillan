function suma(a,b){
    return a+b
}

function multiplicacion(a,b){
    return a*b
}

let SpyxFamily10 = 1800
let BluePeriod9 = 2100
let Vagabond2 = 2000
let KomiSan8 = 3500

class Producto{
    constructor (id,nombre,precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
    description(){
        return "\nnombre: "+this.nombre+
        "\nprecio: "+"$"+this.precio
        
    }
}

const producto1 = new Producto(1,"SpyxFamily 10",1800)
const producto2 = new Producto(2,"Blue Period 9",2100)
const producto3 = new Producto(3,"Vagabond 2",2000)
const producto4 = new Producto(4,"Komi-san 8",3500)

const listasproductos = [
    producto1,
    producto2,
    producto3,
    producto4
]

class Reserva{
    constructor (numeroDeReserva,NombreDe,TotalAPagar){
        this.numeroDeReserva = numeroDeReserva
        this.NombreDe = NombreDe
        this.TotalAPagar = TotalAPagar
    }
    description(){
        return "\n#"+this.numeroDeReserva+
        "\nCliente: "+this.NombreDe+
        "\nTotal a pagar "+"$"+this.TotalAPagar
    }
}


const reserva1 = new Reserva(1,"Facundo",suma(SpyxFamily10,Vagabond2))
const reserva2 = new Reserva(2,"Micaela",KomiSan8)
const reserva3 = new Reserva(3,"Ronel",suma(KomiSan8,BluePeriod9))
const reserva4 = new Reserva(4,"Romina",suma(Vagabond2,BluePeriod9))
const reserva5 = new Reserva(5,"Juan",Vagabond2)
const reserva6 = new Reserva(6,"Alberto",suma(KomiSan8,Vagabond2))
const reserva7 = new Reserva(7,"Claudia",suma(BluePeriod9,SpyxFamily10))
const reserva8 = new Reserva(8,"Messi",multiplicacion(SpyxFamily10,3))

const listareservas = [
    reserva1,
    reserva2,
    reserva3,
    reserva4,
    reserva5,
    reserva6,
    reserva7,
    reserva8
]

const reserva9 = new Reserva(9,"Sebastian",suma(Vagabond2,KomiSan8))
listareservas.push(reserva9)

const reserva10 = new Reserva(10,"Carla",multiplicacion(KomiSan8,2))
listareservas.push(reserva10)

console.log ("Mangas disponibles:\n  " )

for (let i = 0; i < listasproductos.length; i++) {
    console.log((i+1)+") "+listasproductos[i].description())
}

console.log ("\nReservas:\n  " )

for (let i = 0; i < listareservas.length; i++) {
    console.log((i+1)+") "+listareservas[i].description())
}

let mensaje1 = "Hola Facundo\nUsted reservo:\nSpy x Family 10\nVagabond 2\nSu total a pagar es de "+"$"+suma(Vagabond2,SpyxFamily10)

let mensaje2 = "Hola Micaela\nUsted reservo:\nKomi-san 8\nSu total a pagar es de "+"$"+KomiSan8

let mensaje3 = "Hola Ronel\nUsted reservo:\nKomi-san 8\nBlue period 9\nSu total a pagar es de "+"$"+suma(KomiSan8,BluePeriod9)

let mensaje4 = "Hola Romina\nUsted reservo:\nVagabond 2\nBlue period 9\nSu total a pagar es de "+"$"+suma(Vagabond2,BluePeriod9)

let mensaje5 = "Hola Juan\nUsted reservo:\nVagabond 2\nSu total a pagar es de "+"$"+Vagabond2

let mensaje6 = "Hola Alberto\nUsted reservo:\nKomi-san 8\nVagabond 2\nSu total a pagar es de "+"$"+suma(KomiSan8,Vagabond2)

let mensaje7 = "Hola Claudia\nUsted reservo:\nBlue period 9\nSpy x Family 10\nSu total a pagar es de "+"$"+suma(BluePeriod9,SpyxFamily10)

let mensaje8 = "Hola Messi\nUsted reservo:\nSpy x Family 10\nSpy x Family 10\nSpy x Family 10\nSu total a pagar es de "+"$"+multiplicacion(SpyxFamily10,3)

let mensaje9 = "Hola Sebastian\nUsted reservo:\nVagabond 2\nKomi-san 10\nSu total a pagar es de "+"$"+suma(Vagabond2,KomiSan8)

let mensaje10 = "Hola Carla\nUsted reservo:\nKomi-san 8\nKomi-san 8\nSu total a pagar es de "+"$"+multiplicacion(KomiSan8,2)

let mensaje11 = "Su numero de reserva no es valido\n Por favor vuelva a intentarlo mas tarde"

let desloge = "\nPuede pasar a retirar a partir del 10/03\n¡Gracias por su compra!"

let respuesta = Number(prompt("\nPor favor ingrese su numero de reserva:\n "))

switch(respuesta){
    case 1: alert(mensaje1+desloge)
    break;
    case 2: alert(mensaje2+desloge)
    break;
    case 3: alert(mensaje3+desloge)
    break;
    case 4: alert(mensaje4+desloge)
    break;
    case 5: alert(mensaje5+desloge)
    break;
    case 6: alert(mensaje6+desloge)
    break;
    case 7: alert(mensaje7+desloge)
    break;
    case 8: alert(mensaje8+desloge)
    break;
    case 9: alert(mensaje9+desloge)
    break;
    case 10: alert(mensaje10+desloge)
    break;

}if(respuesta>=11){
    alert(mensaje11)
}



