import { Link } from "react-router-dom";
import { Route, Switch } from "react-router";
import Form from "./form";

function App() {
  return (
    <div>
      <h1>Hello from App</h1>
      <Link to="/form">Form</Link>

      <Switch>
        <Route path='/form' component={Form}/>
      </Switch>
    </div>

  );
}

export default App;
