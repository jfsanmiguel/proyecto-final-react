import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import{ getFirestore, getDocs, collection, query, where } from "firebase/firestore";
import { ItemList } from "./ItemList";
export const ItemListContainer = (props) => {
    const [item,setItem]=useState([]);
    const [loading,setLoading] = useState(true)
    const {id} = useParams();
    useEffect(()=>{
        const db = getFirestore();
        if(!id){
            const refCollection= collection(db,"products");
            getDocs(refCollection).then(snapshot =>{
                if(snapshot.size===0) console.log("sin resultados")
                else
                setItem(snapshot.docs.map(doc=>{
            return {id: doc.id, ...doc.data()}
        })
        )
            }).finally(()=> setLoading(false))  
        }else{
            const q=query(
                collection(db,"products"),
                where("category","==",id)
            );
            getDocs(q).then(snapshot =>{
                if(snapshot.size===0) console.log("sin resultados")
                else
                setItem(snapshot.docs.map(doc=>{
            return {id: doc.id, ...doc.data()}
        })
        )
            }).finally(()=> setLoading(false)) 
        }
        
    },[id])
    if(loading) {
        return <div>Loading...</div>;
    }else{
    return <Container className='mt-4'>
        <h1>{props.greeting}</h1>
        <div style={{display:"flex", flexWrap:"wrap"}}>
            <ItemList item={item} />
        </div>
        </Container>;
}};