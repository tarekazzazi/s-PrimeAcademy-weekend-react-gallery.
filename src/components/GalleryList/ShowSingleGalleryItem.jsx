function ShowSingleGalleryItem({ GalleryItemObj }) {
    return (
        <>
            <ul>
                <li>
                    {GalleryItemObj.title}
                </li>
                <li>
                    {GalleryItemObj.description}
                </li>
            </ul>
        </>
    )
}

export default ShowSingleGalleryItem;