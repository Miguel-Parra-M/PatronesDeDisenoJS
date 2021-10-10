class api2{
    constructor() {
        this.get = (url,opts) => {
            // return axios.get
        }
        this.post = (url,opts) => {
            // return axios.post
        }
    }
}


class ApiAdapter{
    constructor() {
        const api2 = new Api2()
        this.operations = (url, opts, verb) => {
            switch (verb) {
                case 'get':
                    return api2.get(url, opts);
                case 'post':
                    return api2.post(url, opts);
                default:
                    return
            }
        }
    }
}

const api2 = new Api2()
api2.get('www.google.cl', { q: 1 })

const adapter = new ApiAdapter()
adapter.operations('www.google.cl', { q: 1 }, 'get')


