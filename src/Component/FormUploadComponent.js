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


class FormUploadComponent extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.input.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Upload file
                </div>
                <div className="card-body">
                    <form className="needs-validation" noValidate>
                        <div className="form-group">
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" id="file_input" name="file_input"/>
                                <label className="custom-file-label" htmlFor="file_input">Choose file</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary float-right" type="submit">Submit form</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default FormUploadComponent;