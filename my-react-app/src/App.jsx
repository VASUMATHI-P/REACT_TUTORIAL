import List from "./List"

function App() {
  const fruits = [
    { id: 1, name: 'Apple', calories: 90},
    { id: 2, name: 'Banana', calories: 105},
    { id: 3, name: 'Mango', calories: 100},
    { id: 4, name: 'Orange', calories: 45}
  ];

  const vegetables = [
    { id: 1, name: 'Carrot', calories: 41 },
    { id: 2, name: 'Broccoli', calories: 55 },
    { id: 3, name: 'Spinach', calories: 23 },
    { id: 4, name: 'Potato', calories: 77 }
  ];

  return (
    <>
      {fruits.length > 0 && <List items= {fruits} category= "Fruits"/>}
      {vegetables.length > 0 && <List items= {vegetables} category= "Vegetables"/>}
      <List/>
    </>
  )

}

export default App
