import { useView } from "./ViewContext";

function LearnButton({targetView}){
    const {setView} = useView();
    return (
        <div className="flex place-content-center text-sm sm:text-base w-fit mx-auto mt-12">
                <button className="bg-white p-2 rounded-2xl w-24 mt-2 sm:w-28 lg:text-lg lg:w-36 xxl:mt-0 " 
                onClick={() => setView(targetView)}>
                        Learn
                </button>
        </div>     
    );
}

export default LearnButton;