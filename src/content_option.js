const logotext = "MOHAMMADKAIF";
const meta = {
    title: "Mohammadkaif",
    description: "I’m Mohammadkaif data scientist _ Full stack devloper,currently working in Berlin",
};

const introdata = {
    title: "I’m Mohammadkaif",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I develop windows applications",
    },
    description: (
        <span>
            Turning ideas into reality with clean code, innovative solutions, and powerful functionality that drive progress. <br />
            <strong>“AI is not just a tool. It will redefine the way we work, live, and think.”</strong> – Sundar Pichai.
        </span>
    ),
    your_img_url: require('./assets/images/kaif.jpg')
};

const dataabout = {
    title: "About Me",
    aboutme: (
        <span>
            I am passionate about Artificial Intelligence (AI) and enjoy creating automation scripts to simplify tasks. I also love designing and selling game macros, which help players enhance their experience. Additionally, I enjoy developing small Windows applications tailored to meet specific needs and requirements. Beyond coding, I enjoy working with Unity engine to create immersive game experiences, and sculpting 3D models in Blender. My main programming languages are <strong>Java</strong> and <strong>Python</strong>, but I’ve also worked with <strong>C#</strong> in Unity, <strong>PHP</strong> for website development, and <strong>MySQL</strong> for database management.
        </span>
    )
};


const worktimeline = [{
    jobtitle: "Functional Tester",
    where: <span><a href="https://pokemonrevolution.net/home" target="_blank">PRO</a></span>,
    date: "2022-2024",
},
{
    jobtitle: "-",
    where: "-",
    date: "-",
},
{
    jobtitle: "-",
    where: "-",
    date: "-",
},
];


const skills = [{
        name: "Python",
        value: 60,
    },
    {
        name: "Java",
        value: 60,
    },
    {
        name: "MySQL",
        value: 80,
    },
    {
        name: "React",
        value: 30,
    },
    {
        name: "C#",
        value: 60,
    },
];

const services = [
    {
        title: "Portfolio Websites / Web Applications",
        description: "I specialize in creating custom portfolio websites and web applications tailored to showcase your work and enhance user experience, with a focus on performance and responsive design."
    },
    {
        title: "Custom Windows Applications",
        description: "I develop custom Windows applications that meet your specific needs, delivering seamless functionality and intuitive user interfaces."
    },
    {
        title: "Macro Scripts, Discord Bots, and Automation",
        description: "I offer solutions for automating tasks with macro scripts and developing custom Discord bots to improve interaction and boost productivity."
    },
];


const dataportfolio = [{
        img: "https://www.shutterstock.com/image-vector/combination-letter-s-tooth-symbol-600nw-1495549139.jpg",
        description: "Dental Clinic Management System",
        link: "https://github.com/Mohammadkaif-Amalsadi/Dental-Clinic-Management-System",
        customHeight: "310px"
    },
    {
        img: "https://i.pinimg.com/736x/5a/b9/f6/5ab9f6c8ef675bb5cafbb8cd954e6d14.jpg",
        description: "A fun Discord bot for interactive games and friendly competition with friends!",
        link: "https://github.com/Mohammadkaif-Amalsadi/Discord-Bot",
        customHeight: "310px"
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "To be added",
        link: "#",
        customHeight: "310px"
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "To be added",
        link: "#",
        customHeight: "310px"
    },
    {
        img: "https://static.vecteezy.com/system/resources/thumbnails/023/077/516/small_2x/operations-icon-workflow-illustration-sign-work-flow-symbol-automate-logo-vector.jpg",
        description: "Automation Script",
        link: "https://github.com/Mohammadkaif-Amalsadi/Character-Automation",
        customHeight: "310px"
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "To be added",
        link: "#",
        customHeight: "310px"
    },

    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "To be added",
        link: "#",
        customHeight: "310px"
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "To be added",
        link: "#",
        customHeight: "310px"
    },
    {
        img: "https://play.pokemonshowdown.com/favicon.ico",
        description: "A script to parse data from Showdown Match Replay",
        link: "https://github.com/Mohammadkaif-Amalsadi/Showdown-Replay-Parser",
        customHeight: "310px"
    },
    {
        img: "https://picsum.photos/400/550/?grayscale",
        description: "To be added",
        link: "#",
        customHeight: "310px"
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "To be added",
        link: "#",
        customHeight: "310px"
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "To be added   ",
        link: "#",
        customHeight: "310px"
    },
];

const contactConfig = {
    YOUR_EMAIL: "amalsadikaif98@gmail.com",
    YOUR_FONE: "+91 97732 79670",
    description: (
        <span>
            This is a contact form integration using <strong>EmailJS</strong> in a React project. It enables users to send emails directly from the website without requiring a backend server. The setup includes configuring EmailJS with a service ID, template ID, and user ID to handle email delivery efficiently.
        </span>
    ),
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_2czowjh",
    YOUR_TEMPLATE_ID: "template_ywyktu8",
    YOUR_USER_ID: "Y8WkpG8dpSaTOnbk_",
};

const socialprofils = {
    github: "https://github.com/Mohammadkaif-Amalsadi",
    facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/kaif-amalsadi-30583730a/",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};