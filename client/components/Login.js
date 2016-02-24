class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleUsername(event) {
    this.setState({username: event.target.value});
  }
  handlePassword(event) {
    this.setState({password: event.target.value});
  }
  handleSubmit(event) {
     event.preventDefault();
     var username = this.state.username.trim();
     var password = this.state.password.trim();
  }
    render(){
      return (
        <div>
          <form className="loginForm" onSubmit={this.handleSubmit}>
            Username:
              <input
                type="text"
                placeholder="Enter your username"
                onChange={this.handleUsername.bind(this)}
              /> <br/>
            Password:
              <input
               type="password"
               placeholder="Enter your password"
               onChange={this.handlePassword.bind(this)}
              /> <br/>
              <input type="submit" value="Login"/>
          </form>
          <h2>Sign up for an account through GitHub</h2>
          <div>
            <a href="/auth/github">Sign up with GitHub</a>
          </div>
        </div>
      )
    }
}

ReactDOM.render(<Login/>, document.getElementById('app'));