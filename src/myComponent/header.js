import React from 'react'
import {Link} from 'react-router-dom';
import './header.css'
export default function header() {
    return (
        <div className="header" >
             <> 
        <Link className="link" to="/userRegistration">User Registration</Link>
        <Link to="/posts">Posts</Link>
        
        </>
        </div>
    )
}
