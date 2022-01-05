import { useState } from "react";
import { useEffect } from "react";
import duplex from "../utils/dataDuplex";
import customFetch from "../utils/customFetch";
import ItemList from "./ItemList";


export default function ItemListContainer(){

   const [items, setItems] = useState([]);

   useEffect(() => {
       customFetch(duplex)
        .then (result => setItems(result))
        .catch(err => alert(err))
   })
   
   return(
      <>
        <ItemList items = {items}/>
      </>
   );
}