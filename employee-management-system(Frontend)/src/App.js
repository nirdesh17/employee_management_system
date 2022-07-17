import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeList from './Components/EmployeeList';
import Footer from './Components/Footer';
import Header from './Components/Header';
import AddEmployee from './Components/AddEmployee';


function App() {
  return (
    <div >
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route exact path='/' element={<EmployeeList />}></Route>
            <Route path='/employees' element={<EmployeeList />}></Route>
            <Route path='/add-employees' element={<AddEmployee />}></Route>
            <Route path='/edit-employees/:id' element={<AddEmployee />}></Route>
          </Routes>
          {/* <EmployeeList/> */}
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
