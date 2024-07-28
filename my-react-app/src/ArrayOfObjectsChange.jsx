import { useState } from "react"

const ArrayOfObjectsChange = () => {
  const [cars, setCars] = useState([]);
  const [carName, setCarName] = useState("");
  const [carYear, setCarYear] = useState(new Date().getFullYear());

  const handleAddCar = () => {
    setCars(cars => [...cars, { name: carName, year: carYear }]);

    setCarName("");
    setCarYear(new Date().getFullYear())
  }

  const handleRemoveCar = (index) => {
    setCars(cars => cars.filter((car, i) => i!==index));
  }

  const handleYearChange = (e) => {
    setCarYear(e.target.value);
  }

  const handleNameChange = (e) => {
    setCarName(e.target.value);
  }

  return (
    <div>
      <h3>List of Cars</h3>
      <ul>
        {cars.map((car, index) => <li key={index} onClick={() => handleRemoveCar(index)}>Name: {car.name} Year: {car.year}</li>)}
      </ul>
      <input type="number" value={carYear} onChange={handleYearChange}/> <br/>
      <input type="text" value={carName} onChange={handleNameChange} placeholder="Enter Car name"/> <br/>
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  )
}

export default ArrayOfObjectsChange