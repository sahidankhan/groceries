import List from './List'
const Grocery = ({item, brand, units, quantity, isPurchased}) => {

    return (
    <div>
    <h2>{item}</h2>
    <p>Brand: {brand}</p>
    <p>Units: {units}</p>
    <p>Quantity: {quantity}</p>
    <p>Purchased: {isPurchased}</p>
    
    </div>)
      
    }

export default Grocery