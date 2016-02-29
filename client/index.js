
var Router = window.ReactRouter.Router;
var Route = window.ReactRouter.Route;
var hashHistory = window.ReactRouter.hashHistory;
var IndexRoute = window.ReactRouter.IndexRoute;


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute path="/" component={Main}/>
      <Route path="/socialmedia" component={SocialMedia}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={SignUpTechie}/>
      <Route path="/contactus" component={ContactUs}/>
    </Route>
  </Router>, document.getElementById('app')
);
