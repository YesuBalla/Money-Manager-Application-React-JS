// Write your code here
import './index.css'

const MoneyItem = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props
  return (
    <ul className="money-details-container">
      <li className="money-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="money-item-image"
        />
        <div className="money-item-text">
          <p className="balance-text">Your Balance</p>
          <p className="amount" data-testid="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </li>
      <li className="money-item income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="money-item-image"
        />
        <div className="money-item-text">
          <p className="balance-text">Your Income</p>
          <p className="amount" data-testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </li>
      <li className="money-item expenses">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="money-item-image"
        />
        <div className="money-item-text">
          <p className="balance-text">Your Expenses</p>
          <p className="amount" data-testid="expensesAmount">
            Rs {expensesAmount}
          </p>
        </div>
      </li>
    </ul>
  )
}

export default MoneyItem
