import React from "react"

function UserCard(props) {
    console.log("UserCard 'render':: props: ", props)

    return (
        <div className="user-card" props={props}>
            <img className="user-image" src={props.userdata.avatar_url} alt="user-image" />
            <p className="user-name">Full Name: {props.userdata.name}</p>
            <p>Github Username: {props.userdata.login}</p>
            <p className="user-bio">{props.userdata.bio}</p>
            <p>Repositories: {props.userdata.public_repos}</p>
            <div className="follower-counts">
                <p className="follow-data">Followers : {props.userdata.followers}</p>
                <p className="follow-data">Following : {props.userdata.following}</p>
            </div>
            <div className="follower-list">
                <h3>Followers:</h3>
               {props.followdata.map((follower) => ( 
                    <p key={follower.id}>{follower.login}</p>
                ))}               
            </div>
        </div>
    )
}

export default UserCard;