import './css/App.css';
import './css/default.css';
import './css/testpage.css';
import { Container } from 'react-bootstrap'
import HeaderPage from './components/HeaderPage';
import RouterPage from './components/RouterPage';
import FooterPage from './components/FooterPage';

function App() {
    return (
        <Container>
            <HeaderPage />
            <RouterPage />
            <FooterPage />
        </Container>
    );
}

export default App;
