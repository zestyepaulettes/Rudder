var ALL_QUESTIONS = {
  whyAreYouHere:{
    question: 'Why are you here',
    options: {
      iHaveTech: 'I have tech', 
      iNeedTech: 'I need tech'
      }
  },
  iNeedTech:{
    question: 'What do you need?',
    options: ['A website', 'Social media']
  },
  website:{
    question: 'What do you want your website to do?',
     options: ['To sell things', 
              'Ugrade an existing website', 
              'To advertise my business', 
              'I don\'t know! I just want to be on the internet!', 
              'Heavily customized website']
  }
}; 

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
        <Question question={this.state.currentQuestion}/>
      </div>
      <div>
        <ResultList results={this.state.results}/>
      </div>
    </div>
    )
  }
}
ReactDOM.render(<App/>, document.getElementById('app'));
