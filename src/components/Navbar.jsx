
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Navbar() {
    return (
        <nav className='text-white'>
            <ul>
                <li>
                    <a href="/">Car Renovation</a>
                </li>
                <li>
                    <a href="/document">Document</a>
                </li>
                <li>
                    <a href="/client">Client</a>
                </li>
            </ul>
        </nav>
    );
} 
export default Navbar;