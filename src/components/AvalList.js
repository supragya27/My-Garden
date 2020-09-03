import React, { useContext } from "react";
import { AV } from "./Body";

function AvalList() {
  const AVar = useContext(AV);
  const emptyList = () => {
    return <h4 className="empty">Empty List</h4>;
  };
  return (
    <div>
      <center>
        <ul>
          {AVar.AvalFlowers.length == 0
            ? emptyList()
            : AVar.AvalFlowers.map((v) => <li key={v.id}>{v.name}</li>)}
        </ul>
      </center>
    </div>
  );
}

export default AvalList;
