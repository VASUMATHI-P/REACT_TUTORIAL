import React, {useState} from 'react'

const OnChangeComponent = () => {
  const [name, setName] = useState('user');
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("delivery")

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  }

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  }

  const handlePaymentChange = (e) => {
    setPayment(e.target.value);
  }

  const handleShippingChange = (e) => {
    setShipping(e.target.value);
  }

  return (
    <>
      <input value={name} onChange={handleNameChange}/>
      <p>Name: {name}</p>

      <input type='number' value={quantity} onChange={handleQuantityChange}/>
      <p>Quantity: {quantity} </p>

      <textarea value={comment} onChange={handleCommentChange}/>
      <p>Comment: {comment}</p>

      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select payment option</option>
        <option value="cash">Cash</option>
        <option value="visa">Visa</option>
      </select>
      <p>Payment Type: {payment}</p>

      <label>
        <input
          type='radio' value="pick up"
          checked={shipping === "pick up"}
          onChange={handleShippingChange}
        />
        Pick up
      </label>
      <label>
        <input
          type='radio' value="delivery"
          checked={shipping === "delivery"}
          onChange={handleShippingChange}
        />
        Delivery
      </label>
      <p>Shipping: {shipping}</p>
    </>
  )
}

export default OnChangeComponent