import React from 'react';
import { Card } from 'react-bootstrap';

const ProductCard = ({image,title,price,category}) => {
    return (
        <div>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={image} style={{ height: '200px', objectFit: 'contain' }} className='card-img mt-3 img-fluid' />
                <Card.Body>
                    <Card.Title className="fw-bold text-capitalize text-truncate text-center fs-4 body">{title}</Card.Title>
                    <Card.Text className="fw-bold text-capitalize">Price: ${price}</Card.Text>
                    <Card.Text className="text-muted text-capitalize">Category: {category}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProductCard;
