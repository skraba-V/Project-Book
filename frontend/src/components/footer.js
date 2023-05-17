import React from "react";

export default function Footer() {
  return (
    <div className="d-flex align-itms-end">
      <footer style={{ bottom: "0", width: "100%" }}>
        <div className="d-flex justify-content-center">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
              <a className="aedt" href="/">
                <h6 className="p-5">Foobar</h6>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 p-5 d-flex justify-content-center">
              <a className="aedt" href="/">
                <h6>Über uns</h6>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
              <a className="aedt" href="/">
                <h6 className="p-5">Kontact</h6>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
              <a className="aedt" href="/">
                <h6 className="p-5">Impessum</h6>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p> ⓒ Copyright 2016 Peritus Webdesign</p>
        </div>
      </footer>
    </div>
  );
}
