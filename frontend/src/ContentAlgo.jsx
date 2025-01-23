import PropTypes from 'prop-types';
import algoImage from './assets/algoLogo.png'
import LearnButton from './LearnButton';
import { useEffect } from 'react';

function ContentAlgo(){
    const algoAbout = "An algorithm is a step-by-step procedure or set of instructions designed to solve a specific problem or perform a particular task.";
    const title = "Algorithms";

    return(
        <>
        <div className="flex flex-row-reverse mt-14 place-content-center w-96 mx-auto">
            <img alt="algoLogo" src={algoImage} className="w-40 h-40 mr-4"></img>
            <div className="flex flex-col pl-3 pr-4">
                <h1 className="text-white text-end text-2xl">{title}</h1>
                <p className="text-white text-sm mt-4" >{algoAbout}</p>
            </div>
            
        </div>
        <LearnButton targetView="algorithms"/>
        </>
    );
}
//proptypes

export default ContentAlgo