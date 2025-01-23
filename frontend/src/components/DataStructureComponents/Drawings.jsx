
function Drawings(props) {
    return (
        <div className="flex flex-col gap-6 place-items-center mt-6">
        {props.sketch.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-4 ">
                <h1 className="text-white text-2xl mt-5 ">{item.heading}</h1>
                <img alt={`drawing-${index}`} src={item.image} className="w-96" />
                <p className="text-white text-center w-80 text-sm ">{item.text}</p>
            </div>
        ))}
    </div>
    );
}

export default Drawings