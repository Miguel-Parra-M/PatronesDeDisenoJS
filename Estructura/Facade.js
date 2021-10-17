const https = require('http')
const get = url => new Promise((resolve, reject) => {
    const comp = url.split('/')
    const host = comp.shift()
    const options = {
        hostname: host,
        paht: `${comp.join('/')}`,
        method: 'GET'
    }
    const req = https.request(options, res => {
        res.setEncoding('utf-8')
        let body = ''
        res.on('data', d => {
            body += d
        })
        res.on('end', d => {
            const parsed = JSON.pars(body)
            resolve(parsed)
        })
    })
    req.on('error', (e) => {
        reject(e)
    })
    req.end()

})

const main = async () => {
    const result = await get('url')
    console.log(result);
}

main()

