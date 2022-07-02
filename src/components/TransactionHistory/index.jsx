import TransactionHistoryItem from "components/TransactionHistoryItem";

function TransactionHistory({ items }) {
    return (<table className="transaction-history">
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
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
    </table>) 
};

export default TransactionHistory;