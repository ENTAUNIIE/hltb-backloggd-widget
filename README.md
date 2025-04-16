# 🎮 HLTB / Backloggd Widget

Petit widget Electron pour accéder rapidement à [HowLongToBeat](https://howlongtobeat.com) et [Backloggd](https://www.backloggd.com) depuis la systray Windows.

---

## ✨ Fonctionnalités

- Icône dans la **systray Windows**
- Accès rapide à :
  - HowLongToBeat
  - Backloggd
- Interface **minimale** avec auto-login si déjà connecté
- Statut de connexion affiché dans la barre supérieure
- Lancement automatique au démarrage
- Fermeture propre via bouton ✕
- Icône personnalisée `H/B`

---

## 🧱 Installation

```bash
npm install
npm start
````

---

## 🏁 Générer le setup .exe

```bash
npm run dist
```

L’installeur sera généré dans le dossier `dist/` sous la forme `HLTB_Backloggd_Widget Setup.exe`.

---

## 🚀 Lancement automatique

L’application se configure automatiquement pour se lancer au démarrage de Windows via `auto-launch`.

---

## 📦 Dépendances

- [Electron](https://www.npmjs.com/package/electron)
    
- [Auto-launch](https://www.npmjs.com/package/auto-launch)
    
- [Electron Builder](https://www.npmjs.com/package/electron-builder)
    

---

## 🖼️ Aperçu

![image](https://github.com/user-attachments/assets/dd3972d9-1eb1-40e5-bfd1-61cb177f6a99)
![image](https://github.com/user-attachments/assets/2e01cf42-9038-4f01-bc53-3c9cc4cdc9ea)


---

## 🧾 Attributions

Ce projet a été conçu avec ❤️ et pas mal de bidouilles :

- Widget Electron réalisé par [ENTAUNIIE](https://github.com/ENTAUNIIE) 
    
- Icône personnalisée `H/B` créée pour la systray
    
- Intégration de WebView pour contourner les restrictions iframe
    
- Build `.exe` via Electron Builder avec configuration auto-lancement
    
- Interface minimaliste : glissable, fermable, simple
    
