import React, {Fragment, Component} from 'react';
import styles from './Modal.css'
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Modal] did update')
    }

    render() {
        return (
            <Fragment>
                <Backdrop clicked={this.props.modalClosed} show={this.props.show}/>
                <div
                    className={styles.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Fragment>
        )
    }
}


export default Modal;