/**
 * Copyright © 2009-2017 Lê Duy Khoa. All rights reserved.
 * Mail: leduykhoa060690@gmail.com
 * Skype: leduykhoa060690
 * Website: web-fast.com
 * Mobile: +84973421508
 * Date: 2018/03/23
 * Time: 20:11
 */


import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AlertUploadComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            alertShow: false
        };

        this.showAlert = this.showAlert.bind(this);
    }

    showAlert() {
        this.setState({
            alertShow: true
        });
    }

    getClassName(){
        if(this.props.alertShow){
            return 'alert  ' + this.props.alertType;
        }
        return 'd-none';
    }

    render() {

        if(!this.props.alertShow){
            return null;
        }

        return (
            <div className={this.getClassName()} role="alert">
                {this.props.alertText}
            </div>
        );
    }
}

AlertUploadComponent.propTypes = {
    alertShow: PropTypes.bool,
    alertType: PropTypes.string,
    alertText: PropTypes.string,
};


export default AlertUploadComponent;