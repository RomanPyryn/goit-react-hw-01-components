import PropTypes from 'prop-types';
import { TableRaw, TableData } from './TransactionHistoryItem.styled'

const TransactionHistoryItem = ({ type, amount, currency }) => {
    return (
        <TableRaw>
            <TableData>{type}</TableData>
            <TableData>{amount}</TableData>
            <TableData>{currency}</TableData>
        </TableRaw>
    )
};

TransactionHistoryItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
};

export default TransactionHistoryItem;