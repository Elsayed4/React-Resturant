import './App.scss';
import Header from './Component/Header/Header.jsx'
import About from './Component/About/About.jsx';
import TopRated from './Component/TopRated/TopRated.jsx';
import Secvideo from './Component/Secvideo/Secvideo.jsx';
import Features from './Component/Features/Features.jsx';
import SHEFS from './Component/Shefs/Shefs.jsx';
import Blog from './Component/Blog/Blog.jsx';
import Contact from './Component/Contact/Contact.jsx';
import Footer from './Component/Footer/Footer.jsx';
function App() {
  return (
    <>
   <Header />
   <About />
   <TopRated />
   <Secvideo />
   <Features />
   <SHEFS />
   <Blog />
   <Contact />
   <Footer />
    </>
  );
}

export default App;
