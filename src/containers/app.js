import React, { Component } from 'react'

class App extends Component{
  constructor(props){
    super(props);
    //Not going to be using redux action-reducer flow
    //Will use App container to manage application state. Images and Pagination.
    //State and controller functions will be passed down to child components.
    this.state = {
      photos:[],
      page: 1,
      selectedImage: 1,
      loadingImages: false,
      showInfo: false,
      maxpage: 1000
    }

    this.updatePhotos = this.updatePhotos.bind(this);
    this.updateViewingImage = this.updateViewingImage.bind(this);
    this.toggleShowInfo = this.toggleShowInfo.bind(this);
  }

  //Update viewing image will update which image is being focused in the gallery;
  updateViewingImage(image){
    this.setState({
      selectedImage: image
    });
  }

  //Toggle for when information is hovered over
  //add index parameter to fix bug where user happens to hover info without touching picture
  toggleShowInfo(index){
    this.setState({
      showInfo: !this.state.showInfo,
      selectedImage: index
    });
  }

  //This function will update the photo list with a new set of photos.
  //Get the new photos create a new list with the contantenation of new and old.
  //Increment current page by 1
  updatePhotos(page=null){
    var self = this;
    var newPage = page ? page : self.state.page+1;

    //Set loading images flag to be true;
    self.setState({
      loadingImages: true
    });

    //Making the 500px api query, size 1600 for large displays and 600 for grid view selector.
    _500px.api('/photos', {feature: 'popular', page: newPage,image_size:'1600,600'}, function (response) {
      if (response.success) {
          //console.log(response.data);
          self.setState({
            photos: [...self.state.photos,...response.data.photos],
            page: newPage,
            maxpage: response.data.total_pages
          });
      } else {
          alert('Unable to access 500px API: ' + response.status + ' - ' + response.error_message);
      }

      //after response not loading images
      self.setState({
        loadingImages: false
      })
    });
  }

  componentWillMount(){
    //knowing the component will mount query the api for photos.
    this.updatePhotos(1);

  }

  render(){
    return (
      <div>
        {
          //Use the React.cloneElemt in order to pass down the state and controller functions to children
          React.cloneElement(this.props.children,{
            updateViewingImage:this.updateViewingImage,
            updatePhotos:this.updatePhotos,
            toggleShowInfo: this.toggleShowInfo,
            ...this.state
          })
        }
      </div>
    )
  }
}



export default App
