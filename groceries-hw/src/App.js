import './App.css';
import Grocery from './components/Grocery'



const App = () => {

  const milk = {
    name: "Milk",
    brand: "Silk",
    units: 1,
    quantity:1,
    isPurchased: false
  }

  const eggs = {
    name: "Eggs",
    brand: "Local",
    units: 1,
    quantity:12,
    isPurchased: false
  }

  const butter = {
    name: "Butter",
    brand: "Country",
    units: 1,
    quantity:1,
    isPurchased: false
  }

return(
    <div>
    <h1>Grocery List</h1>

    <Grocery 
    
          item={milk.name}
          brand={milk.brand}
          units={milk.units}
          quantity={milk.quantity}
          isPurchased={milk.isPurchased}
          
        />
    <Grocery 
    
    item={eggs.name}
    brand={eggs.brand}
    units={eggs.units}
    quantity={eggs.quantity}
    isPurchased={eggs.isPurchased}
    
  />
  <Grocery 
    
    item={butter.name}
    brand={butter.brand}
    units={butter.units}
    quantity={butter.quantity}
    isPurchased={butter.isPurchased}
    
  />
    <List/>

    </div>
  )



  }

export default App;
