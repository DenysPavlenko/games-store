import React from 'react';
// Styles
import './modal.styles.sass'
// Assets
import { ReactComponent as CloseIcon } from 'assets/images/icons/close.svg';

class Modal extends React.Component {

  componentDidMount() {
    const { hidden } = this.props;
    this.toggleScroll(hidden)
  }
  componentDidUpdate(prevProps) {
    const { hidden: oldHidden } = prevProps;
    const { hidden } = this.props;
    if (oldHidden !== hidden) {
      this.toggleScroll(hidden);
    }
  }
  componentWillUnmount() {
    this.toggleScroll(true);
  }

  toggleScroll = (hidden) => {
    const html = document.querySelector('html');
    const documentWidth = document.documentElement.clientWidth;
    const windowWidth = window.innerWidth;
    const scrollBarWidth = windowWidth - documentWidth;
    if (!hidden) {
      html.style.overflowY = 'hidden';
      html.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      html.style.overflowY = 'auto';
      html.style.paddingRight = 0;
    }
  }

  handleClose = (e) => {
    const { closeModal } = this.props;
    if (e.target.classList.contains('modal-wrapper')) {
      closeModal();
    }
  }

  render() {
    const { hidden, closeModal, children } = this.props;
    return (
      <div className={`modal ${hidden ? 'modal-hidden' : ''}`} onClick={this.handleClose}>
        <div className="modal-container">
          <div className="modal-wrapper">
            <div className="modal-block">
              <div onClick={closeModal} className="modal-close"><CloseIcon /></div>
              {children}
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default Modal;
