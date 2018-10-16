import React,{Component} from 'react';
import BreadCrumb from './../includes/BreadCrumb';
import Detail from './../includes/Details';
import DataSource from './../models/sample.json';
class Next extends Component {
  render(){
    const title = this.props.match.params.content;
    const style = {
        paddingBottom: "20px"
      };
    return(
      <div>
        <BreadCrumb title={title} />
          <div className="content">
            <div className="container" style={style}>
              {DataSource.entries.map((data,i)=>{
                if(data.title == title){
                    return <Detail data={data} />
                }
              })}
            </div>
          </div>
      </div>
    );
  }

}

export default Next;
