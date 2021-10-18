let mixin = {
    saludar() {
        console.log(`Hola ${this.name}`);
    },
    despedir() {
        console.log(`Chao ${this.name}`);
    }
};

class Usuario {
    constructor(nombre) {
        this.name = nombre;
    }
}

Object.assign(Usuario.prototype, mixin)
const usuario = new Usuario("Miguel")
usuario.saludar()
