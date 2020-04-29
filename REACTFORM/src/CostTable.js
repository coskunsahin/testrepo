import  React, { useState } from 'react';

import "./CostTable.css";

const _defaultCosts = [
    {
      name: "Rice",
      price: 40,
      model:"volvo"
    },
    {
      name: "Noodle",
      price: 20,
      model:"mercedes"
    }
  ];
  const CostTable = () => {
    const [costs, setCosts] = useState(_defaultCosts);
  
    const handleCostsChange = event => {
      const _tempCosts = [...costs];
      _tempCosts[event.target.dataset.id][event.target.name] = event.target.value;
  
      setCosts(_tempCosts);
    };
  
    const addNewCost = () => {
      setCosts(prevCosts => [...prevCosts, { name: "", price: 0 }]);
    };
  const removeNewCost=()=>{

    setCosts(nextCOST=>[...nextCOST,{name:"",price:-1}]);
  }
    const getTotalCosts = () => {
      return costs.reduce((total, item) => {
        return total + Number(item.price);
      }, 0);
    };


    return (
        <div className="table">
          <div className="table-title">ORDER DETAY</div>
          <div className="table-content">
            <div className="table-header">
              <div className="table-row">
                <div className="table-data">
                  <div>CATEGORI NAME</div>
                </div>
                <div className="table-data">
                  <div>STOCK NUMBER</div>
                </div>
                <div className="table-data">
                  <div>STOCK NAME</div>
                </div>
                <div className="table-data">
                  <div>QUALITY</div>
                </div>
                <div className="table-data">
                  <div>PRICE</div>
                </div>
                <div className="table-data">
                  <div>TUTAR</div>
                </div>
              </div>
            </div>
            <div className="table-body">
              {costs.map((item, index) => (
                <div className="table-row" key={index}>
                <div className="table-data">
                <select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
                
                </div>
                <div className="table-data">
                <select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
                
                </div>
                <div className="table-data">
                <select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
                
                </div>
                  <div className="table-data">
                    <input
                      name="name"
                      data-id={index}
                      type="text"
                      value={item.name}
                      onChange={handleCostsChange}
                    />
                  </div>
                  <div className="table-data">
                    <input
                      name="price"
                      data-id={index}
                      type="number"
                      value={item.price}
                      onChange={handleCostsChange}
                    />
                  </div>
                  <div className="table-data">
                    <input
                      name="price"
                      data-id={index}
                      type="number"
                      value={item.price}
                      onChange={handleCostsChange}
                    />
                  </div>
                </div>
              ))}
              <div className="table-row">
                <div className="table-data">
                  <button onClick={addNewCost}>+</button>
                </div>
                <div className="table-data">
                  <button onClick={removeNewCost}>-</button>
                </div>
              </div>
            </div>
            <div className="table-footer">
              <div className="table-row">
                <div className="table-data">
                  <div>Total</div>
                </div>
                <div className="table-data">
                  <div>{getTotalCosts()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    export default CostTable;
    