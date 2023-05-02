const fs= require('fs')

const yargs= require("yargs")
// console.log(yargs.argv)

const data5 = require("./data5")

yargs.command({
    command:"add",
    describe : "to add an item",
    builder :{
        fname: {
            describe : "first name",
            type: "string",
        },
        lname: {
            describe : "Last name",
            type: "string",
        }


    },
    handler :(x)=>{
        
        
         data5.addperson(x.id,x.fname,x.lname, x.age, x.city)
           

      
        
    }
})


yargs.parse()

// ////////////////////////////////////////////////////////

yargs.command({
    command:"delete",
    describe : "to delete an item",
    handler :(x)=>{
        console.log("you have deleted an item")
        data5.deledetedData(x.id)
    }
})

console.log(yargs.argv)

//////////////////////////////////////////////////////////////////////////////:

yargs.command({
    command:"read",
    describe : "to read an item",
    builder :{
        id:{
            describe : "this is desc in read command",
            demandoption:true,
            type: "string"
        }
    },
    handler :(x)=>{
        // console.log("you have deleted an item")
        data5.readData(x.id)
    }
})

console.log(yargs.argv)

//////////////////////////////////////////////
yargs.command({
    command:"list",
    describe:"list data",
    handler:()=>{
        data5.listData()
    }
})
console.log(yargs.argv)

