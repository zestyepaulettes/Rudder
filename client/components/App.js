class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      allQuestions: ALL_QUESTIONS,
      results: [],
      currentQuestion: {}
    };
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
  componentDidMount(){
    var updateState = (results) => {
      this.setState({
        results: results
      });
    };
    getTechies(updateState);
  }

  render() {
    return(
    <div>
      <div>
        <QuestionList question={this.state.currentQuestion} changeQuestion={this.changeQuestion.bind(this)} loadTechies={this.loadTechies.bind(this)}/>
      </div>
      <div>
        <ResultList results={this.state.results}/>
      </div>
    </div>
    )
  }
}
// ReactDOM.render(<App/>, document.getElementById('app'));
window.App = App;