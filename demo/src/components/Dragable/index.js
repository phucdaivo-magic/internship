import React, { Component } from "react";
import DraggableCore from "react-draggable";
import dataArea from "../../data/area";
import "./style.scss";

export default class Dragable extends Component {
  state = {
    activeDrags: 0,
    deltaPosition: {
      x: 0,
      y: 0,
    },
    controlledPosition: {
      x: -400,
      y: 200,
    },
  };

  handleDrag = (e, ui) => {
    const { x, y } = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      },
    });
  };

  onStart = () => {
    this.setState({ activeDrags: ++this.state.activeDrags });
  };

  onStop = () => {
    this.setState({ activeDrags: --this.state.activeDrags });
  };

  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    return dataArea.map((item, index) => (
      <DraggableCore {...dragHandlers} key={index}>
        <div>
          <div className="handle icon-Furniture drag">{item.name}</div>
        </div>
      </DraggableCore>
    ));
  }
}
