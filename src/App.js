import './App.css';
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './layouts/Dashboard';
import NavigationBar from './layouts/NavigationBar';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router'
import HomePage from './pages/HomePage'


function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Route exact path='/' component={HomePage} />
      <Route exact path='/home' component={HomePage} />
      <Container className='main'>
        <Dashboard />
      </Container>
    </div>
  );
}

export default App;
