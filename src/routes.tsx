import Footer from 'Components/Footer/footer';
import styles from './Index.module.scss';
import Header from 'Components/Header/header';
import Contact from 'Pages/Contact/contact';
import Home from 'Pages/Home/home';
import Projects from 'Pages/Projects/projects';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from 'Components/ScrollToTop/scroll';

export default function AppRouter() {
    return (
        <main className={styles.container}>
            <Router basename={process.env.PUBLIC_URL}>
                <ScrollToTop />
                <Header />
                <Routes>
                    <Route index path='/' element={<Home />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/projects' element={<Projects />} />
                </Routes>
                <Footer />
            </Router>
        </main>
    );
}