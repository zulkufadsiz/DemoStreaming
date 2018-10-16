import React,{Component} from 'react';
class Next extends Component {
  render(){
    return(
        <div class="panel panel-primary">
            <div class="panel-heading"></div>
            <div class="panel-body"></div>
            <div class="row">
              <div class="col-md-3">
                <img class="card-img-top" src={this.props.data.images['Poster Art'].url} alt={this.props.data.title} />
                </div>
                <div class="col-md-9">
                  <h2 class="text-dark">{this.props.data.title}</h2>
                  <h5 class="sub-text text-muted">Year: <span class="text-">{this.props.data.releaseYear}</span></h5>
                  <table class="text-dark">
                    <tbody>
                      <tr>
                        <td>Type</td>
                        <td>  :   </td>
                        <td>{this.props.data.programType}</td>
                      </tr>
                      <tr>
                        <td>Year</td>
                        <td>  :   </td>
                        <td>{this.props.data.releaseYear}</td></tr>
                      </tbody>
                    </table>
                    <p>{this.props.data.description}</p>
                       <div class="details">
                         Rating: <i class="fa fa-star text-warning"></i>
                                 <i class="fa fa-star text-warning"></i>
                                 <i class="fa fa-star text-warning"></i>
                                 <i class="fas fa-star-half-alt text-warning"></i>
                                 <i class="far fa-star text-warning"></i>
                                 <div class="tags"></div>
                                 <table class="text-dark">
                                   <tbody>
                                     <tr>
                                       <td><i class="fab fa-imdb fa-2x text-warning"></i></td>
                                       <td><small class="text-dark"> IMDB :   </small></td>
                                       <td class="text-muted">7.0</td>
                                     </tr>
                                     <tr>
                                       <td> <i class="fas fa-film fa-2x text-warning"></i></td>
                                       <td><small class="text-dark"> Cinemania :   </small></td>
                                       <td class="text-muted">6.5</td>
                                     </tr>
                                   </tbody>
                                 </table>
                               </div>
                             </div>
                           </div>
                         </div>
    );
  }

}

export default Next;
