import React, { useContext } from "react";
import "../App.css";
import { PV, AV } from "./Body";

function PlanVar() {
  const PVar = useContext(PV);
  const AVar = useContext(AV);

  const handleRemove = (e) => {
    const elem = document.getElementById(e.target.id);
    PVar.PlanFlowers.map((v) => {
      if (v.id == elem.id) {
        var idx = PVar.PlanFlowers.indexOf(v);
        PVar.PlanFlowers.splice(idx, 1);
        AVar.setAvalFlowers([...AVar.AvalFlowers, v]);
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
    <div className="planvar">
      {PVar.PlanFlowers.length == 0
        ? emptyList()
        : PVar.PlanFlowers.map((pv) => (
            <div
              className="flwPanel"
              key={pv.id}
              id={pv.id}
              onClick={handleRemove}
            >
              <img
                src={require(`${__dirname}/../assets/${pv.imgName}`)}
                alt={`${pv.name}`}
                id={pv.id}
              />
              <div className="flowName" id={pv.id}>
                {pv.name}
              </div>
            </div>
          ))}
    </div>
  );
}

export default PlanVar;
