
function APIAlgorithm () {
    return (
        <>
            <h1 className="text-center text-3xl text-white mt-20 mb-10">See how it performs</h1>
            <div>
                <p className="text-center text-white mb-5">Enter a random size of an array (1000 - 1 000 000): </p>
                <div className="flex place-content-center gap-16" id="form1">
                    <input type="number" min={1000} max={1000000} placeholder="10 000" className="rounded-xl w-24 text-center border-2 border-black"></input>
                    <button type="submit" className="text-white navColorDrop p-2 rounded-xl w-24">Test</button>
                </div>
            </div>
        </>
    );
}

export default APIAlgorithm;