---
title: Pokédex
description: Building a better Pokédex with AI as a copilot, inspired by a Gemini demo but aiming for a more authentic look and feel, complete with sounds.
projects-page-description: Using AI as a copilot to build a classic Pokédex web app.
status: Live
technologies:
  - Gemini 2.5 pro
  - 3d Renders
  - HTML
  - JS
link: https://pokedex.maliglow.com
repo: https://github.com/DavidMaliglowka/pokedex
---

I saw this YouTube video ([link](https://youtu.be/milPEW8XUK0?t=303)) where Gemini 2.5 Pro one-shotted a Pokédex web app. 

Cool concept, right? 

I personally loved it, but it looked nothing like the classic Pokédex I remember. So, I thought, "Let's do it properly." 

**I decided to set one ground rule.**

1) Instead of having AI write the whole thing, I should leverage Gemini 2.5 pro as a genuine copilot. 

So, could I collaborate with AI to build a Pokédex that would make a Pokémon master proud?

This is the result: 

![A screenshot of the Pokédex I designed & developed with Gemini](/assets/images/pokedex.png)

This front-end web app was built with vanilla HTML, CSS, and JavaScript, leveraging the PokéAPI for data. 

The goal wasn't just to replicate, but to see how the **process** of building changes when AI is a partner. 

It's less "AI builds a Pokédex" and more "Human and AI build a Pokédex".

## Want to try it? 

Why not tap on the grass by my name in the tope left of this site?

The result is also hosted live at [pokedex.maliglow.com](https://pokedex.maliglow.com) and the code is fully open source over on [GitHub](https://github.com/DavidMaliglowka/pokedex) if you want to embed on your own site.

## But that's not all
I wanted to test my hand at making a little promo trailer for the project, so I found [rotato](https://rotato.app/), and taught myself how to make a 3d render. 

{% include video-player.html 
  video_url="https://pub-6ea211192f72462bb7ef23b6525ff38f.r2.dev/pokedex-render.mp4"
  autoplay=true
  loop=true
  aspect_ratio="4/3"
  controls=false %}

It turns out, getting the details right, like adding the actual Pokémon cries fetched from the API, makes a big difference. 

It's not a 1:1 replica, but definitely closer to the real deal than that initial demo. Plus, this one's hosted reliably and predictably, partly thanks to lessons learned from my [self-hosting adventures](*/projects/self-hosting*). 
