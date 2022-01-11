import { AiFillInstagram , AiFillFacebook , AiOutlineMail, AiFillPhone } from "react-icons/ai";

import {AiTwotoneEnvironment} from "react-icons/ai"

export default function Footer(){
    return(
        <>
         <footer class="container-fluid cajaFooter">
                <div class="row">
                    <div class="col-12 col-lg-4">
                    <h6>Contacto:</h6> 
                    <AiOutlineMail /> <p>memcosplay@hotmail.com</p>
                    <AiFillPhone /> <p>1135742553</p>
                    </div>
                    <div class="col-12 col-lg-4">
                    <h6>Redes sociales:</h6>
                    <AiFillFacebook /><a href="https://it-it.facebook.com/login/?next=https%3A%2F%2Fit-it.facebook.com%2Fcomplejoanasil">Ver en Facebook</a>
                    </div>
                    <div class="col-12 col-lg-4">
                    <h6>Lugar:</h6>
                    <AiTwotoneEnvironment />
                    <p>Donde encontrarnos: <a href="https://www.google.com/maps/place/C.+310+500/@-37.2420137,-56.9601147,20z/data=!3m1!4b1!4m5!1m2!2m1!1sCalle+310,+500+Villa+Gesell,+7165+Argentina!3m1!1s0x959b60513d85cab1:0x25d67be7eec261be">Ver lugar</a></p>
                    <p>Calle 310, 500
                       Villa Gesell, 7165
                       Argentina</p>
                    </div>
                </div>

        </footer>
        </>
    );

}