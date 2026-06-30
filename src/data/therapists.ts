export interface Therapist {
  id: string;
  name: string;
  discipline:
    | "Psychologist"
    | "Speech Therapist"
    | "Occupational Therapist"
    | "Behaviour Therapist"
    | "Counsellor";
  practice: string;
  address: string;
  city: string;
  phone: string;
  hours: string;
  medicalAids: string[];
  languages: string[];
}

export const therapists: Therapist[] = [
  {
    id: "dr-naidoo",
    name: "Dr. Priya Naidoo",
    discipline: "Psychologist",
    practice: "Sandton Child Psychology",
    address: "5 Fredman Drive, Sandton",
    city: "Johannesburg",
    phone: "+27 11 783 9911",
    hours: "Mon–Fri, 08:00–17:00",
    medicalAids: ["Discovery", "Momentum", "Bonitas"],
    languages: ["English", "isiZulu"],
  },
  {
    id: "ms-vermeulen",
    name: "Ms. Hannelie Vermeulen",
    discipline: "Speech Therapist",
    practice: "Talk Together Practice",
    address: "12 Garsfontein Rd, Pretoria East",
    city: "Pretoria",
    phone: "+27 12 460 1188",
    hours: "Mon–Thu, 09:00–16:00",
    medicalAids: ["Discovery", "Bestmed", "Bonitas"],
    languages: ["English", "Afrikaans"],
  },
  {
    id: "mr-dube",
    name: "Mr. Sipho Dube",
    discipline: "Occupational Therapist",
    practice: "Soweto Sensory OT",
    address: "Maponya Mall, Klipspruit",
    city: "Johannesburg",
    phone: "+27 11 938 4422",
    hours: "Tue–Sat, 09:00–17:00",
    medicalAids: ["GEMS", "Discovery", "Polmed"],
    languages: ["English", "Sesotho", "isiZulu"],
  },
  {
    id: "ms-pillay",
    name: "Ms. Anjali Pillay",
    discipline: "Behaviour Therapist",
    practice: "ABA Path Centurion",
    address: "98 Lenchen Ave, Centurion",
    city: "Pretoria",
    phone: "+27 12 661 7788",
    hours: "Mon–Fri, 08:00–18:00",
    medicalAids: ["Discovery", "Momentum"],
    languages: ["English"],
  },
  {
    id: "dr-mokoena",
    name: "Dr. Tebogo Mokoena",
    discipline: "Psychologist",
    practice: "Midrand Family Psychology",
    address: "Waterfall Corner, Midrand",
    city: "Midrand",
    phone: "+27 11 805 2200",
    hours: "Mon–Fri, 09:00–17:00",
    medicalAids: ["Discovery", "GEMS", "Bonitas"],
    languages: ["English", "Setswana", "Sesotho"],
  },
  {
    id: "ms-khumalo",
    name: "Ms. Nomvula Khumalo",
    discipline: "Speech Therapist",
    practice: "Voice & Bridge Therapy",
    address: "44 Voortrekker Rd, Alberton",
    city: "Ekurhuleni",
    phone: "+27 11 869 5577",
    hours: "Mon–Fri, 08:30–16:30",
    medicalAids: ["Discovery", "Bonitas"],
    languages: ["English", "isiZulu", "isiXhosa"],
  },
  {
    id: "mr-jansen",
    name: "Mr. Pieter Jansen",
    discipline: "Occupational Therapist",
    practice: "Eastside OT Practice",
    address: "112 Pretoria Rd, Benoni",
    city: "Ekurhuleni",
    phone: "+27 11 425 8899",
    hours: "Mon–Sat, 09:00–17:00",
    medicalAids: ["Discovery", "Momentum", "GEMS"],
    languages: ["English", "Afrikaans"],
  },
  {
    id: "ms-mhlongo",
    name: "Ms. Zanele Mhlongo",
    discipline: "Counsellor",
    practice: "Family Compass Counselling",
    address: "21 Republic Rd, Randburg",
    city: "Johannesburg",
    phone: "+27 11 781 4400",
    hours: "Tue–Sat, 10:00–18:00",
    medicalAids: ["Discovery", "Bestmed"],
    languages: ["English", "isiZulu", "Setswana"],
  },
];

export const disciplines = Array.from(
  new Set(therapists.map((t) => t.discipline)),
);
