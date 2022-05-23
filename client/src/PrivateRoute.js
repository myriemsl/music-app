import { useSelector } from 'react-redux'; 
import { Outlet } from 'react-router';
import Authentication from './Pages/Authentication';


function PrivateRoute() {
    const auth = useSelector ((state) => state.auth);
    return auth.isAuthenticated ? <Outlet/> : <Authentication/>   

  }

export default PrivateRoute;

