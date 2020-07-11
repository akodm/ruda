import React, { Component } from 'react';

import Chart from '../../../component/Chart';
import TagChip from '../../../component/TagChip';

import EditIcon from '@material-ui/icons/Edit';
//import SaveIcon from '@material-ui/icons/Save';
import EmailIcon from '@material-ui/icons/Email';
import LanguageIcon from '@material-ui/icons/Language';
import HouseIcon from '@material-ui/icons/House';
import PhoneIcon from '@material-ui/icons/Phone';
import SchoolIcon from '@material-ui/icons/School';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PeopleIcon from '@material-ui/icons/People';
import WorkIcon from '@material-ui/icons/Work';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import LocalPlayIcon from '@material-ui/icons/LocalPlay';


import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

class ViewProfile extends Component {
    constructor(props){
        super(props);
        this.state={
            imgPreview:"",
            btnNum:0,
            likeBtn:"none",
            shareAlert:"none",
            url :new URL(window.location.href),
            success:"none",
        }
    }
    savepdf(){
        document.title = '이름님의 이력서';
        window.print();
    }

    copyCodeToClipboard = () => {
        var dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = window.location.href;
        dummy.select();
        console.log(dummy);
        document.execCommand("copy");
        document.body.removeChild(dummy);
        this.setState({
            success:"flex",
        })
    }

    shareLink(){
        this.setState({
            shareAlert:"flex",
        })
    }
    
