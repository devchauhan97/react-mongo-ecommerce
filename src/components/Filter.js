import React, { Component } from "react";
import { connect } from "react-redux";
import { filterProducts } from "../actions/productActions";

class Filter extends Component {
  render() {
    return   (
      <div className="filter">
        
        <div className="filter-sort">
         
          <input
            value={this.props.search_key}
            onChange={(e) =>
              this.props.filterProducts(
                this.props.filteredProducts,
                e.target.value
              )
            }
          />
        </div>
      </div>
    );
  }
}
export default connect(
  (state) => ({
    key_name: state.products.key_name,
    products: state.products.items,
    filteredProducts: state.products.filteredItems,
  }),
  {
    filterProducts, 
  }
)(Filter);
