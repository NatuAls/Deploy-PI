import { Route } from 'react-router-dom';
import Landing from './components/Landing/Landing'
import Home from './components/Home/Home'
import DogDetail from './components/DogDetail/DogDetail';
import BreedForm from './components/BreedForm/BreedForm';
import axios from 'axios';
axios.defaults.baseURL = 'https://deploy-pi-production-0e2c.up.railway.app/';

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
