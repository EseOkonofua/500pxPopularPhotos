import React, { Component } from 'react'
import ImageWithLoad from '../components/ImageWithLoad'


export default class Home extends Component {
  constructor(){
    super();

    this.handleGalleryScroll = this.handleGalleryScroll.bind(this);
  }

  handleGalleryScroll(){
    var gSelector = document.getElementById("gallery-selector");

    //Make sure one image is not being loaded, and not on the max page of the popular photos, and check if scroll has reached the bottom for infinite scrolling.
    if(!this.props.loadingImages && this.props.page != this.props.maxpage && gSelector.scrollTop + 50 >= gSelector.scrollHeight - window.innerHeight){
      //console.log("LOADED!")
      this.props.updatePhotos();
    }
  }

  render(){
    var self = this;

    //Map the list of photo functions to a list of galler image components. Containing the info buttons and the images them selves.
    var displayImages = this.props.photos.map(function(item,index){
      return (
        <ImageWithLoad key={index} index={index} toggleShowInfo = {self.props.toggleShowInfo} updateViewingImage={self.props.updateViewingImage} item={item} />
      )
    });

    //This is the selected image being focused on in the application.
    var selectedImage = this.props.photos[this.props.selectedImage];

    return(
      <div id='container'>
        <a target='_blank' href='https://500px.com'><img id="logo" src={this.props.loadingImages ? 'images/loading.gif' : 'images/logomark.png'}/></a>
        <div id='gallery'> {/*The gallery component will be the large view for focused on images. */}
          <div id="selection" style={{backgroundImage:`url('${this.props.photos.length > 1 ? selectedImage.image_url : ''}')`}}></div>
        </div>

        {/* The info component will be the view for the photo attribution, showing photographer name and image title. */}
        <div className={ this.props.showInfo ? '' : 'hide'} id="info">
          <img src={selectedImage ? selectedImage.user.userpic_url : ''}/>
          <span>{selectedImage ? selectedImage.user.fullname : ''}</span>
          <span>{selectedImage ? '-' : ''}</span>
          <span className='title'>{selectedImage ? selectedImage.name : ''}</span>
        </div>

        {/*The gallery-selector component is the container for the list of gallery image components */}
        <div onScroll={this.handleGalleryScroll} id='gallery-selector' >
          {displayImages}
        </div>
      </div>
    )
  }
}
