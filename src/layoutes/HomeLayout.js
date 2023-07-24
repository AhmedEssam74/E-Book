import MainNavbar from '../components/MainNavbar';
import '../App.css';
import { Outlet } from 'react-router-dom';

function HomeLayout() {
  return (<>
    <MainNavbar />
    <Outlet />
  </>
  );
}

export default HomeLayout;
