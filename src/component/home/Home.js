import React from 'react'
import '../home/Home.css'
import { TabHey } from '../home/tabhey/TabHey'
import { ButtonHome } from './buttonsHome/ButtonHome'
import { UserTabHome } from './usertabhome/UserTabHome'
import { UserTabAllUsers } from './seeAllUsers/UserTabAllUsers'
import { Router,Link, Route, Switch } from 'react-router-dom'

export const Home = () => {
    return(
            <div className="home-cont-background">
                <TabHey name={"RICARDO"}/>
                    <div className="home-cont-buttons">
                        <ButtonHome text="REGISTRAR NUEVO PACIENTE" color="purple"/>
                        <ButtonHome text="VER TODOS LOS PACIENTES" color="blue" link="seeAllUsers"></ButtonHome>
                        <ButtonHome text="VER ULTIMOS PACIENTES CON SINTOMAS" color="lightblue"/>
                    </div>
                    
                    <div>
                        <UserTabHome/>
                    </div>
            </div>
    )
}