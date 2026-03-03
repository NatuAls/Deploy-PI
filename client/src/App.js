import { Route } from 'react-router-dom';
import Landing from './components/Landing/Landing'
import Home from './components/Home/Home'
import DogDetail from './components/DogDetail/DogDetail';
import BreedForm from './components/BreedForm/BreedForm';
import axios from 'axios';

const RENDER_API_URL = 'https://deploy-pi-q96y.onrender.com';
const envApiUrl = process.env.REACT_APP_API_URL;

axios.defaults.baseURL =
  process.env.NODE_ENV === 'production'
    ? RENDER_API_URL
    : (envApiUrl || RENDER_API_URL);

function App() {
  return (
    <>
      <Route exact path='/' component={Landing}/>
      <Route path='/home' render={() => <Home/>}/>
      <Route path='/create/breed' render={() => <BreedForm/>}/>
      <Route path='/dog/:id' render={() => <DogDetail/>}/>
    </>
  );
}

export default App;
