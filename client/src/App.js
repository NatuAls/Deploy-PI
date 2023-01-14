import { Route } from 'react-router-dom';
import Landing from './components/Landing/Landing'
import Home from './components/Home/Home'
import DogDetail from './components/DogDetail/DogDetail';
import BreedForm from './components/BreedForm/BreedForm';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001';

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
