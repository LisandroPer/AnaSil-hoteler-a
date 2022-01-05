import duplex from "../utils/dataDuplex";
import Item from "./Item";

export default function ItemList( {items} ){
    return(
        <>
           {
               items.map(item => (
                   <Item 
                     id = {item.id}
                     duplexName = {item.duplexName}
                     capacity = {item.capacity}
                     mainImg = {item.mainImg}
                   />
               ))
           }
        </>
    );
}