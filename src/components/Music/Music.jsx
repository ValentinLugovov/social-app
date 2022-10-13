import React from "react";
import s from "./music.module.css";

const Music = (props) => {
  return (
    <div>
      {props.tracks.map((t) => (
        <div className={s.box}>
          <div className={s.imgBox}>
            <a href={t.share.href} target="_ blank">
              <img src={t.share.image} alt="image" />
            </a>
          </div>
          <div className={s.title}>
            <div>{t.title}</div>
            <div>{t.subtitle}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Music;
