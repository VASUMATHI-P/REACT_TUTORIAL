import React, {useState} from 'react'

const ArrayChange = () => {
  const [foods, setFoods] = useState(["Apple", "Orange", "Mango"])

  const handleAddFood = () => {
    const newFood = document.getElementById('add-food').value;
    if(newFood == "") return;
    document.getElementById('add-food').value = "";
    setFoods(foods => [...foods, newFood]);
  }

  const handleRemoveFood = (index) => {
    setFoods(() => foods.filter((food, i) => i !== index))
  }

  return (
    <>
      <h1>List of Foods</h1>
      <ul>
        {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
      </ul>

      <input id='add-food' type='text' placeholder='Enter food name'/>
      <button onClick={handleAddFood}>Add food</button>
    </>
  )
}

export default ArrayChange