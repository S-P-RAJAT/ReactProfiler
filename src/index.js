import React, { Profiler } from "react";
import ReactDOM from "react-dom";

class NewAccountReports extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      FromDate: "",

      ToDate: "",
    };
  }

  handleChange = (e) => {
    let name = e.target.name;

    let value = e.target.value;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to New Accounts Reports Component...</h2>

        <p>
          <label>
            From Date :{" "}
            <input
              type="text"
              name="FromDate"
              onChange={this.handleChange}
              value={this.state.FromDate}
            ></input>
          </label>
        </p>

        <p>
          <label>
            To Date :{" "}
            <input
              type="text"
              name="ToDate"
              onChange={this.handleChange}
              value={this.state.ToDate}
            ></input>
          </label>
        </p>

        <input type="submit" value="Generate"></input>
      </div>
    );
  }
}

class LoansRepaymentReports extends React.Component {
  render() {
    return (
      <div>
        <h2>Welcome to Loans Repayment Reports Component...</h2>
      </div>
    );
  }
}

class ReportsDashboard extends React.Component {
  callbackFunction = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,

    commitTime,
    interaction
  ) => {
    console.log("Id is : " + id + ", Phase is : " + phase);

    console.log(
      "Actual Duration is : " +
        actualDuration +
        " and Base Duration is :" +
        baseDuration
    );
  };
  render() {
    return (
      <React.Fragment>
        <h2>Welcome to Reports Dashboard...</h2>
        <Profiler id="newAccounts" onRender={this.callbackFunction}>
          <NewAccountReports></NewAccountReports>
        </Profiler>

        <LoansRepaymentReports></LoansRepaymentReports>
      </React.Fragment>
    );
  }
}

const element = <ReportsDashboard></ReportsDashboard>;

ReactDOM.render(element, document.getElementById("root"));
