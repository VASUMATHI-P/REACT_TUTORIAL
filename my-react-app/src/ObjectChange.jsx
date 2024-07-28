import React, {useState} from 'react'

const ObjectChange = () => {
  const [car, setCar] = useState({year: 2024, model: 'Hyundai', make: 'Honda'})

  const handleYearChange = (e) => {
    setCar(car => ({ ...car, year: e.target.value }))
  }

  const handleMakeChange = (e) => {
    setCar(car => ({ ...car, make: e.target.value }))
  }

  const handleModelChange = (e) => {
    setCar(car => ({ ...car, model: e.target.value }))
  }

  return (
    <>
      <p>year: {car.year}</p>
      <p>model: {car.model}</p>
      <p>make: {car.make}</p>

      <input type='number' value={car.year} onChange={handleYearChange}/>
      <br/>
      <input value={car.make} onChange={handleMakeChange}/>
      <br/>
      <input value={car.model} onChange={handleModelChange}/>
    </>
  )
}

export default ObjectChange