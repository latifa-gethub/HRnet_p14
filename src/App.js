 
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import CreateEployee from './components/createEmployee/CreateEployee';
import EmployeeList from './components/employee-list/EmployeeList' 
import NavBar from './components/createEmployee/NavBar';
import Footer from './components/footer/Footer';
function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<CreateEployee/>}/>
      <Route path='/employee' element={<EmployeeList/>} />
    </Routes>
    <Footer/> 
    </BrowserRouter>
     
  );
}

export default App;
