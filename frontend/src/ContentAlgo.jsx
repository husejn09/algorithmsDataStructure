import PropTypes from 'prop-types';
import algoImage from './assets/algoLogo.png'
import LearnButton from './LearnButton';
import notationLogo from './assets/notationLogo.png'

function ContentAlgo(props){
    return(
        <>
        <div className="flex mt-10 place-content-center">
            <img alt="algoLogo" src={algoImage} className="w-36 h-36 ml-3"></img>
            <div className="flex flex-col pl-3 pr-4">
                <h1 className="text-white text-3xl">{props.title}</h1>
                <p className="text-white text-sm mt-3" >{props.paragraph}</p>
            </div>
            
        </div>
        <LearnButton />
        <img alt="Notation logo" src={notationLogo} className="w-80 mx-auto -mt-6 -mb-10 opacity-50"></img>
        </>
    );
}
//proptypes

export default ContentAlgo