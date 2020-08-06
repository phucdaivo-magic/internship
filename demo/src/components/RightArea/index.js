import React, { Component } from "react";
import DraggableCore from "react-draggable";
import "./style.scss";

export default class RightArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saveData: [],
      dataPosition: [],
    };
  }

  componentDidMount() {
    let { dataPosition } = this.state;
    dataPosition = this.props.data;
    dataPosition.map(
      (item, index) => (item["defaultPosition"] = { x: 0, y: 0 })
    );

    this.setState({ dataPosition });
  }

  onStart = (e, data) => {};

  handleDrag = (e, ui) => {};

  onStop = (e, data, content) => {
    // let { target } = this.state;
    // target = target.filter(
    //   (item) => item.node.innerHTML !== data.node.innerHTML
    // );
    // target.push({
    //   ...data,
    //   x: data.node.getBoundingClientRect().x,
    //   y: data.node.getBoundingClientRect().y,
    // });
    // this.setState({
    //   activeDrags: --this.state.activeDrags,
    //   target,
    // });
    // console.log(target);
    // this.props.getData(this.state.target);

    let { saveData, dataPosition } = this.state;

    if (saveData.length) {
      let index = saveData.findIndex((item) => item.id === content.id);

      if (index === -1 && this.checkPosition(e.screenX)) {
        saveData.push(content);
      } else if (index !== -1 && !this.checkPosition(e.screenX)) {
        saveData.splice(index, 1);
      }
    } else if (this.checkPosition(e.screenX)) {
      saveData.push(content);
    }

    dataPosition.map((item, index) => {
      if (content.id === item.id)
        item.defaultPosition = { x: e.screenX, y: e.screenX };
    });

    this.setState({
      saveData,
      dataPosition,
    });

    this.props.getData(saveData);
  };

  checkPosition = (x) => {
    return x < 966 ? true : false;
  };

  renderDraggable = () => {
    const dragHandlers = {
      onStart: this.onStart,
      onDrag: this.handleDrag,
    };

    const { dataPosition } = this.state;
    return (
      dataPosition.length &&
      this.props.data.map((item, index) => (
        <DraggableCore
          {...dragHandlers}
          onStop={(e, data) => this.onStop(e, data, item)}
          key={index}
          bounds=".furniture"
          disabled={item.clicked}
          position={
            dataPosition[index].defaultPosition.x > 965 && !item.clicked
              ? { x: 0, y: 0 }
              : null
          }
        >
          <div
            className={item.clicked ? "icon-Furniture" : "icon-Furniture drag"}
          >
            {item.name}
          </div>
        </DraggableCore>
      ))
    );
  };

  render() {
    return (
      <div className="area-right">
        <div className="searchbox">
          <div className="input-group p-2">
            <input
              type="text"
              className="form-control"
              placeholder="Nhập tên bàn hoặc số ghế"
            />
            <div className="input-group-append">
              <button type="submit">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
          <div className="furniture">
            <div
              style={{
                width: "350px",
                float: "right",
                padding: "0 35px",
                height: "450px",
              }}
            >
              {this.renderDraggable()}
            </div>
          </div>
          <div className="infor text-white d-inline-block">
            <button type="text">Bàn</button>
            <button type="text">Thông tin phụ</button>
          </div>
        </div>
      </div>
    );
  }
}
