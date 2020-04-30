import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import Main from '../main/Main';
import Insert from '../insert/Insert_main';
import InsertRookie from '../insert/Insert_rookie';
import InsertCompany from '../insert/Insert_company';
import Login from '../login/Login';
import RookieMypage from '../rookie_mypage/RookieMypage';
import CompanyMypage from '../company_mypage/CompanyMypage';
import Board from '../board/Board';

class Base extends Component {
    render() {
        return (
            <div className="base-main">
                <Header />
                <Router>
                    <Switch>
                        <Route exact path="/"><Main /></Route>
                        <Route exact path="/insert"><Insert /></Route>
                        <Route path="/insert/rookie"><InsertRookie /></Route>
                        <Route path="/insert/company"><InsertCompany /></Route>
                        <Route path="/login"><Login /></Route>
                        <Route path="/board"><Board /></Route>
                        <Route path="/u_mypage"><RookieMypage /></Route>
                        <Route path="/c_mypage"><CompanyMypage /></Route>
                    </Switch>
                </Router>
                <Footer />
            </div>
        );
    }
}
export default Base;