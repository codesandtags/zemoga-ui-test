# Zemoga Test UI

### How have I decided to tackle this problem?

First of all I have to say that this test involves many skills :) and that's nice.

1. After read the instructions/requirements I've decided to start identifying every component on the web. Here the list:
 - Menu: Title, nav items, search.
 - Hero: It shows the current highlighted person in the site, and the remaining days to finish the "survey". 
 - Notification: It notifies the description about how works the site.
 - Votes: It shows the last votes, the results and the option to vote again.
 - Submit a name for voting: It allows to send a proposal name for voting.
 - Footer: Common links for terms and conditions, policy and social networks.    
2. Identify colors: One of the most important things, is identify the brand colors: 
 - primary: #1cbbb4
 - secondary: #ffad1d
 - textColor: #333333
 - textColor light: #777777
 - opposite textColor: #ffffff
 - gray: #ebebeb
3. Identify the fonts: 
 - According to the test, the font is Lato. So I've decided to download from Google fonts.
4. Identify the icons:
 - After review the icons, the three options were: FontAwesome and Material Icons or custom Icons, so I've decided FontAwesome.  
5. Technical decisions: 
 - The options were: Vanilla / React / Angular / Vue. I would have liked to do it in Vanilla, but, given the time considerations and simplicity, I choose ReactJs. Also the interactions part will be easier using triggers and states.
 - CSS Preprocessor: I've decided to use SCSS (is where I feel more confident) and BEM as naming methodology.
 - State management : I've decided to use redux to separate concerns and to have one single source of truth.
6. BackEnd Integration: 
 - I don't know if I will have enough time, but I will try to do some with NodeJs, express and Firebase to store data.
7. Branching strategy:
 - I will create a master branch with this README.md
 - I will create two more branches feature/layout-solution and feature/interaction-solution which will be merged soon.
8. Deploy strategy 🤔
 - Given this project will be published in Github, I will use Github Pages.      

After written this part, let's fun with the test. 🎉

# Timeline

1. I've started creating the content in order to make the site dynamic. This model could be imported in [Contentful](https://www.contentful.com/) for instance, and the changes could be easier.
2. The images! damn! it was a tricky part because I'm not a designer, so I don't have too many tools to work with design, but after googling I found a way to open the PSD. 
 - I've used [Avocode](https://avocode.com/convert-psd-to-sketch/downloading/99a82695-cd18-49ad-b634-549579cc7f51/test-ui-v2.sketch) to convert the PSD to Sketch
 - I've downloaded Sketch to get the images.
 - I've downloaded Figma to copy the images from Sketch and export them to png. The images were exported in 1x and JPG given the huge size.
3. After getting the assets and defined the content model. It's time to render the components.   

# Checklist

## Layout HTML-CSS

- Rely on HTML5 semantics and CSS3 features as possible. Assume cool browsers such as Chrome, Firefox Safari and Edge, latest versions.

Requirements:
- [ ] Use media queries to adapt the layout in small screens. (comp not provided, so use your creativity).
- [ ] Non safe web font used: Lato
- [ ] You can rely on preprocessors / transpilers such as LESS/SASS or any sort of CSS framework if you want. (Pure CSS is also an option but you must argue the benefits)
- [ ] Clicking on one of the links of the main menu redirects the user to the other pages (we only provide a comp for the main page so just use white pages with the title section on them).

## Interaction - JS

Just add interaction in the middle voting boxes: Kanye West, Mark Zuckerberg, Cristina Fernández de Kirchner and Malala Yousafzai.

Requirements:
- [ ] Create a data feed in JSON format with the structure that best suits the content for the voting boxes and populate the initial content from it.
- [ ] The user can select either thumb up or thumb down button on each of the boxes (when the button is selected, a white border is displayed as featured in the comp)
- [ ] Once the user clicks on the "Vote now” button, a message is displayed saying “Thank you for voting!” as well as a vote again button to vote again.
- [ ] There is no limit in the amount of votes
- [ ] Percentage bars change depending on the up/or downs votes.
- [ ] Think on a way to persist the current votes so if the page is refreshed the data is not lost. (could be local in the browser or server side if you have those skills)
- [ ] We want to see your vanilla/DOM JS skills so please do not use jQuery.
- [ ] You can solve this part with either full Vanilla JS and some patterns, OR any sort of framework such as Angular, React, Vuejs, Ember, etc. Use the one you feel more confortable with.
- [ ] Bonus points: Some sort of Test (E2E, BDD, etc)


## NodeJS

**Only** if you are also applying for NodeJS or any other server side technology, or if you want to also show skills in this part:

Requirements:
- [ ] Activate the Login/Signup link in the main menu by showing a basic login dialog.
- [ ] If the user is already logged in, this link should be switched to a logout link.
- [ ] The login box presents a basic user/pwd form and a button to switch to a signup (registration form with user, pwd, age and marriage status).
- [ ] Persist the user data in the server side.
- [ ] Only logged in users can vote. (maximum 3 votes x box x user), and votes are persisted per user.
- [ ] Create the authentication system and an API with CRUD operations that allows to modify the user information.
- [ ] Create an API endpoint that shows votes x user.
- [ ] For this part you don't need to apply fancy styles. Just raw boxes and forms.


### Any question?

Please write me an email or a message in :
- etorres.net@gmail.com
- [Linkedin](https://www.linkedin.com/in/edwintorresdeveloper/)
 
