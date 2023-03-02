import React from "react";
import "./Cart.scss";
import { AiOutlineDelete } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () =>{
    let total = 0
    products.forEach((item) => (total += item.quantity * item.price));
    return total
  }

  return (
    <motion.div
      animate={{ x: -40 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className="cart"
    >
      <h3>Products in your cart</h3>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
          <div className="details">
            <h4>{item.title}</h4>
            <div className="price">{item.quantity} x {item.price} Czk</div>
            <AiOutlineDelete className="delete" onClick={()=>dispatch(removeItem(item.id))}/>
          </div>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>{totalPrice()}Czk</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={()=>dispatch(resetCart())}>Reset cart</span>
    </motion.div>
  );
};

export default Cart;
