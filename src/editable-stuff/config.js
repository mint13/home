// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#01FFFF, #00ECFA, #00CEF1, #00B8EA, #00caea",
  firstName: "Mint",
  middleName: "",
  lastName: "Medillo",
  message: " The odyssey of a Fullstack Engineer ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/mint13",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/_mintm13/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/mint-medillo-455210b9/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/_mintm13",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can   fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/mint.jpg"),
  imageSize: 375,
  message:
    "Hi! My name is Mint. A Fullstack Engineer currently working at a Silicon Valley based startup company, Poplar Homes(formerly Onerent).\nI have 8+ years of experience as a developer and love working with React and WordPress. If you fancy a chat feel free to drop me a line.",
  resume: "https://drive.google.com/file/d/18pxlQYDeYzPC_6wpBKIYj1iTHJDATjbT/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "mint13", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ['LeetCode-programming-problems', 'Design-Patterns', 'mint13.github.io', 'computer-science'],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/mint.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/mint.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "WordPress", value: 90 },
    { name: "PHP", value: 85 },
    { name: "SQL", value: 80 },
    { name: "HTML/CSS", value: 95 },
    { name: "JavaScript", value: 85 },
    { name: "React", value: 65 },
    { name: "VueJs", value: 60 },
    { name: "Data Structures", value: 65 },
  ],
  softSkills: [
    { name: "Attitude", value: 85 },
    { name: "Communication", value: 90 },
    { name: "Teamwork", value: 80 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 65 },
    { name: "Time management", value: 75 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for part-time Software Engineering opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "m.medillo13@gmail.com",
};

const experiences = {
  show: true,
  heading: "Past Works",
  data: [
    {
      role: 'Poplar Homes',// Here Add Company Name
      companylogo: require('../assets/img/poplarhomes-min.jpg'),
      date: "Created using WordPress, and comes with heavy customisation to connect to Poplar's main app",
    },
    {
      role: 'Doorways NZ',// Here Add Company Name
      companylogo: require('../assets/img/doorways-min.jpg'),
      date: "Created using Zest; Zeald's proprietary CMS made made with Perl ",
    },
    {
      role: 'Kohler NZ',// Here Add Company Name
      companylogo: require('../assets/img/kohler-min.jpg'),
      date: "Created using Zest; Zeald's proprietary CMS made made with Perl",
    },
    {
      role: 'The Good Wine',// Here Add Company Name
      companylogo: require('../assets/img/thegoodwine-min.jpg'),
      date: "Created using WordPress with Woocommerce; Heavily customised theme with custom search functionality",
    },
    {
      role: 'Plassurg NZ',// Here Add Company Name
      companylogo: require('../assets/img/plassurg-min.jpg'),
      date: "Created using WordPress and uses lots of Custom Post Types to accommodate website functionalities",
    },
    {
      role: 'Bargain Bins NZ',// Here Add Company Name
      companylogo: require('../assets/img/bargainbins-min.jpg'),
      date: "Created using WordPress with Woocommerce. Customised home page form to create direct checkout process",
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
