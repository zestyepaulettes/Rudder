var ResultList = ({results}) => (
  <ul className="techie-list">
    {
      results.map( (techie) => (
        <ResultListEntry techie={techie}/>
      ))}
  </ul>
);

window.ResultList = ResultList;
