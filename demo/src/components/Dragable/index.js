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
    target: [],
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

  onStart = (e, data) => {
    this.setState({ activeDrags: ++this.state.activeDrags });
  };

  onStop = (e, data) => {
    let [...target] = this.state.target;
    target = target.filter(
      (item) => item.node.innerHTML !== data.node.innerHTML
    );
    target.push(data);
    this.setState({
      activeDrags: --this.state.activeDrags,
      target,
    });

    this.props.getData(this.state.target);
  };

  render() {
    const dragHandlers = {
      onStart: this.onStart,
      onDrag: this.handleDrag,
      onStop: this.onStop,
    };
    return dataArea.map((item, index) => {
      return (
        <DraggableCore {...dragHandlers} key={index} bounds="body">
          <div className="icon-Furniture drag">{item.name}</div>
        </DraggableCore>
      );
    });
  }
}
