import prosConsImage from '../../assets/prosConsImage.png'

function ProsConsAlgorithms(props){
    return (
        <>
            <h1 className="text-white text-center mb-4 sm:text-3xl xs:text-2xl">{props.heading}</h1>
            <p className="text-white mx-auto mb-8 text-justify xs:px-6 xm:px-10 sm:w-[600px] md:w-[650px] xl:w-[750px] ">{props.text}</p>
            <div className="text-sm sm:text-base">
                
                <div className="flex items-center text-sm place-content-center my-36 gap-8 md:text-base md:gap-x-14 w-fit mx-auto">
                    <p className="text-white text-center w-32 md:w-36 md:mt-6">{props.pros}</p>
                    
                    <img 
                        alt="Pros and Cons image" 
                        src={prosConsImage} 
                        className="w-80 mx-auto border-2 absolute md:w-96 xl:w-[370px] 2xl:w-[400px]" 
                    />
                    
                    <p className="text-white text-center w-32 md:w-36 md:mt-6 xl:mt-10">{props.cons}</p>
                </div>

                
            </div>

            
        </>
    );

}

export default ProsConsAlgorithms;