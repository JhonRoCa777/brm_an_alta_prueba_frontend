import { BrowserRouter } from 'react-router-dom';
import './App.css';

import { Container } from 'react-bootstrap';
import { AppRouter } from './router';

function App() {

  return (
    <BrowserRouter>

      <Container fluid style={{marginTop: '10px'}}>
        <AppRouter/>
      </Container>
      
    </BrowserRouter>
  )
}

export default App