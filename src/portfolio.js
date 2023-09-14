/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Paritosh Dev",
  title: "Hi, I'm Paritosh",
  subTitle: emoji(
    "A CSE graduate from BIT Mesra. Proficient in compititive programming and MERN Stack development. I like to explore the unknown."
  ),
  resumeLink:
    "https://drive.google.com/file/d/12HOVWtlcbFK36eC_flTiCond4xgOpyV7/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Paritosh-26dev",
  linkedin: "https://www.linkedin.com/in/paritosh-dev-05254b204/",
  gmail: "paritoshdev26@gmail.com",
  facebook: "https://www.facebook.com/paritosh.dev.31",
  instagram: "https://www.instagram.com/paritosh_26dev/",
  twitter: "https://twitter.com/paritosh_dev",
  // medium: "https://medium.com/@paritoshdev26",
  // stackoverflow: "https://stackoverflow.com/users/17780269/paritosh-dev",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡Competitive programming specializing in C++, Java and Python"),
    emoji("⚡ Solving advanced data structures and complex algorithms in DSA"),
    emoji("⚡  Develop highly interactive MERN stack applications")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "express.js",
      fontAwesomeClassname: "fab fa-node-js"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fab fa-envira"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "C/C++",
      fontAwesomeClassname: "fab fa-codepen"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Birla Instute of Technology, Mesra",
      logo: require("./assets/images/bitLogo.png"),
      subHeader: "Bachlors of Technology in Computer Science",
      duration: "November 2020 - July 2024"
    },
    {
      schoolName: "Guru Nanak Hr. Sec. School",
      logo: require("./assets/images/gnhssLogo.png"),
      subHeader: "All India Senior School Certificate Examination(CBSE)",
      duration: "July 2018 - March 2020"
    },
    {
      schoolName: "Guru Nanak Hr. Sec. School",
      logo: require("./assets/images/sasLogo.png"),
      subHeader: "Council for the Indian School Certificate Examination (ICSE)",
      duration: "March 2008 - March 2018"
      // desc: "Ranked among top 10 in the stream.",
      // descBullets: [""]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming",
      progressPercentage: "92%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "75%"
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Application Developer Intern",
      company: "Texas Instruments",
      companylogo: require("./assets/images/texasLogo.png"),
      date: "May 2023 - July 2023",
      desc: "Contributed to the overall improvement of data analysis and reporting capabilities within the organization through effective dashboard updates.",
      descBullets: [
        "Updated security tables for various reports.",
        "Optimised and automated the process ensuring accurate data representation and access rights enforcement.",
        "Modified scripts for each dashboard using IronPython.",
        "Conducted thorough testing to verify the functionality of reports and documented updates forfuture reference."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Meta HackerCup 2022",
      subtitle:
        "Achieved an All India Rank (AIR) of 136th and a global rank of 1414 in the Meta HackerCup qualification round for 2022",
      image: require("./assets/images/meta.jfif"),
      imageAlt: "HackerCup Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.facebook.com/codingcompetitions/hacker-cup/2022/certificate/5511684668888984"
        }
      ]
    },
    {
      title: "Codechef",
      subtitle:
        "Highest Rating : 1731 (3 star) \n\n Starters 84 Division 3 (Rated) : 85th Global Rank",
      image: require("./assets/images/cc.jpg"),
      imageAlt: "Codechef",
      footerLink: [
        {
          name: "Profile",
          url: "https://www.codechef.com/users/paritosh_26dev"
        }
      ]
    },

    {
      title: "Codeforces",
      subtitle: "Highest rating : 1309 (Pupil)",
      image: require("./assets/images/cf.png"),
      imageAlt: "Codeforces",
      footerLink: [
        {
          name: "Profile",
          url: "https://codeforces.com/profile/paritosh26dev"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "GeeksForGeeks",
      subtitle: "",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "paritosh_dev", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
