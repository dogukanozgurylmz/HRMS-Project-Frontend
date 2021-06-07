import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Dashboard from './layouts/Dashboard';
import NavigationBar from './layouts/NavigationBar';
import { Container } from 'semantic-ui-react';


function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Container className='main'>
        <Dashboard />
      </Container>
    </div>
  );
}

export default App;
