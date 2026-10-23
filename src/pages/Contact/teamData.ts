import cooperImg from "../../assets/contact/cooper.webp";
import mironImg from "../../assets/contact/miron.webp";
import michaelImg from "../../assets/contact/michael.webp"
import curtisImg from "../../assets/contact/curtis.webp"
import ethanmImg from "../../assets/contact/ethan_m.webp"
import ibrahimImg from "../../assets/contact/ibrahim.webp"
import jacobImg from "../../assets/contact/jacob.webp"
import kirilImg from "../../assets/contact/kiril.webp"
import tylerImg from "../../assets/contact/tyler.webp"
import unknownImg from "../../assets/contact/unknown.webp"

export interface TeamPerson {
  id: string;
  name: string;
  role: string;
  email?: string;
  headshot?: string;
}

export interface Subteam {
  id: string;
  name: string;
  description: string;
  captains: TeamPerson[];
}

export const mentors: Record<"left" | "center" | "right", TeamPerson> = {
  left: {
    id: "michael",
    name: "Michael Rock",
    role: "Technical Mentor",
    email: "michael.rock.05@gmail.com",
    headshot: michaelImg
  },
  center: {
    id: "cooper",
    name: "Mr. Cooper",
    role: "Lead Mentor",
    email: "tv40175@gotvdsb.ca",
    headshot: cooperImg,
  },
  right: {
    id: "miron",
    name: "Mr. Miron",
    role: "Technical Mentor",
    email: "tv49290@gotvdsb.ca",
    headshot: mironImg,
  },
};

export const teamEmail = "contact@ramferno.com";
export const studentLeaders: TeamPerson[] = [
  { id: "student-lead-1", name: "Ethan M", role: "Student Co-Captain", headshot: ethanmImg },
  { id: "student-lead-2", name: "Ibrahim", role: "Student Co-Captain", headshot: ibrahimImg },
];

//Assembly: Jacob + Tyler Manufacturing: Curtis  Electrical: Ethan M (For now) Digital Media: Kiril Business: Alyssa
//CAD: Ibrahim + Andrew Robotic Software: Ethan M (Other) Software: Ethan A
// Rename, add, or remove entries here to update the roster.
// Each subteam supports any number of captains.
export const subteams: Subteam[] = [
  {
    id: "build",
    name: "Build",
    description: "Build, assemble, and refine the robot.",
    captains: [
      { id: "assembly-jacob", name: "Jacob", role: "Assembly Co-Captain", headshot: jacobImg },
      { id: "assembly-tyler", name: "Tyler", role: "Assembly Co-Captain", headshot: tylerImg },
      {
        id: "manufacturing-curtis",
        name: "Curtis",
        role: "Manufacturing Captain",
        headshot: curtisImg
      },
    ],
  },
  {
    id: "electrical",
    name: "Electrical",
    description: "Power, wiring, and robot controls.",
    captains: [
      { id: "electrical-ethan-m", name: "Ethan M", role: "Electrical Captain", headshot: ethanmImg },
    ],
  },
  {
    id: "marketing",
    name: "Marketing",
    description: "Share the team’s story and identity.",
    captains: [
      { id: "marketing-kiril", name: "Kiril", role: "Marketing Captain", headshot: kirilImg },
    ],
  },
  {
    id: "business",
    name: "Business",
    description: "Partnerships, fundraising, and team operations.",
    captains: [
      { id: "business-alyssa", name: "Alyssa", role: "Business Captain", headshot: unknownImg },
    ],
  },
  {
    id: "design",
    name: "Design",
    description: "Turn ideas into buildable designs.",
    captains: [
      { id: "cad-ibrahim", name: "Ibrahim", role: "CAD Co-Captain", headshot: ibrahimImg },
      { id: "cad-andrew", name: "Andrew", role: "CAD Co-Captain", headshot: unknownImg },
    ],
  },
  {
    id: "software",
    name: "Software",
    description: "Driver controls, autonomy and software tools.",
    captains: [
      {
        id: "software-ethan-m",
        name: "Ethan M",
        role: "Controls & Autonomy Captain", 
        headshot: ethanmImg
      },
      { id: "software-ethan-a", name: "Ethan A", role: "Software Captain", headshot: unknownImg },
    ],
  },
];
