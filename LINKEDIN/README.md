# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


1) GET creare la pagine con tutti i profili

2) GET creare la pagina profilo personale
- GET ritornare una lista di esperienze

* Componente ListaEsperienze
https://striveschool-api.herokuapp.com/api/profile/userld/experiences
- POST crea nuova esperienza

* Componente EsperienzaSingola
- PUT per modifcare l'esperienza
https://striveschool-api.herokuapp.com/api/profile/userld/experiences/:expld
- DELETE per cancellare l'esperienza

Modello esperienza:
{
    "role": "СТО",
    "company": "Strive School",
    "startDate": "2019-06-16", 1
    "endDate": "2019-06-16", //null se ancora in corso
    "description": "Doing stuff",
    "area": "Berlin",
}

3) GET creare una pagina dinamica con il singolo profilo utente 
- ritornare una lista di esperienze


## TODO LIST:

- importare react-router-dom
- creare pagine:
home (lista utenti)
profile page (pagina profilo personale)
user page (pagina profilo altri uteneti)

- creare componenti
header
listaesperienze
esperienzasingola
footer