import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Button, Card } from 'react-bootstrap';
const product = (props) => {
    const { name, image, salary } = props.product;
    return (
        <div style={{ border: '1px solid gray', padding:'20px'}}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" style={{ width: '200px', height: '200px', padding: '50px' }} src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Salary: {salary}
                    </Card.Text>
                    <Button onClick={() => props.handleAddProduct(props.product)} variant="primary">   <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default product;