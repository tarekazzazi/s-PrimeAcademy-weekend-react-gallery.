import GalleryItems from "../GalleryItem/GalleryItem";
function GalleryList({ galleryList }) {

    console.log('this is ', galleryList);
    return (
        <>
            <div className="container">
                {galleryList.map(GalleryItemObj => (

                    <div className="img" key={GalleryItemObj.id}>
                          <GalleryItems
                            GalleryItemObj={GalleryItemObj}
                            title={GalleryItemObj.title}
                            path={GalleryItemObj.path}
                          
                          />
                        
                    </div>
                ))}

            </div>

        </>
    );
}

export default GalleryList;