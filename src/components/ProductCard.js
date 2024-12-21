import { Card, Button, Form, Row, Col } from "react-bootstrap";

export default function ProductCard({ product }) {

    return (
        <Card>
            <Card.Body>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.price}</Card.Text>
                    <Button variant='primary'>Add to Card</Button>
                </Card.Body>
            </Card.Body>
        </Card>
    )
}