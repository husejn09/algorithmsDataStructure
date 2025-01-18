

function TimeSpaceComplexity(props){ 
    return (
        <>
            <h1 className="text-3xl text-white text-center mt-20 mb-10">Time and space complexity</h1>
            <div className="flex mx-auto place-items-center space-y-3 flex-col ">
                <img alt="Time complexity" src={props.timeComplexity} className="w-96"></img>
                <img alt="Space complexity" src={props.spaceComplexity} className="w-96"></img>
            </div>
        </>
    );
}

export default TimeSpaceComplexity;