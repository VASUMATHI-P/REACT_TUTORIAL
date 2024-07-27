const List = () => {
  const fruits = [
    {
      id: 1,
      name: 'Apple',
      calories: 90
    },
    {
      id: 2,
      name: 'Banana',
      calories: 105
    },
    {
      id: 3,
      name: 'Mango',
      calories: 100
    },
    {
      id: 4,
      name: 'Orange',
      calories: 45
    }
  ];

  fruits.sort((a, b) => a.name.localeCompare(b.name))  //ALPHABETICAL
  fruits.sort((a, b) => b.name.localeCompare(a.name))  //EVERSE ALPHABETIC
  fruits.sort((a, b) => a.calories - b.calories)  //NUMERIC
  fruits.sort((a, b) => b.calories - a.calories) // REVERSE NUMERIC

  const lowCalories = fruits.filter(fruit => fruit.calories < 100)

  const lowCaloriesList = lowCalories.map(fruit => <li key={fruit.id}>
    {fruit.name}: &nbsp; <b>{fruit.calories}</b>
    </li>)

  const highCalories = fruits.filter(fruit => fruit.calories >= 100)

  const highCaloriesList = highCalories.map(fruit => <li key={fruit.id}>
    {fruit.name}: &nbsp; <b>{fruit.calories}</b>
    </li>)

  const fruitsList = fruits.map(fruit => <li key={fruit.id}>
                                          {fruit.name}: &nbsp; <b>{fruit.calories}</b>
                                          </li>)
  return (
    <div>
      <ul>{fruitsList}</ul>
      <ul>{lowCaloriesList}</ul>
      <ul>{highCaloriesList}</ul>
    </div>
  )
}

export default List