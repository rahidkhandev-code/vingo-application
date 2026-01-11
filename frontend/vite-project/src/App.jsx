import {Routes,Route} from 'react-router-dom';
import SignUp from './pages/signup.jsx';
import SignIn from './pages/signin.jsx';
import Home from './pages/home.jsx';


function App() {
  return (
    <div>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
     </Routes>
    </div>
  )
}

export default App;



