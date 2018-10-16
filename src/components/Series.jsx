import React,{Component} from 'react';
import BreadCrumb from './../includes/BreadCrumb';
import DataSource from './../models/sample.json';
import Content from './Content';
class Movies extends Component {

  constructor(props){
    super(props);

    this.state = {
      count:18
    }
  }


  incrementCount = () =>{
  this.setState({count:this.state.count+12});
  }
  render(){
    var a = 0;
    return(
      <div>
        <BreadCrumb title="Popular Series" />
          <div className="content">
          <div id="titles">
            <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="form-group text-center">
                  <label className="col-md-2 text-right">Quick Filter</label>
                  <input className="search col-md-6 text-center" type="text" placeholder="Search series quickly" />
                </div>
              </div>
            </div>
            <div className="row list">
          {DataSource.entries.map((data,i)=>{
            if(data.programType == "series"){
              ++a;
              if(a<=this.state.count){
                return <Content data={data} type="series" id={a} />
              }
            }
          })}
          </div>
          <button onClick={this.incrementCount} className="btn btn-primary mb-3">Load More</button>
        </div>
      </div>
    </div>
      </div>

    );
  }


}
export default Movies;
