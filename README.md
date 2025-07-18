# Portfolio Website of Sindre Tofte Giske.

[Link to active site](https://sindresportfolie.com)

This is a website I have created to display some of my skills 
in Front-end programming, including UI and UX. 

As the React Router file structure goes, the code for the content of the page itself  
is in the /app directory. Here you have the app.css for the css classes I preferred  
not to implement with Tailwind, like global attributes and animations.  
root.tsx holds some metadata like fonts and the favicon.  

/app/routes is where the content is initialized. Since the website only has one page,  
routes only contain main.tsx, which imports and implements the content of the page,  
wrapped in a custom made BodyWrapper. 

/app/routes/landing holds all the sections on the page. How they look and what they contain.  

/app/components holds the more advanced or content filled components to be implemented in the sections,  
as well as the BodyWrapper and the Background. 

The BodyWrapper contains the header and navigation bar as well as the logic for the navigation system  
with support for use with arrow keys, as well as the navigation bar highlighting the section you are  
currently watching. 

The Background was really something to get working right. It fills a canvas fit to the screen, filled with  
programatically generated rectangles with animations that cycle the opacity of the rectangles up and down.  
When they are spawned in the order they are with an offset calculated from their position, the background  
looks like pixelated waves moving diagonally across the screen. I am quite pleased with the result. 

The IconCarousel of the Experience section is also something I am quite proud of,  
(that is, at least 90% of the time when it works..). It should've been pretty simple.  
After a cooldown from the previous, it spawns a wrapped Icon that moves from outside  
the screen on the left side, to outside the screen on the right.  
However generating the first wrapped icons so the section is filled when the page is opened  
was a whole other ordeal, spawning them in the exact right place with the right offset, and 
having these spawn in the correct order from the baseIcons list.  
After a lot of tweaking and research I found a way to make it look right enough of the times  
to call it good enough. 

/app/customHooks/useInView.tsx came to life after I tested a good handful of React Router hooks  
that I could not make do what I wanted. 
What I wanted was for the elements on the page to be animatable when they come into view.  
When I opened Github for the first time and scrolled down their hero section I was amazed by  
the animations that were triggered when their content came into view. I have had this in the back  
of my head ever since, and knew my portfolio had to contain this.  
As I couldn't get any of the "out of the box" hooks to do this the way I wanted, I made my own.  


## Resources Used: 

- Dev Icons:  
https://devicons-react.vercel.app

- Editing/Creating custom Icons:  
https://figma.com

- Deployment:  
https://vercel.com/home

### Note on Deployment: 

In the future I'll rather do it myself with Github Actions.  
Vercel was a lot of work to get working correctly, with a lot of unhelpful UI.  
Luckily you have the ability to do most of the actions in CLI,  
which I ended up using a lot to make Vercel cooperate with my custom domain.  
Might've been easier if I bought the domain from Vercel directly,  
but I thought a domain is a domain. 

I bought the domain from the popular Domain distributer GoDaddy.com,  
whose website also strayed pretty far from what I'd hoped and preferred  
it be and include. Nonetheless after some struggle I made it work. 
