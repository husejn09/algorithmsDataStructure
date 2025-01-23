import React, {useState, useEffect, memo} from "react";
import axios from 'axios';
import timeUsage from '../../assets/timeUsage.png'
import spaceUsage from '../../assets/memoryUsage.png'

function APIAlgorithm ({apiEndpoint, isSearch}) {
    const [inputValue, setInputValue] = useState("");
    const [target, setTarget] = useState();
    const [loading, setLoading] = useState(false);
    const [timeTaken, setTimeTaken] = useState(null);
    const [memoryUsage, setMemoryUsage] = useState(null);
    const [indexOfInput, setIndexOfInput] = useState(null);

    const sendData = async () => {
        setLoading(true);
        try{
            const body = { size: inputValue};
            if (isSearch) body.value = target;

            const response = await axios.post(`http://localhost:8080/algorithms/${apiEndpoint}`, body);
            

            setTimeTaken(`${response.data.timeTaken} MS`);
            setMemoryUsage(`${response.data.memoryUsage} MB`);
            setIndexOfInput(`Your number was at index: ${response.data.valueFromSearch}`)
        }catch(error){
            console.error("Error while fetching data: ", error);
        } finally{
            setLoading(false);
        };
        
    }

    

    return (
        <>
            <h1 className="text-center text-3xl text-white mt-20 mb-10">See how it performs</h1>
            <div>
                <div className="mb-6">
                    <p className="text-center text-white">Enter a random size of an array (1000 - 1 000 000): </p>
                    {/* Here put the text (explanation) and add another button below for user to test searching binary 
                            and interpolation search with unifromly ditributed array and the random sorted array */}
                    {isSearch && (
                        <p className="text-center text-slate-400 text-xs px-3">(Whatever number you want to search, will be at the random position inside the array)</p>
                    )}
                </div>
                <form className="flex place-content-center gap-10" id="form1" 
                onSubmit={async (e) =>{
                    e.preventDefault();
                    await sendData();
                    
                }}>
                    <input value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)} 
                    type="number" min={1000} max={1000000} 
                    placeholder="10 000" 
                    className="rounded-xl w-24 text-center border-2 border-black" />

                    {isSearch && (
                        <input value={target} onChange={(e) => setTarget(e.target.value)} 
                        type="number" placeholder="Number to search" min={1} max={1000000}
                        className="text-xs rounded-xl w-28 text-center border-2 border-black"></input>
                    )}

                    <button type="submit" className="text-white navColorDrop p-2 rounded-xl w-24">Test</button>
                </form>
            </div>
            {isSearch && (
                <p className="text-white text-center mt-4">{indexOfInput}</p>
            )}
        
            <div>
                {loading && (
                    <div className="flex justify-center mt-4">
                        <div className="w-8 h-8 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
                    </div>
                )}
            </div>
        <>
            <div className="flex flex-col mt-20 mb-16 text-white place-items-center place-content-center ">
                <p className="absolute text-white text-2xl">{timeTaken || "N/A"}</p>
                    <img src={timeUsage} alt="Time Usage" className="w-60"/>
                </div>
            <div className="flex flex-col mt-10 mb-16 text-white place-items-center place-content-center">
                <p className="absolute text-white text-2xl">{memoryUsage || "N/A"}</p>
                <img src={spaceUsage} alt="Memory Usage" className="w-60"/>
            </div>
        </>
                    
            
        </>
    );
}

export default APIAlgorithm;