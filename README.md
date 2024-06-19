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
fa un check delle modifiche in pending e del branch in cui ti trovi
(rosse se non sono state aggiunte)
(verdi se sono state aggiunte)

`git add <nome-file>`
aggiungi (perpari per il commit) il file in pending 

`git add .`
aggiungi (perpari per il commit) tutti i file in pending 

`git checkout <nome-file>`
rimuovi (SOLO su file preesistenti, non funziona con i nuovi file) il file in pending 

`git checkout .`
rimuovi (SOLO su file preesistenti, non funziona con i nuovi file) tutti i file in pending 

`git commit -m "messaggio"`
Committi le modifiche con il messaggio inserito tra ""

`git push`
Pushi le modifiche committate in precedenza

`git pull`
Pulli le modifiche fatte sul branch master

`git stash`
Salvi le modifiche ai file GIA' ESISTENTI in una specie di cache locale del tuo IDE (es. VS CODE)
E' molto utile se hai modifiche in pending e devi prima fare un pull di modifiche fatte da colleghi

`git stash pop`
Recuperi le modifiche che hai precedentemente salvato nella cache locale del tuo IDE

`git checkout -b <nome-branch>`
Crei un nuovo branch a partire dal branch attuale

`git fetch`
Ti fetchi tutti i branch remoti creati sul progetto

`git checkout <nome-branch>`
Ti sposti su un branch già esistente

`git branch -D <nome-branch>`
Cancelli un branch (SOLO la copia in locale, non quella REMOTA), questo comando va lanciato da un altro branch, non da quello che vuoi cancellare