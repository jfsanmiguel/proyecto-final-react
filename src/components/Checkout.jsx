import { CartContext } from "../contexts/CartContext"
import { Container, ListGroup, Badge, Button, Form } from "react-bootstrap"
import { useContext, useState } from "react"
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
export const Checkout = () => {
    const [formValues, setFormValues] = useState({
        name: "",
        phone: "",
        email: "",
    })
    const { items, removeItem, clear, total } = useContext(CartContext)
    const handleChange = ev => {
        setFormValues(prev => ({
            ...prev,
            [ev.target.name]: ev.target.value,
        }))

    }
    const sendOrder = () => {
        const order = {
            buyer: formValues,
            items: items,
            total: total,
        };
        const db = getFirestore();
        const orderCollection = collection(db, "orders");

        addDoc(orderCollection, order).then((response) => {
            if (response.id) {
                alert("Su orden con identificación: " + response.id + " ha sido completada exitosamente!")
                setFormValues({
                    name: "",
                    phone: "",
                    email: "",

                })
                clear()  
            }
        });
    };
    return (
        <Container>
            <h1>Checkout</h1>
            <ListGroup as="ol" numbered>
                {items.map(item => (
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                        key={item.id}
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{item.name}</div>
                            Precio: {item.price}

                        </div>
                        <Badge bg="primary" pill>
                            {item.quantity}
                        </Badge>
                        <Button onClick={() => removeItem(item.id)} variant="light">Eliminar</Button>{' '}
                    </ListGroup.Item>
                )
                )}

            </ListGroup>
            <ListGroup>
                <ListGroup.Item variant="light">Total: {total}</ListGroup.Item>
                <ListGroup.Item variant="warning" action onClick={clear}>
                    Limpiar
                </ListGroup.Item>
                </ListGroup>
                <ListGroup defaultActiveKey="#link1">
      <ListGroup.Item variant="info" as={Link} to="/">
        volver a Inicio
      </ListGroup.Item>
            </ListGroup>
            <h2>Ingrese sus datos de usuario</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control onChange={handleChange} value={formValues.name} type="text" name="name" placeholder="Ingrese nombre" />
                    <Form.Text className="text-muted">
                        Ingrese su nombre de usuario
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control onChange={handleChange} value={formValues.phone} type="number" name="phone" placeholder="Ingrese número telefónico" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Dirección E-mail</Form.Label>
                    <Form.Control onChange={handleChange} value={formValues.email} type="email" name="email" placeholder="Ingrese email" />
                    <Form.Text className="text-muted">
                        Su email no será compartido.
                    </Form.Text>
                </Form.Group>
                <Button action onClick={sendOrder} variant="success">
                    Enviar y comprar
                </Button>
            </Form>
        </Container>

    )
}