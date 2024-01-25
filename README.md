# 🚀 Frontend

Ce projet a été généré avec [Angular CLI](https://github.com/angular/angular-cli) version 14.0.7.

## 📦 Dockerfile

Le Dockerfile de ce projet est utilisé pour créer une image Docker de l'application Angular. Il utilise un processus de construction en plusieurs étapes :

1. **Étape de construction** : Cette étape utilise une image Docker Node.js pour construire l'application Angular. Les dépendances de l'application sont installées avec `npm install`, et l'application est construite avec `npm run build`.

2. **Étape de service** : Cette étape utilise une image Docker Nginx pour servir l'application Angular construite. La sortie de construction de l'étape précédente est copiée dans l'image Nginx, et le serveur Nginx est configuré pour servir ce contenu.

## 🛠️ Configuration Nginx

Le serveur Nginx est configuré avec le fichier `nginx.conf`. Ce fichier de configuration met en place un serveur qui écoute sur le port 8080 et sert la sortie de construction de l'application Angular à partir du répertoire `/usr/share/nginx/html`.

Nginx est utilisé car c'est un serveur web puissant, efficace et fiable. Il peut servir du contenu statique très rapidement, et il peut également agir comme un proxy inverse, un équilibreur de charge et un cache HTTP, ce qui en fait un excellent choix pour servir des applications Angular.

## 🏗️ Construction du projet

Pour construire le projet, suivez ces étapes :

1. Installez les dépendances de l'application avec `npm install`.

2. Construisez l'application Angular avec `npm run build`. Cela créera un répertoire `dist/` avec la sortie de construction.

3. Construisez l'image Docker avec `docker build -t frontend .`. Cela créera une image Docker nommée `frontend` en utilisant le Dockerfile dans le répertoire courant.

4. Exécutez le conteneur Docker avec `docker run --name Labxpert-frontend -p 8080:8080 frontend`. Cela démarrera un conteneur Docker nommé `Labxpert-frontend`, mappera le port 8080 dans le conteneur au port 8080 sur l'hôte, et utilisera l'image Docker `frontend`.

Après avoir suivi ces étapes, vous pouvez naviguer vers `http://localhost:8080` dans votre navigateur web pour voir l'application Angular.
