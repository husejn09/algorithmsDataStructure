import PropTypes from 'prop-types';
import dSImage from './assets/dsLogo.png'
import LearnButton from './LearnButton';
import notationLogo from './assets/notationLogo.png'
import { useEffect } from 'react';

function ContentDs(){
    const dsAbout = "A data structure is a specific way of organizing, managing, and storing data in a computer so that it can be used efficiently.";
    const title = "Data Structures";
   
   
    return(
        <>
        <div className="flex mt-12 place-content-center w-96 mx-auto">
            <img alt="algoLogo" src={dSImage} className="w-40 h-40 ml-3"></img>
            <div className="flex flex-col p-4">
                <h1 className="text-white text-2xl">{title}</h1>
                <p className="text-white text-sm mt-3">{dsAbout}</p>
                
            </div>
        </div>
        <LearnButton targetView="dataStructure"/>
        <img alt="Notation logo" src={notationLogo} className="w-80 mx-auto -mb-10 opacity-50"></img>
        </>
    );
}

export default ContentDs