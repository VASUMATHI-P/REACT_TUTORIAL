import PropTypes from 'prop-types'

const Student = (props) => {
  const styles = {
    border: "1px solid black",
    boxShadow: "5px 5px 5px 0.5",
    margin: "10px",
    padding: "10px",
    maxWidth: "300px"
  }
  return (
    <div style={styles}>
      <p>Name = {props.name}</p>
      <p>Age = {props.age}</p>
      <p>isStudent = {props.isStudent ? "YES" : "NO"}</p>
    </div>
  )
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool
}

Student.defaultProps = {
  name: "User",
  Age: 0,
  isStudent: false
}

export default Student