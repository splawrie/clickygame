import React, { Component } from 'react'
import ImageGallery from './components/ImageGallery'
import images from "./images.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    images
  };
  
  render () {
    return (
      <div>
        <ImageGallery
          src1="https://cdn4.iconfinder.com/data/icons/STROKE/animals/png/128/dalmatian_dog.png"
          src2="https://cdn0.iconfinder.com/data/icons/isometric-farm-animals/160/sheep-01-128.png"
          src3="https://cdn0.iconfinder.com/data/icons/isometric-farm-animals/320/cow-01-128.png"
          src4="https://cdn0.iconfinder.com/data/icons/PRACTIKA/128/twitter.png"
          src5="https://cdn2.iconfinder.com/data/icons/oxygen/128x128/apps/kbugbuster.png"
          src6="https://cdn2.iconfinder.com/data/icons/oxygen/128x128/apps/staroffice.png"
          src7="https://cdn4.iconfinder.com/data/icons/BRILLIANT/animals/png/128/horse.png"
          src8="https://cdn4.iconfinder.com/data/icons/free-scuba-diving-icon-set/128/turtle.png"
          src9="https://cdn2.iconfinder.com/data/icons/animals/48/Panda.png"
          images={this.state.images}
        />
      </div>
    )
  }
}

export default App;
