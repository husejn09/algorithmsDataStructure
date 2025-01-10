import React, {useState} from 'react'
import algoImage from './assets/algoLogo.png'
import TheoryAlgorithm from './TheoryAlgorithm';


function Algorithms(){

    const [theory, setTheory] = useState(false);

    
    const about = `Hello! 
                   This is the section about algorithms. Here you can learn about them generally, as well exploring how a 
                   specific algorithm works. Please choose between options below.`;
    
    return (
        <>
            <div className="flex flex-row items-center place-content-center my-10">
                <img alt="Algortihm Logo" src={algoImage} className="w-44"></img>
                <h1 className="text-white text-3xl">Algorithms</h1>
            </div>

            {!theory && (
                <>
                    <p className="text-white text-center w-96 mx-auto">{about}</p>

                    <div className="mt-12">
                        <h1 className="text-white text-center text-2xl">Choose the topic about Algorithms</h1>
                        <div className="mt-10 text-white mx-12 text-xl space-y-1 flex flex-col place-items-center">
                            <button className="block navColorDrop w-40 text-center rounded-xl p-2" onClick={() => setTheory(true)}>Theory</button>
                            <button className="block navColorDrop w-40 text-center rounded-xl p-2">Advanced Topic</button>
                        </div>
                    </div>
                </>
            )}

            {theory && (
                <>
                    <div className="text-white mb-10 w-96 mx-auto">
                        <p>Hello again! Here is the boring part, theory. Here you can find everything explained (in short) about algorithms in general.</p>
                    </div>

                    <TheoryAlgorithm/>

                    <button className="block navColorDrop w-40 text-center rounded-xl p-2 text-white mx-auto my-10" onClick={() => setTheory(false)}>Go back</button>
                </>
            )}
            

        </>
    );
}

export default Algorithms