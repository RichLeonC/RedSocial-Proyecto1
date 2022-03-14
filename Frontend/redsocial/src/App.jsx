import React from 'react';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export function App() {
    return(
        <Router>
            <Sidebar />
        </Router>
    );
}