
import algoImage from './assets/algoLogo.png'
import LearnButton from './LearnButton';


function ContentAlgo(){
    const algoAbout = "An algorithm is a step-by-step procedure or set of instructions designed to solve a specific problem or perform a particular task.";
    const title = "Algorithms";

    return(
        <>
        <div className="flex flex-row-reverse mt-10 place-content-center mx-auto place-items-center w-fit xxl:mt-0">
            <img alt="algoLogo" src={algoImage} className="w-40 h-40 ml-3 sm:ml-8 sm:w-48 sm:h-48 lg:w-60 lg:h-60 lg:ml-20 xxl:w-[240px] xxl:h-[240px]"></img>
            <div className="flex flex-col p-4 xxl:w-[650px]">
                <h1 className="text-white text-end text-2xl sm:text-3xl lg:text-4xl xxl:-mr-16">{title}</h1>
                <p className="text-white text-end text-sm mt-3 lg:text-lg lg:pt-2 xxl:-mr-16">{algoAbout}</p>
                <LearnButton targetView="algorithms"/>
            </div>
            
        </div>
        
        <div className='mb-20'></div>
        </>
    );
}
//proptypes

export default ContentAlgo