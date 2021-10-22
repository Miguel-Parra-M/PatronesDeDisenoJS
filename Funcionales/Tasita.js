const f = (reuta,cb) => { 
    const resultado = computacionPesada()
    cb(resultado)
}

const manejaResult = (result) => {
    
}

f('/users',manejaResult)

app.get('/users', (req, res) => {
    
})
