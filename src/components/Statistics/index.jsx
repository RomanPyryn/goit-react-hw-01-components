import StatsItem from "components/StatsItem";

function Statistics( { title, stats } ) {
    return (<section className="statistics">
        <h2 className="title">{title}</h2>

        <ul className="stat-list">
            {stats.map((stat) => (
                <li className="item" key={stat.id} >
                    <StatsItem
                        label={stat.label}
                        percentage={stat.percentage}
                    />
                </li>))}
        </ul>
    </section>)
};

export default Statistics;