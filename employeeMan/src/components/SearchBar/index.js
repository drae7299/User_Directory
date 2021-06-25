import React from "react";
//Funtionality to filter is not present unfortunately, could not figure this out 
export default class SearchBar extends React.Component {

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <input
            name="search"
            value={this.props.search}
            onChange={this.props.handleInputChange}
          ></input>

          <button>Search</button>
        </form>
      </div>
    );
  }
}
