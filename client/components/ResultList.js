var ResultList = ({results}) => (
  <ul className="techie-list">
    {
      results.map( (techie) => (
        <li>{techie.name} - {techie.phoneNum} </li>
      ))}
  </ul>
);

window.ResultList = ResultList;
