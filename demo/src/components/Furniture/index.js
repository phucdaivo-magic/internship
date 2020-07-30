import React, { Component } from "react";
import dataArea from "../../data/area";
import GridLayout from "react-grid-layout";
import "./style.scss";

export default class Furniture extends Component {
  constructor(props) {
    super(props);

    const layout = this.generateLayout();
    this.state = { layout };
  }

  generateLayout() {
    return dataArea.map((item, index) => {
      var y = Math.ceil(Math.random() * 4) + 1;
      return {
        i: index.toString(),
        x: Math.round(Math.random() * 5) * 2,
        y: parseInt(index / 4),
        w: 1,
        h: 2,
      };
    });
  }
  render() {
    console.log(this.state.layout);
    return (
      <div style={{ backgroundColor: "#202831" }}>
        <div className="input-group p-2">
          <input type="text" className="form-control" placeholder="Search" />
          <div className="input-group-append">
            <button type="submit">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
        <GridLayout
          className="layout"
          layout={this.state.layout}
          cols={4}
          rowHeight={30}
          width={314}
          verticalCompact={false}
        >
          {dataArea.map((item, index) => (
            <div className="icon-Furniture drag" key={index}>
              {item.name}
            </div>
          ))}
        </GridLayout>
      </div>
    );
  }
}
