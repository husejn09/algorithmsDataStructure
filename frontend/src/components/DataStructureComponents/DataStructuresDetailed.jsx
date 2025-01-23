import { use } from "react";
import CodeSnippetDs from "./CodeSnippetDs";
import ProsConsDs from "./ProsConsDs";
import UseCaseDs from "./UseCaseDs";
import Drawings from "./Drawings";
import Methods from "./Methods";

function DataStructuresDetailed ({name, about, pros, cons, code, useCase, additionalInfo, sketch, methods}){

    return(
        <>
            <ProsConsDs heading={name} text={about} pros={pros} cons={cons} additionalInfo={additionalInfo} code={code}/>
            <Drawings sketch={sketch}/>
            <UseCaseDs useCase={useCase}/>
            <Methods methods={methods}/>
        </>
    );
}

export default DataStructuresDetailed;