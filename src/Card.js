

function Card({item, cartItems, handleAddToCart}) {
    return(
<div className="col-lg-4 mb-2">
    <div className="card" style={{width: '14rem'}}>
        {/* <img src={`${item.imageUrl}`} 
        className="card-img-top" 
        alt="https://picsum.photos/200/150" /> */}
        <img src="https://picsum.photos/200/150" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.price}</p>
                {/* <small><Rating ratingValue={item.rating} starDimension={30} /></small>
                <small>The rating is: {item.rating}</small> <br></br> */}
                 <button disabled={cartItems.some((obj) => obj.id === item.id)} 
                 onClick={() => { handleAddToCart(item) }} className="btn btn-primary">Add to cart</button>
            </div>
    </div>
</div>
    );
}
export default Card;