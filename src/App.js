
import './App.scss';
import Header from './components/Header/header';
import { Link } from "react-router-dom";




const App = () => {
  
  return (
    <div className="App-container">
     <Header />
     <div>
        <button className=''>
          <Link to="/users">go to user page</Link>
        </button>
        <button className=''>
          <Link to="/admins">go to admin page</Link>
        </button>
     </div>
    </div>
    
  );
}
export default App;
