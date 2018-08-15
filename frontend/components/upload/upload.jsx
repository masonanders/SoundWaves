import React from 'react';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { audioFile: true };
  }

  selectTrack() {
    return (
      <div className='select-track-container'>
        <h2>Upload a track to SoundWaves</h2>
        <button
          onClick={() => this.setState({ audioFile: true })
        }>Select a track to upload</button>
        <h3>or</h3>
        <button className='demo'>Upload a demo track</button>
      </div>
    );
  }

  inputForm() {
    return (
      <div className='upload-form-container'>
        <div className='form-header'>
          <div className='info'>
            <h2>Track info</h2>
          </div>
        </div>

        <div className='form-body'>
          <div className='form-image'>
          </div>
          <div className='form-input'>
            <label>Title<p>*</p></label>
              <input />
            <label>Description</label>
              <textarea />

          </div>
        </div>

        <div className='form-footer'>
          <button>Cancel</button>
          <button>Save</button>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className='content'>
        <div className='upload-content'>
          <div className='upload-header'>
            <div className='upload'>
              <h4>Upload</h4>
            </div>
          </div>

          <div className='upload-body'>
            { this.state.audioFile ? this.inputForm() : this.selectTrack() }
          </div>
        </div>
      </div>
    );
  }
}

export default Upload;
