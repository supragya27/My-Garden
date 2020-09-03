import React, { useState } from "react";
import AvalVar from "./AvalVar";
import PlanVar from "./PlanVar";
import AvalList from "./AvalList";
import PlanList from "./PlanList";
import "../App.css";

export const AV = React.createContext();
export const PV = React.createContext();

function Body() {
  const [AvalFlowers, setAvalFlowers] = useState([
    { imgName: "camellia.jpg", name: "Camellia", id: 1 },
    { imgName: "carnation.jpg", name: "Carnation", id: 2 },
    { imgName: "cyclamen.jpg", name: "Cyclamen", id: 3 },
    { imgName: "daisy.jpg", name: "Daisy", id: 4 },
    { imgName: "forget-me-not.jpg", name: "Forget Me Not", id: 5 },
    { imgName: "iris.jpg", name: "Iris", id: 6 },
    { imgName: "narcissus.jpg", name: "Narcissus", id: 7 },
    { imgName: "orchid.jpg", name: "Orchid", id: 8 },
    { imgName: "pansy.jpg", name: "Pansy", id: 9 },
    { imgName: "poppy.jpg", name: "Poppy", id: 10 },
    { imgName: "rose.jpg", name: "Rose", id: 11 },
    { imgName: "sunflower.jpg", name: "Sunflower", id: 12 },
    { imgName: "tulip.jpg", name: "Tulip", id: 13 },
    { imgName: "violet.jpg", name: "Violet", id: 14 },
  ]);

  const [PlanFlowers, setPlanFlowers] = useState([]);

  return (
    <div>
      <AV.Provider value={{ AvalFlowers, setAvalFlowers }}>
        <PV.Provider value={{ PlanFlowers, setPlanFlowers }}>
          <div className="row">
            <div className="col-sm-2">
              <center>
                <h3>Available Varieties Names</h3>
              </center><br />
              <AvalList />
            </div>
            <div className="col-sm-4 rowtop">
              <center>
                <h1>Shop</h1>
              </center><br />
              <AvalVar />
            </div>
            <div className="col-sm-4 rowtop">
              <center>
                <h1>Garden</h1>
              </center><br />
              <PlanVar />
            </div>
            <div className="col-sm-2 pvn">
              <center>
                <h3>Planted Varieties Names</h3>
              </center><br />
              <PlanList />
            </div>
          </div>
        </PV.Provider>
      </AV.Provider>
      <center>
        <h4 className="warning">
          Click on the flowers in the shop to add them to your garden, and on
          the flowers in the garden to return them.
        </h4>
      </center>
    </div>
  );
}

export default Body;
