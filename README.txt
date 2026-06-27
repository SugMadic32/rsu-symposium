RSU ICT SYMPOSIUM 2025
Generative AI & the Future of ICT Learning
ICT 401 Group 1 — Faculty of Information Technology, Rangsit University
=======================================================================

FILE STRUCTURE
--------------
rsu-symposium/
├── index.html
├── style.css
├── script.js
├── images/
│   ├── rsu-logo.png              ← PUT RSU LOGO HERE
│   ├── ric-logo.png              ← PUT RIC LOGO HERE
│   ├── symposium-poster.jpg      ← Already included
│   └── members/
│       ├── aung-myo.jpg
│       ├── phoo-myat-may-zaw.jpg
│       ├── ngwe-tun.jpg
│       ├── zin-min-soe.jpg
│       ├── hein-lin-zaw.jpg
│       ├── htet-lin-zaw.jpg
│       ├── zay-yar-min.jpg
│       ├── sai-kaung-thant.jpg
│       ├── htun-naung-oo.jpg
│       ├── khant-khun-tun.jpg
│       ├── saw-joshua-htoo.jpg
│       ├── htet-htoo-lwin.jpg
│       ├── htin-lin-aung.jpg
│       ├── htoo-myat-htin-lynn.jpg
│       ├── aung-ko-ko-min.jpg
│       ├── aung-kaung-sett-naing.jpg
│       ├── napason-saadaiem.jpg
│       ├── hsu-lei-yee.jpg
│       └── kyaw-zaw-lin.jpg
└── README.txt


HOW TO ADD PROFILE PHOTOS
--------------------------
1. Get each person's photo (any photo works)
2. Rename it EXACTLY as shown above (e.g. aung-myo.jpg)
3. Put it inside images/members/ folder
4. Done — website shows photo automatically

Rules:
- File must be .jpg
- File name must match exactly (lowercase, dashes, no spaces)
- If photo missing = colored avatar with initials shows instead (looks fine)
- Square photos work best, but any shape works (auto-cropped to circle)


HOW TO ADD RSU / RIC LOGOS
---------------------------
1. Save RSU logo as: images/rsu-logo.png
2. Save RIC logo as:  images/ric-logo.png
3. Done — no code changes needed


HOW TO RUN LOCALLY
------------------
Option A — VS Code:
  1. Open folder in VS Code
  2. Install "Live Server" extension
  3. Right-click index.html → Open with Live Server

Option B — Command Prompt:
  cd path\to\rsu-symposium
  python -m http.server 3000
  Open browser: http://localhost:3000


HOW TO PUT ONLINE (GitHub Pages) — FOR QR CODE
------------------------------------------------
Step 1: Create GitHub account
  → Go to https://github.com and sign up (free)

Step 2: Create a new repository
  → Click the "+" icon top right → New repository
  → Name it: rsu-symposium
  → Set to Public
  → Click "Create repository"

Step 3: Upload your files
  → Click "uploading an existing file" link
  → Drag ALL files from your rsu-symposium folder into the browser
     (drag the whole folder or all files including subfolders)
  → Write commit message: "Initial upload"
  → Click "Commit changes"

Step 4: Enable GitHub Pages
  → Go to Settings tab of your repository
  → Click "Pages" in the left sidebar
  → Under "Source" select "Deploy from a branch"
  → Select branch: main, folder: / (root)
  → Click Save
  → Wait 2-3 minutes

Step 5: Get your website URL
  → Your site is live at:
     https://YOUR-USERNAME.github.io/rsu-symposium/
  → Example: https://aizen123.github.io/rsu-symposium/

Step 6: Generate QR Code (free, no app needed)
  → Go to https://qr.io  OR  https://www.qrcode-monkey.com
  → Paste your GitHub Pages URL
  → Download the QR code image
  → Print it or put it on your poster

Anyone who scans the QR → goes directly to your website!


TEAM ROLES
----------
Main Leader:     Aung Ko Ko Min (Minn) — also Sub Moderator & Sub MC
Main Moderator:  Aung Kaung Sett Naing (Eddrick)
Main MC:         Hsu Lei Yee (Lei Yee)

