
// const { demandOption, option } = require('yargs');
const argv = require('./config/yargs');
const { createFile } = require('./helpers/multiply');
// var colors = require('colors');
/* otra forma de usar */
 require('colors');

// const argv = yargs(hideBin(process.argv)).argv

//option('l)
//listar
//boolean
//default:false
 console.clear();

//  console.log(process.argv)
//  console.log(argv)

//  console.log('base yargs',argv.b)
// const [,,arg3='base=5']=process.argv;
// const [,base=5]=arg3.split('=');


createFile(argv.b,argv.l,argv.u)
    .then(nameFile=>console.log(nameFile.rainbow,'created'))
    .catch(err=>console.log(err))


/* otra manera de crear archivos */
// fs.writeFile(`tabla-${base}.txt`,resultado,(err)=>{
//     if(err)throw err;
//     console.log('tabla-5.txt created ')
// })
// argv