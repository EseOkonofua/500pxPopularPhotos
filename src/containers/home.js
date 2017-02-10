import React, { Component } from 'react'

export default class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      photos: [],
      page: 1
    }
  }

  componentDidMount(){
    var self = this;
    _500px.api('/photos', {feature: 'popular', page: 3,image_size:600}, function (response) {
      if (response.success) {
          console.log(response.data);
          self.setState({
            photos: response.data.photos
          });
      } else {
          alert('Unable to complete request: ' + response.status + ' - ' + response.error_message);
      }
    });
  }

  render(){
    var displayPhotos = this.state.photos.map(function(item, index){
      return(
        <img key={index} width='150' src={item.image_url} />
      )
    });

    return(
      <div>
        <h3>Ese's React-Redux starter kit w/ React router</h3>
        {displayPhotos}
      </div>
    )
  }
}
