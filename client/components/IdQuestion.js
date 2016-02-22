var IdQuestion = ({answered, onAnswer}) => (
  <div class="main">
   <h1>Who are you?</h1>
    <p>
      <HaveTech answered = {answered}/>
    </p>
    <p>
      <NeedTech answered = {answered} onAnswer={onAnswer}/>
    </p>
  </div>
)

window.IdQuestion = IdQuestion;
