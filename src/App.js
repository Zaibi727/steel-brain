import React from 'react';
import './App.css';
import Nav from './Nav.js';
import Contact from './Contact.js';
import Team from './Team.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="App">
          <Nav />
          <Switch>
          <Route path="/" exact component={Home}/>
            <Route path="/team" component={Team}/>
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
    </Router>
    
  );
}

const Home = () => (
  <div className="Home"> 
      <div className="home-top-div">
         <div className="center-content">
           <p className="p1">Let's build a future</p>
           <p className="p2">An exceptionally professional team that radicalizes the digital world.</p>
         </div>  
        </div>
        <div className="home-middle">
          <p>We are a team of digital innovators believing in excellence, reliability and scalability.</p>
       </div>
      <div className="home-bottom">
        <p>
        <strong>steelbrain</strong> is a movement for innovation, excellent experiences, flawless security, and software experiences you can connect to on a personal level. We aim for perfection in every design, every bit of engineering, and strategy to bring creative ideas to life for our vision of a progressive future.
        </p>
      </div>
  </div>
);
export default App;
