import React, { useRef, useEffect } from 'react'
import { gsap } from "gsap";
import ContentWrapperFlat from './ContentWrapperFlat';


export default function FlatLayout() {
   
        const boxRef = useRef();
    
    
        const onEnter = ({ currentTarget }) => {
            gsap.to(currentTarget, {scale: 1});
          };
          
        const onLeave = ({ currentTarget }) => {
            gsap.to(currentTarget, {scale: 0.3});
          };
        
    return (
        <>
         <div className="flat-content-wrapper" ref={boxRef} onMouseEnter={onEnter} onMouseLeave={onLeave}>
             <ContentWrapperFlat />
         </div>
         <div className="flat-content-wrapper-2" ref={boxRef} onMouseEnter={onEnter} onMouseLeave={onLeave}>
             <ContentWrapperFlat />
         </div>

         <div className="flat-content-wrapper-3" ref={boxRef} onMouseEnter={onEnter} onMouseLeave={onLeave}>
             <ContentWrapperFlat />
         </div>
        </>
    )
}
