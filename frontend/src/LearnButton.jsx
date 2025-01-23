import { useView } from "./ViewContext";

function LearnButton({targetView}){
    const {setView} = useView();
    return (
        <div className="flex place-content-center text-sm ">
                <button className="bg-white p-3 rounded-2xl w-24 mt-5" 
                onClick={() => setView(targetView)}>
                        Learn
                </button>
        </div>     
    );
}

export default LearnButton;