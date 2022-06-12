import ShowSingleGalleryItem from './ShowSingleGalleryItem'
function GalleryList({ galleryList }) {
    console.log('this is ', galleryList);
    return (
        <>
            {/* Images*/}
            <img className="AllPhotoUpdates" src="images/goat_small.jpg" />
            <img className="AllPhotoUpdates" src="images/siberian_husky.jpg" />
            <img className="AllPhotoUpdates" src="images/camera.jpg" />
            <img className="AllPhotoUpdates" src="images/hammock.jpg" />
            <img className="AllPhotoUpdates" src="images/mtb.jpg" />
            <img className="AllPhotoUpdates" src="images/family.jpg" />

            {/* Text Display*/}
            <div className="container">
                {galleryList.map(GalleryItemObj => (
                    <div className="card" key={GalleryItemObj.id}>
                        <ShowSingleGalleryItem
                            key={GalleryItemObj.id}
                            GalleryItemObj={GalleryItemObj}
                        />

                    </div>
                ))}

            </div>

        </>
    );
}

export default GalleryList;