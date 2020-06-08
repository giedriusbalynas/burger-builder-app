import React, {Fragment} from 'react';
import styles from './Modal.css'
import Backdrop from '../Backdrop/Backdrop';

const modal = props => {
    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps.show !== this.props.show || nextProps.children !== this.props.children ;
    // }
    return (
        <Fragment>
            <Backdrop clicked={props.modalClosed} show={props.show}/>
            <div
                className={styles.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                {props.children}
            </div>
        </Fragment>
    )
};

export default React.memo(
    modal,
    (prevProps, nextProps) =>
        nextProps.show === prevProps.show &&
        nextProps.children === prevProps.children);