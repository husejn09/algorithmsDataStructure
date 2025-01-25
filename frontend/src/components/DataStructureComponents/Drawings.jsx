import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Drawings(props) {
    return (
        <div className="flex flex-col gap-6 place-items-center mt-6 mx-auto">
        {props.sketch.map((item, index) => (
            <div key={index} className="flex flex-col items-center ">
                <h1 className="text-white xs:text-xl sm:text-2xl md:text-3xl mt-5 sm:mt-8">{item.heading}</h1>
                <LazyLoadImage alt={`drawing-${index}`} src={item.image} effect="blur" className="xs:w-80 sm:w-3/5 md:w-4/6 xl:w-[550px] xl:h-[350px] object-scale-down "/>
                <p className="text-white text-justify xs:px-6 xm:px-10 sm:text-base xs:text-smsm:w-[600px] md:w-[650px] xl:w-[750px]">{item.text}</p>
            </div>
        ))}
    </div>
    );
}

export default Drawings