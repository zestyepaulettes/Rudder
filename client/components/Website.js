var Website = ({answered, onAnswer}) => (
  <div>
    <h1>What do you want your website to do? </h1>
    <div>
      <p>
        <span onClick={()=> onAnswer(/*TODO QUERY STRING*/)}>To sell things</span>
      </p>
    </div>
    <div>
     <p>
        <span onClick={()=> onAnswer(/*TODO QUERY STRING*/)}>Upgrade an existing website</span>
      </p>
    </div>
     <div >
      <p>
        <span onClick={function(){ onAnswer(/*TODO QUERY STRING*/)}}>Heavily customized website</span>
      </p>
    </div>
     <div >
      <p>
        <span onClick={function(){ onAnswer(/*TODO QUERY STRING*/)}}>To advertise your business</span>
      </p>
    </div>
     <div >
      <p>
        <span onClick={function(){ onAnswer(/*TODO QUERY STRING*/)}}>I do not know! I just want to be on the internet!</span>
      </p>
    </div>
  </div>
)
window.Website = Website;
