import React from 'react';
import { Link } from 'react-router-dom';

import './experience.scss';

const Experience = () => (
        <div className="experience">
            <Link to="/" className="experience_return">Retour page accueil</Link>
            <h2 className="experience_title">Mon parcours</h2>
            <div className="experience_section">
                <p className="experience_job">Formation de Développeuse Web et Web mobile</p>
                <p className="experience_duration">6 mois</p>
                <p className="experience_enterprise">Ecole O'clock</p>
                <p className="experience_details">La formation s'est déroulée en 3 temps :
                    <li>Les bases en HTML - CSS - JS - PHP - MySQL - Gestion de projet (3,5 mois)</li>
                    <li>La spécialisation en React et React-Redux (1 mois)</li>
                    <li>Le projet en équipe (1 mois) : développement de A à Z du projet O'rando</li>
                </p>
            </div>
            <div className="experience_section">
                <p className="experience_job">Directrice de magasin</p>
                <p className="experience_duration">6 ans</p>
                <p className="experience_enterprise">Grand Vision</p>
                <p className="experience_details">
                    <li>Développement du chiffre d'affaires</li>
                    <li>Accompagnement d'une équipe de 10 personnes</li>
                    <li>Analyse de la performance</li>
                    <li>Pilotage de la satisfaction client</li>  
                </p>
            </div>
            <div className="experience_section">
                <p className="experience_job">Responsable de marché</p>
                <p className="experience_duration">3 ans</p>
                <p className="experience_enterprise">Sephora</p>
                <p className="experience_details">
                    <li>Animation d'une équipe de 20 personnes</li>
                    <li>Gestion des flux financiers</li>
                    <li>Gestion de l'audit</li>
                </p>
            </div>
            <div className="experience_section">
                <p className="experience_job">Chef de rayon</p>
                <p className="experience_duration">6 ans</p>
                <p className="experience_enterprise">Auchan</p>
                <p className="experience_details">
                    <li>Gestion d'un compte d'exploitation</li>
                    <li>Gestion d'une équipe de 15 personnes</li>
                    <li>Négociation fournisseurs</li>
                    <li>Gestion d'inventaires</li>
                </p>
            </div>  
            <div className="experience_section">
                <p className="experience_job">Diplôme d'Ingénieur en sciences et technologies des industries alimentaires</p>
                <p className="experience_duration">3 ans</p>
                <p className="experience_enterprise">Polytech Montpellier</p>
                <p className="experience_details">3 stages réalisés durant mes études :
                    <li>Optimisation d'une ligne de production - Ricard (6 mois)</li>
                    <li>Mise en place d'un logiciel de Gestion de Production Assistée par Ordinateur - IES (1 mois)</li>
                    <li>Optimisation d'une ligne de fabrication - Nougats Bremond (2 mois)</li>
                </p>
            </div>                 
        </div>
);

export default Experience;