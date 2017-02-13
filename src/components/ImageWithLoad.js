import React, { Component } from 'react'
export default class ImageWithLoad extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading:true,
      loadedImages: 0,
      imageCount: 2
    }

    this.handleImageLoaded = this.handleImageLoaded.bind(this);

    //Load both images *Small and Large*
    var image1 = new Image();
    image1.src = props.item.images[0].url;
    image1.onload =  this.handleImageLoaded;

    var image2 = new Image();
    image2.src = props.item.images[1].url;
    image2.onload = this.handleImageLoaded;
  }


  //Handle Image loaded will give a progress of how both images have loaded.
  handleImageLoaded(){
    var self = this;
    //console.log("Loaded 1 image")
    this.setState({
      loadedImages: self.state.loadedImages+1
    })

    if(this.state.loadedImages == this.state.imageCount){
      this.setState({
        loading:false
      })
    }
  }

  render(){
    var self = this;

    //If still loading render the loading indicator, else render the actual images
    var component = !self.state.loading ?
      <span>
        <i onMouseOver={self.props.toggleShowInfo} onMouseLeave={self.props.toggleShowInfo} className='fa fa-info-circle fa-lg'></i>
        <img onMouseOver={self.props.updateViewingImage.bind(null, self.props.index)} className='images small' src={self.props.item.images[0].url}  />
        <img  onMouseOver={self.props.updateViewingImage.bind(null, self.props.index)} className='images large' src={self.props.item.images[1].url}  />
      </span>
        :
      <div className='loading'>
        <i style={{color:'white'}} className='fa fa-circle-o-notch fa-spin fa-lg fa-fw'></i>
      </div>


    return(
      <div className='gallery-image'>
        { component}
      </div>
    )
  }
}
