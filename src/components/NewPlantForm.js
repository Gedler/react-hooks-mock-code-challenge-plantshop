import React, {useState} from "react";


function NewPlantForm({getHandleSubmit}) {
  const [name, setName] = useState("")
const [img, setImg] = useState("")
const [price, setPrice] = useState("")

function handleSubmit(e){
    e.preventDefault()
    let newPlantSubmit = {
      name: {name},
      image: {img},
      price: parseFloat(price, 10)
    }
    getHandleSubmit(newPlantSubmit)

}
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit = {handleSubmit}>
        <input type="text" value= {name} onChange= {e=> setName(e.target.value)} name="name" placeholder="Plant name" />
        <input type="text" name="image" value= {img} onChange= {e=> setImg(e.target.value)} placeholder="Image URL" />
        <input type="number" name="price" value= {price} onChange= {e=> setPrice(e.target.value)}step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;