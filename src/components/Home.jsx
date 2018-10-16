import React,{Component} from 'react';
import BreadCrumb from './../includes/BreadCrumb';
class Home extends Component {

  render(){

    return(
      <div>
      <BreadCrumb title="Popular Titles" />
      <div className="content">
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                  <a href="/series">
                    <div className="scene bg-dark">
                      <div className="centered">SERIES</div>
                      <img src="/images/placeholder.png" />
                    </div>
                    <figcaption className="figure-caption text-center text-dark">Popular Series</figcaption>
                  </a>
                </div>
                <div className="col-md-2">
                  <a href="/movie">
                    <div className="scene bg-dark">
                      <div className="centered">MOVIES</div>
                      <img src="/images/placeholder.png" />
                    </div>
                    <figcaption className="figure-caption text-center text-dark">Popular Movies</figcaption>
                  </a>
                </div>
            </div>
        </div>
      </div>
      </div>
    );
  }

}

export default Home;
