import React, { Component } from "react";

// components
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";

// json
// import { robots } from "./robots";

// css
import "./App.css";

const LOADING_STATE = {
  LOADING: "Loading...",
  COMPLETED: "",
  ERROR: "An error occurred while loading data."
};

const API_URL = "https://jsonplaceholder.typicode.com/users";
class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: [],
      searchField: "",
      loadingState: LOADING_STATE.LOADING
    };
  }

  componentDidMount() {
    this.setState({ loadingState: LOADING_STATE.LOADING });

    fetch(API_URL)
      .then((res) => res.json())
      .then((robots) =>
        this.setState({ robots: robots, loadingState: LOADING_STATE.COMPLETED })
      )
      .catch(() => this.setState({ loadingState: LOADING_STATE.ERROR }));
  }

  onSearch = (event) => {
    this.setState({
      searchField: event.target.value
    });
  };

  render() {
    const { robots, searchField, loadingState } = this.state;
    const filteredRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="tc">
        <h1 className="f2">Robofriends</h1>
        <SearchBox onSearch={this.onSearch} />
        {!robots.length ? (
          <h3 className="loading-text">{loadingState}</h3>
        ) : (
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        )}
      </div>
    );
  }
}

export default App;
