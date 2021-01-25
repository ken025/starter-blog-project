import Home from './Home'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from './Create';
import BlogDetails from './BlogsDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
      <Switch>
        <Route exact path='/'> <Home/> </Route>
        <Route path='/create'> <Create/> </Route>
        <Route path='/blogs/:id'> <BlogDetails/> </Route>
        <Route path="*"><NotFound /></Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;


// run our db = npx json-server --watch data/db.json --port 8000