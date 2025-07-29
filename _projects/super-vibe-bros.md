---
title: Super Vibe Bros
description: An 8-player platform fighter that's as easy to join as Jackbox games—just visit the URL and start brawling with friends in real-time.
projects-page-description: Low-latency multiplayer fighting game built for the web.
status: Live
technologies:
  - Phaser 3
  - Socket.io
  - Node.js
  - Firebase
  - Express
link: https://brawl.maliglow.com
repo: https://github.com/DavidMaliglowka/fighter
---

Ever tried to get eight friends to download and install a game just for a quick match? Yeah, me too.

That's why I built Super Vibe Bros—a multiplayer platform fighter that runs entirely in your browser. No downloads, no accounts, no friction. Just send your friends a link and start throwing punches.

## The Jackbox Philosophy

Remember how revolutionary it felt when Jackbox games let everyone join with just their phones? I wanted to bring that same accessibility to the fighting game genre.

Visit [brawl.maliglow.com](https://brawl.maliglow.com), and you're instantly in the arena. Up to 8 players can duke it out simultaneously, with each fighter sporting their own unique color.

## Under the Hood

Building a responsive multiplayer fighter for the web meant obsessing over every millisecond:

- **60 FPS server tick rate** ensures smooth gameplay even with 8 concurrent players
- **WebSocket communication** via Socket.io for real-time state synchronization
- **Phaser 3 game engine** handles rendering and physics on the client side
- **Node.js with Express** powers the backend, keeping everything lightweight and fast

The combat system includes all the essentials: attacks, blocks, knockback effects, and a health system with visual indicators that make it clear who's winning (and who's about to get launched off the platform).

## What's Next?

The foundation is solid, but there's plenty of room to grow:

- Multiple arenas to keep matches fresh
- Unique fighter types with special abilities
- Power-ups to shake up the gameplay
- Leaderboards for the competitive crowd
- Mobile touch controls for playing on the go

## Try It Out

The game is live and ready for your next game night. Gather some friends, pick your colors, and see who truly deserves the crown.

Just remember: with great knockback comes great responsibility.