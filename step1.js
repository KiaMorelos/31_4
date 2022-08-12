const fs = require('fs');

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

cat(process.argv[2])