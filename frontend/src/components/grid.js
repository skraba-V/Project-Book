import React from "react";
import Card from "./card";

export default function Grid() {
  return (
    <div className="container">
      <div className="cardsg">
        <div className="d-flex justify-content-center oppr">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="true"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>

            <div className="carousel-inner text-center mrg">
              <div className="carousel-item active">
                <h4 className="sldtext">
                  Modernste Technologien für innovative Lösungen aus Osterreich
                </h4>
              </div>
              <div className="carousel-item">
                <h4 className="sldtext">
                  Digitale Innovationen für effiziente Prozesse aus Österreich
                </h4>
              </div>
              <div className="carousel-item">
                <h4 className="sldtext">
                  Nachhaltige Lösungen für eine grüne Zukunft in Österreich
                </h4>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="container post  d-flex justify-content-center">
          <div className="row">
            <Card source="/assets/laser-machine.svg" text="Lasertechnik" />
            <Card source="/assets/cut.svg" text="Gravurtechnik" />
            <Card source="/assets/laser-machine.svg" text="Tampondruck" />
            <Card source="/assets/transport-2.svg" text="Werbetechnik" />
            <Card source="/assets/stamp.svg" text="Stempel" />
            <Card source="/assets/cup.svg" text="Pokale" />
          </div>
        </div>
      </div>
    </div>
  );
}
