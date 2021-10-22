const Comandor = (() => {
    const o = {
        comprar: x => {
            console.log(`Comprando ${x}`);
        },
        vender: x => {
            console.log(`Vendiendo ${x}`);
        }
    }
    return {
        run: (comando, argumentos) => {
            if (!o[comando]) {
                console.log("comando no existe")
                return
            }
            o[comando](argumentos)
        }
    }
})()


Comandor.run("comprar","Mazda")
Comandor.run("lala","Mazda")