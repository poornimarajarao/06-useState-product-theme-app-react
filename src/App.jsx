import { useState } from "react";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Table from "./Components/Table"

function App() {
  let [isDark, setIsDark] = useState(false);

  function handleTheme() {
    setIsDark(!isDark);
  }

  let [Products, setProducts] = useState(
    [{ ProductName: "Wall Clock", PId: 101, Price: "₹600",qty:0},
    { ProductName: "Laptop", PId: 103, Price: " ₹20,000",qty:0 },
    { ProductName: "Backpack", PId: 104, Price: "₹1000",qty:0 },
    { ProductName: "Chair", PId: 105, Price: "₹400",qty:0 },
    { ProductName: "Sofa", PId: 106, Price: "₹15000" ,qty:0},
    ])

   const handleIncrement = (id) => {
    setProducts(prev => prev.map(p => p.PId === id ? { ...p, qty: p.qty + 1 } : p));
  };

  const handleDecrement =(id) => {
    setProducts(prev => prev.map(p => p.PId === id ? { ...p, qty: Math.max(p.qty - 1, 0) } : p)
    );
  };

  return (
    <>
      <Navbar handleTheme={handleTheme} theme={isDark} />
      <Section theme={isDark} />

      <div className="container-fluid mt-4">
        <div className="row justify-content-center">
          <div className="col-md-6">
            
              <table className={`table table-bordered text-center ${isDark ? "table-dark" : ""}`}>

              <thead >
                <tr>
                  <th>Product Name</th>
                  <th>Product ID</th>
                  <th>Price</th>
                  <th>Qty</th>
                </tr>
              </thead>
              <tbody>
                {Products.map((Product) => (
                  <Table data={Product}
                    Increment={handleIncrement}
                    Decrement={handleDecrement}
                    theme={isDark}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
