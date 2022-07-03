import PropTypes from 'prop-types';
import TransactionHistoryItem from "components/TransactionHistoryItem";
import { Table, TableHead } from './TransactionHistory.styled'

function TransactionHistory({ items }) {
    return (<Table>
        <thead>
            <tr>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Currency</TableHead>
            </tr>
        </thead>

        <tbody>
            {items.map((item) => (
                <TransactionHistoryItem
                    key={item.id}
                    type={item.type}
                    amount={item.amount}
                    currency={item.currency}
                />
            ))}
        </tbody>
    </Table>) 
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
    })),
};

export default TransactionHistory;