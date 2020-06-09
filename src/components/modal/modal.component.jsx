import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
// Styles
import './modal.styles.sass'
// Assets
import { ReactComponent as CloseIcon } from 'assets/images/icons/close.svg';

class Modal extends React.Component {
  modalParent = document.createElement('div');

  componentDidMount() {
    const { hidden } = this.props;
    document.body.appendChild(this.modalParent);
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
    this.toggleScroll();
    document.body.removeChild(this.modalParent);
  }

  toggleScroll = (hidden = true) => {
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
    const { hidden, closeModal, children, small, className } = this.props;
    const classes = classNames({
      'modal': true,
      'modal-small': small,
      [className]: className
    })
    return ReactDOM.createPortal(
      <CSSTransition in={!hidden} timeout={300} unmountOnExit classNames="modal-animation">
        <div className={classes} onClick={this.handleClose}>
          <div className="modal-container">
            <div className="modal-wrapper">
              <div className="modal-block">
                <div onClick={closeModal} className="modal-close"><CloseIcon /></div>
                {children}
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>,
      this.modalParent
    );
  }
}

export default Modal;
