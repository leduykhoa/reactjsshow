import React, { Component } from 'react';
import './App.css';

import FormUploadComponent from './Component/FormUploadComponent';


class App extends Component {
  render() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
                    <FormUploadComponent/>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