    close(){
        this.setState({
            shareAlert:"none",
        })
    }
    moveLink(link){
        console.log(link);
        window.location.href = link; 
    }
      EditProfile(){
        this.props.change(false)
    }
    render() {
        const { userInfo} = this.props;
        const Tag = userInfo.userTags;
        const Keyword = userInfo.userKeyword;
        const Specialty = userInfo.userSpecialty;
        const editDis = this.state;
        const {likeBtn,shareAlert,success}=this.state;
        return userInfo ? (
            <div className="Mypage-profile">
                {/* 공유하기 팝업 */}
                <div className="shareAlert" style={{display:shareAlert}}>
                    <span className="close-shareAlert" style={{cursor:"pointer"}} onClick={this.close.bind(this)}>X</span>
                    <p>더 많은 사람이 볼 수 있도록 공유해보세요!</p>
                    <div style={{width:"80%"}}>
                        <div className="shareAlert-input">
                            <input className="shareAlert-input-box" readOnly value={window.location.href} ></input>
                            <button className="shareAlert-btns" onClick={() => this.copyCodeToClipboard()}>링크복사</button>    
                        </div>
                        <p style={{display:success,fontSize:"14px",color:"#11addd"}}>복사가 완료되었습니다.</p> 
                    </div>
                </div>
                <div className="Mypage-profile-Maininfo">
                    <div className="Mypage-profile-content-mainprofile">
                       <div className="Mypage-profile-content-userinfo">
                            <div className="Mypage-profile-content-userinfo-profile">
                                
                               <div className="profile-profile">
                                    <p>프로필</p>
                                    <div className="profile-user-state">
                                        <div className="profile-user-state-training"style={{marginRight:"5px"}}></div><p style={{fontSize:"small", marginRight:"10px"}}>실습</p>
                                        <div className="profile-user-state-hire" style={{marginRight:"5px"}}></div><p style={{fontSize:"small",marginLeft:"10px"}}>구직</p>
                                    </div>
                               </div>
                                <img width="100" className="profileimg"src={userInfo.userImageUrl || "/Image/login_img.png"} alt="IMG"></img>
                                <p className="profile-username">{userInfo.userName}</p>
                                <div className="profile-intro"><hr></hr>
                                    <p className="profile-intro-title" >INTRO</p><hr></hr>
                                    <p>{userInfo.userIntro}</p><hr></hr>
                                </div>

                                {/* 인포 */}
                                <div  className="profile-userinfo">
                                    <p className="profile-userinfo-title" >INFO</p><hr></hr>
                                    <div className="profile-text">
                                        <EmailIcon style={{fontSize:"medium",margin:"10px"}}/>
                                        <p>{userInfo.user.email}</p>
                                    </div>
                                    <div className="profile-text">
                                        <LanguageIcon style={{fontSize:"medium",margin:"10px"}}/>
                                        <p>{userInfo.userUrl}</p>
                                    </div>
                                    <div className="profile-text">
                                        <PhoneIcon style={{fontSize:"medium",margin:"10px"}}/>
                                        <p>{userInfo.userPhone}</p>
                                    </div>
                                    <div className="profile-text">
                                        <HouseIcon style={{fontSize:"medium",margin:"10px"}}/>
                                        <p>{userInfo.userAdd}</p>
                                    </div>
                                    <div className="profile-text">
                                        <SchoolIcon style={{fontSize:"medium",margin:"10px"}}/>
                                        <p>{userInfo.userUnvcity}/{userInfo.userAttend}</p>
                                    </div>
                                    {userInfo.userMilitary=="해당없음"?"":
                                    <div className="profile-text">
                                        <LocalPlayIcon  style={{fontSize:"medium",margin:"10px"}}/>
                                        <p>{userInfo.userMilitary}</p>
                                    </div>
                                    }
                                </div>
                                {/* 포지션 */}
                                <div className="profile-intro"><hr></hr>
                                    <p className="profile-intro-title" >POSITION</p><hr></hr>
                                    <div className="profile-text">
                                        <WorkIcon style={{fontSize:"medium",margin:"10px"}}/>
                                        <p>{userInfo.userField} </p>
                                    </div>
                                    {userInfo.userWorkDateState=="미정"?"":
                                    <div className="profile-text">
                                        <AssignmentIndIcon style={{fontSize:"medium",margin:"10px"}}/>
                                        <p>근무:{userInfo.userWorkDateState}</p>
                                    </div>}           
                                    {userInfo.userWorkDateState=="직접입력"?<div className="profile-text">
                                        <CalendarTodayIcon style={{fontSize:"medium",margin:"10px"}}/>
                                        <p>근무가능날짜:{userInfo.userTrainingDate}</p>
                                    </div>:""}
                                </div>
                                <div className="profile-intro"><hr></hr>
                                    <p className="profile-intro-title" >COUNT</p><hr></hr>
                                    <div className="profile-text">
                                        <FavoriteIcon style={{fontSize:"medium",margin:"10px"}}/>
                                        <p>{userInfo.userLike}명이 좋아합니다. </p>
                                    </div>
                                    {/*<div className="profile-text">
                                        <PeopleIcon style={{fontSize:"medium",margin:"10px"}}/>
                                        <p>{userInfo.userClick}명이 방문하였습니다. </p>
                                    </div>*/}
                                </div>
                                <button className="profile-edit" onClick={this.EditProfile.bind(this)}><EditIcon style={{fontSize:"medium",height:"40px"}}/>프로필수정</button>
                                <div className="Mypage-pages-title">
                                    {/*<p>{userInfo.userName}님의 {btnNum === 0 ?"프로필 입니다." : "" || 
                                        btnNum === 1 ?"포트폴리오 입니다." : "" ||
                                        btnNum === 2 ?"마이페이지 입니다." : "" } </p>*/}
                                    <div className="Mypage-pages-title-icons">    
                                        <div className="Mypage-pages-title-icons-icon">
                                            <PrintIcon onClick={this.savepdf.bind(this)}/>
                                        </div>
                                        <div className="Mypage-pages-title-icons-icon">
                                            <ShareIcon onClick={this.shareLink.bind(this)}/>
                                        </div>
                                        <div className="Mypage-pages-title-icons-icon" >
                                            {likeBtn==="none"?<FavoriteBorderIcon />:<FavoriteIcon style={{ color : "#11addd"}}/>}
                                        </div>
                                        <div className="Mypage-pages-title-icons-icon">
                                            <MailOutlineIcon/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Mypage-profile-content-userinfo-data">
                                <p className="profile-chart-info-title">차트</p>
                                <div className="Mypage-profile-content-userinfo-graph">
                                    <div className="profile-chart-info">
                               
                                       <p className="profile-chart-info-text">6개의 자격증을 보유하고 있습니다.</p>
                                       <p className="profile-chart-info-text">5번의 수상이력이 있습니다.</p>
                                       <p className="profile-chart-info-text">4번의 교외활동을 했습니다.</p>
                                       <p className="profile-chart-info-text">3번의 교내활동을 했습니다.</p>
                                       <p className="profile-chart-info-text">2개의 기술스택이 있습니다.</p>
                                       <p className="profile-chart-info-text">1개의 포트폴리오가 있습니다.</p>
                                    </div>
                                    <div className="profile-chart">
                                        <Chart  />
                                    </div>
                                </div>
                                <div className="Mypage-profile-content-userinfo-info">
                                    <div className="Mypage-profile-content-userinfo-info">
                                        <div className="profile-keyword-info">
                                            <p className="profile-keyword-title">기술능력<div></div></p>
                                            <div className="stack">
                                                {
                                                    Tag.map(function(str,i){
                                                    return <div className="chip-margin" key={i}>
                                                        <TagChip name={str} size="small" color="primary" variant="outlined" />
                                                    </div>;
                                                    })
                                                }
                                            </div>
                                            <p className="profile-keyword-title">키워드</p>
                                            <p className="profile-keyword-text">성격</p>
                                            <div className="keyword">
                                                {
                                                    Keyword.map(function(str,i){
                                                    return <div className="chip-margin" key={i}>
                                                        <TagChip name={str} size="small" color="primary" variant="outlined" />
                                                    </div>;
                                                    })
                                                }
                                            </div>
                                            <p className="profile-keyword-text">취미/특기</p>
                                            <div className="keyword">
                                                {
                                                    Specialty.map(function(str,i){
                                                    return <div className="chip-maurgin" key={i}>
                                                        <TagChip name={str} size="small" color="primary" variant="outlined" />
                                                    </div>;
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div className="profile-skill-info">
                                            <div>
                                                <p className="profile-skill-title">자격증</p>
                                                <div className="profile-skill-info-certificate">
                                                    <div className="profile-skill-info-certificate-text">

                                                    {
                                                    Specialty.map(function(str,i){
                                                    return <div className="chip-maurgin" key={i}>
                                                        <TagChip name={str} size="small" color="primary" variant="outlined" />
                                                    </div>;
                                                    })
                                                }
                                                        <p>대한상공회</p>
                                                        <p>정보처리산업기사1급</p>
                                                        <p>2020/02/02</p>
                                                    </div>
                                                    <div className="profile-skill-info-certificate-text">
                                                        <p>대한상공회</p>
                                                        <p>정보처리산업기사1급</p>
                                                        <p>2020/02/02</p>
                                                    </div>
                                                    <div className="profile-skill-info-certificate-text">
                                                        <p>대한상공회</p>
                                                        <p>정보처리산업기사1급</p>
                                                        <p>2020/02/02</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="profile-skill-title">수상이력</p>
                                                <div className="profile-skill-info-Awards">
                                                    <div className="profile-skill-info-Awards-text">
                                                        <p>교내</p>
                                                        <p>대림대학교</p>
                                                        <p>캡스톤디자인</p>
                                                        <p>2020/02/02</p>
                                                    </div>
                                                    <div className="profile-skill-info-Awards-text">
                                                        <p>교내</p>
                                                        <p>대림대학교</p>
                                                        <p>캡스톤디자인</p>
                                                        <p>2020/02/02</p>
                                                    </div>
                                                    <div className="profile-skill-info-Awards-text">
                                                        <p>교내</p>
                                                        <p>대림대학교</p>
                                                        <p>캡스톤디자인</p>
                                                        <p>2020/02/02</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="Mypage-profile-content-storyprofile">
                                                <div className="profile-inschool">
                                                    <p className="profile-inschool-title">교내활동</p>
                                                    <div>
                                                        <p className="profile-inschool-text">대림테크페어 참여</p>
                                                        <p className="profile-inschool-text">동아리회장</p>
                                                        <p className="profile-inschool-text">학생회활동</p>
                                                    </div>
                                                </div>
                                                <div className="profile-outschool">
                                                    <p className="profile-outschool-title">교외활동</p>
                                                    <div>
                                                        <p className="profile-outschool-text">안양시공모전참여</p>
                                                        <p className="profile-outschool-text">동아리회장</p>
                                                        <p className="profile-outschool-text">학생회활동</p>
                                                    </div>
                                                </div>   
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        ) : <div></div>
    }
}


export default ViewProfile;