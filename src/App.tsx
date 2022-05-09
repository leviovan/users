
import { Provider } from 'react-redux';
import './App.scss';
import UserList from './components/usersList/UserList';
import {store} from './store/store'
import SortedSide from './components/SortedSide/SortedSide';
import Profile from './components/Profile/Profile';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <SortedSide/>
          <div className="rightSideContainer" >
            <Routes>
              <Route  path='' element={<UserList/>}/>
              <Route  path=':id' element={<Profile/>}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
