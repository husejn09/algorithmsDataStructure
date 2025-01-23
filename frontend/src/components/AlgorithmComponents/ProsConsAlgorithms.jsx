import prosConsImage from '../../assets/prosConsImage.png'

function ProsConsAlgorithms(props){
    return (
        <>
            <h1 className="text-white text-center text-3xl mb-10">{props.heading}</h1>

            <div className="text-sm">
                <p className="text-white w-80 mx-auto mb-8 text-justify">{props.text}</p>
                <div className="flex flex-col place-content-center" >
                    <p className="text-white absolute left-7 w-44">{props.pros}</p>
                    <p className="text-white absolute right-6 w-44">{props.cons}</p>
                    
                    <img alt="Pros and Cons image" src={prosConsImage} className="w-96 mx-auto"></img>
                    
                </div>
            </div>

            
        </>
    );

}

export default ProsConsAlgorithms;