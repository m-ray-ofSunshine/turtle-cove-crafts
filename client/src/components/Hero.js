import React from 'react';
import { useHistory } from 'react-router-dom';


function Hero() {

    const history = useHistory();

    const handleClick = (route) => history.push(`/${route}`);

    return (
        <div className="px-4 py-5 my-1 text-center" style={{
            backgroundImage: `url(/file/hero-river.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "60vh"
        }}>
            
           <div style={{
               backgroundColor: "rgba(172, 168, 168, 0.8)",
               padding: "10px"
           }}>
           <h1 className ="display-5 fw-bold">Custom Resin and Wood Gifts</h1>
            <div className ="col-lg-6 mx-auto">
            <p className ="lead mb-4">We have a selection of beautiful handmade coasters, signs, and cribbage boards. If you can't find exactly what you want we would be happy to make a customized product for you!</p>
            <div className ="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type ="button" onClick={()=>handleClick("products")} className ="btn btn-outline-primary btn-lg px-4 gap-3">See all products</button>
            <button type ="button" onClick={()=>handleClick("custom")} className ="btn btn-outline-primary btn-lg px-4">I would like a customized product</button>
            </div>
            </div>
           </div>
        </div>
    );
}

export default Hero;