
function SpecificDsButton ({name, onClick}) {

    return (
        <>
            <button className="buttonBackground rounded-xl p-2 text-black font-medium w-32 xxl:w-36 xxl:text-lg " onClick={onClick}>{name}</button>
        </>
    );
}

export default SpecificDsButton;