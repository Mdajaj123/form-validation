
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Page/Home';
import Register from './Components/Register';
import Login from './Components/Login';
// import ImageSlide from './Components/ImageSlide';
// import FormValidation from './Components/FormValidation';
function App() {
  return (
    <div>
      {/* <ImageSlide /> */}
      {/* <FormValidation /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
 
      
    </div>
  );
}

export default App;
