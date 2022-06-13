import { useState } from "react";
function GalleryItems({ props }) {
    console.log('Hellow', props,);



    const [isInImageMode, setisImageMode] = useState(true);

    return (
        <>
            <ul>
                <div className="singleItem">
                    <div onClick={() => setisImageMode(!isInImageMode)}>
                        {isInImageMode ? < img src={props.path} /> : <div>{props.title} {props.description}</div>}


                    </div>
                </div>
            </ul>
        </>
    )

}

export default GalleryItems;