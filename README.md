# appvuesimple, qu'est ce que c'est ?

## Lien vers Github Pages

- Je vous conseille d'aller voir le [site](https://mathias-leroy-epsi.github.io/appvuesimple/).

## Lien vers l'API

- Le lien de l'API en question est [ici](https://dummyjson.com/docs/users).

## Description du projet

### v1.0 du projet : utilisation de l'API NantesMetropole
- Ce projet est une application web qui permet de consulter les informations disponibles sur les aires de covoiturage de la ville de Nantes. Il est développé en Vue.js et utilise l'API de Nantes Métropole.

- Le lien de l'**ancienne API** utilisé est [ici](https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_aires-covoiturage-nantes-metropole&rows=10).

### v2.0 du projet : utilisation de l'API DummyJSON
- Dans un soucis de simplicité d'utilisation, et pour pouvoir intégrer un système de recherche de données au sein de l'API, j'ai dû me résigner à changer d'API.

- Cette API va permettre de récuperer des utilisateurs, ainsi que les données qui leurs sont associées.

- Dans cette version, je n'ai pas exploité toutes les données de l'API, mais seulement celles qui m'intéressaient. J'ai donc choisi de récupérer les données suivantes : nom, prénom, email, téléphone, adresse, ville, code postal, pays, date de naissance, date d'inscription, et l'avatar de l'utilisateur. Je n'ai traité que les données sur les utilisateurs. Ce projet étant une mise en bouche pour le projet de groupe final, j'ai préféré faire à l'essentiel, car ce ne sont que des fonctionnalités bonus (ce sont des requetes similaires envoyées à l'API).

## Lien vers Github Pages
Pour aller sur le site, il suffit de cliquer sur ce [lien](https://mathias-leroy-epsi.github.io/appvuesimple/).