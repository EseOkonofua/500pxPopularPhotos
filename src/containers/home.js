import React, { Component } from 'react'

export default class Home extends Component {
  constructor(){
    super();

    this.handleGalleryScroll = this.handleGalleryScroll.bind(this);
  }

  handleGalleryScroll(){
    var gSelector = document.getElementById("gallery-selector");

    // console.log('**Scroll top',gSelector.scrollTop);
    // console.log('**Selector height',gSelector.scrollHeight - window.innerHeight);
    // console.log(this.props.loadingImages);

    //Make sure one image is not being loaded, and check if scroll has reached the bottom for infinite scrolling.
    if(!this.props.loadingImages && gSelector.scrollTop + 50 >= gSelector.scrollHeight - window.innerHeight){
      console.log("LOADED!")
      this.props.updatePhotos();
    }
  }

  render(){
    var self = this;
    var displayImages = this.props.photos.map(function(item,index){

      return (
        <img onMouseOver={self.props.updateViewingImage.bind(null, index)} className='images' src={item.image_url} key={index} />
      )
    });

    return(
      <div id='container'>
        <div id='gallery'>
          <img id="logo" src='images/logomark.png'/>
          <div id="selection" style={{backgroundImage:`url('${this.props.photos.length > 1 ? this.props.photos[this.props.selectedImage].image_url : ''}')`}}></div>
        </div>
        <div onScroll={this.handleGalleryScroll} id='gallery-selector' >
          {displayImages}
        </div>
      </div>
    )
  }
}
