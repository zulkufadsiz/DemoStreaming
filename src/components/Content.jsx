import React,{Component} from 'react';
class Content extends Component {
  render(){
    const link = "/"+this.props.data.programType+"/"+this.props.data.title;
    return(
        <div className="col-md-3 col-sm-6 col-lg-2" data-item-id={this.props.id}>
          <figure className="figure">
            <a href={link}>
            <img src={this.props.data.images['Poster Art'].url} className="figure-img img-fluid rounded" alt={this.props.data.title}/>
            <figcaption className="figure-caption text-center text-dark name">{this.props.data.title}</figcaption>
            </a>
          </figure>
        </div>
    );
  }

}

export default Content;
