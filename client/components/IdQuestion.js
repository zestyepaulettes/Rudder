var IdQuestion = ({answered, onAnswer}) => (
  <div>
  // <h1>WHO ARE YOU ?</h1>
    <p>
      <HaveTech answered = {answered}/>
    </p>
    <p>
      <NeedTech answered = {answered} onAnswer={onAnswer}/>
    </p>
  </div>
)

window.IdQuestion = IdQuestion;
