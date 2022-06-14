import GalleryItems from "../GalleryItem/GalleryItem";
function GalleryList({ galleryList, onLike }) {

    console.log('this is ', galleryList, onLike);
    return (
        <>
            <div className="container">
                {galleryList.map(props => (

                    <div className="img" key={props.id}>
                          <GalleryItems
                            props={props}
                            title={props.title}
                            path={props.path}
                            onLike={onLike}
                            
                          
                          />
                        
                    </div>
                ))}

            </div>

        </>
    );
}

export default GalleryList;