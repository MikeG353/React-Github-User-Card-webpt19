import React from "react"

// I'm not thinking the card itself needs state.
// maybe a follower counter nested inside the card
// prop drill for that.

function UserCard(props) {
    console.log(props.userdata.login)
    return (
        <div className="user-card" props={props}>
            <img src={props.userdata.avatar_url} alt="user-image" />
        </div>
    )
}

export default UserCard;