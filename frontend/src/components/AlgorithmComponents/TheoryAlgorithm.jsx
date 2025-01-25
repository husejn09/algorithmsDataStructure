

function TheoryAlgorithm(){

    const definition = `An algorithm is a step-by-step procedure or set of instructions 
                        designed to solve a specific problem or perform a particular task. Think about cooking, that can be some kind of algorithm, 
                        where each step we do, will eventually lead to delicious food. `;

    const characteristics = `Every alghorithm takes some kind of value, for example arrays, and it gives one or multiple outputs (based on the inputs).
                             Algorithms are essential beacuse they optimize performance (reduce time or memory usage), and each step can be performed 
                             with basic operations. Less steps, better performance.`;

    const useCases = `Algorithms can be used anywhere. We are crossing each others ways daily. For example, the recommendations we get on social media, 
                      are based on our searches and content we watch or like, and behind that, is some kind of an algorithm. Contacts on our phone are 
                      sorted from A-Z. When we want to search something there it goes again.`;

    const evaluating = `When choosing or designing an algorithm you must consider: `


    return(
        <>

            <div className="place-content-center w-10/12 mx-auto text-sm lg:px-10 md:text-base xl:px-28 xxl:w-[1000px]">
                <h2 className="text-white text-2xl italic mb-4 xl:text-3xl">Definition</h2>
                <p className="text-white text-justify">{definition}</p>
                
                <h2 className="text-white text-2xl italic my-4">Characteristics</h2>
                <p className="text-white text-justify">{characteristics}</p>
                
                <h2 className="text-white text-2xl italic my-4">Use cases</h2>
                <p className="text-white text-justify">{useCases}</p>

                <h2 className="text-white text-2xl italic my-4">Evaluating algorithms</h2>
                <p className="text-white text-justify">{evaluating}</p>
                <ol className="text-white">
                    <li>- Time complexity</li>
                    <li>- Space complexity</li>
                    <li>- Scalability</li>
                    <li>- Corectness</li>
                </ol>
            </div>

        </>
    );
}

export default TheoryAlgorithm;