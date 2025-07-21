
export function ProductCard(props) {


    return (
        <>
            <div className="card">
                <img src={props.image} className="card-img-top" alt="Image1" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <small className="d-block">
                        <strong>Price:</strong> ₹ {props.price}
                    </small>

                    <small className="d-block">
                        <strong>Rating:</strong> {props.rating?.rate} ⭐ ({props.rating?.count} reviews)
                    </small>

                    <small className="text-muted d-block mb-2">
                        Product ID: {props.id}
                    </small>

                    <button type="button" className="btn btn-primary" onClick={() => props.addCart(props.title)}>Add To Cart</button>


                </div>
            </div>

        </>
    )
}