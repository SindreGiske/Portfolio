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
