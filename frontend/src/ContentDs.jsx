
import dSImage from './assets/dSLogo.png'
import LearnButton from './LearnButton';
import notationLogo from './assets/notationLogo.png'


function ContentDs(){
    const dsAbout = "A data structure is a specific way of organizing, managing, and storing data in a computer so that it can be used efficiently.";
    const title = "Data Structures";
   
   
    return(
        <>
        <div className="flex mt-12 place-content-center mx-auto place-items-center w-fit">
            <img alt="algoLogo" src={dSImage} className="w-40 h-40 ml-3 sm:ml-8 sm:w-48 sm:h-48 lg:w-60 lg:h-60 lg:ml-20 xxl:w-[220px] xxl:h-[250px]"></img>
            <div className="flex flex-col p-4 xxl:w-[650px]">
                <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl ">{title}</h1>
                <p className="text-white text-sm mt-3 lg:text-lg lg:pt-2">{dsAbout}</p>
                <LearnButton targetView="dataStructure"/>
            </div>
        </div>
        
        <img alt="Notation logo" src={notationLogo} className="w-80 mx-auto -mb-10 opacity-50 sm:w-96 xxl:w-[400px] xxl:h-[250px]"></img>
        </>
    );
}

export default ContentDs