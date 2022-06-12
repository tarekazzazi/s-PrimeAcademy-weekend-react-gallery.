
function GalleryItems({ GalleryItemObj, title, path }) {
    console.log('Hellow', GalleryItemObj,);
    return (
        <>
            
            <ul>
                <li>
                    {GalleryItemObj.title}
                </li>
                <li>
                    {GalleryItemObj.description}
                </li>
                <img src={GalleryItemObj.path} />
            </ul>
        </>



    )
}

export default GalleryItems;