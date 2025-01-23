import dsImage from '../../assets/dsLogo.png'
import React, {useState} from 'react';
import TheoryDs from './TheoryDs';
import DataStructuresDetailed from './DataStructuresDetailed';
import AdvancedDs from './AdvancedDs';
import { useView } from '../../ViewContext';

function IntroDataStructures(){

    const {setView} = useView();
    const [theory, setTheory] = useState(false);
    const [advancedDs, setAdvancedDs] = useState(false);

    const about = `Hello! 
                   This is the section about Data Structures. Here you can learn about them generally, as well explore how 
                   specific data structure works. Please choose between options below.`;

    return(
        <>
            <div className="flex flex-row items-center place-content-center my-10">
                <img alt="Algortihm Logo" src={dsImage} className="w-40"></img>
                <h1 className="text-white text-2xl">Data Structures</h1>
            </div>

            {!theory && !advancedDs && (
                <>
                    <p className="text-white text-center w-96 mx-auto ">{about}</p>

                    <div className="mt-12">
                        <h1 className="text-white text-center text-xl spacing-">Choose the topic about Data Structures</h1>
                        <div className="mt-10 text-white mx-12 text-xl space-y-1 flex flex-col place-items-center">
                            <button className="block navColorDrop w-40 text-center rounded-xl p-2" onClick={() => setTheory(true)}>Theory</button>
                            <button className="block navColorDrop w-40 text-center rounded-xl p-2" onClick={() => setAdvancedDs(true)}>Intermediate</button>
                            <button className="block bg-gray-500 w-40 text-center rounded-xl p-2 text-opacity-45 cursor-default">Expert</button>
                        </div>
                    </div>

                    <div className="flex">
                        <button className=" navColorDrop w-40 text-center rounded-xl p-3 text-white mx-auto mt-24" onClick={() => setView("main")}>Home</button>
                    </div>
                </>
            )}

            {theory && (
                <>
                    <div className="text-white mb-10 w-96 mx-auto">
                        <p className="text-center">Hello again! Here is the boring part, theory. Here you can find everything explained (in short) about Data Structures in general.</p>
                    </div>

                    <TheoryDs />

                    <button className="block navColorDrop w-40 text-center rounded-xl p-2 text-white mx-auto my-10" onClick={() => setTheory(false)}>Go back</button>
                </>
            )}
            
            
            {advancedDs && (
                <>
                    
                    <AdvancedDs setAdvancedDs={setAdvancedDs} />
                </>
            )}
        </>
    );
}

export default IntroDataStructures;