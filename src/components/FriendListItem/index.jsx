import PropTypes from 'prop-types';
import { Item, Status, Avatar, Name } from './FriendListItem.styled'

const FriendListItem = ({ avatar, name, isOnline }) => { 
    return (<Item>
        <Status type={isOnline.toString()}></Status>
        <Avatar src={avatar} alt={name} width="48" />
        <Name>{name}</Name>
    </Item>)
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;