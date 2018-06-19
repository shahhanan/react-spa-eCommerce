/*

-------
API
--------
  static getDeviceCredentials() {
    return axios
      .get(BASE_URL + CONFIGURE_DEVICE_PASSWORD)
      .then(response => {
        if (response.data) {
          let credentials = response.data || [];
          credentials = map(credentials, function(credential) {
            credential.type = "DEV_AUTH";
            return pick(credential, [
              "templateName",
              "templateDescription",
              "passwordIsEnabled",
              "deviceCredentialTemplateId",
              "type"
            ]);
          });
          return credentials;
        }
      })
      .catch(error => {
        return error;
      });
  }
  

  
-------
Action 
--------
import * as ACTION_TYPES from "../Core/Constants/ActionTypes";
function loadDeviceCredentialsSuccess(credentials) {
  return { type: ACTION_TYPES.GET_DEVICE_CREDENTIALS_SUCCUESS, credentials };
}
export function loadDeviceCredentials() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return CredentialManagerApi.getDeviceCredentials()
      .then(credentials => {
        dispatch(loadDeviceCredentialsSuccess(credentials));
      })
      .catch(error => {
        throw error;
      });
  };
}




---------------
Reducer
----------------
import { combineReducers } from "redux";
import * as ACTION_TYPES from "../Core/Constants/ActionTypes";
import initialState from "../../state";
function deviceCredentials(state = initialState.deviceCredentials, action) {
  switch (action.type) {
    case ACTION_TYPES.GET_DEVICE_CREDENTIALS_SUCCUESS:
      return Object.assign([], state, action.credentials);
    default:
      return state;
  }
}
---------------------
Combine Reducer
---------------------
import { combineReducers } from "redux";
const rootReducer = combineReducers({
    deviceCredentials
});
export default rootReducer;



---------------
State
----------------
export default {
  deviceCredentials: []
};



--------------
Store
---------------
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import thunk from "redux-thunk";
export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}


*/

/*
constructor(props) {
  super(props);
  this.state = {
    filterProperties: {
      category: null,
      pricing: [null, null]
    },
    trendingProductItems: trendingItems,
    allProductItems: allProducts
  };
}




import { GET_TRENGING_ITEMS, GET_All_ITEMS } from '../actions/products'

function setProducts(state, action){
    switch (action.type) {
        case GET_TRENGING_ITEMS:
           // do something here 
           return state
        case GET_All_ITEMS:
          // do something here   
        return object.assign({}, state, {}) // change the sate using object.assign() function.
        default:
        return state
    }
        
}


*/




/* 
 let data = this.state.trendingProductItems;
    let productDetails = this.state.allProductItems;
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
      let products = this.state.allProductItems;
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
*/