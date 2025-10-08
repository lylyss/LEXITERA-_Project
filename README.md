# LEXITERA

<!-- Frontend -->
![VS Code](https://img.shields.io/badge/VSCode-editor-007ACC?logo=visualstudiocode&logoColor=white)
![Vue 3](https://img.shields.io/badge/Vue-3.x-4FC08D?logo=vuedotjs&logoColor=white)
![React](https://img.shields.io/badge/React-17+-61DAFB?logo=react&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-dom-RED?logo=reactrouter&logoColor=white)
![React Bootstrap](https://img.shields.io/badge/React_Bootstrap-563D7C?logo=react&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?logo=bootstrap&logoColor=white)


<!-- Languages & Tools -->
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-16+-339933?logo=node.js&logoColor=white)
![npm](https://img.shields.io/badge/npm-8+-CB3837?logo=npm&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-HTTP-5A29E4?logo=axios&logoColor=white)

<!-- Storage / Client-side -->
![IndexedDB](https://img.shields.io/badge/IndexedDB-browser_db-5C6BC0)

<!-- Backend / Persistenza (previsto) -->
![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.x-6DB33F?logo=spring&logoColor=white)
![Java](https://img.shields.io/badge/Java-21-007396?logo=java&logoColor=white)
![Maven](https://img.shields.io/badge/Maven-3.8+-C71A36?logo=apachemaven&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-13+-336791?logo=postgresql&logoColor=white)

<!-- Security / Auth -->
![JWT](https://img.shields.io/badge/JWT-token-F05A28?logo=jsonwebtoken&logoColor=white)
![BCrypt](https://img.shields.io/badge/BCrypt-password_hash-6C8EA3)

<!-- DevOps / CI / Container -->
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI/CD-2088FF?logo=githubactions&logoColor=white)
![Git](https://img.shields.io/badge/Git-version_control-F05032?logo=git&logoColor=white)

<!-- Tools / IDE / API -->
![IntelliJ IDEA](https://img.shields.io/badge/IntelliJ_IDEA-IDEA-000000?logo=intellijidea&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-API-FF6C37?logo=postman&logoColor=white)
![AWS S3](https://img.shields.io/badge/AWS_S3-storage-569A31?logo=amazonaws&logoColor=white)

<!-- Testing -->
![React Testing Library](https://img.shields.io/badge/React_Testing_Library-tests-FFCB2C)


Short description
-----------------
LEXITERA è un'interfaccia React per un progetto narrativo/gioco.  
Contiene: navbar personalizzata, pagine regione (Luxertia, Exotros, Gemidera), pagina News, profilo utente con login/registrazione (localStorage), gestione immagine profilo, portafoglio, assistenza (ticket), riscatti codici e layout responsive.



Caratteristiche principali
--------------------------
- Front-end React (componenti modulari)
- Login / Registrazione (localStorage, evoluzione verso backend)
- Profilo utente: upload immagine, modifica dati, UID
- Portafoglio e codici riscattati (salvati account)
- Assistenza: invio ticket tramite form
- Modal per login, riscatti, ticket
- Responsive CSS con keyframes e file dedicati
- Background user: src/assets/media/IMG/bg.news.jpg

Requisiti
---------
- Node.js 16+ / npm
- Browser moderno (supporta localStorage / FileReader)
- (Per backend futuro) Java 17+, Maven/Gradle, PostgreSQL

Installazione (sviluppo)
------------------------
1. Clona il repository:
   git clone <URL-del-repo>
2. Entra nella cartella:
   cd "d:\EPICODE\LEXITERA _Project\LEXITERA_PROJECT"
3. Installa dipendenze:
   npm install
4. Avvia in dev:
   npm start
5. Build per produzione:
   npm run build

Come pubblicare su GitHub (rapida)
---------------------------------
1. Crea repo su GitHub.
2. Aggiungi remote e push:
   git remote add origin <git_url>
   git branch -M main
   git push -u origin main
3. Abilita GitHub Pages (opzionale) dalle Settings / Pages.

Uso rapido (localStorage note)
------------------------------
- Chiave utilizzata: `lexitera_account` (memorizza un singolo account).
- Le immagini caricate sono convertite in DataURL e salvate in `profileImg`.
- Per test: DevTools → Application → Local Storage → elimina `lexitera_account`.

Roadmap — backend con Spring Boot (previsto)
-------------------------------------------
L'implementazione di un backend persistente con Spring Boot è prevista:
- REST API (accounts, tickets, codes, npcs, uploads)
- DB relazionale (Postgres o MySQL) con JPA + Flyway
- Sicurezza: JWT + BCrypt
- Migrazione dati da localStorage al backend (tool di migrazione)
- Endpoints principali:
  - POST /api/accounts (register)
  - POST /api/auth (login → token)
  - GET /api/accounts/{uid}
  - POST /api/tickets
  - POST /api/codes/redeem

Feature future
--------------
- Supporto multi-account (IndexedDB o backend)
- Upload immagini su storage esterno (S3) + riferimenti in DB
- Admin dashboard per gestione NPC, codici, ticket
- Test automatici (Jest + React Testing Library) e integrazione CI

Struttura del progetto
----------------------
- src/components/ — React components (navbar, user, news, regions)
- src/css/        — styles e file responsive
- src/assets/     — immagini, audio, media
- src/utils/      — helper (api, db helpers)
- backend/        — (previsto) Spring Boot service

Contribuire
-----------
1. Fork → branch feature/tuo-feature → PR.
2. Follow coding style: prefer inline styles limitate + CSS per responsive/animazioni.
3. Documenta le modifiche e aggiungi screenshot nei PR.

Licenza
-------
LOBODA NICOLAE

Contatti
--------
Per problemi apri un ticket nella sezione Assistenza dell'app oppure scrivi a: GLADDIORUS@GMAIL.COM

