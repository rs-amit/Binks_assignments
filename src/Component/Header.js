import React from 'react';
import "./Header.css";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useDispatch, useSelector } from 'react-redux';
import {LogoutUser} from "../redux/Action/AuthAction"

function Header() {

    const auth = useSelector(state => state.auth)
    const { EcommUser } = auth;
    const dispatch = useDispatch();

    const LogoutHandler=()=>{
        if(EcommUser){
            localStorage.removeItem('EcommUser')
            dispatch(LogoutUser())
        }    
    }

  return (
    <div className='header'>
        <div className='header-wrap'>
            <div className='header-left'>
                <h2 className='header-logo'>
                    <span className='B-logo logo'>B</span>
                    <span className='R-logo logo'>inks</span>
                </h2>
            </div>
            <div className='header-right'>
                <p className='header-right-icons' onClick={LogoutHandler}><ExitToAppIcon/> 
                <span className='header-right-popup'>LOGOUT</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Header


{/* <img src="https://getbinks.com/static/media/Logo-Blue-min-p-500.c79ac609.png" alt='' className='logo'/> */}