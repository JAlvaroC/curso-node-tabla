const fs=require('fs');
var colors = require('colors');
// colors.setTheme({
//     silly: 'rainbow',
//     input: 'grey',
//     verbose: 'cyan',
//     prompt: 'grey',
//     info: 'green',
//     data: 'grey',
//     help: 'cyan',
//     warn: 'yellow',
//     debug: 'blue',
//     error: 'red'
//   });
 const createFile=async(base=0,l=false,u=12)=>{

    try {
        
        let consola='';
        let resultado='';
        // let resultado,consola='';
        for (let i = 1; i <=u; i++) {
            
            resultado+=`${base} x ${i} = ${base*i}\n`;
            consola+=`${base} ${'x'.green} ${i} ${'='.green} ${base*i}\n`
        }
        if (l) {
            console.log("===============".green)
            console.log(`Tabla del : `.green,colors.blue(base))
            console.log("===============".green)
            console.log(consola)
        }

           fs.writeFileSync(`./output/tabla-${base}.txt`,resultado);
          return  `tabla-${base}.txt creado`
       
    } catch (error) {
        throw error
    
    }

}
/* exportar con node */



// const createFile=(base=0)=>{
//     return new Promise((resolve,reject)=>{
//        console.log("===============")
//        console.log(`Tabla del : `,base)
//        console.log("===============")
//            let resultado='';
//           for (let i = 0; i <=12; i++) {
//               resultado+=`${base} x ${i} =${base*i}\n`
//          }
//                 fs.writeFileSync(`tabla-${base}.txt`,resultado)
//               resolve(`tabla-${base}.txt created`)
//     })
// }
module.exports={
    createFile
}