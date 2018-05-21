import React, { Component } from "react";
import productInfo from "./productInfo";
import TopItems from "./topItems";
import LeftSide from "./leftSide/LeftSide";
import RightSide from "./rightSide/RightSide";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterProperties: {
        category: null,
        pricing: [null, null]
      },
      Trending: TopItems,
      productDetails: productInfo
    };
  }
  setCategory = selectedCategory => {
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
  };
  render() {
    let data = this.state.Trending;
    let productDetails = this.state.productDetails;
    if (
      this.state.filterProperties.category == null &&
      this.state.filterProperties.pricing[0] == null
    ) {
      return (
        <div>
          <div className="row lightestgrey">
            <LeftSide
              productDetails={productDetails}
              category={null}
              setCategory={this.setCategory}
              setReset={this.setReset}
              setPricing={this.setPricing}
            />
            <RightSide data={data} />
          </div>
        </div>
      );
    } else {
      let min = this.state.filterProperties.pricing[0];
      let max = this.state.filterProperties.pricing[1];
      let category = this.state.filterProperties.category;
      let products = this.state.productDetails;
      let filteredProducts = [];
      products.map((data, index) => {
        if (data.category == category) {
          if (min != null) {
            if (data.price >= min && data.price <= max) {
              filteredProducts.push(data);
            }
          } else {
            filteredProducts.push(data);
          }
        }
      });
      return (
        <div>
          <div className="row lightestgrey">
            <LeftSide
              productDetails={productDetails}
              setCategory={this.setCategory}
              setPricing={this.setPricing}
              setReset={this.setReset}
              category={this.state.filterProperties.category}
            />
            <RightSide
              data={filteredProducts}
              category={this.state.filterProperties.category}
            />
          </div>
        </div>
      );
    }
  }
}

export default Body;
