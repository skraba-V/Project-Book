import React from "react";

export default function Take({ icon, line, line2 }) {
  return (
    <div className="col-12">
      <div className="row asdr">
        <div className="col-2 mt-2 iccn">
          <img src={icon} className="iccn" alt="dsmk" />
        </div>
        <div className="col-9">
          <p>
            {line}
            <br />
            {line2}
          </p>
        </div>
      </div>
    </div>
  );
}
