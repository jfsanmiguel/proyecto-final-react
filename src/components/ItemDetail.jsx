import Card from 'react-bootstrap/Card';

export const ItemDetail=({item})=>(
    <div style={{display:"flex", flexWrap:"wrap"}}>
           <Card style={{ width: '18rem' }}>
      <Card.Img style={{ height: "150px" }} variant="top" src={item.avatar} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          Stock actual: {item.stock}
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
);