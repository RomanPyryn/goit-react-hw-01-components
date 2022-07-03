import PropTypes from 'prop-types';
import FriendListItem from "components/FriendListItem";
import { ListOfFriend } from './FriendList.styled'

function FriendList ({ friends }) {
    return (
        <ListOfFriend>
            {friends.map((friend) => (
                <FriendListItem
                    key={friend.id}
                    isOnline={friend.isOnline}
                    avatar={friend.avatar}
                    name={friend.name}
                />
            ))}
        </ListOfFriend>   
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