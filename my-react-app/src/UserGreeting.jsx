import PropTypes from 'prop-types'

const UserGreeting = (props) => {
  if(props.isLoggedIn == true){
    return <h1>Welcome back, {props.name}!</h1>;
  } else {
    return <h1>Please sign in.</h1>;
  }
}

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  name: PropTypes.string
}

UserGreeting.defaultProps = {
  isLoggedIn: false,
  name: 'Guest'
}

export default UserGreeting