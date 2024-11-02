---
sidebar_position: 2
---

## Prérequis pour la Base de Données

Avant de commencer la configuration de votre base de données, assurez-vous que les prérequis suivants sont remplis :

:::info
* **Installation de MariaDB :**
   - Vous devez avoir installé MariaDB sur votre serveur. Si ce n'est pas encore fait, veuillez suivre les instructions d'installation appropriées pour votre système d'exploitation.

   Pour installer MariaDB, veuillez vous référer au [guide suivant ](/Chokatech-Doc/docs/Serveurs/Serveur%20LAMP#installation-de-mariadb).
:::

Une fois ces prérequis vérifiés et la base de données installée, vous pourrez procéder à la configuration de votre base de données.

## Étapes de Configuration

## Création et Gestion de Base de Données

Ce guide explique comment configurer une base de données pour GLPI avec MariaDB/MySQL, y compris la création d'utilisateurs et les commandes essentielles.

### Configuration de MariaDB pour accepter les connexion à distance :

Cette configuration va permettre d'accepter les connexions à distance depuis d'autres machines.

```bash
vim /etc/mysql/mariadb.conf.d/50-server.cnf
```
![sucees phpinfo](./img/bind.png)


### Connexion à MariaDB :

Connectez-vous à MariaDB en tant qu’utilisateur `root` :

```bash
mysql -u root -p
```

### Création de la Base de Données : 

```sql
CREATE DATABASE DB;
```

### Création d'un Utilisateur et attributions de privilèges :

- **Création d'un Utilisateur avec connexion à Distance :**

   ```sql
   CREATE USER 'adm_DB'@'%' IDENTIFIED BY 'root';
   ```

   ```sql
   GRANT ALL PRIVILEGES ON DB.* TO 'adm_DB'@'%';
   ```
   :::info
   Remarque : Utilisez % pour autoriser les connexions depuis toutes les adresses IP, ou remplacez % par une adresse IP spécifique pour restreindre l’accès.
   :::

   L'utilisateur créé 'adm_DB'@'%' pourra se connecter depuis n'importe quelle adresse IP.

- **Création d'un Utilisateur Local avec Privilèges :**

   ```sql
   CREATE USER 'adm_DB'@'localhost' IDENTIFIED BY 'root';
   ```

   ```sql
   GRANT ALL PRIVILEGES ON DB.* TO 'adm_DB'@'localhost';
   ```
   L'utilisateur créé 'adm_DB'@'localhost' se connectera uniquement depuis la machine locale.


### Appliquer les Modifications des Privilèges :

```sql
FLUSH PRIVILEGES;
```

### Quitter MariaDB :

```sql
EXIT;
```
Redémarrer le serveur MariaDB :

```bash
systemctl restart mariadb.service 
 ```

## Commandes Indispensables pour Gérer une Base de Données et ses Utilisateurs

| Commande                                                          | Description                                                               |
|-------------------------------------------------------------------|---------------------------------------------------------------------------|
| `sudo mysql -u root -p`                                           | Se connecter à MySQL en tant que root                                     |
| `CREATE DATABASE nom_de_bdd;`                                     | Créer une nouvelle base de données                                        |
| `SHOW DATABASES;`                                                 | Lister toutes les bases de données                                        |
| `USE nom_de_bdd;`                                                 | Sélectionner une base de données pour travailler dessus                   |
| `CREATE USER 'utilisateur'@'localhost' IDENTIFIED BY 'mot_de_passe';` | Créer un nouvel utilisateur MySQL                                    |
| `GRANT ALL PRIVILEGES ON nom_de_bdd.* TO 'utilisateur'@'localhost';` | Accorder tous les privilèges à un utilisateur sur une base de données |
| `FLUSH PRIVILEGES;`                                               | Appliquer les modifications des privilèges                                |
| `SHOW GRANTS FOR 'utilisateur'@'localhost';`                      | Afficher les privilèges accordés à un utilisateur                         |
| `REVOKE ALL PRIVILEGES ON nom_de_bdd.* FROM 'utilisateur'@'localhost';` | Révoquer tous les privilèges d'un utilisateur                        |
| `DROP USER 'utilisateur'@'localhost';`                            | Supprimer un utilisateur MySQL                                            |
| `DROP DATABASE nom_de_bdd;`                                       | Supprimer une base de données                                             |


