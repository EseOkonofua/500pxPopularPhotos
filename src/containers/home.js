import React, { Component } from 'react'

export default class Home extends Component {
  constructor(){
    super();

    this.handleGalleryScroll = this.handleGalleryScroll.bind(this);
  }

  handleGalleryScroll(){
    var gSelector = document.getElementById("gallery-selector");

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
        <div key={index} className='gallery-image'>
          <i onMouseOver={self.props.toggleShowInfo} onMouseLeave={self.props.toggleShowInfo} className='fa fa-info-circle fa-lg'></i>
          <img onMouseOver={self.props.updateViewingImage.bind(null, index)} className='images small' src={item.images[0].url}  />
          <img onMouseOver={self.props.updateViewingImage.bind(null, index)} className='images large' src={item.images[1].url}  />
        </div>
      )
    });

    var selectedImage = this.props.photos[this.props.selectedImage];

    return(
      <div id='container'>
        <a target='_blank' href='https://500px.com'><img id="logo" src={this.props.loadingImages ? 'images/loading.gif' : 'images/logomark.png'}/></a>
        <div id='gallery'>
          <div id="selection" style={{backgroundImage:`url('${this.props.photos.length > 1 ? selectedImage.image_url : ''}')`}}></div>
        </div>

        <div className={ this.props.showInfo ? '' : 'hide'} id="info">
          <img src={selectedImage ? selectedImage.user.userpic_url : ''}/>
          <span>{selectedImage ? selectedImage.user.fullname : ''}</span>
          <span>{selectedImage ? '-' : ''}</span>
          <span className='title'>{selectedImage ? selectedImage.name : ''}</span>
        </div>

        <div onScroll={this.handleGalleryScroll} id='gallery-selector' >
          {displayImages}
        </div>
      </div>
    )
  }
}
