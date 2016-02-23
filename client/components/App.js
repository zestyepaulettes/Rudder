class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      allQuestions: ALL_QUESTIONS,
      results: [],
      currentQuestion: {}
    };
  }
  onAnswer(query) {
    var ajaxCallback = (returnData) => {
      this.setState({
      results: returnData
      });
    };
    searchTechies({}, ajaxCallback);
  }

  changeQuestion(newQuestion){
    this.setState({
      currentQuestion: this.state.allQuestions[newQuestion]
    });
  }

  componentWillMount(){
    this.setState({
      currentQuestion: this.state.allQuestions.whyAreYouHere
    });
  }
  componentDidMount(){
    var updateState = (results) => {
      console.log(results);
      this.setState({
        results: results
      });
    }
    getTechies(updateState);
  }

  render() {
    return(
    <div>
      <div>
        <QuestionList question={this.state.currentQuestion} changeQuestion={this.changeQuestion.bind(this)}/>
      </div>
      <div>
        <ResultList results={this.state.results}/>
      </div>
    </div>
    )
  }
}
ReactDOM.render(<App/>, document.getElementById('app'));
