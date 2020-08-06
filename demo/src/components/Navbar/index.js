import React, { Component } from "react";
import dataTab from "../../data/tab";
import dataArea from "../../data/area";
import RightArea from "../../components/RightArea/index";
import "./style.scss";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArea: dataArea,
      saveData: [],
      clicked: false,
    };
  }

  componentDidMount() {
    let { dataArea } = this.state;
    dataArea.map((item) => {
      item["clicked"] = false;
    });
    this.setState({ dataArea });
  }

  handleSaveData = (e) => {
    this.setState({ saveData: e });
  };

  renderItems = () => {
    let { dataArea, saveData } = this.state;
    if (saveData.length) {
      saveData.map((item, index) => {
        dataArea.map((ite, idx) => {
          if (ite.id === item.id) {
            ite["clicked"] = true;
          }

          return dataArea;
        });
        // return (
        //   <div
        //     className={element.className + " icon-view"}
        //     style={{
        //       transform: `translate(${item.x}px, ${item.y}px)`,
        //     }}
        //     key={index}
        //   >
        //     {element.innerHTML}
        //   </div>
        // );
      });

      this.setState({
        dataArea,
      });

      // ReactDOM.render(saveDataArea, document.getElementById("description"));
    }
  };

  renderTab = () =>
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

  renderContentTab = () =>
    dataTab.map((item, index) => (
      <div
        className={index === 0 ? "tab-pane fade show active" : "tab-pane fade"}
        id={`pills-${item.id}-fill`}
        role="tabpanel"
        key={index}
      >
        <div className="container-fluid area">
          {item.id == "ban" ? (
            <div className="row area-table">
              <div className="area-left">
                <div className="area-content">
                  <div className="title">
                    <h4>Khu vực 1</h4>
                    <i className="far fa-calendar-alt"></i>
                  </div>
                  {/* <div className="description" id="description"></div> */}
                  <div className="bottom-btn">
                    <button type="text">Trở về</button>
                    <button type="text" onClick={this.renderItems}>
                      Lưu
                    </button>
                  </div>
                </div>
              </div>
              <RightArea
                getData={this.handleSaveData}
                data={this.state.dataArea}
                clicked={this.state.clicked}
              />
            </div>
          ) : (
            item.name
          )}
        </div>
      </div>
    ));

  render() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();

    today = dd + "/" + mm + "/" + yyyy;

    return (
      <div className="myDemo">
        <div className="navbar">
          <div className="trademark">
            <i className="fas fa-hard-hat"></i>
            <h3>Nhà hàng nhật bản</h3>
          </div>
          <ul
            className="nav nav-pills mb-3 nav-fill"
            id="pills-tab-1"
            role="tablist"
          >
            {this.renderTab()}
          </ul>
          <div className="func">
            Ngày {this.today}
            <div>
              <i className="fa fa-stopwatch"></i>
            </div>
            <div>
              <i className="fa fa-sign-out-alt"></i>
            </div>
          </div>
        </div>
        <div className="tab-content" id="pills-tabContent-1">
          {this.renderContentTab()}
        </div>
      </div>
    );
  }
}
