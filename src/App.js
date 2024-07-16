import {Switch,Route} from 'react-router-dom'
import SignupPage from './components/SignupPage/Signup'
import ProtectedRoutes from './components/ProtectedRoutes';
import SignInPage from './components/SignInPage/SignIn';
import DashBoard from './components/DashBoard/DashBoard';
import './App.css';

function App() {
  return (
    <div className='main-container'>
      <Switch>
        <Route exact path='/user_registeration' component={SignupPage}/>
        <Route exact path='/userlogin' component={SignInPage}/>
        <ProtectedRoutes exact path='/' component={DashBoard}/>
      </Switch>
    </div>
  );
}

export default App;
