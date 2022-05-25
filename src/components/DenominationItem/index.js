import './index.css'

const DenominationItem = Props => {
  const {DenominationItemDetails, updateBalance} = Props
  const {values} = DenominationItemDetails

  const OnClickDomination = () => {
    updateBalance(values)
  }

  return (
    <li className="DenominationContainer">
      <button type="button" className="Values" onClick={OnClickDomination}>
        {values}
      </button>
    </li>
  )
}

export default DenominationItem
