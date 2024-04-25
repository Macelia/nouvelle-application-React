import { Link, Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements, useLoaderData } from 'react-router-dom';
import './App.css';
import Acceuil from './componenets/Acceuil'
import UserProfile, { photosLoader } from './componenets/UserProfile'
// import Contact from './componenets/UserProfile'
import Login from './componenets/Login';
import Singup from './componenets/Singup';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
   <Route path='/' element={<Root/>}>

   <Route  index  element={<Acceuil/>}/>
   <Route path='/userprofile' element={<UserProfile/>} loader={photosLoader}/>
   <Route path='/login' element={<Login/>}/>
   <Route path='/singup' element={<Singup/>}/>

   </Route>
  ));
  return (
    <div className="App">
      
     
     <RouterProvider router={router}/>
   
    </div>
  );
}

export default App;


const Root =()=>{
  return <>
  <div className='BlurBackground'>

    <div className='Space-first'> 
<span>Algren:</span> What does it say?<br></br>
<span>Katsumoto:</span> "I belong to the warrior in whom the old ways have joined the new." </div>

  <div className='Link'>
    <div className='Logo'>Last<span>SAMURAI</span></div>
    <Link to='/'>Acceuil</Link>
    <Link to='/userprofile'>User-Profile</Link>
    {/* <Link to='/contact'>Contact</Link> */}
    <Link to='login'>Log-In</Link>
    <Link to='singup'>Sing-Up</Link>

  </div>
  
  <div className="Content">
        <Outlet></Outlet>
      </div>
    </div>
  </>
}
