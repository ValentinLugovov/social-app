import React from "react";
import s from "./friends.module.css";
import user from "../../img/users.jpeg";
import { NavLink } from "react-router-dom";
import { userAPI } from "../../api/api";

let Friends = (props) => {
  // Делим количество юзеров на размер страницы
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  // Создаем массив для количества страниц
  let pages = [];
  // Пушим в массив
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  // сохраняем количество страниц
  let curP = props.currentPage;
  // сколько страниц влево добавляем от выбранной страницы после того как выбранная страница будет больше 7
  let pagesOnLeft = curP - 7 < 0 ? 0 : curP - 7;
  // сколько страниц доавить правее от выбранной
  let pagesOnRight = curP + 6;
  // разрезаем массив pages
  let slicedPages = pages.slice(pagesOnLeft, pagesOnRight);

  return (
    <div className={s.friendsList}>
      <div className={s.currentPageBox}>
        {/* Отправляем выбраную количество страниц на UI, если выбранная страница совпадает со state добавляем класс */}
        {slicedPages.map((p) => {
          return (
            <span
              className={props.currentPage === p && s.selectedPage}
              onClick={(event) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.friends.map((u) => (
        <div key={u.id}>
          <div className={s.user}>
            <div className={s.photoBlock}>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small !== null ? u.photos.small : user}
                  className={s.img}
                  alt="users_photo"
                ></img>
              </NavLink>
            </div>

            <div className={s.nameBlock}>
              <div className={s.fullname}>{u.name}</div>
              <div className={s.status}>{u.status}</div>
            </div>

            <div className={s.locationBlock}>
              <div className={s.location}>{"u.location.city"}</div>
              <div className={s.location}>{"u.location.country"}</div>
            </div>
          </div>
          <div className={s.btns}>
            {u.followed ? (
              <button
                disabled={props.followingInProgress.some((id) => id === u.id)}
                className={s.button}
                onClick={() => {
                  props.follow(u.id);
                }}
              >
                UNFOLLOW
              </button>
            ) : (
              <button
                disabled={props.followingInProgress.some((id) => id === u.id)}
                className={s.button}
                onClick={() => {
                  props.unfollow(u.id);
                }}
              >
                FOLLOW
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Friends;
