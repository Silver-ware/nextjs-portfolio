export interface AwardsCertificatesInterface {
  id: number;
  title: string;
  details: string;
  date: string;
  competitionName: string;
}

export const awardsAndCertificatesData: AwardsCertificatesInterface[] = [
  {
    id: 1,
    title: "Best in Web Development",
    details: "Awarded for creating an innovative project with modern frameworks.",
    date: "March 2023",
    competitionName: "University IT Expo",
  },
  {
    id: 2,
    title: "Certified JavaScript Developer",
    details: "Credential earned for demonstrating advanced JavaScript skills.",
    date: "July 2023",
    competitionName: "HackerRank Skills Certification",
  },
  {
    id: 3,
    title: "AWS Cloud Practitioner",
    details: "Validated knowledge of cloud fundamentals and AWS services.",
    date: "January 2024",
    competitionName: "Amazon Web Services Certification",
  },
  {
    id: 4,
    title: "Outstanding Intern Award",
    details: "Recognized for exceptional contribution during internship.",
    date: "April 2025",
    competitionName: "Symphonics Co. LTD Internship Program",
  },
];
