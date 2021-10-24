import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from './pages/Auth/Auth';
import { useSelector } from "react-redux"
import { selectUser } from "./Redux/Slices/userSlice"
import Admin from './pages/Admin/Admin';

function App() {
    
  const user = useSelector(selectUser);
  
  return (
    <>
      {user ? <Admin/> : <Auth/>}
      
    </>
  );
}

export default App;
