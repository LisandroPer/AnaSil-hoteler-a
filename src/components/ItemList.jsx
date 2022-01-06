import Item from "./Item";

export default function ItemList( {items} ){
    return(
        <>
           {
               items.map(item => (
                   <Item 
                     key={item.id}
                     id= {item.id}
                     duplexName = {item.duplexName}
                     capacity = {item.capacity}
                     mainImg = {item.mainImg}
                   />
               ))
           }
        </>
    );
}