import React, { useEffect, useState } from 'react';
import Header from './Header.jsx'
import ContentAlgo from './ContentAlgo.jsx';
import ContentDs from './ContentDs.jsx';
import TheoryAlgorithm from './TheoryAlgorithm.jsx';
import Algorithms from './Algorithms.jsx';

function App () {
const algoAbout = "An algorithm is a step-by-step procedure or set of instructions designed to solve a specific problem or perform a particular task.";
const dsAbout = "A data structure is a specific way of organizing, managing, and storing data in a computer so that it can be used efficiently."
    return (
        <>
            <Header />
            { /* <ContentAlgo paragraph={algoAbout} title="Algorithms"/>
            <ContentDs paragraph={dsAbout} title="Data Structures"/> */}

            <Algorithms/>
        </>
    );
};

export default App;
