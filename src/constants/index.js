import {
  pu,
  accessible,
  TwinReality,
  gdsc,
  Obgyn,
  portfolio,
  publiclab,
  zulip,
  foodcouriers,
  placeicon,
  huntly,
  UM,
  branded_stuff,
  greentrust,
  pba,
  polkadot,
  nptl,
  greatlearning,
  Infotact,
  icon,
  infosys,
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGitlab,
  AiFillPhone,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiCplusplus,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiChartdotjs,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlutter,
  SiReplit,
  SiFlask,
  SiFigma,
  SiGooglemaps,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiMicrosoftazure,
  SiAdobeillustrator,
  SiHtml5,
  SiAdobexd,
  SiFramer,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiCss3,
  SiDart,
  SiAdobecreativecloud
} from "react-icons/si";

import {
  FaHardHat,
  FaRust
} from "react-icons/fa";

import {
  IoIosNotificationsOutline
} from "react-icons/io";

import {
  FaGolang
} from "react-icons/fa6";

import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";

export const resumeLink = "https://drive.google.com/file/d/1M30KVawtJTIrKp016uTdP9kMoNie3F7q/view?usp=sharing";
export const repoLink = "https://github.com/urmit0812";

export const callToAction = "https://www.linkedin.com/in/urmit-patel0812";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "projects",
    title: "Projects",
  },
  // {
  //   id: "openSource",
  //   title: "Open Source",
  // },
  // {
  //   id: "extraCurricular",
  //   title: "Extra Curricular",
  // },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

// Add your past academic experiences here
export const educationList = [
  {
    id: "education-1",
    icon: pu,
    title: "Parul Institute of Technology Vadodara, Gujarat",
    degree: "Bachelor of Technology",
    duration: "December 2021 - May 2025",
    content1: "Major: Computer Science & Engineering",
    content2: "Minor: Artificial Intelligence",
  },
  {
    id: "education-2",
    icon: pba,
    title: "Nalanda School Godhra,Gujarat",
    degree: "Higher Secondary School",
    duration: "May 2019 - June 2021",
    content1: "Major: Science Stream",
  },
];

// Add your past achievments here for example - rankings in hackathons/events
export const achievements = [
  {
    id: "a-1",
    icon: infosys,
    event: "Java Language Features by Infosys",
    position: "Course Completion Certificate",
    content1: "Java's platform independence and robust security make it ideal for Infosys' cross-platform enterprise applications.",
    content2: "Its scalability, rich API ecosystem, and support for distributed computing ensure reliable and high-performance solutions.",
    
    article: "https://www.linkedin.com/posts/urmit-patel0812_java-infosyscertification-techcareer-activity-7174667273180246016-1gXt?utm_source=share&utm_medium=member_desktop",
    
  },
  {
    id: "a-2",
    icon: infosys,
    event: "Basics Of Python by Infosys",
    position: "Course Completion Certificate",
    content1: "Python’s simplicity and libraries aid quick prototyping and AI projects.",
    content2: "Its readability supports data analysis, automation, and backend dev.",
    content3: "",
    article: "https://www.linkedin.com/posts/urmit-patel0812_python-infosyscertification-techskills-activity-7174673709285130241-Ifr-?utm_source=share&utm_medium=member_desktop"
  },
  {
    id: "a-3",
    icon: nptl,
    event: "Software Enginnering",
    position: "Nptel Certification",
    content1: "Focus on software design, testing, and project management principles.",
    content2: "Emphasized practical skills for building efficient and reliable systems.",
    
  },
  {
    id: "a-4",
    icon: greatlearning,
    event: "ChatGPT For Beginners ",
    position: "Great Learning Academy",
    content1: "Rated the best portfolio website among 450+ participants across the globe.",
    content2: "",
    content3: "",
    youtube: "https://youtu.be/mnULGqkVONI?si=34Yd2MmrQyq_dchZ",
    project: "https://drive.google.com/file/d/1i8dyIJYeTggQ7Q2p8pg0zZc3iE3QPqGT/view?usp=sharing",
  },

];

