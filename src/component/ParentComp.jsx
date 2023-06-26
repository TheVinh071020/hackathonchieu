import React, { useState } from "react";
import "./Parent.css";
import CardComp from "./CardComp";

const products = [
  {
    name: "BST 50 - Áo thun nam nữ form rộng vải dày mịn logo cá tính cách điệu",
    price: "100",
    description:
      "BST 50 - Áo thun nam nữ form rộng vải dày mịn logo cá tính cách điệu",
    status: true,
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/quanlybanhang-25443.appspot.com/o/uploadImage%2Fp1.jfif5c29ba45-be68-4381-8ae9-42ddfc1b4135?alt=media&token=fc203279-226a-4b55-aee9-d42ccaba382a",
    id: 1,
  },
  {
    name: "Áo thun tay lỡ SADBOI SADTAGRAM unisex nam nữ form rộng vải dày mịn",
    price: "150",
    description:
      "Áo thun tay lỡ SADBOI  SADTAGRAM unisex nam nữ form rộng vải dày mịn",
    status: true,
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/quanlybanhang-25443.appspot.com/o/uploadImage%2Fp5.jfif72209208-1024-41fd-a631-4d2e3a161d13?alt=media&token=0ec0e2e1-7b72-405e-96ef-ff3e2da0fa0f",
    id: 2,
  },
  {
    name: "Áo thun phông nam nâu xám local brand BEEYANBUY T-shirt chất form rộng unisex 100% cotton",
    price: "200",
    description:
      "Áo thun phông nam nâu xám local brand BEEYANBUY T-shirt chất form rộng unisex 100% cotton\n",
    status: true,
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/quanlybanhang-25443.appspot.com/o/uploadImage%2Fp2.jfife8a16bc6-4b7b-4274-a8ba-a436602c8f4c?alt=media&token=170c1a60-d08e-4a90-918c-ca8ffda155d5",
    id: 3,
  },
  {
    name: "Đồ bộ quần áo thun chất liệu tổ ong cao cấp form rộng thoáng mát, thấm hút mồ hôi tốt EDT10",
    price: "400",
    description:
      "Đồ bộ quần áo thun chất liệu tổ ong cao cấp form rộng thoáng mát, thấm hút mồ hôi tốt EDT10\n",
    status: true,
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/quanlybanhang-25443.appspot.com/o/uploadImage%2Fp3.jfifa57042ca-f8fa-4beb-8d4d-35680bd06356?alt=media&token=6d375504-e950-4f73-aa50-7fabbeb7b098",
    id: 4,
  },
  {
    name: "Áo ba lỗ nam Guzado tanktop thể thao khỏe khắn,rộng rãi thoáng mát,vận động thoải mái GTT01",
    price: "125",
    description:
      "Áo ba lỗ nam Guzado tanktop thể thao khỏe khắn,rộng rãi thoáng mát,vận động thoải mái GTT01\n",
    status: true,
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/quanlybanhang-25443.appspot.com/o/uploadImage%2Fp4.jfifd9a07b88-12c8-4b63-ab27-c42630049259?alt=media&token=ec24c6c2-e1bb-4eeb-ba63-031d1c20fa22",
    id: 5,
  },
  {
    name: "Quần đùi nam Guzado GMSR05 vải thun lạnh cao cấp,phong cách trẻ trung khỏe khoắn,co giãn thể thao hay mặc nhà",
    price: "250",
    description:
      "Quần đùi nam Guzado GMSR05 vải thun lạnh cao cấp,phong cách trẻ trung khỏe khoắn,co giãn thể thao hay mặc nhà\n",
    status: true,
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/quanlybanhang-25443.appspot.com/o/uploadImage%2Fp6.jfifa45d18ae-0a2c-4cac-85d2-2cd5e058ccd5?alt=media&token=6ae7efbc-5134-4336-9a78-4b884966fdca",
    id: 6,
  },
  {
    name: "Bộ quần áo thể thao nam đẹp cao cấp LADOS - 7001, vải thun lạnh, mặc nhà, chạy bộ, tập gym",
    price: "500",
    description:
      "Bộ quần áo thể thao nam đẹp cao cấp LADOS - 7001, vải thun lạnh, mặc nhà, chạy bộ, tập gym\n",
    status: true,
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/quanlybanhang-25443.appspot.com/o/uploadImage%2Fp7.jfifaa927bcb-fa59-4533-8d83-1adce771c77d?alt=media&token=a7a58d52-d3c3-44e4-83f8-920baaa1ef14",
    id: 7,
  },
  {
    name: "Bộ quần áo thể thao nam ROUGH kẻ sọc viền vai chất thun CVC thoáng khí",
    price: "450",
    description:
      "Bộ quần áo thể thao nam ROUGH kẻ sọc viền vai chất thun CVC thoáng khí\n",
    status: true,
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/quanlybanhang-25443.appspot.com/o/uploadImage%2Fp8.jfif22d4493f-459d-46b3-8345-e0c95eadcd59?alt=media&token=2b30583e-eeaf-45c2-85ee-71890a9b1d39",
    id: 8,
  },
  {
    name: "Áo sơ mi nam nữ dài tay Unisex Basic màu trắng và đen sơ mi lụa mịn mát form rộng suông ELNIDO-ED03",
    price: "290",
    description:
      "Áo sơ mi nam nữ dài tay Unisex Basic màu trắng và đen sơ mi lụa mịn mát form rộng suông ELNIDO-ED03\n",
    status: true,
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/quanlybanhang-25443.appspot.com/o/uploadImage%2Fp9.png7d52c352-b08f-44c0-81bb-272052c47633?alt=media&token=4bff2837-34b6-491e-8e70-e5395848a0fd",
    id: 9,
  },
  {
    name: "Áo sơ mi trắng trơn unisex dài tay chất lụa mềm nhẹ form rộng phong cách Hàn Quốc SM06 M.RO đi học đi làm",
    price: "350",
    description:
      "Áo sơ mi trắng trơn unisex dài tay chất lụa mềm nhẹ form rộng phong cách Hàn Quốc SM06 M.RO đi học đi làm\n",
    status: true,
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/quanlybanhang-25443.appspot.com/o/uploadImage%2Fp10.jfif84d71d7a-d55f-43a7-af0c-24b321e85c63?alt=media&token=238f7824-ab0f-409b-ba18-252ce3495331",
    id: 10,
  },
];
function ParentComp() {
  const [cartItems, setCartItems] = useState([]);
  const [showListProducts, setShowListProducts] = useState(true);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedItems = cartItems.map((cartItem) => {
        if (cartItem.id === product.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const clearCart = (item) => {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setCartItems(updatedCartItems);
  };

  const handleHomeClick = () => {
    setShowListProducts(true);
    setShowCart(false);
  };

  const handleCartClick = () => {
    setShowListProducts(false);
    setShowCart(true);
  };

  return (
    <div>
      <header>
        <h2 onClick={handleHomeClick}>Home</h2>
        <h2 onClick={handleCartClick}>Card</h2>
      </header>
      <section>
        {showListProducts && (
          <div>
            <h1>LIST PRODUCTS</h1>
            <div className="list-products">
              {products.map((product, i) => (
                <div className="product">
                  <div className="main1" key={i}>
                    <div>
                      <img
                        src={product.image_url}
                        alt={product.name}
                        width={"100%"}
                      />
                    </div>
                    <div>
                      <h4>{product.name}</h4>
                      <p>{product.description}</p>
                      <h3 style={{ fontWeight: "700" }}>{product.price}$</h3>
                      <div className="btn">
                        <input type="number" className="quantity" />
                        <button
                          className="btn-add9"
                          onClick={() => addToCart(product)}
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
      <CardComp
        cartItems={cartItems}
        showCart={showCart}
        clearCart={clearCart}
        products={products}
      />
    </div>
  );
}

export default ParentComp;
