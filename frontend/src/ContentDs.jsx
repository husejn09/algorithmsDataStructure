import PropTypes from 'prop-types';
import dSImage from './assets/dsLogo.png'
import LearnButton from './LearnButton';

function ContentDs(props){
    return(
        <>
        <div className="flex flex-row-reverse mt-12 place-content-center">
            <img alt="algoLogo" src={dSImage} className="w-36 h-36 mr-4"></img>
            <div className="flex flex-col p-4">
                <h1 className="text-white text-end text-3xl">{props.title}</h1>
                <p className="text-white text-sm mt-4">{props.paragraph}</p>
                
            </div>
        </div>
        <LearnButton />
        </>
    );
}

export default ContentDs