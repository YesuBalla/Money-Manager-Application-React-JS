import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import MoneyItem from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    transactionsList: [],
    titleInput: '',
    amountInput: '',
    typeInput: transactionTypeOptions[0].optionId,
  }

  onSubmitTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, typeInput} = this.state
    const transactionType = transactionTypeOptions.find(
      eachType => eachType.optionId === typeInput,
    )
    console.log(transactionType)
    const newTransaction = {
      id: uuidv4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: transactionType.displayText,
    }
    if (titleInput !== '' && amountInput !== '') {
      this.setState(prevState => ({
        transactionsList: [...prevState.transactionsList, newTransaction],
        titleInput: '',
        amountInput: '',
        typeInput: transactionTypeOptions[0].displayText,
      }))
    }
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeType = event => {
    this.setState({typeInput: event.target.value})
  }

  getExpensesAmount = () => {
    const {transactionsList} = this.state
    let expensesAmount = 0

    transactionsList.forEach(transaction => {
      if (transaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += transaction.amount
      }
    })

    return expensesAmount
  }

  getIncomeAmount = () => {
    const {transactionsList} = this.state
    let incomeAmount = 0

    transactionsList.forEach(transaction => {
      if (transaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += transaction.amount
      }
    })
    return incomeAmount
  }

  getBalanceAmount = () => {
    const {transactionsList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0

    transactionsList.forEach(transaction => {
      if (transaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += transaction.amount
      } else {
        expensesAmount += transaction.amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount
    return balanceAmount
  }

  onDeleteTransaction = id => {
    const {transactionsList} = this.state
    const filteredList = transactionsList.filter(
      transaction => transaction.id !== id,
    )
    this.setState({transactionsList: filteredList})
  }

  render() {
    const {transactionsList, titleInput, amountInput, typeInput} = this.state
    const balanceAmount = this.getBalanceAmount()
    const incomeAmount = this.getIncomeAmount()
    const expensesAmount = this.getExpensesAmount()
    return (
      <div className="app-container">
        <div className="money-manager">
          <div className="welcome-container">
            <h1 className="welcome-name">Hi, Richard</h1>
            <p className="welcome-description">
              Welcome back to your{' '}
              <span className="welcome-highlighted-text">Money manager</span>
            </p>
          </div>
          <MoneyItem
            balanceAmount={balanceAmount}
            incomeAmount={incomeAmount}
            expensesAmount={expensesAmount}
          />
          <div className="content-container">
            <div className="add-transaction-container">
              <h1 className="add-transaction-heading">Add Transaction</h1>
              <form
                className="transaction-input-container"
                onSubmit={this.onSubmitTransaction}
              >
                <label htmlFor="title" className="label-text">
                  TITLE
                </label>
                <input
                  id="title"
                  placeholder="Title"
                  className="input-element"
                  onChange={this.onChangeTitle}
                  value={titleInput}
                />
                <label htmlFor="amount" className="label-text">
                  AMOUNT
                </label>
                <input
                  id="amount"
                  placeholder="Amount"
                  className="input-element"
                  onChange={this.onChangeAmount}
                  value={amountInput}
                />
                <label htmlFor="type" className="label-text">
                  TYPE
                </label>
                <select
                  id="type"
                  className="input-element"
                  onChange={this.onChangeType}
                  value={typeInput}
                >
                  <option value={transactionTypeOptions[0].optionId}>
                    {transactionTypeOptions[0].displayText}
                  </option>
                  <option value={transactionTypeOptions[1].optionId}>
                    {transactionTypeOptions[1].displayText}
                  </option>
                </select>
                <button type="submit" className="add-button">
                  Add
                </button>
              </form>
            </div>
            <div className="history-container">
              <h1 className="history-title">History</h1>
              <ul className="history-table-container">
                <li className="history-title-row">
                  <p className="column-name">Title</p>
                  <p className="column-name">Amount</p>
                  <p className="column-name">Type</p>
                </li>
                {transactionsList.map(transaction => (
                  <TransactionItem
                    transactionDetails={transaction}
                    key={transaction.id}
                    onDeleteTransaction={this.onDeleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
