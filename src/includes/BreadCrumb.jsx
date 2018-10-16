import React,{Component} from 'react';

class BreadCrumb extends Component {
  render(){
    const style = {
        paddingLeft: 0,
        paddingRight: 0
      };
    return(
      <div>
           <nav className="bg-dark" aria-label="breadcrumb">
             <div className="container">
               <ol className="breadcrumb bg-dark" style={style}>
                 <li className="breadcrumb-item active" aria-current="page">{this.props.title}</li>
               </ol>
             </div>
           </nav>
      </div>

    );
  }

}

export default BreadCrumb;
