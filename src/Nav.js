import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom'
import './Nav.css'
import SignUp from './pages/SignUp';
import Home from './pages/Home'

const nav = () => {

    
    return (
        <Router>
        <div id='nav-bar'>
            <div id = 'nav-left'>
                <Link to="/">Flashcards</Link>
            </div>
            <div id = 'nav-right'>
                <Link to="/sign-up">Sign Up</Link>
                <Link to="/sign-in">Sign In</Link>
            </div>
        </div>
        <Routes>
            <Route path="/sign-up" exact element={<SignUp />} />
            <Route path="/" exact element={<Home />} />
        </Routes>
        </Router>
    );
};

export default nav;