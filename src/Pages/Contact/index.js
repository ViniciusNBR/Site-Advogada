import React from 'react'

import './styles.css'

import logoIcon2 from '../../Assets/logoprovisoria2.png'

export default function Contact(){
    return(
        <div id="contactContainer">
            <div className="boxContacts">
                <div className="logoContact">
                <img src={logoIcon2} alt="Luaralica Advocacia" />
                </div>
                <div className="contacts">
                    <ul>
                        <a href="#">
                            <li className="firstContact">
                                E-Mail - luaralica@gmail.com
                            </li>
                        </a>
                        <a href="#">
                            <li className="secondContact">
                                WhatsApp - (61) 0 0000-0000
                            </li>
                        </a>
                        <a href="#">
                            <li className="forthContact">
                                LinkedIn - linkedin/in/luaralica
                            </li>
                        </a>
                        <a href="#">
                            <li className="thirdContact">
                                Tel -(48) 9 0000-0000
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    )
}