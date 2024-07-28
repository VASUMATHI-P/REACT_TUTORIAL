import React, {useState} from 'react'

const MyComponent = () => {
  const [name, setName] = useState('user');
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  const handleNameChange = () => {
    setName('Vasu');
  }

  const handleAgeChange = () => {
    setAge(age+1);
  }

  const ToggleStatus = () => {
    setIsEmployed(!isEmployed);
  }

  return (
    <>
      <p>Name: {name}</p>
      <button onClick={handleNameChange}>Set Name</button>

      <p>Age: {age}</p>
      <button onClick={handleAgeChange}>Increment Age</button>

      <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={ToggleStatus}>ToggleStatus</button>
    </>
  )
}

export default MyComponent