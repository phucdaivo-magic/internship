import React from "react";
import "./style.scss";
import dataTab from "../../data/tab";
import Area from "../Area/index";
import Furniture from "../Furniture/index";
import Card from "../../components/Test";

const index = () => {
  const renderTab = () =>
    dataTab.map((item, index) => (
      <li className="nav-item" key={index}>
        <a
          className={index === 0 ? "nav-link active" : "nav-link"}
          id={`pills-${item.id}-tab-fill`}
          data-toggle="pill"
          href={`#pills-${item.id}-fill`}
          role="tab"
        >
          {item.name}
        </a>
      </li>
    ));

  const renderContentTab = () =>
    dataTab.map((item, index) => (
      <div
        className={index === 0 ? "tab-pane fade show active" : "tab-pane fade"}
        id={`pills-${item.id}-fill`}
        role="tabpanel"
        key={index}
      >
        <div className="container-fuild">
          {item.id == "ban" ? (
            <div className="row">
              {/* <div className="flexbox col-9">
                <Area id="broad-1" className="broad">
                  <Card id="card-1" className="card" draggable="true">
                    <p>Card one</p>
                  </Card>
                </Area>

                <Area id="broad-2" className="broad">
                  <Card id="card-2" className="card" draggable="true">
                    <p>Card two</p>
                  </Card>
                </Area>
              </div> */}
              <div className="col-9">
                <h3
                  style={{
                    backgroundColor: "#626e80",
                    textAlign: "left",
                    color: "#ffffff",
                  }}
                >
                  Khu vực 1
                </h3>
              </div>
              <div className="col-3">
                <Furniture />
              </div>
            </div>
          ) : (
            item.name
          )}
        </div>
      </div>
    ));

  return (
    <div className="myNavbar">
      <ul
        className="nav nav-pills mb-3 nav-fill"
        id="pills-tab-1"
        role="tablist"
      >
        {renderTab()}
      </ul>
      <div className="tab-content" id="pills-tabContent-1">
        {renderContentTab()}
      </div>
    </div>
  );
};

export default index;
