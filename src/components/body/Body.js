import React, { Component } from "react";
import LeftSide from "./leftSide";
import RightSide from "./rightSide/RightSide";
import { getTrendngProducts, getAllProducts } from "../../actions/products";
import { connect } from "react-redux";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayProducts: [],
      filterProperties: {
        category: null,
        categoryName: "",
        pricing: {
          currentValue:[0, 1000],   
          step:1,
          min: 0,
          max: 1000
        }
      }
    };
  }

  componentWillMount = () => {
    this.props.getAllProducts();
    this.props.getTrendngProducts();
  }
  componentWillReceiveProps = (nextProps) =>{
    let state = JSON.parse(JSON.stringify(this.state));
    state.displayProducts = nextProps.trendingProducts;
    state.filterProperties.categoryName=  "Trending Products";
    this.setState(state); 
  }
  setCategory = selectedCategory => {
    let  data  = this.props.allProducts;
    let products = [];
        data.map((data, index) => {
            if(data.category == selectedCategory){
             products.push(data);
            }
            
          });  
    let state = JSON.parse(JSON.stringify(this.state));
    state.filterProperties.category = selectedCategory;
    state.displayProducts = products;
    state.filterProperties.categoryName = selectedCategory;
    this.setState(state);
  };
  setElectronics = () => {
    let state = JSON.parse(JSON.stringify(this.state));
    state.displayProducts = this.props.allProducts;
    state.filterProperties.pricing.category = null;
    state.filterProperties.pricing.minPrice = 0;
    state.filterProperties.pricing.maxprice = 1000;
    this.setState(state);
  };
  filteredPricing = (data) =>{
    let response = [];
    let min = this.state.filterProperties.pricing.currentValue[0];
    let max = this.state.filterProperties.pricing.currentValue[1];
    data.map((data, index) => {
      if(data.price > min && data.price < max){
        response.push(data);
      }
    });  
    return response;
  }
    
  setPricing = selectedPrice => {
    let state = JSON.parse(JSON.stringify(this.state));
    state.filterProperties.pricing = selectedPrice;
    this.setState(state);
  };
  setReset = () => {
    let state = JSON.parse(JSON.stringify(this.state));
    state.displayProducts = this.props.trendingProducts;
    state.filterProperties.pricing.category = null;
    state.filterProperties.pricing.min = 0;
    state.filterProperties.pricing.max = 1000;
    state.filterProperties.pricing.currentValue[0] = 0;
    state.filterProperties.pricing.currentValue[1] = 1000;
    state.filterProperties.categoryName=  "Trending Products";
    this.setState(state);
  };   
  changefilterValue = (min, max) =>{
    let state = JSON.parse(JSON.stringify(this.state));
    state.filterProperties.pricing.currentValue[0] = min;
    state.filterProperties.pricing.currentValue[1] = max;
    this.setState(state);
  }
  render() {
    let products = this.props.allProducts;
    let data = this.filteredPricing(this.state.displayProducts);
    let productsData = data
    let filterData = this.state.filterProperties.pricing;
    return (
      <div>
        <div className="row lightestgrey">
          <LeftSide products={products} 
          setCategory={this.setCategory} 
          setElectronics={this.setElectronics}
          setReset={this.setReset}
          changefilterValue={this.changefilterValue}
          filterData={filterData}
          />
          <RightSide 
          products={productsData}
          categoryName={this.state.filterProperties.categoryName}
          />
        </div>
      </div>
    );
  }
}
const mapStateToprops = state => ({
  allProducts: state.products.allProducts,
  trendingProducts: state.products.trendingItems
});

export default connect(
  mapStateToprops,
  { getTrendngProducts, getAllProducts }
)(Body);
