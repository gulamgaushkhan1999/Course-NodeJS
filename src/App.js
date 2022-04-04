import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Col, Row } from 'reactstrap';
// import Header from './component/Header';
import { ToastContainer, toast } from "react-toastify";
import Home from './component/Home';
import Allcourse from './component/Allcourse';
import AddCourse from './component/AddCourse';
import Header from './component/Header';
import Menus from './component/Menus';
import About from './component/About';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Contact from './component/Contact';


function App() {

  const btnHandle=()=>{
    toast.success("This is first notification",{ position: "top-center", autoClose: 3000,hideProgressBar:true });
  };

  return (
   /* 
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
   */
  /*
  <div className='App'>             
    <header className='App-header'>
       
    <Header name ="GulamGaush Khan" title="First Card"/>
    <h1>This is my first react js application</h1> 
    <p>Currently I am learning react js</p>
    <Header name="Ali Khan" title="Second Card" />

    </header>
  </div>
  */
 /*
  <div>
    <ToastContainer />
      <h1> hiiii </h1>
      <Button color="primary"size="lg" onClick={btnHandle}>First React Button</Button>
      <Button color="danger">First React Button</Button>
  </div>
  */
/*  
<div>
  <ToastContainer/>
    <Home />

    <Allcourse />
    <hr />
    <AddCourse />
</div>
*/
<div>
  <Router>
       <ToastContainer />
       <Header />
       <Row>
          <Col md={4}>
            <Menus />
          </Col>
          <Col md={8}>
        
            <Routes>
             <Route exact path="/" element={<Home />} />
             <Route exact path="/about-us" element={<About />}  />
             <Route exact path="/add-course" element={<AddCourse />}  />
             <Route exact path="/view-courses" element={<Allcourse />}  />
             <Route exact path="/contact-us" element={<Contact />}  />
           </Routes>
        
          </Col>
       </Row>
  </Router>
</div>
 
 );
}

export default App;
 