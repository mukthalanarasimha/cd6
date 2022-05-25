import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.state
    const {balance} = this.state
    return (
      <div className="bg_container">
        <div className="min_container">
          <div className="profileNameContainer">
            <div className="profileName">
              <h1 className="profile_letter">s</h1>
            </div>
            <div>
              <p className="nameOfPerson">Sarah Williams</p>
            </div>
          </div>
          <div className="initialAmount">
            <div>
              <p>Your Balance</p>
            </div>
            <div>
              <p>{balance}</p>
              <p>In Rupees</p>
            </div>
          </div>
          <div>
            <h1>Withdraw</h1>
            <p>CHOOSE SUM (IN RUPEES)</p>
            <ul>
              {denominationsList.map(eachList => (
                <DenominationItem
                  key={eachList.id}
                  DenominationItemDetails={eachList}
                  updatebalance={this.updateBalance}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
