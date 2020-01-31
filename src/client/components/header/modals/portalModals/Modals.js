import { Component } from 'react';
import React from 'react';
import Modal from './Modal';
import { closeModal } from '../../../../store/modals/actions';


export default class Modals extends Component {

    render() {
        let modalsNew = this.props.modals.modals;
        console.log(modalsNew);

        const modals = modalsNew.map((item, i) => < Modal
            dispatch={this.props.dispatch}
            item={item} key={i} zIndex={i}
            onClose={(item) => this.props.dispatch(closeModal(item))}

        />)
        return (
            <div className={modals.length > 0 ? "modals" : "<div><div/>"}>
                {modals}
            </div>
        );
    }
}