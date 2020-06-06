import React, { Component } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import UserInfoBox from './UserInfoBox';
import CompanyInfoBox from './CompanyInfoBox';
import './UserInfo.css';

class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nums : 0,
        }
    }
    render() {
        const { nums } = this.state;
        return (
            <div className="userInfo">
                <span className="userInfo-title">구직자 또는 기업을 선택하여 프로필 작성을 하여주세요!</span>
                <div className="userInfo-div">
                    <BottomNavigation
                        value={nums}
                        onChange={(event, newValue) => {
                            this.setState({ nums : newValue });
                        }}
                        showLabels
                        className="userInfo-tag"
                    >
                    <BottomNavigationAction label="구직자" />
                    <BottomNavigationAction label="기업" />
                    </BottomNavigation> 
                </div>
                { nums ? <CompanyInfoBox /> : <UserInfoBox />}
            </div>
        );
    }
}

export default UserInfo;