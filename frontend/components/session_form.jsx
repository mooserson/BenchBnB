import React from 'react';
import {Link, withRouter} from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          username: "",
          password: ""
      };
      this.handleSubmit = handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={idx}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  navLink() {
    if(this.props.formType === "login"){
      return <Link to="/signup">Sign Up</Link>;
    } else {
      return <Link to="/login">Log In</Link>;
    }
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  render() {
    return (
      <div className="login-form-container">
        <form className="login-form-box" onSubmit={this.handleSubmit}>
          <h3>Welcome To BBnB</h3>
            {this.renderErrors()}
            <br>
            Please {this.props.formType} or {this.navLink}
            <label>Username
              <input
                type="text"
                value={this.state.username}
                onChange={update('username')}
                placeholder="Username" />
            </label>
            <br>
            <label>Password
              <input
                type="text"
                value={this.state.password}
                onChange={update('password')}
                placeholder="Password" />
            </label>
            <button>Submit</button>
        </form>
      </div>
    )
  }

}
