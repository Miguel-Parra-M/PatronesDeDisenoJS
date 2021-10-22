const user = new User()
const init = () => {
    user.on ('login',userLoggedIn)
}

const userLoggedIn = () => {
    // Usuario inicia sesión
}

app.init()

const login = () => {
    // logica del inidio de sesión...

    // luego:
    user.trigger('login')
}

login()