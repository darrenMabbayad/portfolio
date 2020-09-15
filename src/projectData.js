export default [
  {
    id: 0,
    name: "just-one-game",
    title: "Just One Clone",
    description: "A 4 player online word guessing game with video chat.",
    technologies: ["MERN Stack", "Material UI", "WebRTC", "Socket.io"],
    image: require("./img/just-one/just-one-main.png"),
    githubRepo: "https://github.com/hatchways/team-coconut",
    deployLink: "https://play-just-one.herokuapp.com/",
    goal: "Build a game with login, websocket, and video chat features.",
    solution: [
      "Authentication with JWT's in HttpOnly cookies",
      "Socket IO to handle match creations and game logic",
      "WebRTC with simple-peer library to implement video chat",
      "MongoDB to store users and have references to previously played games",
    ],
    context:
      "I took part in a month long co-op program where myself and two others were tasked with building a game with several features. This was also my first experience with agile development and was the first time I had interacted with other developers in any capacity. Being a relatively new developer (I started learning in mid February 2020) with no background in computer science, I was a little nervous about my ability to keep up with my teammates and be productive and helpful. But in the end, this whole project was a huge boost to my motivation since I was able to take quite a few topics/technologies and implement features based on them in a (in my opinion) short amount of time.",
    explanationOne:
      "The first two weeks on the project were actually quite smooth for me since most of the issues I tackled were things that I felt super comfortable with in React. I was able to pick up mostly front-end oriented tickets like creating the UI for all of the routes in the app and setting up fetch requests for logins and signups on the back-end. I did a small bit of work on the back-end like setting up MongoDB and ensuring that I display client errors when logins/signups go wrong on the server.",
    explanationTwo:
      'The third week was the first wall that I had reached — implementing a group video chat feature used during a game. The ticket I was assigned was as vague as can be. Just a title "Fullstack: RTC" and no additional comments. So, off to researching! I read through quite a lot of documents about WebRTC and how it is implemented natively — having to set up connections between every peer, getting and handling the sending of stream data, and the process of signalling to and from each peer that wants to enter a call.',
    explanationThree:
      "I thought that it would take too long for me to use WebRTC natively, so I looked to another library to abstract some of the processes that WebRTC expects when establishing p2p connections — simple-peer. With this library and using socket.io as a method to signal between peers, I was able to create a working foundation for the video chat feature in the app. There were bugs here and there that our team needed to address at the end of the project, but I laid the foundation and one of my team members picked up the slack while I was assigned the ticket for the full gameplay integration.",
    explanationFour:
      "The latter half of the third week and the last week had me working on fully integrating all of the game logic that we were handling on the back-end (since we were storing important data for a game instance in memory) and creating a functioning game on the front-end. This was both a challenge for me but also quite fun since I was able to learn more about socket.io and how to create interconnected events that enables a consistent gameplay flow.",
    explanationFive:
      "There were many UI elements to render like the current word for the round, the names and score of each player, the clues given in a round, etc. There were also may components to build/reuse from other parts of the app like text inputs with checks for empty strings before submission and input length, an overlay for the end of the round showing scores, a timer for each round, an end of game overlay that shows the final scores and allows the host to create a new match or just have players leave the match, etc.",
    explanationSix:
      "There was a lot of flipping between files again and again to make sure that socket events lined up correctly and data was passed in the way that I intended, but in the end we ended up with a solid and consistent flow of gameplay. The last thing to handle was deployment and while I did not have to deploy the app myself, we did run into an issue where routes wouldn't be served because all JavaScript in a React app in injected into a single html file. Thankfully, I had dealt with this problem in deploying THIS portfolio and my destiny parody site so fixing that was no issue.",
    explanationSeven:
      "Ovreall, this co-op was such a great experience for me I was able to prove to myself that I could very rapidly learn things whenever I was tasked to do things. It also reminded me that I am still able to effectively present/communicate information about our app since I had to do two presentations of the app (one midway through the program and one at the end of the program). It was also such a great experience working with other developers after working on small projects completely alone for a few months and I would love to work with those guys on another project in the future.",
    extraImg_1: require("./img/just-one/just-one-login-signup.gif"),
    extraImg_2: require("./img/just-one/just-one-mesh-network.png"),
    extraImg_3: require("./img/just-one/just-one-gameplay.gif"),
  },
  {
    id: 1,
    name: "hunter-mains",
    title: "Destiny 2 Site",
    description:
      "A Destiny 2 themed website I made to practice creating static sites.",
    technologies: ["React", "SCSS", "AdobeXD"],
    image: require("./img/hunter-mains/hunter-mains-main.png"),
    githubRepo: "https://github.com/darrenMabbayad/destiny-site-for-interview",
    deployLink: "https://huntermains.netlify.app/",
    goal:
      "Deploy a parody static site about taking classes to improve at a specific character in the game Destiny 2.",
    solution: [
      "Have the design be similar in color scheme and layout to Bungie's main page",
      "Focus on appealing to certain traits of players that like to play the Hunter class",
      "Focus on learning from popular Destiny 2 content creators",
    ],
    context:
      "So this project was deployed to show off to a startup company that I was applying to at the time. The goal was to replicate a website similar to https://jumpcut.com/ where the premise was to offer courses to people that are interested in becoming Youtube influencers. I thought, why not take that concept and apply it to a game that I love?",
    explanationOne:
      'I was allowed 5 days to work on this project, however, due to poor time management on my end I could only work on it for 2 days. Because of this, I wasn\'t able to create a course taking interface which I do plan on making in the future and I really rushed through the CSS and overall layout/aesthetic design of the website. I still like it for the most part, but it comes off to me as "amateur-ish" and makes me want to learn how to design things in Photoshop (though that would take even more time away from learning about programming!).',
    explanationTwo:
      "So, the main focus while developing this static site was to mimic the general layout of the different routes from https://jumpcut.com/ while still adding my own take on it, namely using the Destiny color scheme and grand imagery (in terms of it's images). I wish I could have used the same font that Bungie uses for Destiny 2 and their main website, but I don't quite want to spend money on fonts just yet.",
    explanationThree:
      'I think that in general each page looks good and adheres to good UI design fundamentals. However, I did try my best to create "reusable" components to show my ability to take similar looking UI elements and make them adaptable. The most obvious one is the card element, which I use for the buttons to go to each course page, the review cards that show the player information that "used" the website\'s courses, and the cards that show up on the about page.',
    explanationFour:
      'The others were the "slides" for each review on the review page, the team member info that you see on the about and accredidation pages, and the simpler components like generic buttons and the stat icons you see in the some of the cards. Overall, I really wanted to showcase my ability to make reusable components that make sense and I wanted to practice making them in the first place (though I think that it would make more sense to split up the simpler card component with the review card component with the player stats).',
    explanationFive:
      "Making the website responsive wasn't too difficult especially since there are quite a few reused components that could make use of the grid layout. Thank you, repeat(auto-fit, minmax()! The fonts were actully easily manageable since I used a calc function to set the min and max font sizes and have them scale accordingly as the window dimensions shrink (though I understand that there may be compatibility issues with this approach to responsive font sizes). The rest, though I find them annoying to use, was done through media queries as necessary, but I know it is crucial to know when and where to use media queries.",
    explanationSix:
      "Now, for the amount of time that I worked on this website, I think it turned out well. It still looks quite amateur-ish since I am not skilled at creating cool looking background designs or icons and I really think the player information card needs work, but I'm still happy with it. Developing this also gave me some practice in creating text blobs that would entice people to use the website service, which I tend to struggle with. Overall, I think I will leave this project alone for a while. But I intend on coming back in the future, refining all the designs and hopefully adding in my other Destiny app that I'm working on (a character build creator) into it!",
    extraImg_1: require("./img/hunter-mains/hunter-mains-mission.png"),
    extraImg_2: require("./img/hunter-mains/hunter-mains-cards.png"),
    extraImg_3: require("./img/hunter-mains/hunter-mains-responsive.gif"),
  },
  {
    id: 2,
    name: "discord-bot",
    title: "Discord Bot",
    description:
      "A multi-functional bot for my personal Discord server with admin and member commands.",
    technologies: ["JavaScript", "DiscordJS API", "Openweathermap API"],
    image: require("./img/discord-bot/discord-project.png"),
    githubRepo: "https://github.com/darrenMabbayad/discord-multi-use-bot",
    goal:
      "Create a discord bot for my personal discord server that I can use to occasionally clear chat logs, allow myself and other members to set reminders, and other potentially useful things.",
    solution: [
      "Very first coding project",
      "Inspired by my gripes with other bots I've used in the past",
      "Still a WIP, will add on to it when not focusing on React",
    ],
    context:
      "This was my first JavaScript project. I always told myself that I would make my own because I disliked aspects of certain bots I have used in the past. An example is Rhythm Bot, which plays youtube audio, but I always hated how it would linger in the chat channel after the audio finished and I couldn't kick the bot because doing so would kick it from the server. Now even though my bot does not address that gripe I've had with Rhythm bot, when I started learning JavaScript, this was the first project that came to mind when I thought I learned enough to start making something. I will continue to add on to it whenever I am not focusing on creating React apps.",
    explanationOne:
      "Overall, this bot is something that I can play with to make silly commands that myself or other people can use occasionally, but isn't a bot that I plan to have hosted for use in other servers. There are general commands for administrators and commands that might be useful for everyone (as well as the silly ones that I've added and removed in the past). Here is the list of commands that are currently available: ",
    explanationTwo:
      "The !setannouncement and !remindme commands were the first two commands that I made myself. A friend had asked me to do it so that he could use it occasionally (why this instead of a phone, I'm still not sure why). The !remindme command was my first shot at coming up with easy to understand logic behind setting a reminder with the contraints that it can only be within a 24 hour time window, and that you can specify seconds, minutes, and hours.",
    explanationThree:
      "The !setannouncement command was my first experience in installing and utilizing the methods of an external library. In this case, I used node-schedule to allow a user to specify a day of the week and the exact time that the announcent should be fired off. With both of these commands, I also got practice in user input validation and error handling. In this case, I used regular expressions and conditional statements for validation and I simply output a message that pings the user that the command could not be fulfilled for whatever reason.",
    explanationFour:
      "Making the !weather command was my first experience in working with a public API. Overall it was simple to get working and I got a hang of cascading methods in JavaScript (things like .setTitle().setColor().addField() for the embedded text I can display with the bot).",
    explanationFive:
      "Overall, this is something that I will eventually revisit in the future. But for now I need to leave it be while I solidify my skills in React, responsive web development, and UI/UX design.",
    extraImg_1: require("./img/discord-bot/discord-commands.png"),
  },
  // {
  //   id: 3,
  //   name: 'brochure-website',
  //   title: 'Brochure Website',
  //   description:
  //     'A website to plan out a vacation to El Salvador. Users can find information about activities, see picture galleries or watch videos about them, and add desired activities to a planner.',
  //   technologies: [
  //     'Gatsby.js',
  //     'Contentful CMS',
  //     'React',
  //     'SCSS',
  //     'AdobeXD (prototyping)',
  //   ],
  //   image: require('./img/brochure-site/brochure-site-main.png'),
  //   githubRepo: 'https://github.com/darrenMabbayad/brochure-site',
  //   goal:
  //     'Create a website that caters to an age demographic of 18-40 years old, who are residents of NYC. It must be easy to look at, have very simple and straightforward navigation, and provide detailed but concise information about each activity that can be done in El Salvador.',
  //   solution: [
  //     'Create a nice looking brochure site',
  //     "Expand it's capabilities in the future",
  //     'Huge focus on media (pictures, videos, social media links)',
  //     'Design it so my client can add more information as he sees fit',
  //   ],
  //   context:
  //     'I was talking with a friend about how I was getting into web development and he asked me if I wanted to take part in a project that he had in mind. Tourism in his home country, El Salvador, has been rising much more recently and he knows many people there that conduct tours, provide fishing equipment and boats, organize week long camping trips and many other activities. With that, he showed me a lot of examples about the websites that would provide imformation about the things that you could do in El Salvador and frankly, a lot of them were hard to look at, organized in odd ways, gave too much information through text, and did a lot of things that might make a user just leave the website.',
  //   explanationOne:
  //     'So, I had one task. Make a modern, beautiful website, that offers all the information that actually matters about the things people can do in El Salvador (scheduling, attendance, the exact things that will be done - no extravagant information, and the location that people would be visiting), provides image galleries and videos that clearly show what kind of experience people can expect from each and every activity and, most importantly, convinces the user to contact my friend about scheduling an interview to talk about the process of planning a trip to El Salvador.',
  //   explanationTwo:
  //     'Ideally, a user would find the website, get all the information they needed, and with some guidance from the landing page, would be compelled to contact my friend about more information about the exact steps to take to plan out an itinerary for a vacation. Now, my friend is also mindful of the target audience he would be catering to - people within an age range of 18-40 years old and another thing I suggested: only those that live in New York City. That second constraint was something I suggested because I knew that my friend had other obligations and might not be able to service every single person that used the website if it received a lot of traffic.',
  //   explanationThree:
  //     'So here are the main goals: come up with a design that both of us can agree upon, ensure that the website is lightning fast with buttery smooth animations and page transitions, and have a system where my friend can add additional activities to the website with a preset content model that is displayed throughout the different pages of the website.',
  //   explanationFour:
  //     'With that, I am very proud of the design of the website. It looks elegant, the images really "pop", and everything is organized in a way that is easy to read and makes sense. The user interface allows for easy page navigation with the sticky header, easy access buttons on mobile devices, and every clickable element on the page gives subtle user feedback through CSS transitions.',
  //   explanationFive:
  //     'To ensure the website was a fast and efficient website, I used Gatsby.js to make use of their page routing (for clear page transitions) and image processing plugins (to have Gatsby deal with optimizing images, display fluid images as needed, and to lazy load images). Now, this was a huge learning process for me since I had only worked with react-router and dealt with images manually. But overall, I learned a lot about the workflow when working with Gatsby and about the component and file structure of the project (things like knowing when and when not to put images in the static folder, deciding where I want to put markdown files, etc.).',
  //   explanationSix:
  //     'To address the issue of adding content to the website, the main reason I chose to use Gatsby was that it could query information from a headless content management system in an easy to understand way with the GraphQL API. I chose to use Contentful to create a content model for my friend to follow and displayed each "Activity" in template components.',
  //   explanationSeven:
  //     'With that, I could add my friend to the Contentful workspace and he could add as many activities as he needed. Overall, creating this website was a fun experience and Gatsby is something that I want to work with more often in the future. The whole prototyping/mockup process was enjoyable and it was fun to see how it all turned out on my browser and my phone (responsive design is still so, so stressful for me). But most importantly, I am very proud of this project and I hope that it will be a well liked one.',
  //   extraImg_1: require('./img/brochure-site/brochure-site-mobile.png'),
  //   extraImg_2_odd: require('./img/brochure-site/brochure-site-gatsby.png'),
  //   extraImg_3_odd: require('./img/brochure-site/brochure-site-contentful.png'),
  // },
  {
    id: 3,
    name: "color-scheme-app",
    title: "Layout App",
    description: "A simple app to test color schemes on preset layouts.",
    technologies: ["React", "SCSS"],
    image: require("./img/layout-app/layout-app-full.png"),
    githubRepo: "https://github.com/darrenMabbayad/layout-maker-responsive",
    goal:
      "Create a simple, responsive web app for setting colors on layout blocks to see what colors work well with one another.",
    solution: [
      "Learn to structure my code AND my files in an understandable way",
      "Practice hooks",
      "Utilize the Context API",
      "Utilize react portals",
      "Get a hang of responsive design",
      "Make it pretty, but not a big focus",
    ],
    context:
      "This was my first React project and I wanted to practice using hooks, the Context API, and creating a responsive web app without worrying too much about styling the app itself. Additionally, this was practice for creating SVG icons using Adobe XD.",
    explanationOne:
      "First problem: how will it look? I wanted to keep it simple, but at the very least make it look presentable. So I decided to make a Photoshop-esque layout with the various tools and selectors on the sides (blocks in this app instead of sidebars) and the main workspace in the middle. I decided to use the react-color library to have a pre-built color picker instead of having to worry about it for my first project. The rest would be custom buttons and assets either through CSS or using Adobe XD.",
    explanationTwo:
      "In the mobile version above, I wanted to keep everything on the screen without having to force the user to swipe up and down to reach different buttons. So, just a simple reorientation of the layout and changing the color picker to something much smaller, and I was very happy with it. Keep the aesthetic simple, not too many colors, have good contrast in terms of colors and shadows on the boxes, and make sure everything is aligned correctly.",
    explanationThree:
      'In terms of how the app would work, I wanted to be able to do two things: fill in colors, and have different layouts be selectable. The first problem was the layouts. Should I kind of "make a website in a website" - put in all of the markup I normally would for a simple website layout and make multiple components for those layouts? I did make the first layout in this manner but then I thought, "hey, maybe CSS Grid would work wonders for this AND I can get some more practice for it". And that\'s what I ended up with at the end of the project. A few simple grid layouts made with grid areas in a single SCSS partial like the one below.',
    explanationFour:
      'Now, I spent quite a lot of time trying to figure out the best way to actually get the "Color Fill" action to work. Is it better to control the colors through context or by having a stateful component? I tried both, and I did not like how messy my components looked after controlling everything through a stateful component. I decided to control everything all through a single stateful component and pass down the props as far as they needed to go, and that was certainly not the way to go for this project). So, having a Context.js file to let my components have access to the necessary states was a much better solution for this project.',
    explanationFive:
      "After getting the main two functions done, I started messing with some other things like toggling the layout block borders on and off (a simple add on to the context file) and displaying short little tooltips. I had messed around with creating tooltips with hover states outside of React, but here I really wanted to play with React portals.",
    explanationSix:
      "I always had to play with things like z-index to make sure tooltips would display above everything else in the DOM, but making use of how React can render things in a separate div below the root div was something I wanted to try. Now, it was really easy to get this working with the text that I wanted, but I wanted to make sure that the tooltips themselves would always show up aligned to the rightmost edge of the anchor that you would hover your mouse over. I tried using the x and y offset of each list element in the header to position the portal correctly, but I had a lot of issues getting it exactly right.",
    explanationSeven:
      "So, Google to the rescue and I found that using the getBoundingClientRect method would return information that would let me position the portal correctly. On top of that, I got to practice making custom hooks to import into components that would need them (only one in this case, but oh well).",
    explanationEight:
      "Last problem: make the whole app responsive. This is something I still very much struggle with. I wanted to make this app responsive purely through custom CSS (media queries again and again). Now, I must say that coming up with a couple of different layout designs to cover different viewports is not that complicated. For me it's the sizes in betweem those strict breakpoints that really cause me to struggle.",
    explanationNine:
      "How should I deal with a tablet landcape layout to a small desktop or laptop layout? What about 4K screens? How should I deal with images that work well in landscape layouts but would look awful in portrait ones when the image is scaled down? Here, it wasn't so bad - just enough media queries to make sure all the text is readable and that everything looks good at every screen size.",
    explanationTen:
      "Overall, I learned a lot from this really simple project and it really got me interested in learning more about what I can do with React. I want to add on to it or completely remake it with much more functionality in the future.",
    extraImg_1: require("./img/layout-app/layout-app-mobile.png"),
    extraImg_2: require("./img/layout-app/layout-app-grid.png"),
    extraImg_3: require("./img/layout-app/layout-app-portals.png"),
    extraImg_4: require("./img/layout-app/layout-app-hook.png"),
  },
];
