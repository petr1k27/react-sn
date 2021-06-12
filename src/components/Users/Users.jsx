import User from "./User/User";
import Paginator from "../common/Paginator/Paginator"
import s from './Users.module.css'


const Users = (props) => {

    return (
        <div>
            <div className={s.paginator}>
                <Paginator
                    totalItemsCount={props.totalCount}
                    pageSize={props.countUsersOnPage}
                    currentPage={props.currentUsersPage}
                    onPageChanged={props.onPageChanged}
                />
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