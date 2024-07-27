import PropTypes from 'prop-types';

const List = (props) => {
  const items = props.items;
  const category = props.category;
  // fruits.sort((a, b) => a.name.localeCompare(b.name))  //ALPHABETICAL
  // fruits.sort((a, b) => b.name.localeCompare(a.name))  //EVERSE ALPHABETIC
  // fruits.sort((a, b) => a.calories - b.calories)  //NUMERIC
  // fruits.sort((a, b) => b.calories - a.calories) // REVERSE NUMERIC

  const itemsList = items.map(item => <li key={item.id}>
                                          {item.name}: &nbsp; <b>{item.calories}</b>
                                          </li>)
  return (
    <>
      <h2 className="list-category">{category}</h2>
      <ul className="list-items">{itemsList}</ul>
    </>
  )
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    calories: PropTypes.number
  }))
}

List.defaultProps = {
  items: [],
  category: 'Category'
}

export default List