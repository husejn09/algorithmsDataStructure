
function Methods(props) {
    return (
        <>
        {props.methods && props.methods.length > 0 && (
            <div>
                <h1 className="text-2xl text-white my-7 text-center">Methods</h1>
                <ul className=" text-white flex flex-wrap place-content-center gap-3 w-80 mx-auto text-sm">
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