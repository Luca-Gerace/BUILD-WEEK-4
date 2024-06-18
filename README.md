# LINKEDIN - BUILD WEEK 4


## LIBRERIE INSTALLATE


- headlessui per componenti
`https://headlessui.com/`

- Material Tailwind per componenti
`https://www.material-tailwind.com/docs/react/accordion`

- HeroIcons per icone
`https://heroicons.com/`

- React-router-dom per routing app

- React-testing-library per test unitari



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

- creare pagine:
profile page (pagina profilo personale)
user page (pagina profilo altri utenti)

- creare componenti
header
listaesperienze
esperienzasingola
footer