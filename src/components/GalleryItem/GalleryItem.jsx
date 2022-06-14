import { useState } from "react";
function GalleryItems({ props, onLike }) {
    console.log('props', props,);



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
                        {props.likes === 0 ?
                            <h5> No people love this:( </h5> :
                            <h5>{props.likes} people love this!</h5>}

                    </div>

                </div>
            </ul>
        </>
    )

}

export default GalleryItems;