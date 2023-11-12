import './css/App.css';
import './css/default.css';
import './css/problempage.css';
import './css/Community.css';
import { Container } from 'react-bootstrap'
import HeaderPage from './components/HeaderPage';
import RouterPage from './components/RouterPage';
import FooterPage from './components/FooterPage';
import { BoxContext } from './components/BoxContext';
import { useState } from 'react';
import BoxModal from './components/BoxModal';

function App() {
    const [box, setBox] = useState({
        show: false,
        message: '',
        action: null
    });

    return (
        <BoxContext.Provider value={{ box, setBox }}>
            <Container>
                <HeaderPage />
                <RouterPage />
                <FooterPage />
                {box.show && <BoxModal />}
            </Container>
        </BoxContext.Provider>
    );
}

export default App;
