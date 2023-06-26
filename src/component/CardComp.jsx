import React from "react";

function CardComp({ showCart, cartItems, clearCart, products }) {
  console.log(cartItems, "cartItems");
  return (
    <div>
      {showCart && (
        <div className="cart">
          <h1>CART</h1>
          <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên sản phẩm</th>
                <th>Ảnh</th>
                <th>Số lượng</th>
                <th>Giá tiền</th>
                <th>Sửa</th>
                <th>Xóa</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>
                    <img src={item.image_url} alt={item.name}style={{width:'50px',height:'50px'}} />
                  </td>
                  <td>{item.quantity}</td>
                  <td>{item.price * item.quantity}$</td>
                  <td>
                    <button className="btn-del">Update</button>
                  </td>
                  <td>
                    <button className="btn-del" onClick={() => clearCart(item)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h2>Total: </h2>
        </div>
      )}
    </div>
  );
}

export default CardComp;
