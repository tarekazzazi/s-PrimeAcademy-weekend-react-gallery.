import { useState } from "react";
function GalleryItems({ props, onLike }) {
    console.log('Hellow', props,);



    const [isInImageMode, setisImageMode] = useState(true);

    return (
        <>
            <ul>
                <div className="singleItem">
                    {/* Image */}
                    <div onClick={() => setisImageMode(!isInImageMode)}>
                        {isInImageMode ? < img src={props.path} /> : <div>{props.description}</div>}
                    </div>

                    {/* Likes section*/}
                    <div>
                        <button onClick={() => onLike(props.id)}>love it</button>
                        <div>{props.likes} people love this!</div>
                    </div>
                     
                </div>
            </ul>
        </>
    )

}

export default GalleryItems;