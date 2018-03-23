/**
 * Copyright © 2009-2017 Lê Duy Khoa. All rights reserved.
 * Mail: leduykhoa060690@gmail.com
 * Skype: leduykhoa060690
 * Website: web-fast.com
 * Mobile: +84973421508
 * Date: 2018/03/23
 * Time: 11:37
 */



import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ModalUploadComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        };

        this.showModal = this.showModal.bind(this);
    }

    showModal() {
        this.setState({
            show: true
        });
    }

    render() {

        if(!this.props.show){
            return null;
        }

        return (
            <div className="modal show"
                 tabIndex="-1"
                 role="dialog"
                 aria-hidden="true"
                 style={{display : 'block'}}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Upload confirm</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.closeModal}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Do you want continue upload?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success" onClick={this.props.closeModalOk}>Continue</button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={this.props.closeModal}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ModalUploadComponent.propTypes = {
    show: PropTypes.bool,
    closeModal: PropTypes.func.isRequired,
    closeModalOk : PropTypes.func.isRequired
};


export default ModalUploadComponent;