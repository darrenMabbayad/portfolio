export default [
  {
    id: 0,
    name: 'just-one-game',
    title: 'Just One Clone',
    description: 'A 4 player online word guessing game with video chat!',
    technologies: [
      'MERN Stack',
      'Material UI',
      'WebRTC',
      'Socket.io',
      'REST API',
    ],
    image: require('./img/brochure-site/brochure-site-main.png'),
    githubRepo: 'https://github.com/hatchways/team-coconut',
    goal: 'Build a game with login, websocket, and video chat features.',
    solution: [
      "Authentication with JWT's in HttpOnly cookies",
      'Socket IO to handle match creations and game logic',
      'WebRTC with simple-peer library to implement video chat',
      'MongoDB to store users and have references to previously played games',
    ],
    context:
      'I took part in a month long co-op program where myself and two others were tasked with building a game with several features. This was also my first experience with agile development and was the first time I had interacted with other developers in any capacity. Being a relatively new developer (I started learning in mid February 2020) with no background in computer science, I was a little nervous about my ability to keep up with my teammates and be productive and helpful. But in the end, this whole project was a huge boost to my motivation since I was able to take quite a few topics/technologies and implement features based on them in a (in my opinion) short amount of time.',
    explanationOne:
      'The first two weeks on the project were actually quite smooth for me since most of the issues I tackled were things that I felt super comfortable with in React. I was able to pick up mostly front-end oriented tickets like creating the UI for all of the routes in the app and setting up fetch requests for logins and signups on the back-end. I did a small bit of work on the back-end like setting up MongoDB and ensuring that I display client errors when logins/signups go wrong on the server.',
    explanationTwo:
      'The third week was the first wall that I had reached — implementing a group video chat feature used during a game. The ticket I was assigned was as vague as can be. Just a title "Fullstack: RTC" and no additional comments. So, off to researching! I read through quite a lot of documents about WebRTC and how it is implemented natively — having to set up connections between every peer, getting and handling the sending of stream data, and the process of signalling to and from each peer that wants to enter a call.',
    explanationThree:
      'I thought that it would take too long for me to use WebRTC natively, so I looked to another library to abstract some of the processes that WebRTC expects when establishing p2p connections — simple-peer. With this library and using socket.io as a method to signal between peers, I was able to create a working foundation for the video chat feature in the app. There were bugs here and there that our team needed to address at the end of the project, but I laid the foundation and one of my team members picked up the slack while I was assigned the ticket for the full gameplay integration.',
    explanationFour:
      'The latter half of the third week and the last week had me working on fully integrating all of the game logic that we were handling on the back-end (since we were storing important data for a game instance in memory) and creating a functioning game on the front-end. This was both a challenge for me but also quite fun since I was able to learn more about socket.io and how to create interconnected events that enables a consistent gameplay flow.',
    explanationFive:
      'There were many UI elements to render like the current word for the round, the names and score of each player, the clues given in a round, etc. There were also may components to build/reuse from other parts of the app like text inputs with checks for empty strings before submission and input length, an overlay for the end of the round showing scores, a timer for each round, an end of game overlay that shows the final scores and allows the host to create a new match or just have players leave the match, etc.',
    explanationSix:
      "There was a lot of flipping between files again and again to make sure that socket events lined up correctly and data was passed in the way that I intended, but in the end we ended up with a solid and consistent flow of gameplay. The last thing to handle was deployment and while I did not have to deploy the app myself, we did run into an issue where routes wouldn't be served because all JavaScript in a React app in injected into a single html file. Thankfully, I had dealt with this problem in deploying THIS portfolio and my destiny parody site so fixing that was no issue.",
    explanationSeven:
      'Ovreall, this co-op was such a great experience for me I was able to prove to myself that I could very rapidly learn things whenever I was tasked to do things. It also reminded me that I am still able to effectively present/communicate information about our app since I had to do two presentations of the app (one midway through the program and one at the end of the program). It was also such a great experience working with other developers after working on small projects completely alone for a few months and I would love to work with those guys on another project in the future.',
  },
  {
    id: 1,
    name: 'hunter-mains',
    title: 'Destiny 2 Themed Website',
    description:
      "A website that advertises a course taking service for Destiny 2 players interested improving in the game's player versus player game modes.",
    technologies: ['React', 'SCSS', 'AdobeXD (prototyping)'],
    image: require('./img/brochure-site/brochure-site-main.png'),
    githubRepo: 'https://github.com/darrenMabbayad/destiny-site-for-interview',
    goal:
      'Deploy a parody static site about taking classes to improve at a specific character in the game Destiny 2.',
    solution: [
      "Have the design be similar in color scheme and layout to Bungie's main page",
      'Focus on appealing to certain traits of players that like to play the Hunter class',
      'Focus on learning from popular Destiny 2 content creators',
    ],
    context:
      'So this project was deployed to show off to a startup company that I was applying to at the time. The goal was to replicate a website similar to https://jumpcut.com/ where the premise was to offer courses to people that are interested in becoming Youtube influencers. I thought, why not take that concept and apply it to a game that I love?',
    explanationOne:
      'I was allowed 5 days to work on this project, however, due to poor time management on my end I could only work on it for 2 days. Because of this, I wasn\'t able to create a course taking interface which I do plan on making in the future and I really rushed through the CSS and overall layout/aesthetic design of the website. I still like it for the most part, but it comes off to me as "amateur-ish" and makes me want to learn how to design things in Photoshop (though that would take even more time away from learning about programming!).',
    explanationTwo: '',
    explanationThree: '',
    explanationFour: '',
    explanationFive: '',
    explanationSix: '',
    explanationSeven: '',
  },
  {
    id: 2,
    name: 'discord-bot',
    title: 'Discord Bot',
    description:
      'A multi-functional bot for my personal Discord server. This bot offers administrator commands such as setting announcements and clearing chat logs and user commands such as getting weather information and setting reminders.',
    technologies: ['JavaScript', 'DiscordJS API', 'Openweathermap API'],
    image: require('./img/discord-bot/discord-project.png'),
    githubRepo: 'https://github.com/darrenMabbayad/discord-multi-use-bot',
    goal:
      'Create a discord bot for my personal discord server that I can use to occasionally clear chat logs, allow myself and other members to set reminders, and other potentially useful things.',
    solution: [
      'Very first coding project',
      "Inspired by my gripes with other bots I've used in the past",
      'Still a WIP, will add on to it when not focusing on React',
    ],
    context:
      "This was my first JavaScript project. I always told myself that I would make my own because I disliked aspects of certain bots I have used in the past. An example is Rhythm Bot, which plays youtube audio, but I always hated how it would linger in the chat channel after the audio finished and I couldn't kick the bot because doing so would kick it from the server. Now even though my bot does not address that gripe I've had with Rhythm bot, when I started learning JavaScript, this was the first project that came to mind when I thought I learned enough to start making something. I will continue to add on to it whenever I am not focusing on creating React apps.",
    explanationOne:
      "Overall, this bot is something that I can play with to make silly commands that myself or other people can use occasionally, but isn't a bot that I plan to have hosted for use in other servers. There are general commands for administrators and commands that might be useful for everyone (as well as the silly ones that I've added and removed in the past). Here is the list of commands that are currently available: ",
    explanationTwo:
      "The !setannouncement and !remindme commands were the first two commands that I made myself. A friend had asked me to do it so that he could use it occasionally (why this instead of a phone, I'm still not sure why). The !remindme command was my first shot at coming up with easy to understand logic behind setting a reminder with the contraints that it can only be within a 24 hour time window, and that you can specify seconds, minutes, and hours.",
    explanationThree:
      'The !setannouncement command was my first experience in installing and utilizing the methods of an external library. In this case, I used node-schedule to allow a user to specify a day of the week and the exact time that the announcent should be fired off. With both of these commands, I also got practice in user input validation and error handling. In this case, I used regular expressions and conditional statements for validation and I simply output a message that pings the user that the command could not be fulfilled for whatever reason.',
    explanationFour:
      'Making the !weather command was my first experience in working with a public API. Overall it was simple to get working and I got a hang of cascading methods in JavaScript (things like .setTitle().setColor().addField() for the embedded text I can display with the bot).',
    explanationFive:
      'Overall, this is something that I will eventually revisit in the future. But for now I need to leave it be while I solidify my skills in React, responsive web development, and UI/UX design.',
    extraImg_1: require('./img/discord-bot/discord-commands.png'),
  },
];
