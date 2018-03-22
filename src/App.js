import React, { Component } from 'react';
import './App.css';

import FormUploadComponent from './Component/FormUploadComponent';


class App extends Component {
  render() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4 col-xl-4 offset-xl-4">
                    <FormUploadComponent/>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
