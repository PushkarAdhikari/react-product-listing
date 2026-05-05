const ProductCard = ({ product }) => {
    const image =
        product.thumbnail ||
        product.images?.[0] ||
        "https://dummyimage.com/300x300/cccccc/000000&text=No+Image";

    return (
        <div className="product-card">
            <div className="image-container">
                <img src={image} alt={product.title} />
            </div>

            <div className="content">
                <p className="category">{product.category}</p>

                <h3 className="title">{product.title}</h3>

                <div className="bottom">
                    <span className="price">₹{product.price}</span>

                    <span className="rating">
                        ⭐ {Number(product.rating).toFixed(1)}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;