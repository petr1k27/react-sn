import React from "react";
import User from "./User/User";
import s from "./Users.module.css"

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalCount / props.countUsersOnPage);
    let pages = [];

    for (let i = 1; i < pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span
                        className={props.currentUsersPage === p && s.selectedPage}
                        onClick={() => props.onPageChanged(p)}>{p}</span>
                })}
            </div>
            {props.users.map(u => <User name={u.name}
                                        id={u.id}
                                        status={u.status}
                                        followed={u.followed}
                                        photos={u.photos}
                                        follow={props.follow}
                                        unfollow={props.unfollow}
                                        followingIsProgress={props.followingIsProgress}
            />)
            }
        </div>
    )
}

export default Users;