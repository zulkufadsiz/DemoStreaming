import React,{Component} from 'react';
import BreadCrumb from './../includes/BreadCrumb';
import Detail from './../includes/Details';
import DataSource from './../models/sample.json';
class Error extends Component {
  render(){
    const title = "Wrong page";
    const style = {
        paddingBottom: "20px"
      };
    return(
      <div>
        <BreadCrumb title={title} />
          <div className="content">
            <div className="container">
              <p>Oops, something went wrong.</p>
            </div>
          </div>
      </div>
    );
  }

}

export default Error;
