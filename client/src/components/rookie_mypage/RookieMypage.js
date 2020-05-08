import React, { Component } from 'react';
import './RookieMypage.css';
import Msg from '../mypopup/Message';
import RookieMainProfile from './RookieMainProfile';

class RookieMypage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msgDisplay : "none",
            likeUser:"none"
        }
    }
    render() {
        const { msgDisplay } = this.state;
        const { likeUser } = this.state;
        return (
            <div className="rookie-main">
                 <Msg display= { msgDisplay } />
                <div className="rookie-main-bg"></div>
                <div className="rookie-main-bg-in">
                    <div className="rookie-profile-content">
                        <div className="rookie-user-title">
                            <img src= "/Image/usermypage_hochi.png" alt="IMG"></img>
                            <span>홍길동의 프로필</span>
                        </div>
                        <RookieMainProfile/>
                    </div>
                </div>
                <div className="rookie-menu-btn">
                    <button className="profile-btn">프로필</button>
                    <button className="pt-btn">포트폴리오</button>
                </div>
                <div className="rookie-user-btn">
                    <button className="rookie-message-btn"
                    onClick={() => this.setState({ msgDisplay : msgDisplay === "none" ? "flex" : "none"})}>
                        <img src="/Image/usermypage_message.png" alt="IMG"></img>메세지 보내기
                    </button>
                    <button className="rookie-like-btn"
                    onClick={() => this.setState({ likeUser : likeUser === "none" ? console.log("조아여") : "none"})}>
                        <img src="/Image/usermypage_hart.png" alt="IMG"></img>관심있어요
                    </button>
                </div>
            </div>
        );
    }
}

export default RookieMypage;