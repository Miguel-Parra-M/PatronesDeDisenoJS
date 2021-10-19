const suma = a => b => a + b

const suma1 = suma(1)

suma1(5)


// Ejemplo
const users = [
    {edad:17, nombre:"Miguel", apellido: "Parra"},
    {edad:18, nombre:"Juan", apellido: "Guerrero"},
    {edad:13, nombre:"Marco", apellido: "Cedeño"},
    {edad:16, nombre:"Junior", apellido: "Vera"},
]

const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x)
const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x)
const trace = x => y => console.log(x, y)
const filter = f => xs => xs.filter(f)
const head = xs => xs[0]
const formateo = x => ({
    nombreCompleto: `${x.nombre}${x.apellido}`,
    edad: x.edad,
})

const formato = x => `${x.nombreCompleto} tiene ${x.edad} año(s)`

const traerPrimerInfante = pipe(
    filter(x => x.edad < 2),
    trace("Despues de filter"),
    head,
    formateo,
    formato,
)



