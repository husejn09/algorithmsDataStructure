
function Methods(props) {
    return (
        <>
        {props.methods && props.methods.length > 0 && (
            <div className="xm:w-96 mx-auto lg:w-[450px]">
                <h1 className="text-2xl text-white my-7 text-center xl:text-3xl">Methods</h1>
                <ul className=" text-white flex flex-wrap text-center gap-3 xs:mx-4 text-sm sm:text-base">
                    {props.methods.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        )}
    </>
    );
}

export default Methods;