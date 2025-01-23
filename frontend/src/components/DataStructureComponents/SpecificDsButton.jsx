
function SpecificDsButton ({name, onClick}) {

    return (
        <>
            <button className="buttonBackground rounded-xl p-2 text-black font-medium" onClick={onClick}>{name}</button>
        </>
    );
}

export default SpecificDsButton;