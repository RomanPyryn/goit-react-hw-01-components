import FriendListItem from "components/FriendListItem";

function FriendList ({ friends }) {
    return (
        <ul className="friend-list">
            {friends.map((friend) => (
                <FriendListItem
                    key={friend.id}
                    isOnline={friend.isOnline}
                    avatar={friend.avatar}
                    name={friend.name}
                />
            ))}
        </ul>   
     )
};

export default FriendList;