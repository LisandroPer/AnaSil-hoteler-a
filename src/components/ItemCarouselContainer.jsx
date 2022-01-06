import ItemCarousel from "./ItemCarousel";
import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import duplex from "../utils/dataDuplex";
import { useParams } from "react-router-dom";


export default function ItemCarouselContainer(){
    const [imgsCarousel, setImgCarousel] = useState({});
    const { idDuplex } = useParams();
    console.log(idDuplex);
    console.log(imgsCarousel)

    useEffect(() => {
        customFetch(duplex.find(casa => casa.id === parseInt(idDuplex)))
           .then(res => setImgCarousel(res))
           .catch(err => alert(err))
    },[]);

    return(
        
          <ItemCarousel casa = {imgsCarousel}/>
        
    );
}