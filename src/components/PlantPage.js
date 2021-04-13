import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantCard from "./PlantCard";
import PlantList from "./PlantList";
import Search from "./Search";


function PlantPage() {
const [plantArr, setPlantArr] = useState([])
useEffect(()=>{
    fetch("http://localhost:6001/plants") 
    .then(res => res.json())
    .then(function(entirePlantArray) {
      setPlantArr([...entirePlantArray])
 })
}, [])

const plantArrayMapped = plantArr.map(function(eachPlant){
      return (<PlantCard
      name = {eachPlant.name}
      img = {eachPlant.image}
      price = {eachPlant.price}
      />)
})

// function getHandleSubmit(newPlantObj) { 
//   fetch("http://localhost:6001/plants", {
//     method: "POST", 
//     headers: {"content-type" : "application/json"}, 
//     body: JSON.stringify(newPlantObj)
//   }) 
//         .then(res => res.json())
//         .then(function(newPlantObj) {
//           const updatedPlantArray = [...plantArr, newPlantObj] 
//           setPlantArr(updatedPlantArray)
//         })
//       }

  return (
    <main>
      <NewPlantForm 
      // getHandleSubmit = {getHandleSubmit}
      />
      <Search />
      <PlantList 
        plantCard = {plantArrayMapped}
      />
    </main>
  );
}

export default PlantPage;