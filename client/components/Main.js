
class Main extends React.Component{
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

  render(){
    return (
    <div>
          <p>Online presence is a necessity for businesses today but, for many, understanding their technology needs is a mysterious and often confusing path. With many web development companies pushing unnecessary and often unsuitable products, it can be hard to work out what really would be most beneficial for your particular case. <br/><br/>Cushion makes finding the right technology service provider simple, based off your specific needs as a business owner, we can put you in touch with a list of Cushion approved freelancers who can help you get the right tech for your business.</p>

      <QuestionList question={this.state.currentQuestion} changeQuestion={this.changeQuestion.bind(this)} loadTechies={this.loadTechies.bind(this)}/>
      <ResultList results={this.state.results}/>
    </div>)
  }
}
window.Main = Main;