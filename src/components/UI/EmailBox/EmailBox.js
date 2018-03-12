/*
Notification email box
*/
import React from 'react';
import EmailBoxes from './EmailBoxes/EmailBoxes';
import classes from './EmailBox.css';
import { withRouter } from 'react-router-dom';
import firebase from 'firebase';
import {connect} from 'react-redux';
import {database} from 'firebase';

const EmailBox = (props) => {
    let emailBoxes = (
        props.notifications.map((log) => (
            <EmailBoxes
                key = {log.key}
                msg = {log.msg}
                contact = {log.contact}
                item1 = {log.item1}
                item2 = {log.item2}
                contactinfo = {log.contactinfo}
                clicked={() => props.clicked(log.key)}
            />

        ))
    );

    return (
            <div>
                {emailBoxes}
            </div>

    )
}


export default EmailBox;