// Add your software developments skills here for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: SiHtml5,
        name: "Html",
      },
      {
        id: "pl-2",
        icon: DiCss3,
        name: "Css",
      },
      {
        id: "pl-3",
        icon: SiJavascript,
        name: "Javascript",
      },
      {
        id: "pl-4",
        icon: SiPython,
        name: "Python",
      },
      
      {
        id: "pl-5",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "pl-6",
        icon: SiC,
        name: "C",
      },
      
     
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      
      
  
      {
        id: "f-1",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-2",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-5",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
    ] 
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiFigma,
        name: "Figma"
      },
      {
        id: "t-2",
        icon: SiFramer,
        name: "Framer",
      },
      {
        id: "t-3",
        icon: SiAdobexd,
        name: "AdobeXd",
      },
      {
        id: "t-4",
        icon: SiAdobephotoshop,
        name: "Photoshop",
      },
      {
        id: "t-5",
        icon: SiAdobeillustrator,
        name: "Illustrator",
      },
      {
        id: "t-6",
        icon: SiAdobepremierepro,
        name: "Premierepro",
      },
      {
        id: "t-7",
        icon: SiMysql,
        name: "MySQL",
      },
     
      {
        id: "t-8",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      
      {
        id: "t-9",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-10",
        icon: SiNetlify,
        name: "Netlify",
      },
      
    ],
  },
];

