# Client-Sodium

La partie client représente le site vitrine présentant le projet SC.

# Getting Started

Afin que le site fonctionne vous devez disposer d'un serveur **Apache** à jour ainsi que la version 7.1 de PHP (au minimum).
PHPMyAdmin doit être installer ainsi que MySQL afin de pouvoir gérer la base de données en localhost.
NodeJS doit être installer afin de pouvoir lancer le client serveur via la commande **npm start**.

# Stack

La stack utilisé est trouvable dans le **package.json** à àla racine du projet et s'installe via la commande **npm install**

# Organisation

Tout nos modules installé sont dans le dossier **nodes_modules**.
Le dossier **src** contient nos **assets** notre accès à l'API via le dossier **api**, tout nos composants se trouve dans le dossier **components**, et les pages affiché se trouve dans le dossier **pages**.
**Router.jsx** est le point d'entrée de notre application dans **index.js**.

