import logo from './logo.svg';
import './App.css';
import {BrowserRouter as BR,Link,Route, Routes,} from "react-router-dom"
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutUs from "./components/AboutUs";
import Blogs from './components/Blogs';
import Blog from './components/Blog';
import Courses from './components/Courses';
import Footer from './components/Footer';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <>
    <NavBar />
    
    <Routes>
    

    <Route path="/" element={<Home />} />
    <Route path="about" element={<AboutUs />} />
    <Route path="courses" element={<Courses />} />
    <Route path="blogs" element={<Blogs />} />
    <Route path="blog" element={<Blog />} />
    </Routes>
     
    <Footer/>
    </>
  );
}

export default App;
