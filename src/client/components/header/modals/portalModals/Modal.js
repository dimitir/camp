import { Component } from 'react';
import React from 'react';
// import { openModal } from '../store/header/actions';
// import uuid from 'uuid';
import style from './portalModal.module.scss'


export default class Modal extends Component {


  onClose() {
    console.log(this.props.item);
    if (this.props.item.onClose) {
      this.props.item.onClose();
      this.props.onClose(this.props.item);
    } else {
      this.props.onClose(this.props.item);
    }
  }
  onConfirm() {
    if (this.props.item.onConfirm) {
      this.props.item.onConfirm();
      this.props.onClose(this.props.item);
    }
  }
  onOpenCustom() {
    if (this.props.item.onConfirm) {
      this.props.item.onConfirm();
      this.props.onClose(this.props.item);
    }
  }
  render() {
    console.log(this.props);
    const { zIndex } = this.props;

    const { type } = this.props.item;
    if (type === 'confirmation') {
      const { text } = this.props.item;
      return (
        <div className={style.modalWrapper} style={{ zIndex: (zIndex + 1) * 10 }}>
          <div className="modal">
            <div className="text">{text}</div>
            <div className="buttons">
              <button className="modal-button" onClick={() => this.onConfirm()}>Confirm</button>
              <button className="modal-button" onClick={() => this.onClose()}>Close</button>
            </div>
          </div>
        </div>
      )
    } else if (type === 'setin') {
      const content = this.props.item.content;
      let newDiv = document.createElement("div");
      newDiv.setAttribute("id", "wrapperOpacity");
      document.body.prepend(newDiv);
      document.body.style.background="#f3f3f3";
      document.body.style.overflowX = 'hidden';
      document.body.style.overflowY = 'hidden';
      return (
        <>
          <div className={style.modalWrapper} style={{ zIndex: (zIndex + 1) * 10 }}>
            <button onClick={() => this.onClose()}>Close</button>
            {content}
          </div>

        </>
      )
    }
    return (
      <div></div>
    );
  }
}