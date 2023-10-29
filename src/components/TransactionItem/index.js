// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onDeleteTransaction} = props
  const {id, title, amount, type} = transactionDetails

  const onClickDelete = () => {
    onDeleteTransaction(id)
  }

  return (
    <li className="history-title-row">
      <p className="row-name">{title}</p>
      <p className="row-name">Rs {amount}</p>
      <p className="row-name">{type}</p>
      <button
        type="button"
        className="delete-button"
        onClick={onClickDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default TransactionItem
