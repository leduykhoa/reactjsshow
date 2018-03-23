/**
 * Copyright © 2009-2017 Lê Duy Khoa. All rights reserved.
 * Mail: leduykhoa060690@gmail.com
 * Skype: leduykhoa060690
 * Website: web-fast.com
 * Mobile: +84973421508
 * Date: 2018/03/23
 * Time: 04:39
 */

import React, { Component } from 'react';
import axios from 'axios';


import ModalUploadComponent from './ModalUploadComponent';
import AlertUploadComponent from './AlertUploadComponent';


class FormUploadComponent extends Component {

    filesInput;
    uploadContinue = false;
    alertType = '';
    alertText = '';

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false,
            alertShow: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }


    openModal= () => {
        this.setState({
            isModalOpen: true
        });
    }

    closeModal= () => {
        this.uploadContinue = false;
        this.setState({
            isModalOpen: false
        });
    }

    closeModalOk= () => {
        this.uploadContinue = true;
        this.setState({
            isModalOpen: false
        });

        const data = new FormData();
        data.append('file', this.filesInput.files[0]);
        // '/files' is your node.js route that triggers our middleware
        axios.post('http://localhost:3001/upload', data).then((response) => {
            if(response.data.error!==0){
                this.alertType = 'alert-danger';
                this.alertText = 'Have trouble upload file!';
            }else{
                this.alertType = 'alert-success';
                this.alertText = 'You are upload successfully!';
            }

            this.setState({
                alertShow: true
            });
        });
    }


    handleSubmit(event) {

        if(this.filesInput.files[0] === undefined){
            this.alertType = 'alert-warning';
            this.alertText = 'File not empty!';

            this.setState({
                alertShow: true
            });

            event.preventDefault();
            return;
        }

        this.setState({
            alertShow: false
        });
        this.openModal();
        event.preventDefault();
    }


    render() {
        return (
            <div className="container p-2 p-md-5">

                <ModalUploadComponent show={this.state.isModalOpen}
                                      closeModal={this.closeModal}
                                      closeModalOk={this.closeModalOk}>
                    Here's some content for the modal
                </ModalUploadComponent>

                <div className="card animated bounceInDown">
                    <div className="card-header">
                        Upload file
                    </div>
                    <div className="card-body">

                        <AlertUploadComponent alertShow={this.state.alertShow}
                                              alertType={this.alertType}
                                              alertText={this.alertText}>
                        </AlertUploadComponent>
                        <form className="needs-validation"
                              onSubmit={this.handleSubmit}
                              noValidate encType="multipart/form-data">
                            <div className="form-group">
                                <div className="custom-file">
                                    <input type="file"
                                           className="custom-file-input"
                                           id="file_input"
                                           ref={(input) => { this.filesInput = input; }}
                                           name="file_input"/>
                                    <label className="custom-file-label" htmlFor="file_input">Choose file</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary float-right"
                                        onClick={this.handleSubmit}
                                        type="button">Upload</button>
                            </div>
                        </form>

                        <div className="file-info">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormUploadComponent;