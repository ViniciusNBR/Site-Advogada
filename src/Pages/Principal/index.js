import React from 'react'
import {Link} from 'react-router-dom'

import './styles.css'
import './slideStyle.css'

import logoProv from '../../Assets/logoprovisoria.png'
import whatsIcon from '../../Assets/whatsIcon.png'
import mailIcon from '../../Assets/emailIcon.png'
import fotoAmostra from '../../Assets/fotoAmostra.png'
import oabsc from '../../Assets/OAB.png'
import consti from '../../Assets/constituicao.jpg'

export default function paginaPrincipal(){

    const emailLink = 'mailto:contato@luaralica.com?subject=Olá%20Doutora%20Luaralica'

    return(
        <div id="principalContainer">
            <header>
                <div className="logo">
                    <img src={logoProv} alt="Logo do Site" />
                </div>
                <div className="contact">
                    <ul>
                        <img src={mailIcon} alt="E-mail" />
                        <a href={emailLink}>
                            <li className="firstContact">
                                E-Mail
                            </li>
                        </a>
                        <a href="https://bit.ly/2ysQErx">
                            <li className="secondContact">
                                WhatsApp
                            </li>
                        </a>
                        <img src={whatsIcon} alt="Whatsapp" />
                    </ul>
                </div>
            </header>
            <nav id="menuContainer" >
                <div className="mainMenu">
                    <ul>
                        <li>
                            <a href="#slideContainer">ÁREAS DE ATUAÇÃO</a>
                        </li>
                        <li>
                            <a href="#carrer">HISTÓRIA</a>
                        </li>
                        <li>
                            <a href="#locationContainer">LOCALIZAÇÃO</a>
                        </li>
                        <li>
                            <Link className="linkTo" to="/Contact">CONTATOS</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <section id="slideContainer">
                <div className="slideShow">
                    {/*empty*/}
                </div>
                <div className="slideShow2">
                    {/*empty*/}
                </div>
            </section>
            <main id="carrer">
                <div className="carrer">
                    <h1>Luaralica Souto Maior</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit rhoncus tristique, eleifend tincidunt ad cursus hac fusce rutrum ridiculus, commodo nulla vulputate volutpat elementum suscipit arcu ullamcorper venenatis, varius aliquet habitasse maximus ligula mus curabitur. Elementum enim dictum tempus taciti in scelerisque inceptos varius ornare, adipiscing senectus sodales sociosqu leo ultrices ex urna himenaeos, aptent nibh lacinia nascetur amet interdum praesent penatibus. Ipsum platea vivamus cubilia tellus magnis fusce semper ullamcorper, ornare vitae adipiscing ultricies feugiat pretium odio, lacus aliquet conubia accumsan neque vehicula cursus. Sapien egestas imperdiet habitasse parturient ad tempus hac felis montes erat odio orci dapibus nam, tincidunt justo duis luctus mauris cursus fermentum natoque leo bibendum maximus velit donec. Amet facilisi erat habitant pretium euismod enim nibh volutpat vulputat.</p>
                </div>
                <div id="lawer">
                    <img src={fotoAmostra} alt="Foto da advogada" />
                </div>
            </main>
            <section id="locationContainer">
                <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.965729553841!2d-48.61094988561191!3d-27.594592082838798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95273627d9a0f9eb%3A0x6932cb998eafba0!2sR.%20Ver.%20M%C3%A1rio%20Coelho%20Pires%20-%20Campinas%2C%20S%C3%A3o%20Jos%C3%A9%20-%20SC!5e0!3m2!1spt-BR!2sbr!4v1585718222194!5m2!1spt-BR!2sbr"></iframe>
                </div>
                <div className="address">
                    <h2>Endereço</h2>
                    <p>São José/SC</p>
                    <p>Rua Mário Coleho Pires 341</p>
                    <p>Condomínio Vó Sei lá</p>
                    <p>Proximo a Borracharia Não Lembro o Nome</p>
                </div>
            </section>
            <footer>
                <div className="institutes">
                    <img src={oabsc} alt="OAB de Santa Catarina" />
                    <img src={consti} alt="Constituição Federal de 1988" />
                </div>
                <div className="copyRight">
                    <p>2020 © Todos os direitos reservados</p>
                    <p>Luaralica ® Marca regristrada</p>
                    <Link className="linkTo" to="/Contact">Contatos e redes sociais</Link>
                </div>
            </footer>
        </div>
    )
}