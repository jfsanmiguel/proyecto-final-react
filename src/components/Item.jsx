import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export const Item=({items})=>(
    <Card key={items.id} style={{ width: '18rem' }}>
                <Card.Img style={{ height: "150px" }} variant="top" src={items.avatar} />
                <Card.Body>
                    <Card.Title>{items.name}</Card.Title>
                    <Card.Text>
                        {items.category}
                    </Card.Text>
                    <Link to ={`/item/${items.id}`}><Button variant="primary">Detalles</Button></Link>
                </Card.Body>
            </Card>
);