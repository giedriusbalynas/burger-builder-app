import React, { Fragment, useState } from 'react';
import {connect} from 'react-redux';
import styles from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const layout = props => {
    const [drawerState, setDrawerState] = useState(false);

    const sideDrawerClosedHandler = () => {
        setDrawerState(false)
    };

    const sideDrawerToggleHandler = () => {
        setDrawerState(!drawerState);
    };
        return (
            <Fragment>
                <Toolbar
                    isAuth={props.isAuthenticated}
                    drawerToggleClicked={sideDrawerToggleHandler}/>
                <SideDrawer
                    isAuth={props.isAuthenticated}
                    open={drawerState}
                    closed={sideDrawerClosedHandler}/>
                <main className={styles.Content}>
                    {props.children}
                </main>
            </Fragment>
        )
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token != null
    }
};

export default connect(mapStateToProps)(layout);