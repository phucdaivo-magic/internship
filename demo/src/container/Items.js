import React, { Component } from 'react';

class Items extends Component {
    constructor(props){
        super(props);
    }



    render() {
        return (
          <a>Số ghế: {this.props.item.soGhe}</a>
        );
    }
}

export default Items;