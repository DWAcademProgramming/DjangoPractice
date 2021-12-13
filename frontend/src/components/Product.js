import React from 'react'
import { Card } from 'react-bootstrap'

import products from '../products'

function Product() {
    return (
        <Card className='my-3 p-3 rounded'>
            <a href={`/product/${products.id}`}>
                <Card.Img src={products.image} />
            </a>

            <Card.Body>
                <a href={`/product/${products.id}`}>
                    <Card.Title as="div">
                        <strong>{products.name}</strong>
                    </Card.Title>
                </a>
            </Card.Body>

            <Card.Text as='div'>
                <div className='my-3'>
                    {products.rating} from {products.numReviews} reviews
                </div>
            </Card.Text>

            <Card.Text as="h3">
                ${products.price}
            </Card.Text>
        </Card>
    )
}

export default Product
