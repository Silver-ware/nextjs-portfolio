export interface AwardsCertificatesInterface {
  id: number;
  title: string;
  details: string;
  date: string;
  competitionName: string;
  image: string;
}

export const awardsAndCertificatesData: AwardsCertificatesInterface[] = [
  {
    id: 1,
    title: "Second Place",
    details: "Outstanding performance during the conduct of ACLC Week 2023.",
    date: "April 2023",
    competitionName: "Web Designing & Development",
    image: "/assets/awards/award-1.jpg",
  },
  {
    id: 2,
    title: "C++ Excellence",
    details: "Proficiency award on C++ Programming Language.",
    date: "July 2025",
    competitionName: "Commencement Exercises",
     image: "/assets/awards/award-2.jpg",
  },
  {
    id: 3,
    title: "First Place",
    details: "Theme: Mirroring Back the Silver Years of Resillience.",
    date: "April 26, 2022",
    competitionName: "IT Skills Competition - C++ Programming",
     image: "/assets/awards/award-3.jpg",
  },
  {
    id: 4,
    title: "Cum Laude",
    details: "Academic Excellence: Evidence of discipline and hardwork.",
    date: "July 2025",
    competitionName: "Commencement Excersices",
     image: "/assets/awards/award-4.jpg",
  },
  {
    id: 5,
    title: "First Place",
    details: "Theme: Leading Innovation Altitude",
    date: "October 10, 2023",
    competitionName: "Java Programming Competition",
     image: "/assets/awards/award-5.jpg",
  }
];
