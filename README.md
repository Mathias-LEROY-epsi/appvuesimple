# appvuesimple, qu'est ce que c'est ?

## Liens vers l'API

- Le lien de l'API en question est [ici](https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_aires-covoiturage-nantes-metropole&rows=20).

- Pour changer le nombre de résultats, il suffit de changer la valeur de `rows` dans l'URL. Ici, on a mis `rows=20` pour avoir 20 résultats. Ce changement se fait dans la fonction asynchrone `getAiresCovoit()` du fichier `src/index.html`.

- Pour avoir plus de détails sur comment sont construits les jeux de données de l'API, voici un autre [lien](https://data.nantesmetropole.fr/explore/dataset/244400404_aires-covoiturage-nantes-metropole/api/?disjunctive.commune&disjunctive.service_velo&disjunctive.stationnement_velo&disjunctive.conditions_d_acces&disjunctive.exploitant&rows=10&timezone=&sort=).

## Description du projet

Ce projet est une application web qui permet de consulter les informations disponibles sur les aires de covoiturage de la ville de Nantes. Il est développé en Vue.js et utilise l'API de Nantes Métropole.

## Lien vers Github Pages
Pour aller sur le site, il suffit de cliquer sur ce [lien](https://mathias-leroy-epsi.github.io/appvuesimple/).