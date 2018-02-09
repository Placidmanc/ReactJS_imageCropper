import React, { Component } from 'react'
import Cropper from 'react-cropper'
import './css/cropper.css'
import './css/yaff-page.css'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      file:null,
      preview:null
    }
    this.fileHandler = this.fileHandler.bind(this)
  }


  fileHandler(e){
    // handle file
    let file = e.target.files[0];
    //let filename = file.name.substring(0, file.name.lastIndexOf('.'));
    let blobURL = URL.createObjectURL(file);
    this.setState({file:blobURL})
  }


  imgcrop(){
    // image in dataUrl
    let prev = this.refs.cropper.getCroppedCanvas().toDataURL()
    this.setState({preview:prev})
    //console.log(this.refs.cropper.getCroppedCanvas().toDataURL());
  }

  render() {

    let {file, preview} = this.state

    return (
      <div className="cropper">

        <h3>1. Upload the page image</h3>

        <label className="btn" htmlFor="inputImage">
  			     <input type="file" className="sr-only" id="inputImage" onChange={this.fileHandler} />
  			     Select Image
  			</label>

        <div className="img-container">
          <Cropper
            ref='cropper'
            src={file}
            style={{height: 400, width: '100%'}}
            aspectRatio={1 / 1}
            viewMode={2}
            autoCropArea={1}
            crop={this.imgcrop.bind(this)}
          />
        </div>
        <div className="img-preview preview-lg "><img src={preview} alt="" /></div>
      </div>

    )
  }

}

export default App;
