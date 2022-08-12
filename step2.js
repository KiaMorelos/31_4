const fs = require('fs')
const axios = require('axios')

function cat(path){

    fs.readFile(path, 'utf-8', (err, contents) => {
        if(err){
            console.error(`Error reading: ${path}: ${err}`)
            process.exit(1)
        } else {
            console.log(contents)
        }
    })

}

async function webCat(url){
    try {
        const res = await axios.get(url)
        console.log(res)
    } catch (err){
        console.error(`Error fetching ${url}, ${err}`)
        process.exit(1)
    }
}

const input = process.argv[2]

if(input.includes('http')){
    webCat(input)
} else {
    cat(input)
}