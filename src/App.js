
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import Addleads from './Components/Addleads/Addleads';
import AllLeads from './Components/AllLeads/AllLeads';
import Update from './Components/Update/Update';

function App() {
  var auth = JSON.parse(localStorage.getItem('user'))
  // console.log(auth);

  return (
    <div className="App">
      <BrowserRouter>
            <Routes>  
            { auth ?  
                <>                 
                  <Route path='/dashboard' element={<Dashboard/>}/>
                  <Route path='/addleads' element={<Addleads/>}/>
                  <Route path='/allLeads' element={<AllLeads/>}/>
                  <Route path='/update/:id' element={<Update/>}/>
                </>
                 :  
                <>
                  <Route path='/' element={<Login/>}/>
                  <Route exact element={<Login/>}/>
                  <Route path='/login' element={<Login/>}/>
                  <Route path='*' element={<Login/>}/>
                 </>
            }            
                <Route path='/' element={<Login/>}/>
                <Route exact element={<Login/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
