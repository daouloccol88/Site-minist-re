"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Header_utils from './header_utils';

const Header = () => {
    const [headerTitle, setheaderTitle] = useState("Portail Officiel du Gouvernement de la République du Niger");
    const [menu, setMenu] = useState([
        {
            id: "Acceuil",
            title: "Acceuil",
            subMenu: []
        },
        {
            id: "Institutions",
            title: "Institutions",
            subMenu: [
                "Assemblée Nationale", 
                "Commission Electorale Nationale Indépendante",
                "Commission Nationale des Droits Humains",
                "Conseil d'Etat",
                "Conseil Economique, Social et Culturel",
                "Conseil Supérieur de la Communication",
                "Cour Constitutionnelle",
                "Cour de Cassation",
                "Cour des Comptes",
                "Les membres du Gouvernement",
                "Médiature de la République"
            ]
        },
        {
            id: "Primatures",
            title: "Primatures",
            subMenu: [
                "Biographie du Premier Ministre",
                "Les Anciens Premiers Ministres",
                "Etablissements sous tutelle", 
                "Secrétariat Général du Gouvernement", 
                "Cabinet"
            ]
        },
        {
            id: "Textes Fondamentaux",
            title: "Textes Fondamentaux",
            subMenu: []
        },
        {
            id: "Les Programmes",
            title: "Les Programmes",
            subMenu: []
        },
        {
            id: "Les Ministères",
            title: "Les Ministères",
            subMenu: []
        }
    ])

function loadMenu() {
    const list = document.querySelector("#header");
    let docs = ``;
    menu.forEach(doc => {
        if(doc.subMenu.length === 0){
            docs +=`
            <li class="nav-item">
                <a class="nav-link text-dark" href="/">${doc.title}</a>
            </li>
            `               
        }else{
            let subMenuItems = '';
        
            doc.subMenu.forEach(subItem => {
                subMenuItems += `<li><a class="dropdown-item" href="/article/${subItem}">${subItem}</a></li>`;
            });

            docs += `<div class="dropdown">
                        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            ${doc.title}
                        </button>
                        <ul class="dropdown-menu">
                            ${subMenuItems}
                        </ul>
                    </div>
            `
        }
    })

    list.innerHTML = docs;  
}

useEffect(() => {
    loadMenu();
})

function editMenu() {

}


  return (
    <div>
        <nav className="navbar bg-body-tertiary">
            <div className="container">
                <a className="link-underline link-underline-opacity-0" href="/">
                    <div className="card border-0 brand bg-body-tertiary" style={{maxWidth: "540px"}}>
                        <div className="row g-0">
                          <div className="col-md-4">
                            <Image src="/img/Coat_of_arms_of_Niger.svg.png" width={300} height={250}  className="img-fluid rounded-start" alt="..."/>
                          </div>
                          <div className="col-md-8">
                            <div className="card-body"> 
                              <h4 className="card-title">CNSP</h4>
                              <i className="card-text">Fraternité</i><br/>
                              <i className="card-text">Travail</i><br/>
                              <i className="card-text">Progrès</i>
                            </div>
                          </div>
                        </div>
                    </div>
                </a>
                
                <div>
                    <h2>{headerTitle}</h2>
                </div>

                <button className="navbar-toggler d-sm-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>   
        </nav>

         

        <div className="shadow mb-5">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container border-top">
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav" id='header'>
                        {/*Here where the Header menu is injected*/}
                    </ul>
                </div>
                </div>
            </nav>
        </div>

        <Header_utils title={headerTitle} setTitle={setheaderTitle} menu={menu} setMenu={setMenu}/>
    </div>
  )
}

export default Header