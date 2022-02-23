const { describe } = require('yargs');


const argv = require('yargs')
.option('b',{
    alias:'base',
    type:'number',
    demandOption:true,
    describe:'Is the base oh the table multiply'
}).option('l',{
    alias:'list',
    type:'boolean',
    default:false,
    describe:'Show the table of multiply'
}).option('u',{
    alias:'until',
    type:'number',
    default:12,
    describe:'is the limit of table of multiply'
})
.check((argv,options)=>{
    if (isNaN(argv.b)) {
        throw ("have that be a number")
    }else {
        return true 
    }
})
.argv;
const argvl = require('yargs')

.argv;

module.exports=    argv;
/* module.exports=    {argv}; */
