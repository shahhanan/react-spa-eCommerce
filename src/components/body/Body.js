import React, { Component } from "react";
import LeftSide from "./leftSide/LeftSide";
import RightSide from "./rightSide/RightSide";
import { getTrendngProducts, getAllProducts } from '../../actions/products';
import { connect } from 'react-redux';

class Body extends Component {
  
  componentWillMount(){
      this.props.getTrendngProducts();
  }
/*  setCategory = selectedCategory => {
    let state = JSON.parse(JSON.stringify(this.state));
    state.filterProperties.category = selectedCategory;
    this.setState(state);
  };
  setPricing = selectedPrice => {
    let state = JSON.parse(JSON.stringify(this.state));
    state.filterProperties.pricing = selectedPrice;
    this.setState(state);
  };
  setReset = () => {
    this.setState({ filterProperties: { category: null, pricing: [null, null] } });
  };   */
  render() {
   
      return (
        <div>
          <div className="row lightestgrey">
            <LeftSide/>
            <RightSide />
          </div>
        </div>
      );
    }
}

export default connect (null, { getTrendngProducts })(Body);
