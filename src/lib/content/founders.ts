export interface Founder {
  name: string;
  role: string;
  bio: string;
  photoUrl?: string;
}

export const FOUNDERS: Founder[] = [
  {
    name: "Jason Anderson",
    role: "Co-Founder and Operations Manager",
    bio: "Jason focuses on field operations, restoration planning, and making sure every project is handled with care and accountability.",
  },
  {
    name: "Kristin Anheliger",
    role: "Co-Founder and Project Manager",
    bio: "Kristin helps guide clients through communication, scheduling, and the practical side of moving from damage to recovery.",
  },
];
