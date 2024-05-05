// const person = {name: 'tuan', age: 30} ko the output object + boolean

import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NotFound from './NotFound';
import Edit from './Edit';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
              <Route exact path="/blogs/:id">
                <BlogDetails />
              </Route>
              <Route path="/blogs/:id/edit" >
                <Edit />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>   
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
