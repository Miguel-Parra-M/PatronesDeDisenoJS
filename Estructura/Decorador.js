class Macbook {
    constructor() {
        this.precio = 1000
        this.pantalla = 11.6
    }
}

const macbook = new Macbook()
macbook.agregarMemoria = () => {
    this.precio += 100
}

macbook.agregarMemoria()
console.log(macbook.precio);

class Windows {
    precio() {
        return 1000
    }
}

const memoria = window => {
    const v = window.precio()
    window.precio = () => {
        return v + 100
    }
}
const pc = new Windows()
console.log(pc.precio);

