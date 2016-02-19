var IdQuestion = ({answered, onAnswer}) => (
  <h1>WHO ARE YOU ?</h1>
  <p>
    <HaveTech answered = {answered}/>
  </p>
  <p>
    <NeedTech answered = {answered} onAnswer={onAnswer}/>
  </p>
)
