const fs= require('fs')

const addperson = (id,fname, lname,age,city)=>{

    const allData = loadInfo()
    

    const duplicateData= allData.filter((obj)=>{
        return obj.id === id

    })

    if(duplicateData.length==0){
        
         
    allData.push({
        id: id,
        fname: fname,
        lname: lname,
        age: age,
        city: city
    })
    saveAllData(allData)

}
    else{
        console.log("id already exist, try another one")
    }

   
    }
  


const loadInfo =()=>{
    try{
        const dataJson= fs.readFileSync("data5.json").toString()

    return JSON.parse(dataJson)

    } catch{
        return []
    }
    
}

const saveAllData=(allData) => {
    const saveAlldataJson = JSON.stringify(allData)

    fs.writeFileSync("data5.json", saveAlldataJson)

}



const deledetedData =(id)=>{
    const allData= loadInfo()
    const dataToKeep = allData.filter((obj)=>{
        return obj.id !==id
    })
    saveAllData(dataToKeep)


}

///////////////////////////////////////

const readData=(id)=>{
    const allData= loadInfo()
    const itemNeeded = allData.find((obj)=>{
        return obj.id == id

    })
    // console.log(itemNeeded)
    if(itemNeeded){
        console.log(itemNeeded.id)
    }else{
        console.log("id doesn't exist")
    }
}

///////////////////////////////
const listData=()=>{
    const allData= loadInfo()
     allData.forEach((obj)=>{
        console.log(obj.fname, obj.age, obj.city)
     })
}


module.exports ={
    addperson,
   
    deledetedData,
    readData,
    listData

}