import { useState } from "react";
function GalleryItems({ props }) {
    console.log('Hellow', props,);

    const renderThisProp = () => {
        console.log('hello');
        render(
           
        )
    }

    return (
        <>
            <ul>
                <div className="singleItem">
                    <button onClick={renderThisProp}>
                        <img src={props.path} />
                    </button>
                    {/* {props.title} */}
                    {/* {props.description} */}

                </div>
            </ul>
        </>
    )

}

export default GalleryItems;