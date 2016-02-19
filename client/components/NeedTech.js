var NeedTech = ({answered, onAnswer}) => (
  <h1>What do you need?</h1>
  <p>
    <Website answered = {answered} onAnswer={onAnswer}/>
  </p>
  <p>
    <SocialMedia answered = {answered}/>
  </p>
)
