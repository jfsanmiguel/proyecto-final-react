import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import data from "../data/products.json";
import { ItemList } from "./ItemList";
export const ItemListContainer = (props) => {
    const [item,setItem]=useState([]);
    const {id} = useParams();
    useEffect(()=>{
        const promise = new Promise((resolve,reject)=>{
            setTimeout(()=>resolve(data),2000);
        });
        promise.then(data=>{
           if(!id){
            setItem(data)
           } else{
            const itemsFiltered=data.filter((item)=>item.category===id);
            setItem(itemsFiltered);
           }
            
        });
    }, []);
    return <Container className='mt-4'>
        <h1>{props.greeting}</h1>
        <div style={{display:"flex", flexWrap:"wrap"}}>
            <ItemList item={item} />
        </div>
        </Container>;
};