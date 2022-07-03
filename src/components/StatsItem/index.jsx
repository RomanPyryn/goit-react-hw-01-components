import PropTypes from 'prop-types';
import { Label, Percentage } from './StatsItem.styled';

const StatsItem = ({ label, percentage }) => {
    return (<div>
        <Label>{label}</Label>
        <Percentage>{percentage}%</Percentage>
    </div>)
};

StatsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};

export default StatsItem;