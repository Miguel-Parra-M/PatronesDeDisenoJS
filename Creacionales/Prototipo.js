const perro = {
    raza: 'Pitbul',
    ladrar: () => {
        console.log(`Wao !! soy un ${this.raza}`);
    }
}
const Kiltro = Object.create(perro)
Kiltro.ladrar()
