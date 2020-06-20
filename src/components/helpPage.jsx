import React, { Component } from "react";
import TemplatePage from "./templatePage";
import "./styles/helpPage.css";
class HelpPage extends Component {
  render() {
    return (
      <TemplatePage
        content={
          <div className="help-content">
            <div>
              <h2>Introduction</h2>
              Tic Tac Toe is Cool!
            </div>
          </div>
        }
      />
    );
  }
}

export default HelpPage;
