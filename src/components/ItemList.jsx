import { Item } from "./Item";
export const ItemList = ({item}) => 
        item.map((items) =>(
           <Item key={items.id} items={items} /> )   
);