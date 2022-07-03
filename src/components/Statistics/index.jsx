import PropTypes from 'prop-types';
import StatsItem from "components/StatsItem";
import { Container, Title, Statlist, StatItem } from './Statistics.styled';

function Statistics( { title, stats } ) {
    return (
        <Container>
        {title && <Title>{title}</Title>}

        <Statlist>
            {stats.map((stat) => (
                <StatItem key={stat.id} >
                    <StatsItem
                        label={stat.label}
                        percentage={stat.percentage}
                    />
                </StatItem>))}
        </Statlist>
    </Container>)
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
    })),
};

export default Statistics;