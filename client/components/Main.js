/* This file has the 'Main' react class that has 3 state properties:
  - allQuestions that has list of questions from the ALL_QUESTIONS object in util.js file.
  - An array of results that will display all the matching techies
  -A current question object that has the current question and list of options displayed */
class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      allQuestions: ALL_QUESTIONS,
      results: [],
      currentQuestion: {}
    };
  }

//This function is used to reset the current question and options depending on what the user chooses
  changeQuestion(newQuestion){
    this.setState({
      currentQuestion: this.state.allQuestions[newQuestion]
    });
  }
//This function is used as a callback in getTechiesByType function.
//This function updates the list of matching techies displayed
  loadTechies(techieType){
    var updateState = (results)=>{
      this.setState({
        results: results
      });
    };
    getTechiesByType(techieType, updateState); /* This is the function defined in the ajaxRequests.js file, it is used to get list of matching techies from database */
  }
//This function will set the 'whyAreYouHere' question as the current Question when the page loads.
  componentWillMount(){
    this.setState({
      currentQuestion: this.state.allQuestions.whyAreYouHere
    });
  }

  render(){
    return (
    <div>
      <div className="jumbotron">
      <p>Online presence is a necessity for businesses today but, for many, understanding their technology needs is a mysterious and often confusing path. With many web development companies pushing unnecessary and often unsuitable products, it can be hard to work out what really would be most beneficial for your particular case. <br/><br/>Cushion makes finding the right technology service provider simple, based off your specific needs as a business owner, we can put you in touch with a list of Cushion approved freelancers who can help you get the right tech for your business.</p>
      </div>
      <QuestionList question={this.state.currentQuestion} changeQuestion={this.changeQuestion.bind(this)} loadTechies={this.loadTechies.bind(this)}/>
      <ResultList results={this.state.results}/>
    </div>)
  }
}
window.Main = Main;