import React from 'react'
import '../usertabhome/UserTabHome.css'
import optionIcon from '../../../img/option_icon.png'
import {Menu,MenuItem,Button} from '@material-ui/core'
import {useState} from 'react-dom'
import { Component } from 'react';
import {MenuOfItems} from './MenuOfItems'

class UserTabHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            anchorEls: []
        }
    }
    handleActionClick = (id, event) => {
        let { anchorEls } = this.state;
        anchorEls[id] = event.target;
        this.setState({ anchorEls });
    }
    handleActionClose = (id, event) => {
        let { anchorEls } = this.state;
        anchorEls[id] = null;
        this.setState({ anchorEls });
    }
    render() {
        let { classes } = this.props;
        const { data, anchorEls } = this.state;
        return(
                <div className="usertab-cont-background">
                    <div className="usertab-cont-info">
                    <table class="table">
                        <thead className="usertab-thead">
                            <tr>
                            <th scope="col"></th>
                            <th scope="col">N PACIENTE</th>
                            <th scope="col">NOMBRE</th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="usertab-fila">
                                <th scope="row" className="usertab-user-image-table"><img className="usertab-user-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMRyv9Dkf8Wusb0uForhlXoz090E0Xgt_1OQ&usqp=CAU" /></th>
                                <td>1122334455</td>
                                <td>Carmen Cardozo</td>
                                <td>
                                    <div>
                                        <Button onClick={e => this.handleActionClick(1, e)} className="usertab-options"><img className="usertab_icon_image" src={optionIcon}/></Button>
                                        <Menu className="menu-eliminate-1"
                                            id={1} 
                                            open={Boolean(this.state.anchorEls[1])}
                                            onClose={e => this.handleActionClose(1, e)}
                                            getContentAnchorEl={null}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'center',
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                            }}>
                                            <MenuOfItems onClick={e => this.handleActionClose(1, e)} id={1}/>
                                        </Menu>
                                    </div>
                                </td>
                            </tr>
                            <tr className="usertab-fila">
                                <th scope="row" className="usertab-user-image-table"><img className="usertab-user-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMRyv9Dkf8Wusb0uForhlXoz090E0Xgt_1OQ&usqp=CAU" /></th>
                                <td>1122334455</td>
                                <td>Carmen Cardozo</td>
                                <td>
                                    <div><Button onClick={e => this.handleActionClick(2, e)} className="usertab-options"><img className="usertab_icon_image" src={optionIcon}/></Button>
                                        <Menu className="menu-eliminate-2"
                                            id={2} 
                                            open={Boolean(this.state.anchorEls[2])}
                                            onClose={e => this.handleActionClose(2, e)}
                                            getContentAnchorEl={null}
                                            anchorOrigin={{
                                                vertical: 'center',
                                                horizontal: 'center',
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                            }}>
                                            <MenuOfItems onClick={e => this.handleActionClose(2, e)}/>
                                        </Menu>

                                        </div>
                                    </td>
                            </tr>
                            <tr className="usertab-fila">
                                <th scope="row" className="usertab-user-image-table"><img className="usertab-user-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMRyv9Dkf8Wusb0uForhlXoz090E0Xgt_1OQ&usqp=CAU" /></th>
                                <td>1122334455</td>
                                <td>Carmen Cardozo</td>
                                <div>
                                        <Button onClick={e => this.handleActionClick(3, e)} className="usertab-options"><img className="usertab_icon_image" src={optionIcon}/></Button>
                                        <Menu className="menu-eliminate-3"
                                            id={3} 
                                            open={Boolean(this.state.anchorEls[3])}
                                            onClose={e => this.handleActionClose(3, e)}
                                            getContentAnchorEl={null}
                                            anchorOrigin={{
                                                vertical: 'center',
                                                horizontal: 'center',
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                            }}>
                                            <MenuOfItems onClick={e => this.handleActionClose(3, e)}/>
                                        </Menu>
                                    </div>
                            </tr>
                            <tr className="usertab-fila">
                                <th scope="row" className="usertab-user-image-table"><img className="usertab-user-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMRyv9Dkf8Wusb0uForhlXoz090E0Xgt_1OQ&usqp=CAU" /></th>
                                <td>1122334455</td>
                                <td>Carmen Cardozo</td>
                                <td>
                                    <div>
                                        <Button onClick={e => this.handleActionClick(4, e)} className="usertab-options"><img className="usertab_icon_image" src={optionIcon}/></Button>
                                        <Menu className="menu-eliminate-4"
                                            id={4} 
                                            open={Boolean(this.state.anchorEls[4])}
                                            onClose={e => this.handleActionClose(4, e)}
                                            getContentAnchorEl={null}
                                            anchorOrigin={{
                                                vertical: 'center',
                                                horizontal: 'center',
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                            }}>
                                            <MenuOfItems onClick={e => this.handleActionClose(4, e)}/>
                                        </Menu>
                                    </div>
                                </td>
                            </tr>
                            <tr className="usertab-fila">
                                <th scope="row" className="usertab-user-image-table"><img className="usertab-user-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMRyv9Dkf8Wusb0uForhlXoz090E0Xgt_1OQ&usqp=CAU" /></th>
                                <td>1122334455</td>
                                <td>Carmen Cardozo</td>
                                <td>
                                    <div>
                                        <Button onClick={e => this.handleActionClick(5, e)} className="usertab-options"><img className="usertab_icon_image" src={optionIcon}/></Button>
                                        <Menu className="menu-eliminate-5"
                                            id={5} 
                                            open={Boolean(this.state.anchorEls[5])}
                                            onClose={e => this.handleActionClose(5, e)}
                                            getContentAnchorEl={null}
                                            anchorOrigin={{
                                                vertical: 'center',
                                                horizontal: 'center',
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                            }}>
                                            <MenuOfItems onClick={e => this.handleActionClose(5, e)}/>
                                        </Menu>
                                    </div>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                    </div>
                    <div className="usertab-cont-purple"/>
                </div>
        )
    }
} export {UserTabHome};
