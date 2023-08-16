
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { AddOrder,concelOrder } from './redux/reducers/ProductSlice';
import Swal from 'sweetalert2';

function App() {
  const dispatch = useDispatch()
 
  const {orders,stock} = useSelector((state)=>state.products)
  const handleAddOrder = () => {
    if (stock > 0) {
      dispatch(AddOrder());
    } else if(stock==0) {
      Swal.fire({
        icon: 'warning',
        title: "We're out of Lemon 🍋😢",
      });
    }
  };
  const handleConcelOrder = () => {
    if (orders > 0) {
      dispatch(concelOrder());
    } else if(orders==0) {
      Swal.fire({
        icon: 'warning',
        title: "We have no Orders 🍋😢",
      });
    }
  };
  return (
    <>
     <div className='container card p-5 mt-5' style={{boxShadow: 'rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px'}}>
        <h1 className='text-center mt-3'>Lemonade App</h1> 
        <div >
        <h4 className='text-start mt-3' >Orders🍋:{orders} </h4>
        <h4 className='text-end mt-3' >Stock Left 🍋: {stock} </h4>
        </div>
        
        <div className='card mt-3 p-3 mx-auto ' style={{height:'400px',width:'50%',boxShadow:' rgba(0, 0, 0, 0.08) 0px 4px 12px'}} >
        <h2 className='text-center'>Grip Your Lemonade Glass 🥛</h2>
        <hr/>
        <p className='mt-3'>
        "Quench your thirst with a sip of pure delight! Our freshly squeezed lemonade is a burst of citrusy joy that revitalizes your senses. Each glass is a symphony of tangy lemons and just the right amount of sweetness, creating a perfect harmony of flavors. It's a refreshing oasis on a scorching day, crafted with care and served ice-cold to keep you cool. Indulge in this zesty symphony and let your taste buds dance with happiness. One sip, and you'll be transported to a world of summer bliss. Don't miss out – grab your glass of sunshine today!"
        </p>
        <div className='mt-5 d-flex justify-content-around'>
        <button type="button" className="btn btn-outline-success" onClick={handleAddOrder} disabled={stock < 0}>Take the Glass</button>
        <button type="button" className="btn btn-outline-danger" onClick={handleConcelOrder}>Cancel Order</button>
        </div>
        </div>
     </div>
    </>
  );
}

export default App;
