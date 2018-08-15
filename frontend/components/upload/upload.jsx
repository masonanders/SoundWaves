import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

import Errors from '../errors/errors';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      audioFile: null,
      title: '',
      description: '',
      redirect: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFile() {
    return (e) => this.setState({ audioFile: e.currentTarget.files[0] });
  }

  handleDefault() {
    // const getFileBlob = (url, cb) => {
    //   const xhr = new XMLHttpRequest();
    //   xhr.open("GET", url);
    //   xhr.responseType = "blob";
    //   xhr.addEventListener('load', function() {
    //       cb(xhr.response);
    //   });
    //   xhr.send();
    // };
    //
    // const blobToFile = (blob, name) => {
    //   blob.lastModifiedDate = new Date();
    //   blob.name = name;
    //   return blob;
    // };
    //
    // const getFileObject = (filePathOrUrl, cb) => {
    //   getFileBlob(filePathOrUrl, (blob) => {
    //     cb(blobToFile(blob, 'defualt_audio.mp3'));
    //   });
    // };
    //
    // getFileObject(window.audio.defualtAudio, (fileObject) => {
    //      console.log(fileObject);
    // });
    // return (e) => this.setState({ audioFile: new File([window.audio.defaultAudio], 'default.mp3') });
  }

  handleSubmit(e) {
    this.props.clearErrors();

    e.preventDefault();
    const formData = new FormData();
    formData.append('track[title]', this.state.title);
    formData.append('track[description]', this.state.description);
    formData.append('track[artist_id]', this.props.state.session.currentUser);
    if (this.state.audioFile !== 'default') {
      formData.append('track[audio]', this.state.audioFile);
    }

    this.props.createTrack(formData).then(res => this.handleRes(res));
  }

  handleRes(res) {
    if (res.type === this.props.RECEIVE_TRACK) {
      this.setState({
        redirect: true,
        artistUsername: res.user.username,
        trackTitle: res.track.title
      });
    }
  }

  renderRedirect() {
    const { artistUsername, trackTitle } = this.state;
    return (<Redirect to={`/${artistUsername}/${trackTitle}`} />);
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  selectTrack() {
    return (
      <div className='select-track-container'>
        <h2>Upload a track to SoundWaves</h2>
        <input
          onChange={ this.handleFile() }
          type='file'
          id='file'/>
        <label
          htmlFor='file'
        >Select a track to upload</label>
        <h3>or</h3>
        <button
          onClick={ () => this.setState({ audioFile: 'default' }) }
          className='demo'>Upload a demo track
        </button>
      </div>
    );
  }

  inputForm() {
    return (
      <div className='upload-form-container'>
        <form id='upload-form' onSubmit={this.handleSubmit} >
          <div className='form-header'>
            <div className='info'>
              <h2>Track info</h2>
            </div>
          </div>

          <div className='form-body'>
            <div className='form-image'>
              <img src={window.images.defaultTrackArtwork}/>
            </div>
            <div className='form-input'>
                <label>Title<p>*</p></label>
                  <input
                    onChange={ this.handleChange('title') }
                    value={ this.state.value }/>
                <label>Description</label>
                  <textarea
                    onChange={ this.handleChange('description') }
                    value={ this.state.description } />
            </div>
          </div>

          <div className='form-footer'>
            <div>
              <p>*</p><h5>Required field</h5>
            </div>
            <Errors track={ this.props.state.errors.tracks } />
            <div>
              <Link to='/' >
                <button className='cancel'>Cancel</button>
              </Link>
              <input type='submit' htmlFor='upload-form' value='Save'/>
            </div>
          </div>
        </form>
      </div>
    );
  }

  render() {
    return (
      <div className='content'>
        { this.state.redirect ? this.renderRedirect() : null }
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
