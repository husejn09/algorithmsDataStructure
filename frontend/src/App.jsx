import React, {useState } from 'react';
import Header from './Header.jsx'
import ContentAlgo from './ContentAlgo.jsx';
import ContentDs from './ContentDs.jsx';
import Algorithms from './components/AlgorithmComponents/Algorithms.jsx';
import DataStructures from './components/DataStructureComponents/DataStructures.jsx';

import { useView } from './ViewContext.jsx';

function App () {

    const {view} = useView();
    console.log("Current view:", view);
    
    return (
        <>
            <Header />
            {view === "main" && (
                <>
                    <ContentDs />
                    <ContentAlgo />
                </>
            )}

            
            {view === "algorithms" && <Algorithms key="algo" />}
            {view === "dataStructure" && <DataStructures key="ds"/>}    
        </>
    );
};

export default App;
