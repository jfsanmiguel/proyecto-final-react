import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import { ItemCount } from './ItemCount';
import { CartContext } from '../contexts/CartContext';
export const ItemDetail = ({ item }) => {
  const { addItem } = useContext(CartContext)
  const onAdd = (count) => addItem(item, count);
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <Card style={{ width: '18rem' }}>
        <Card.Img style={{ height: "150px" }} variant="top" src={item.avatar} />
        <Card.Body>
          <Card.Title><h1>{item.name}</h1></Card.Title>
          <Card.Text>
            Stock actual: {item.stock}
          </Card.Text>
          <Card.Text>
            Precio: {item.price}
          </Card.Text>
          <ItemCount stock={item.stock} onAdd={onAdd} />
        </Card.Body>
      </Card>
    </div>
  )
};