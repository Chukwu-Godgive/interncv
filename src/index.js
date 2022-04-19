import React from 'react';
import ReactDOM from 'react-dom';
import '../src/components/Styles.css';
import Navbar from '../src/components/Navbar/Navbar';
import Biodata from '../src/components/Biodata/Biodata';
import Education from '../src/components/Education/Education';
import Experience from '../src/components/Experience/Experience';



ReactDOM.render(
    <React.StrictMode>
        <Navbar />
        <Biodata />
        <Education />
        <Experience />
    </React.StrictMode>,
    document.getElementById('root')
);