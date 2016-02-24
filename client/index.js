
var Router = window.ReactRouter.Router;
var Route = window.ReactRouter.Route;
var hashHistory = window.ReactRouter.hashHistory;
var IndexRoute = window.ReactRouter.IndexRoute;

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/login" component={Login}/>
    <Route path="/signup" component={SignUpTechie}/>

  </Router>, document.getElementById('app')
);