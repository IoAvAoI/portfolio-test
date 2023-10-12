// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header'; // Update the import path to match your project structure
import About from './components/About'; // Update the import path
import Projects from './components/Projects'; // Update the import path
import Contact from './components/Contact'; // Update the import path

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/" component={About} /> {/* Set a default route */}
      </Switch>
    </Router>
  );
}

export default App;
