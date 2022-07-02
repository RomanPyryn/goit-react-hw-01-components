import PropTypes from 'prop-types';
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

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    })),
};

export default FriendList;