// Add your current/past professional work experience here
export const experiences = [
  {
    organisation: "Twin Reality Solutions, India",
    logo: TwinReality,
    link: "https://twinreality.in/",
    positions: [
      {
        title: "UI/UX Developer Intern",
        duration: "March 2024 - Present",
        content: [
          {
            text: " Creating responsive UI components using modern design principles to ensure seamless integration and optimal performance in AR/VR/MR environments. ",
            link: "",
          },
          {
            text: " Designing immersive, user-friendly UI applications for AR/VR/MR projects at Twin Reality Technologies LLP to enhance engagement and usability. ",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Infotact Solutions, India",
    logo: Infotact,
    link: "https://infotact.in/",
    positions: [
      {
        title: "UI/UX Designer Intern",
        duration: "Feb 2024 - May 2025",
        content: [
          {
            text: " Collaborated with cross-functional teams at Infotact Solutions to design user-centric interfaces, boosting engagement and reducing friction. ",
            link: "",
          },
          {
            text: " Developed responsive UI components with modern design principles, enhancing interaction and performance. ",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: " UnifiedMentor, India",
    logo: UM,
    link: "https://www.unifiedmentor.com/",
    positions: [
      {
        title: "Front-End Developer Intern",
        duration: "Dec 2024 - Present",
        content: [
          {
            text: " Participated in front-end development projects, contributing to the design and implementation of user interfaces. "                       
          },
          {
            text: "Worked closely with the  development team to gain hands-on experience in web technologies and improve coding skills in a professional environment."                       
          }
        ],
      },
    ],
  },
  
  // {
  //   organisation: "BlueStock Fintech, India",
  //   logo: iris,
  //   link: "https://bluestock.in/",
  //   positions: [
  //     {
  //       title: "Software Developer Intern",
  //       duration: "Dec 2024 - March 2025",
  //       content: [
  //         {
  //           text: " Collaborated with the leadership and development teams to design, develop, and test fintech applications.",
  //           link: "",
  //         },
  //         {
  //           text: " Gained hands-on experience in the software development lifecycle and modern development practices in a dynamic remote environment.",
  //           link: "",
  //         },
  //       ],
  //     },
  //   ],
  // }
];

// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "Branded Stuff",
    github: "https://github.com/urmit0812/BrandedStuff.git",
    link: "https://brandedstuffindia.vercel.app/",
    image: branded_stuff,
    content:
      "Turn product descriptions into engaging comic strips with GPT-3.5 and Stable Diffusion, adding fun and storytelling to your e-commerce site!",
    stack: [
      {
        id: "icon-1",
        icon: SiHtml5,
        name: "Html"
      },
      {
        id: "icon-2",
        icon: SiCss3,
        name: "CSS"
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "Javascript"
      },
      {
        id: "icon-4",
        icon: SiFigma,
        name: "Figma"
      },
    ],
  }, 
  {
    id: "project-4",
    title: "Accesible Travel",
    link: "https://www.figma.com/design/j6AYCNYmKNQpoRcxbsoerG/Ryan-Air?node-id=0-1&t=up2xxbgsVxiarL72-1",
    image: accessible,
    content:
      "RyanAir, a European low-cost airline, was chosen for this project to enhance inclusivity and accessibility within the app. The goal of the project was to elevate the importance of Special Assistance by integrating it directly into the 'Book a Flight' flow. This improvement aims to make the booking experience more inclusive for users with disabilities, parents traveling with children, elderly passengers, and those with specific health conditions",
    stack: [
      {
        id: "icon-1",
        icon: SiFigma,
        name: "Figma"
      },
      {
        id: "icon-2",
        icon: SiAdobecreativecloud,
        name: "Adobe Creative Cloud"
      }, 
    ],
  },
  {
    id: "project-5",
    title: "Obgyn",
    link: "https://www.figma.com/design/kQBASi60EOqzhDn4MJEI5D/Obgyn(client-Infotact)?node-id=3-3715&t=UPI2ZFfhV9t67a6P-1",
    image: Obgyn,
    content:
      "Young gynaecologist needs a brand new responsive website that supports her business activity, makes her known to the public and increases the online presence of her clinic, now available only on social media.",
    stack: [
      {
        id: "icon-1",
        icon: SiFigma,
        name: "Figma"
      },
      {
        id: "icon-2",
        icon: SiAdobecreativecloud,
        name: "Adobe Creative Cloud"
      },
    ],
  },
  {
    id: "project-7",
    title: "HuntPro",
    github: "",
    link: "https://www.figma.com/design/jJblboAM2xYoZBnIsCp7qp/HuntPro?node-id=0-1&m=dev",
    image: huntly,
    content:
      "A cross-platform mobile application that brings people closer to the physical environment and forms meaningful connections by organising real-world Treasure Hunts for free and winning rewards.",
    stack: [
      
      {
        id: "icon-5",
        icon: SiFigma,
        name: "Figma"
      },
      {
        id: "icon-2",
        icon: SiFlutter,
        name: "Flutter"
      },
      {
        id: "icon-6",
        icon: SiGooglemaps,
        name: "Google Maps API"
      },
      {
        id: "icon-7",
        icon: SiDart,
        name: "Dart"
      },
    ],
  },
  
  {
    id: "project-2",
    title: "EVolt",
    github: "https://github.com/urmit0812/Evolt-Station.git",
    link: "https://evslotbooking.netlify.app/",
    image: greentrust,
    content:
      "Designed and implemented user-friendly interfaces for an EV slot booking platform. Utilized modern web technologies to enhance user experience, ensuring responsive and efficient performance. Collaborated with cross-functional teams to integrate backend services and optimize the booking process.",
    stack: [
      {
        id: "icon-1",
        icon: SiHtml5,
        name: "Html"
      },
      {
        id: "icon-2",
        icon: SiCss3,
        name: "CSS"
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "Javascript"
      },
      {
        id: "icon-4",
        icon: SiFigma,
        name: "Figma"
      },
      {
        id: "icon-5",
        icon: SiMysql,
        name: "Mysql"
      },
    ],
  },
  {
    id: "project-3",
    title: "Food Couriers(Up Coming)",
    github: "",
    link: "https://www.figma.com/design/Fc6cCUiMASISMtleUgOMwn/food-Couriers?node-id=0-1&t=5JGicwdxcnmh6y94-1",
    image: foodcouriers,
    content:
      "A Blockchain-based food couriers app ensuring secure, transparent order tracking and efficient delivery management – inspired by ETHIndia'22 innovation!",
    stack: [
      {
        id: "icon-4",
        icon: SiFigma,
        name: "Figma"
      },
      
    ],
  },
  {
    id: "project-10",
    title: "Portfolio",
    github: "",
    link: "",
    image: portfolio,
    content: "Personal portfolio website with React and Tailwind CSS.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "Tailwind CSS"
      },
      {
        id: "icon-3",
        icon: AiFillHtml5,
        name: "HTML"
      },

      {
        id: "icon-4",
        icon: SiJavascript,
        name: "JavaScript"
      },
    ],
  },
  
];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/urmit-patel0812",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/urmit0812",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:urmitpatel0812@gmail.com",
  },
 
  {
    id: "social-media-4",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/urmit_patel_/",
  },
  {
    id: "social-media-5",
    icon: AiFillPhone,
    link: "tel:+91 8160323888",
  }
];

// Your professional summary
export const aboutMe = {
    name: "Urmit Patel",
    githubUsername: ' urmit0812',
    tagLine: "FDE Intern @Unified Mentor | PIT'25",
    intro: "UI/UX Designer from India, constantly refining designs and brainstorming innovative user experiences to solve real-world problems."
}

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 20;

// Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format. 
export const includedRepos = ['publiclab/plots2', 'zulip/zulip', 'paritytech/polkadot-sdk'];