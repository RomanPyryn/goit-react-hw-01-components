import PropTypes from 'prop-types';
import { Profile, Description, Avatar, Name, Tag, Location, Stats, StatsItem, Label, Quantity } from './ProfileDescription.styled';

const ProfileDescription = ({ username, tag, location, avatar = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png", stats }) => (
    <Profile>
        <Description>
            <Avatar
                src={avatar}
                alt="User avatar"
                className="avatar"
                width="150px"
            />
            <Name>{username}</Name>
            <Tag>@{tag}</Tag>
            <Location>{location}</Location>
        </Description>

        <Stats>
            <StatsItem>
                <Label>Followers</Label>
                <Quantity>{stats.followers}</Quantity>
            </StatsItem>
            <StatsItem>
                <Label>Views</Label>
                <Quantity>{stats.views}</Quantity>
            </StatsItem>
            <StatsItem>
                <Label>Likes</Label>
                <Quantity>{stats.likes}</Quantity>
            </StatsItem>
        </Stats>
    </Profile>
);

ProfileDescription.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
};

export default ProfileDescription;