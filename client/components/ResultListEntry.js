var ResultListEntry = ({techie}) => (
  <li>Name: <b>{techie.name}</b> <br/> Tel: {techie.phoneNum} <br/> <b><i>{techie.bio}</i></b> </li>
);

window.ResultListEntry = ResultListEntry;
