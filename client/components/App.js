var Link = window.ReactRouter.Link;
var hashHistory = window.ReactRouter.hashHistory;
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      allQuestions: ALL_QUESTIONS,
      results: [],
      currentQuestion: {}
    };
  }

  resetState(){
    this.setState({
      results: [],
      currentQuestion: this.state.allQuestions.whyAreYouHere
    });
  }

  changeQuestion(newQuestion){
    this.setState({
      currentQuestion: this.state.allQuestions[newQuestion]
    });
  }

  loadTechies(techieType){
    var updateState = (results)=>{
      this.setState({
        results: results
      });
    };
    getTechiesByType(techieType, updateState);
  }

  componentWillMount(){
    this.setState({
      currentQuestion: this.state.allQuestions.whyAreYouHere
    });
  }

  render() {
    return(
    <div>
      <nav>
        <ul>
          <li><Link to="/" onClick={this.resetState.bind(this)}>Home</Link></li>
          <li><Link to="/login">Signup/Login</Link></li>
          <li><Link to="/socialmedia">Social media</Link></li>
          <li><Link to="/">Contact us</Link></li>
        </ul>
      </nav>
    <main>
      <div>
        <QuestionList question={this.state.currentQuestion} changeQuestion={this.changeQuestion.bind(this)} loadTechies={this.loadTechies.bind(this)}/>
      </div>
      <div>
        <ResultList results={this.state.results}/>
      </div>
    </main>
    </div>
    )
  }
}
// ReactDOM.render(<App/>, document.getElementById('app'));
window.App = App;