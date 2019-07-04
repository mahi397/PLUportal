import React, { Component } from "react";
// import ReactDOM from 'react-dom';

class Portal extends Component {
  state = {
    aps: "",
    showLeft: false,
    showRight: false,
    data: [
      {
        "APSNumber": "1234abcd",
        "CustomerCIN": "1029384756",
        "Flag": "TRUE",
        "BotTimestamp": "4/30/2019 11:22:33"
      },
      {
        "APSNumber": "2345bcde",
        "CustomerCIN": "5647382910",
        "Flag": "TRUE",
        "BotTimestamp": "5/24/2019 22:33:44"
      },
      {
        "APSNumber": "2345bcde",
        "CustomerCIN": "5647382910",
        "Flag": "FALSE",
        "BotTimestamp": "2/3/2019 6:34:32"
      },
      {
        "APSNumber": "3456cdef",
        "CustomerCIN": "1920374855",
        "Flag": "TRUE",
        "BotTimestamp": "1/23/2019 12:13:14"
      },
      {
        "APSNumber": "4567defg",
        "CustomerCIN": "0002736454",
        "Flag": "TRUE",
        "BotTimestamp": "2/2/2019 21:34:45"
      },
      {
        "APSNumber": "4567defg",
        "CustomerCIN": "0002736454",
        "Flag": "TRUE",
        "BotTimestamp": "3/4/2019 23:03:40"
      }
    ]
  };

  // componentDidMount() {
  //   // Call our fetch function below once the component mounts
  //   this.callBackendAPI()
  //     .then(res => this.setState({ data: res.express }))
  //     .catch(err => console.log(err));
  // }
  // // Fetches our GET route from the Express server. 
  // // (Note the route we are fetching matches the GET route from server.js
  // callBackendAPI = async () => {
  //   const response = await fetch("/");
  //   const body = await response.json();

  //   if (response.status !== 200) {
  //     throw Error(body.message);
  //   }
  //   return body;
  // };

  handleChange = event => {
    this.setState({ aps: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { aps } = this.state;
    if (aps === "1") {
      console.log(aps);
      this.setState({ showLeft: true });
    }
    if (aps === "2") {
      this.setState({ showLeft: true, showRight: true });
    }
  };

  render() {
    const { showLeft, showRight } = this.state;
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="https://www.rbs.com">
            {/* <img src="../public/rbs-white-background-large-2.jpg" width="30" height="30" class="d-inline-block align-top" alt="" /> */}
            RBS
          </a>
        </nav>
        <div className="card">
          <div className="card-body row justify-content-md-center">
            <form onSubmit={this.handleSubmit} className="form-inline">
              <div className="form-group">
                <div className="col col-lg-auto">
                  <label htmlFor="aps">APS Number: </label>
                </div>

                <div className="col-md-auto">
                  <input
                    type="text"
                    placeholder="Enter a valid APS number"
                    className="form-control"
                    id="aps"
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="col col-lg-2">
                <button type="submit" className="btn btn-primary">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
        <div>&nbsp;</div>
        <div className="card" style={{ border: "0px", borderRadius: "0px" }}>
          <div className="row">
            <div className="col-lg">
              <div>
                <h3 className="justify-content-md-center">Main Applicant</h3>
              </div>
              
              <div>{showLeft && <Table data={this.state.data}/>}</div>
            </div>
            <div className="col-lg">
              <div>
                <h3 className="justify-content-md-center">Joint Applicant</h3>
              </div>
              <div>{showRight && <Table data={this.state.data}/>}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/*
const Table = () => {
  return (
    <table className="table">
      <tbody>
        <tr>
          <th scope="col">APS Number</th>
          <th scope="col">Cutomer CIN</th>
          <th scope="col">Flag</th>
          <th scope="col">Bot Timestamp</th>
        </tr>
      </tbody>
    </table>
  );
};

 //first add an event listener for page load
 document.addEventListener( "DOMContentLoaded", get_json_data, false ); // get_json_data is the function name that will fire on page load

 //this function is in the event listener and will execute on page load
 function get_json_data(){
     // Relative URL of external json file
     var json_url = 'dummy.json';

     //Build the XMLHttpRequest (aka AJAX Request)
     xmlhttp = new XMLHttpRequest();
     xmlhttp.onreadystatechange = function() { 
         if (this.readyState == 4 && this.status == 200) {//when a good response is given do this

             var data = JSON.parse(this.responseText); // convert the response to a json object
             append_json(data);// pass the json object to the append_json function
         }
     }
     //set the request destination and type
     xmlhttp.open("POST", json_url, true);
     //set required headers for the request
     xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
     // send the request
     xmlhttp.send(); // when the request completes it will execute the code in onreadystatechange section
 }

 //this function appends the json data to the table 'gable'
 function append_json(data){
     var table = document.getElementById('table');
     data.forEach(function(object) {
         var tr = document.createElement('tr');
         tr.innerHTML = '<td>' + object.APSNumber + '</td>'+
         '<td>' + object.CustomerCIN + '</td>' +
         '<td>' + object.Flag + '</td>' +
         '<td>' + object.BotTimestamp + '</td>';
         table.appendChild(tr);
     });
 }
*/
export default Portal;
