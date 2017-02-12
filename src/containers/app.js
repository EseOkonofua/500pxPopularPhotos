import React, { Component } from 'react'

class App extends Component{
  constructor(props){
    super(props);
    //Not going to be using redux action-reducer flow
    //Will use App container to manage application state. Images and Pagination.
    //State will be passed down to child components.
    this.state = {
      photos:[],
      page: 1,
      selectedImage: 1,
      loadingImages: false,
      showInfo: false
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

  //
  toggleShowInfo(){
    this.setState({
      showInfo: !this.state.showInfo
    })
  }

  //This function will update the photo list with a new set of photos.
  //Get the new photos create a new list with the contantenation of new and old.
  //Increment current page by 1
  updatePhotos(index=null){
    var self = this;
    var newPage = index ? index : self.state.page+1;

    //Set loading images flag to be true;
    self.setState({
      loadingImages: true
    });
    _500px.api('/photos', {feature: 'popular', page: newPage,image_size:'1600,600'}, function (response) {
      if (response.success) {
          console.log(response.data);
          self.setState({
            photos: [...self.state.photos,...response.data.photos],
            page: newPage,
            loadingImages:false
          });
      } else {
          alert('Unable to access 500px API: ' + response.status + ' - ' + response.error_message);
          self.setState({
            loadingImages:false
          });
      }
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
          //Use the React.cloneElemt in order to pass props to children
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
