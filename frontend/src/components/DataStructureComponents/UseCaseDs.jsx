
function UseCaseDs (props){
    return (
        <>
            <div className="place-items-center mx-auto mt-10 ">
                <h1 className="text-white xs:text-xl sm:text-2xl md:text-3xl text-center mb-5">Use cases</h1>
                <p className="text-white mx-auto mb-8 text-justify xs:px-6 xm:px-10 sm:w-[600px] md:w-[650px] xs:text-sm sm:text-base xl:w-[750px]">{props.useCase}</p>
            </div>

        </>
    );
}

export default UseCaseDs;