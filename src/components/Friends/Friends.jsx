import React from "react";
import s from "./friends.module.css";
import * as axios from "axios";
import user from "../../img/users.jpeg";

class Friends extends React.Component {
  componentDidMount() {
    // Запрашиваем информацию у сервера
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setUsersTotalCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    // Делим количество юзеров на размер страницы
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    // Создаем массив для количества страниц
    let pages = [];
    // Пушим в массив
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    // сохраняем количество страниц
    let curP = this.props.currentPage;
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
                className={this.props.currentPage === p && s.selectedPage}
                onClick={(event) => {
                  this.onPageChanged(p);
                }}
              >
                {p}
              </span>
            );
          })}
        </div>
        {this.props.friends.map((u) => (
          <div key={u.id}>
            <div className={s.user}>
              <div className={s.photoBlock}>
                <img
                  src={u.photos.small !== null ? u.photos.small : user}
                  className={s.img}
                ></img>
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
                  className={s.button}
                  onClick={() => this.props.unfollow(u.id)}
                >
                  UNFOLLOW
                </button>
              ) : (
                <button
                  className={s.button}
                  onClick={() => this.props.follow(u.id)}
                >
                  FOLLOW
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Friends;
