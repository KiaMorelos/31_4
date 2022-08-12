const fs = require('fs')
const axios = require('axios')

function cat(path, out){

    fs.readFile(path, 'utf-8', (err, contents) => {
        if(err){
            console.error(`Error reading: ${path}: ${err}`)
            process.exit(1)
        } else {
            writeFile(contents, out)
        }
    })

}


async function webCat(url, out){
    try {
        const res = await axios.get(url)
        const {data} = res
            writeFile(data, out)
    } catch (err){
        console.error(`Error fetching ${url}, ${err}`)
        process.exit(1)
    }
}

function writeFile(writ, out){
    if(out){
        fs.writeFile(out, writ, 'utf-8', (err) => {
            if(err){
                console.error(`Couldn't write ${out}: ${err}`)
                process.exit(1)
            }
        })
    } else {
        console.log(writ)
    }
}

let input
let out


if(process.argv[2] === '--out'){
    out = process.argv[3]
    input = process.argv[4]
} else {
    input = process.argv[2]
}

if(input.includes('http')){
    webCat(input, out)
} else {
    cat(input, out)
}
