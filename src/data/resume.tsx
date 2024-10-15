import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Anmol Khatri",
  initials: "AK",
  url: "https://anmolkhatri.works/",
  location: "India",
  //locationLink: "https://www.google.com/maps/place/raipur",
  description:
    "Passionate Full Stack Web Developer: Crafting Seamless Digital Experiences from Frontend to Backend",
  summary:
    "A B.Tech CSE (AI) undergraduate, Batch of 2026, with a strong passion for Full Stack Web Development in the JavaScript ecosystem. My focus is on mastering technologies like React, Node.js, and Express, and building dynamic, responsive web applications that deliver seamless user experiences.",
  avatarUrl: "/anmol.png",
  skills: [
    "C++",
    "Javascript",
    "Tailwind CSS",
    "React",
    "Node.js",
    "Express.js",
    "Chart.js",
    "MySQL",
    "MongoDB",
    "Git and GitHub",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "anmolkhatri04@outlook.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/anmol4khatri",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/anmolkhatri04/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:anmolkhatri@outlook.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Praxtal",
      href: "https://praxtal.com/",
      badges: [],
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl: "https://praxtal.com/wp-content/uploads/2021/08/Perfect-unique-attractive-stylish-geometric-tech-PD-DP-P-D-initial-based-letter-icon-logo.-1.png",
      start: "Jul 2024",
      end: "Sep 2024",
      description:
        "Developed a multifunctional Patent Trend Analysis dashboard that examines patent filing patterns, licensing activity, and other litigation trends over time. The system aggregates data from multiple patent databases, offering drill-down insights by technology sector, region, and company. Utilized advanced data visualizations to illustrate filing growth and monitor competitor activity, employing a tech stack of React.js, Node.js, Express.js, MySQL, Chart.js, and Python for an optimal user experience.",
    },
  ],
  education: [
    {
      school: "SSIPMT, Raipur",
      href: "https://www.ssipmt.com/",
      degree: "B.Tech in Computer Science (AI), 2nd Year Onwards",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9hwPg2dxvrGva6_moqR6xBuraowESQQvL_g&s",
      start: "2023",
      end: "2026",
    },
    {
      school: "Chandigarh University",
      href: "https://www.cuchd.in/",
      degree: "B.Tech in Computer Science, 1st Year",
      logoUrl: "https://pbs.twimg.com/profile_images/1771029800305479680/1yYgcd7o_400x400.jpg",
      start: "2022",
      end: "2023",
    },
    {
      school: "MPS, Raipur",
      href: "#",
      degree: "12th Standard",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP546HiuH92dhV-Y4nZT7WseoDMxF6nkrB3A&s",
      start: "2021",
      end: "2022",
    },
    {
      school: "MPS, Raipur",
      href: "#",
      degree: "10th Standard",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP546HiuH92dhV-Y4nZT7WseoDMxF6nkrB3A&s",
      start: "2019",
      end: "2020",
    },
  ],
  projects: [
    /* 
    {
      title: "Example",
      href: "https://example.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://example.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://example.mp4",
    },
    */

    /* 
    add this to src/page.tsx to display projects(insert in line 133)
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
    </div>
    */
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    ],
    } as const;
