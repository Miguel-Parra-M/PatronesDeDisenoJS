class MiClase1 {
	constructor() {
		this.propiedad = 1
		this.metodo = () => {
			// Este es un metodo
		}
    }
}
const instancia = new MiClase1()
console.log(instancia)

// Antes 
function MiClase2() {
	this.prop = 1
	this.method = () => {

	}
}

const instancia2 = new MiClase2()
console.log(instancia2)




// Contructor con prototipos


class MiClase3 {
	constructor() {
		this.propiedad = 1
		this.metodo = () => {
			// Este es un metodo
		}
	}
	metodo() {
		// Soy un metodo de un prototipo
	}
}
const instancia3 = new MiClase3()
console.log(instancia3)





// Ejemplos

Object.prototype.log = () => {
	console.log(this)
}

const x = { a: 1 }
x.log()


if (!String.prototype.trim) {
	String.prototype.trim = () => {
		try {
			return this.remplace(/^\s+|\s+$/g,"")
		} catch (e) {
			return this
		}
	}
}

const y = "  Hola Miguel Parra   ".trim()
y.log()
