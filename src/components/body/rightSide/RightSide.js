import React, { Component } from "react";
import ListItem from './listItem';


class RightSide extends Component {
  render() {
    let { products } = this.props;
    if(this.props.categoryName != undefined){
      var Name = this.props.categoryName;
    }
    
    return (
      <div className="col-md-10 order-md-2">
        <div className="g-pl-15--lg">
          <div className="g-brd-bottom g-brd-gray-light-v4">
            <ul className="group clearfix g-bg-custom">
              <span className="row justify-content-center c-white"> </span>
              <div className="col "style={{ color:'black'}} align="center"> {Name} </div>
              <ListItem products={products} />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default RightSide;
