import { Link, Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements, useLoaderData } from 'react-router-dom';
import './App.css';
import Acceuil from './componenets/Acceuil'
import UserProfile, { photosLoader } from './componenets/UserProfile'
import Contact from './componenets/UserProfile'


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
   <Route path='/' element={<Root/>}>

   <Route  index  element={<Acceuil/>}/>
   <Route path='/userprofile' element={<UserProfile/>} loader={photosLoader}/>
   <Route path='/contact' element={<Contact/>}/>

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
  <div className='Link'>
    <Link to='/'>Acceuil</Link>
    <Link to='/userprofile'>User-Profile</Link>
    <Link to='/contact'>Contact</Link>

  </div>
  
  <div className="Content">
        <Outlet></Outlet>
      </div>
    </div>
  </>
}
