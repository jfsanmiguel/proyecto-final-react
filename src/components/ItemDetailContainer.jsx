import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import { ItemDetail } from "./ItemDetail";
import { getFirestore, getDoc, doc } from "firebase/firestore";
export const ItemDetailContainer = (props) => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true)
    const { id } = useParams();
    useEffect(() => {
        const db = getFirestore();
        const refDoc = doc(db, "products", id)
        getDoc(refDoc).then(snapshot => {
            setItem({ id: snapshot.id, ...snapshot.data() })
        }).finally(() => setLoading(false))
    }
        , []);
    if (loading) {
        return <div>Loading...</div>;
    } else {
        return <Container className='mt-4'>
            <h1>Detalles</h1>
            <ItemDetail item={item} />
        </Container>;
    }

};