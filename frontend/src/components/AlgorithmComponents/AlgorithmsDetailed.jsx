import APIAlgorithm from "./APIAlgorithm";
import CodeSnippetAlgorithm from "./CodeSnippetAlgorithm";
import ProsConsAlgorithms from "./ProsConsAlgorithms";
import TimeSpaceComplexity from "./TimeSpaceComplexity";

function AlgorithmsDetailed({name, about, pros, cons, timeComplexity, spaceComplexity, code, isSearch}){
    
    return (
        <>
            <ProsConsAlgorithms heading={name} text={about} pros={pros} cons={cons}/>
            <TimeSpaceComplexity timeComplexity={timeComplexity} spaceComplexity={spaceComplexity} />
            <CodeSnippetAlgorithm code={code} />
            <APIAlgorithm apiEndpoint={name} isSearch={isSearch}/>
            
        </>
    );
}

export default AlgorithmsDetailed;