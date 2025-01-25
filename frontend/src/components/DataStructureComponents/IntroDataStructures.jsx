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
                <img alt="Algortihm Logo" src={dsImage} className="w-28 xs:w-36 sm:w-48 xxl:w-56"></img>
                <h1 className="text-white sm:text-3xl xs:text-2xl ml-3 ">Data Structures</h1>
            </div>

            {!theory && !advancedDs && (
                <>
                    <p className="text-white text-center mx-auto sm:text-base lg:text-lg xs:w-[340px] sm:w-[550px] md:w-[600px] lg:w-[620px] xl:w-[650px] ">{about}</p>

                    <div className="mt-12">
                        <h1 className="text-white text-center xs:text-xl sm:text-2xl">Choose the topic about Data Structures</h1>
                        <div className="mt-10 text-white mx-12 text-xl gap-1.5 flex flex-col place-items-center lg:flex-row lg:place-content-center ">
                            <button className="block navColorDrop xs:w-32 xs:text-base w-28 sm:w-[150px] sm:text-lg xl:w-44 text-center rounded-xl p-2" onClick={() => setTheory(true)}>Theory</button>
                            <button className="block navColorDrop xs:w-32 xs:text-base w-28 sm:w-[150px] sm:text-lg xl:w-44 text-center rounded-xl p-2" onClick={() => setAdvancedDs(true)}>Intermediate</button>
                            <button className="block bg-gray-500 xs:w-32 xs:text-base w-28 sm:w-[150px] sm:text-lg xl:w-44 text-center rounded-xl p-2 text-opacity-45 cursor-default">Expert</button>
                        </div>
                    </div>

                    <div className="flex sm:mb-20">
                        <button className=" navColorDrop w-40 text-center rounded-xl p-2 text-white mx-auto mt-24 xs:w-32 xs:text-sm sm:w-[150px] sm:text-lg xl:w-44 " onClick={() => setView("main")}>Home</button>
                    </div>
                </>
            )}

            {theory && (
                <>
                    <div className="text-white mb-10 text-center xs:text-base lg:text-lg mx-auto xs:w-[340px] sm:w-[550px] md:w-[600px] lg:w-[620px] xl:w-[650px]">
                        <p className="text-center">Hello again! Here is the boring part, theory. Here you can find everything explained (in short) about Data Structures in general.</p>
                    </div>

                    <TheoryDs />

                    <button className="block text-white mx-auto my-16 navColorDrop xs:w-32 xs:text-base w-28 sm:w-[150px] sm:text-lg xl:text-xl xl:w-44 xl:p-3 text-center rounded-xl p-2" onClick={() => setTheory(false)}>Go back</button>
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