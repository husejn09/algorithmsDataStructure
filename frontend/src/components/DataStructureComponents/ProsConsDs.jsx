import prosConsImage from '../../assets/prosConsImage.png'
import React, {useState} from 'react';
import CodeSnippetDs from './CodeSnippetDs';

function ProsConsDs(props){

    const [more, setMore] = useState(false);

    const toggleMore = () => {
        setMore(!more);
    }




    return (
        <>
            <h1 className="text-white text-center mb-4 sm:text-3xl xs:text-2xl ">{props.heading}</h1>

            <div className="text-sm sm:text-base">
                <p className="text-white mx-auto mb-8 text-justify xs:px-6 xm:px-10 sm:w-[600px] md:w-[650px] xl:w-[750px] ">{props.text}</p>
                <CodeSnippetDs code={props.code}/>
                {props.additionalInfo && (
                    <>
                    <div className="flex place-content-center">
                        <button className="navColorDrop rounded-xl text-white p-4 mb-8 mt-10" onClick={toggleMore}>Additional info</button>
                        </div>
                        {more && (
                            <>

                                  <p className="text-white mx-auto xs:px-6 xm:px-10 pb-6 text-justify sm:w-[600px] md:w-[650px] xl:w-[750px]">{props.additionalInfo}</p>
                            </>
                        )}
                    </>
                )}
                

                <div className="flex items-center text-sm place-content-center my-20 gap-8 md:text-base md:gap-x-14">
                    <p className="text-white text-center w-32 md:w-36 md:mt-6">{props.pros}</p>
    
                    <img 
                                 alt="Pros and Cons image" 
                                 src={prosConsImage} 
                                className="w-80 mx-auto border-2 absolute md:w-96 xl:w-[370px] 2xl:w-[400px]" 
                        />
    
                <p className="text-white text-center w-32 md:w-36 md:mt-6 xl:mt-10">{props.cons}</p>
                </div>
            </div>

            
        </>
    );

}

export default ProsConsDs;