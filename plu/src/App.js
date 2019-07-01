import React, { Component, Fragment } from 'react';
// import {OutTable, ExcelRenderer} from 'react-excel-renderer';

class Form extends Component {
      state = {
          aps: ''
      }

      handleChange = (event) => {
          this.setState({aps: event.target.value});
      }

      handleSubmit = (event) => {
          event.preventDefault();
          // console.log(this.state);
      //    const filepath = '../dummydata.csv'
      //    ExcelRenderer(filepath, (err, response) => {
      //     if(err){
      //       console.log(err);            
      //     }
      //     else{
      //       this.setState({
      //         cols: response.cols,
      //         rows: response.rows
      //       });
      //     }
      //   });       
      }



      render(){
      return (
        <Fragment>
          <div className="card container-fluid">
            <div className="card-body row justify-content-md-center">
              <form onSubmit={this.handleSubmit} className="form-inline">
                
                <div className="form-group">
                  <div className="col col-lg-auto">
                    <label htmlFor="aps">APS Number: </label>
                  </div>
                  
                  <div className="col-md-auto">
                    <input type="text" placeholder="Enter a valid APS number" className="form-control" id="aps" onChange={this.handleChange}/>
                  </div>
                  
                </div>
                  
                <div className="col col-lg-2">
                  <button type="submit" className="btn btn-primary">Search</button>
                </div>
                
              </form>
            </div>
          </div> 

          <div className="container">
            {/* <OutTable data={this.state.rows} columns={this.state.cols} tableClassName="ExcelTable2007" tableHeaderRowClass="heading" /> */}
            <div className="row">
              <div className="col-sm">

              </div>
              <div className="col-sm">

              </div>
            </div>

          </div>
        </Fragment>   
      )
  }
}

export default Form;
