import React from "react";
import preloader from "../../../img/preloader.svg";
import s from "./preloader.module.css"


let Preloader = (props) => {
   return (
      <div className={s.div}>
         <img src={preloader} alt="preloader" />
      </div>
   )
}

export default Preloader