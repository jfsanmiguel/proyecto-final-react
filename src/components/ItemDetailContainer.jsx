import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import data from "../data/products.json";
import { ItemDetail } from "./ItemDetail";
export const ItemDetailContainer = (props) => {
    const [item,setItem]=useState(null);
    const {id}=useParams();
    useEffect(()=>{
        const promise = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                const productById= data.find(item => item.id==id);
                resolve(productById);
            },2000);
        
        });
        promise.then((data)=>setItem(data));
    }, []);
    if(!item) {
        return <div>Loading...</div>;
    }else{
        return <Container className='mt-4'>
        <h1>Detalles</h1>
        <ItemDetail item={item} />
        </Container>;
    }
    
};