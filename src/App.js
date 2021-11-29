import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Banner from './Pages/Home/Banner/Banner'
import About from './Pages/Home/Banner/About/About';
import AllProjects from './Pages/Home/Banner/AllProjects/AllProjects';
import Skills from './Pages/Home/Banner/Skills/Skills';
import Error from './Pages/Error/Error';
import Details from './Pages/Home/Banner/Details/Details';
import ContactMe from './Pages/Home/Banner/ContactMe/ContactMe';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Banner />
          </Route>
          <Route path="/home">
            <Banner />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <AllProjects />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/contactme">
            <ContactMe />
          </Route>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
