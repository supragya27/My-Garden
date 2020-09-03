import React, { useContext, useState } from "react";
import "../App.css";
import { AV, PV } from "./Body";

function AvalVar() {
  const AVar = useContext(AV);
  const PVar = useContext(PV);

  const [count, setCount] = useState(`${AVar.AvalFlowers.length}`);
  const handleSelect = (e) => {
    const elem = document.getElementById(e.target.id);

    AVar.AvalFlowers.map((v) => {
      if (v.id == elem.id) {
        var idx = AVar.AvalFlowers.indexOf(v);
        AVar.AvalFlowers.splice(idx, 1);
        setCount(count - 1);
        PVar.setPlanFlowers([...PVar.PlanFlowers, v]);
      }
    });
  };

  const emptyList = () => {
    return (
      <center>
        <h2 className="empty">No Flowers here</h2>
      </center>
    );
  };

  return (
    <div className="avalvar">
      {AVar.AvalFlowers.length == 0
        ? emptyList()
        : AVar.AvalFlowers.map((flower) => {
            console.log("In map function");
            console.log(
              "array length in map function: " + AVar.AvalFlowers.length
            );
            console.log(AVar.AvalFlowers[0]);
            return (
              <div
                className="flwPanel"
                onClick={handleSelect}
                key={flower.id}
                id={flower.id}
              >
                <img
                  id={flower.id}
                  src={require(`${__dirname}/../assets/${flower.imgName}`)}
                  alt={`${flower.name}`}
                />
                <div className="flowName" id={flower.id}>
                  {flower.name}
                </div>
              </div>
            );
          })}
    </div>
  );
}

export default AvalVar;
