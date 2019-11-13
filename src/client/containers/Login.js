import React from 'react'
import { NavLink } from 'react-router-dom'

class Login extends React.Component {

  render() {
    return (
      <div>
        <form onSubmit={this.props.fetchUser}>
          <label>
            Username:
            <input type="text" name="username" />
          </label>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <input type="submit" value="Log In" />
        </form>
        <NavLink to="/signup">Sign Up</NavLink>
        <br/>
        <NavLink to="/">Return to HomePage</NavLink>
      </div>
    )
  }
}
export default Login
