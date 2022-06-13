import GalleryItems from "../GalleryItem/GalleryItem";
function GalleryList({ galleryList }) {

    console.log('this is ', galleryList);
    return (
        <>
            <div className="container">
                {galleryList.map(props => (

                    <div className="img" key={props.id}>
                          <GalleryItems
                            props={props}
                            title={props.title}
                            path={props.path}
                          
                          />
                        
                    </div>
                ))}

            </div>

        </>
    );
}

export default GalleryList;