import React, { useContext } from "react";
import { PV } from "./Body";

function PlanList() {
  const PVar = useContext(PV);
  const emptyList = () => {
    return <h4 className="empty">Empty List</h4>;
  };
  return (
    <div>
      <center>
        <ul>
          {PVar.PlanFlowers.length == 0
            ? emptyList()
            : PVar.PlanFlowers.map((v) => <li key={v.id}>{v.name}</li>)}
        </ul>
      </center>
    </div>
  );
}

export default PlanList;
