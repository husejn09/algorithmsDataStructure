import APIAlgorithm from "./APIAlgorithm";
import CodeSnippetAlgorithm from "./CodeSnippetAlgorithm";
import ProsConsAlgorithms from "./ProsConsAlgorithms";
import TimeSpaceComplexity from "./TimeSpaceComplexity";
import Visualization from "./visualization";

function AlgorithmsDetailed({name, about, pros, cons, timeComplexity, spaceComplexity, code}){
    
    return (
        <>
            <ProsConsAlgorithms heading={name} text={about} pros={pros} cons={cons}/>
            <TimeSpaceComplexity timeComplexity={timeComplexity} spaceComplexity={spaceComplexity} />
            <CodeSnippetAlgorithm code={code} />
            <APIAlgorithm />
        </>
    );
}

export default AlgorithmsDetailed;