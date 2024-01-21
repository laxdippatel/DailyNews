import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import "./App.css";
import {BrowserRouter,
        Switch,
        Route}
        from "react-router-dom"

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Switch>
        <Route exact path="/"><News key="general" category="general"/></Route>
        <Route exact path="/business"><News key="business" category="business"/></Route>  
        <Route exact path="/sports"><News key="sportsl" category="sports"/></Route>
        <Route exact path="/technology"><News key="technology" category="technology"/></Route>
        <Route exact path="/science"><News key="science" category="science"/></Route>
        <Route exact path="/health"><News key="health" category="health"/></Route>
        <Route exact path="/entertainment"><News key="entertainment" category="entertainment"/></Route>
      </Switch>
    </BrowserRouter>
    </>
  )
}

export default App;