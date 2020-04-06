const fetch = require('node-fetch');
const API = "https://thevirustracker.com/timeline/map-data.json";

const getData = async()=>{
    const dataPA = [];
   try {
    
    const allData = await fetch(API).then((dataJson)=>{
        return dataJson.json();
    }).then((dataparse)=>{
        return dataparse
    });
    
    allData.data.forEach((element) => {
        if(element.countrycode == "PA") dataPA.push(element)
    })
    
    return JSON.stringify(dataPA)

   } catch (error) {
        console.log(error)   
   }
}



module.exports = getData;