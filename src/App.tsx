import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import {getTodos} from './actions/todoAction';
import {AppProps, AppState} from "./actions/interface";
import {Route, Link} from "react-router-dom"
import PageNotFound from "./PageNotFound";

export class App extends React.Component<AppProps, AppState> {

  state = {
    isLoading: false
  };

  simpleAction = () => {
    this.props.getTodos();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <pre>
          {
            JSON.stringify(this.props)
          }
        </pre>
          <button onClick={this.simpleAction}>Test redux action</button>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Link to="/404">
            Learn React
          </Link>
          <Route path="/404" exact component={PageNotFound}/>
        </header>
      </div>
    );
  }
};

const mapStateToProps = (state: any) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch: Function) => ({
  getTodos: () => dispatch(getTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
