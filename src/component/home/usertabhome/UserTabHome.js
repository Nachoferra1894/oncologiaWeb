import React from 'react'
import '../usertabhome/UserTabHome.css'
import optionIcon from '../../../img/option_icon.png'

export const UserTabHome = () => {
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
                            <td><button className="usertab-options"><img className="usertab_icon_image" src={optionIcon}/></button></td>
                        </tr>
                        <tr className="usertab-fila">
                            <th scope="row" className="usertab-user-image-table"><img className="usertab-user-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMRyv9Dkf8Wusb0uForhlXoz090E0Xgt_1OQ&usqp=CAU" /></th>
                            <td>1122334455</td>
                            <td>Carmen Cardozo</td>
                            <td><button className="usertab-options"><img className="usertab_icon_image" src={optionIcon}/></button></td>
                        </tr>
                        <tr className="usertab-fila">
                            <th scope="row" className="usertab-user-image-table"><img className="usertab-user-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMRyv9Dkf8Wusb0uForhlXoz090E0Xgt_1OQ&usqp=CAU" /></th>
                            <td>1122334455</td>
                            <td>Carmen Cardozo</td>
                            <td><button className="usertab-options"><img className="usertab_icon_image" src={optionIcon}/></button></td>
                        </tr>
                        <tr className="usertab-fila">
                            <th scope="row" className="usertab-user-image-table"><img className="usertab-user-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMRyv9Dkf8Wusb0uForhlXoz090E0Xgt_1OQ&usqp=CAU" /></th>
                            <td>1122334455</td>
                            <td>Carmen Cardozo</td>
                            <td><button className="usertab-options"><img className="usertab_icon_image" src={optionIcon}/></button></td>
                        </tr>
                        <tr className="usertab-fila">
                            <th scope="row" className="usertab-user-image-table"><img className="usertab-user-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMRyv9Dkf8Wusb0uForhlXoz090E0Xgt_1OQ&usqp=CAU" /></th>
                            <td>1122334455</td>
                            <td>Carmen Cardozo</td>
                            <td><button className="usertab-options"><img className="usertab_icon_image" src={optionIcon}/></button></td>
                        </tr>
                        
                    </tbody>
                </table>
                </div>
                <div className="usertab-cont-purple"/>
            </div>
    )
}