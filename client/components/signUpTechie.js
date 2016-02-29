var hashHistory = window.ReactRouter.hashHistory;

class SignUpTechie extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      name: '',
      password:'',
      email: '',
      phoneNum: 0,
      bio: '',
      mobileApp: false,
      graphics: false,
      staticSite: false,
      interactiveSites: false,
      fullStackBeast: false,
      result: ''
    };
  }

  handleUsernameChange(e) {
    this.setState({username: e.target.value});
  }
  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }
  handleNameChange(e) {
    this.setState({name: e.target.value});
  }
  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }
  handlePhoneNumChange(e) {
    this.setState({phoneNum: e.target.value});
  }
  handleBioChange(e) {
    this.setState({bio: e.target.value});
  }
  handleMobileApp(e) {
    this.setState({
      mobileApp: e.target.checked
    });
  }
  handleGraphics(e) {
    this.setState({
      graphics: e.target.checked
    });
  }
  handleStaticSite(e) {
    this.setState({
      staticSite: e.target.checked
    });
  }
  handleInteractiveSites(e) {
    this.setState({
      interactiveSites: e.target.checked
    });
  }
  handleFullStackBeast(e) {
    this.setState({
      fullStackBeast: e.target.checked
    });
  }
  handleSubmit(e) {
     e.preventDefault();
     var username = this.state.username.trim();
     var password = this.state.password.trim();
     var name = this.state.name.trim();
     var email = this.state.email.trim();
     console.log(this.state);
     // if(!username || !password || !name || !email) {
     //   return;
     // }

     //call to ajax
    var successCallback = () => {
      this.setState({
        username: '',
        password: '',
        name: '',
        email: '',
        phoneNum: '',
        bio: '',
        mobileApp: false,
        graphics: false,
        interactivesites: false,
        staticSite: false,
        fullStackBeast: false,
        result: 'You have successfully created an account. You wil be contacted soon if your skills match any our customer requirements!'
      });
      hashHistory.push('/');
    };
     signUpTechie(this.state, successCallback);
   }
  render() {
    return (
      <div>
        <form className="commentForm" onSubmit={this.handleSubmit}>
          Username:
            <input
              type="text"
              placeholder="Make a username"
              value={this.state.username}
              onChange={this.handleUsernameChange.bind(this)}
            /> <br/>
          Password:
            <input
             type="password"
             placeholder="Enter a password"
             value={this.state.password}
             onChange={this.handlePasswordChange.bind(this)}
            /> <br/>
          Name:
            <input
             type="text"
             placeholder="What's your name"
             value={this.state.name}
             onChange={this.handleNameChange.bind(this)}
            /> <br/>
          Email:
            <input
             type="text"
             placeholder="What's your email"
             value={this.state.email}
             onChange={this.handleEmailChange.bind(this)}
            /> <br/>
          Phone Number:
            <input
             type="text"
             placeholder="Enter a phone number"
             value={this.state.phoneNum}
             onChange={this.handlePhoneNumChange.bind(this)}
            /> <br/>
          Bio:
            <input
             type="text"
             placeholder="Tell us about yourself"
             value={this.state.bio}
             onChange={this.handleBioChange.bind(this)}
            /> <br/>
            <input type="checkbox" checked={this.state.mobileApp} onChange={this.handleMobileApp.bind(this)}
                   /> I can make a Mobile App<br/>
            <input type="checkbox" checked={this.state.graphics} onChange= {this.handleGraphics.bind(this)}
                   /> I am a Graphic Designer<br/>
            <input type="checkbox" checked={this.state.staticSite} onChange={this.handleStaticSite.bind(this)}
                   /> I can make a simple web page<br/>
            <input type="checkbox" checked={this.state.interactiveSites} onChange={this.handleInteractiveSites.bind(this)}
                   /> I can make a site with users! <br/>
            <input type="checkbox" checked={this.state.fullStackBeast} onChange={this.handleFullStackBeast.bind(this)}
                   /> I can make a fullstack application<br/>
            <input type="submit" value="Post" onClick={this.handleSubmit.bind(this)}/>
        </form>
        <div>
         <p> {this.state.result} </p>
        </div>
      </div>
    )
  }
}
window.SignUpTechie = SignUpTechie;
