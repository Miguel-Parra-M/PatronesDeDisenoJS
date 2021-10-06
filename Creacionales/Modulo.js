const module = {
    prop: 'mi prop0',
    config: {
        languaje: 'es',
        cache: true,
    },
    setConfig: confg => {
        modulo.confg = confg
    },
    isCacheEnabled: () => {
        console.log(modulo.confg.cache ? 'si':'no')
    }

}


// Modulo revelador
const resultado = (() => {
    const x = {}
    return {
        a: () => console.log(x),
        b:(key, val) =>  x[key] = val
    }
})()

resultado.a()
resultado.b("Miguel", "Parra")
resultado.a()

// Ejemplo

const Users = (() => {
    const recurso = '/users'
    return {
        listar: async () => {
            return await fetch(recurso).then( x => x.json())
        },
        crear: async (data) => {
            return await fetch(recurso, {type: 'POST', body: JSON.stringify(data)}).then(x => x,json())
        }
    }
})()


