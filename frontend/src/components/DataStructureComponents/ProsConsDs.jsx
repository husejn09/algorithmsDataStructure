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
            <h1 className="text-white text-center text-2xl mb-4">{props.heading}</h1>

            <div className="text-sm">
                <p className="text-white w-80 mx-auto mb-8 text-justify">{props.text}</p>
                <CodeSnippetDs code={props.code}/>
                {props.additionalInfo && (
                    <>
                    <div className="flex place-content-center">
                        <button className="navColorDrop rounded-xl text-white p-4 mb-6 mt-12" onClick={toggleMore}>Additional info</button>
                        </div>
                        {more && (
                            <>

                                  <p className="text-white w-96 mx-auto mb-12 text-justify">{props.additionalInfo}</p>
                            </>
                        )}
                    </>
                )}
                

                <div className="flex flex-col place-content-center mt-10 text-base" >
                    <p className="text-white absolute left-7 w-44">{props.pros}</p>
                    <p className="text-white absolute right-6 w-44">{props.cons}</p>
                    
                    <img alt="Pros and Cons image" src={prosConsImage} className="w-96 mx-auto"></img>
                    
                </div>
            </div>

            
        </>
    );

}

export default ProsConsDs;