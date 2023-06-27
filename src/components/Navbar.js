import React, {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation(); //info where on website I am in, which route in

    useEffect(() => {
        setExpandNavbar(false) //if the location changes will set the navbar to false
    }, [location]); // use this function whenever the location changes, will close the navbar

  return (
    <div className='navbar' id={expandNavbar ? "open" : "close"}>
        <div className='toggleButton'>
            <button 
            onClick={()=> {
                setExpandNavbar((prev) => !prev);
                }}
            > 
                <ReorderIcon /> 
                </button>
        </div>
        <div className='links'>
            <Link to='/'> Home </Link>
            <Link to='/projects'> Projects </Link>
            <Link to='/experience'> Experience </Link>
        </div>
    </div>
  )
}

export default Navbar