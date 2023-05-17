import React from "react";
import "../styles/Info.scss";

export default function Info({ title, source, position, button, margin }) {
  return (
    <div className={position === "left" ? "lkc infoDetails" : "lkc"}>
      <div className="row">
        {margin === "10px" && (
          <div className="col-7 infotext">
            <h3>{title}</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam volupt. Consetetur sadipscing entr, sea alam monumy
              eirmod tempor inviaunt ac laoo
            </p>

            <button className="button button2">{button}</button>
          </div>
        )}
        {margin === "100px" && (
          <div className="col-7 infotext2">
            <h3>{title}</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam volupt. Consetetur sadipscing entr, sea alam monumy
              eirmod tempor inviaunt ac laoo
            </p>

            <button className="button button2">{button}</button>
          </div>
        )}
        {position === "right" && (
          <div className="col-4">
            <div className="mask">
              <img src={source} alt="Bookshelf" />
            </div>
          </div>
        )}
        {position === "left" && (
          <div className="col-4">
            <div className="mask2">
              <img src={source} alt="Bookshelf" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
