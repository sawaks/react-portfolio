import React from 'react';
import artistWebsite from '../images/ayakogoshima.jpeg';
import cineWebsite from '../images/CineFile.png';
import travelWebsite from '../images/travel_companion.png';

export const Project = [
    {
        title: 'Artist website',
        siteImg: `${artistWebsite}`,
        role: 'Sole author',
        tool: 'HTML, CSS, JavaScript, PHP, WordPress',
        siteLink: 'https://ayakogoshima.com/',
        gitHubLink: 'https://github.com/sawaks/artist-website.git'
    },
    {
        title: 'CineFile',
        siteImg: `${cineWebsite}`,
        role: 'Front end and plan for web functions',
        tool: 'HTML, CSS, JavaScript, Google Fonts',
        siteLink: 'https://zeinahares.github.io/Group-Project-1-CineFile/',
        gitHubLink: 'https://github.com/zeinahares/Group-Project-1-CineFile.git'
    },
    {
        title: 'Travel Companion',
        siteImg: `${travelWebsite}`,
        role: 'Front end designer',
        tool: 'Express, Express Handlebars, MySQL, JavaScript, jQuery, ORM',
        siteLink: 'https://sheltered-caverns-17258.herokuapp.com/',
        gitHubLink: 'https://github.com/tjsoho/travel-companion.git'
    },
]
