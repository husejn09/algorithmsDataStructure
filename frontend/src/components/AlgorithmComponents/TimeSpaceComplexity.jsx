

function TimeSpaceComplexity(props){ 
    return (
        <>
            <h1 className="text-white text-center sm:text-3xl xs:text-2xl mt-20 mb-10">Time and space complexity</h1>
            <div className="flex place-items-center place-content-center space-y-3 flex-col xl:flex-row xl:gap-20">
                <img alt="Time complexity" src={props.timeComplexity} className="xs:w-80 "></img>
                <img alt="Space complexity" src={props.spaceComplexity} className="xs:w-80"></img>
            </div>
        </>
    );
}

export default TimeSpaceComplexity;