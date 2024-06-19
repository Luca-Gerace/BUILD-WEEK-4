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

Profile page / home (pagina profilo personale)

User page (pagina profilo altri utenti)


- creare componenti:
1 ✅ header
2 ❌ blocco profilo personale (GET)
3 ❌ lista esperienze (GET)
4 ❌ esperienza singola
5 ❌ Modale per aggiunta/modifica esperienza (POST/PUT)
6 ✅ sidebar con profili utenti (GET)
7 ✅ profili utenti
8 ✅ footer



## COMANDI GIT

`git status`
fa un check delle modifiche in pending
(rosse se non sono state aggiunte)
(verdi se sono state aggiunte)

`git add <nome-file>`
aggiungi tutte le modifiche in pending 

`git add .`
(rosse se non sono state aggiunte)
(verdi se sono state aggiunte)

`git status`
fa un check delle modifiche in pending
(rosse se non sono state aggiunte)
(verdi se sono state aggiunte)

`git status`
fa un check delle modifiche in pending
(rosse se non sono state aggiunte)
(verdi se sono state aggiunte)
