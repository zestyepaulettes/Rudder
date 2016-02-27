var Link = window.ReactRouter.Link;
var hashHistory = window.ReactRouter.hashHistory;

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Signup/Login</Link></li>
            <li><Link to="/socialmedia">Social media</Link></li>
            <li><Link to="/">Contact us</Link></li>
          </ul>
        </nav>
      <main>
        {this.props.children}
      </main>
      </div>
    )
  }
} 
window.App = App;