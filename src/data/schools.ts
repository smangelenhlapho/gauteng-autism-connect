// Placeholder data — realistic Gauteng-relevant entries for demo purposes.
// Swap for partner-verified data before launch.

export type SchoolStatus = "Open" | "Waitlist" | "Closed";

export interface School {
  id: string;
  name: string;
  city: string;
  area: string;
  municipality: string;
  ageRange: string;
  ageMin: number;
  ageMax: number;
  gender: "Co-ed" | "Boys" | "Girls";
  status: SchoolStatus;
  type: "Government" | "Private" | "NGO";
  summary: string;
  about: string;
  mission: string;
  services: string[];
  programmes: string[];
  transport: boolean;
  fees: string;
  address: string;
  phone: string;
  email: string;
  website?: string;
  accent: string; // tailwind bg class for card image placeholder
}

export const schools: School[] = [
  {
    id: "blue-bird-centre",
    name: "The Blue Bird Centre",
    city: "Johannesburg",
    area: "Sandton",
    municipality: "City of Johannesburg",
    ageRange: "Ages 3–12",
    ageMin: 3,
    ageMax: 12,
    gender: "Co-ed",
    status: "Open",
    type: "Private",
    summary:
      "Specialized sensory integration and speech therapy integrated into daily learning.",
    about:
      "Founded in 2008, The Blue Bird Centre serves children on the autism spectrum with a low pupil-to-teacher ratio and an embedded multidisciplinary therapy team.",
    mission:
      "To create a calm, structured environment where every child can build communication, regulation, and independence skills.",
    services: ["Speech Therapy", "Occupational Therapy", "Sensory Integration"],
    programmes: ["Foundation Phase", "Intermediate Phase", "Life Skills"],
    transport: true,
    fees: "R 78,000 – R 102,000 / year",
    address: "14 Rivonia Road, Sandton, Johannesburg",
    phone: "+27 11 555 0102",
    email: "info@bluebirdcentre.co.za",
    website: "https://bluebirdcentre.co.za",
    accent: "from-mint/30 to-ocean/30",
  },
  {
    id: "soweto-stars-academy",
    name: "Soweto Stars Academy",
    city: "Johannesburg",
    area: "Soweto",
    municipality: "City of Johannesburg",
    ageRange: "Ages 5–18",
    ageMin: 5,
    ageMax: 18,
    gender: "Co-ed",
    status: "Waitlist",
    type: "NGO",
    summary:
      "Focusing on life skills and vocational training for teenagers on the spectrum.",
    about:
      "A community-led school providing structured learning and skills training for older learners often underserved by mainstream provision.",
    mission:
      "To prepare young adults on the spectrum for meaningful work and independent living in their communities.",
    services: ["Vocational Training", "Speech Therapy", "Counselling"],
    programmes: ["Senior Phase", "FET Skills", "Workplace Readiness"],
    transport: false,
    fees: "Sliding scale / bursaries available",
    address: "27 Vilakazi Street, Orlando West, Soweto",
    phone: "+27 11 936 4421",
    email: "hello@sowetostars.org.za",
    accent: "from-teal/30 to-navy/30",
  },
  {
    id: "centurion-reach",
    name: "Centurion Reach",
    city: "Pretoria",
    area: "Centurion",
    municipality: "City of Tshwane",
    ageRange: "Ages 2–8",
    ageMin: 2,
    ageMax: 8,
    gender: "Co-ed",
    status: "Open",
    type: "Private",
    summary:
      "Early intervention specialists with a high teacher-to-student ratio and medical support.",
    about:
      "Centurion Reach focuses on the critical early years, combining ABA-informed practice with sensory and speech therapy in a single campus.",
    mission:
      "To deliver evidence-based early intervention that gives every child the strongest possible foundation.",
    services: ["Early Intervention", "ABA-informed", "Speech Therapy"],
    programmes: ["Pre-school", "Foundation Phase"],
    transport: true,
    fees: "R 84,000 / year",
    address: "98 Lenchen Avenue, Centurion",
    phone: "+27 12 663 9988",
    email: "admissions@centurionreach.co.za",
    accent: "from-mint/40 to-teal/20",
  },
  {
    id: "ekurhuleni-inclusive",
    name: "Ekurhuleni Inclusive School",
    city: "Ekurhuleni",
    area: "Benoni",
    municipality: "City of Ekurhuleni",
    ageRange: "Ages 6–14",
    ageMin: 6,
    ageMax: 14,
    gender: "Co-ed",
    status: "Open",
    type: "Government",
    summary:
      "A GDE-registered LSEN school serving the East Rand with specialist classrooms.",
    about:
      "A public special-needs school with established autism units and on-site allied therapy provided through the provincial health department.",
    mission:
      "To provide accessible, dignified education for learners with autism across Ekurhuleni.",
    services: ["Speech Therapy", "Occupational Therapy", "Psychology"],
    programmes: ["Foundation Phase", "Intermediate Phase", "Senior Phase"],
    transport: true,
    fees: "Government — no fees",
    address: "112 Pretoria Road, Rynfield, Benoni",
    phone: "+27 11 425 6677",
    email: "admin@ekurhuleniinclusive.gov.za",
    accent: "from-ocean/30 to-mint/20",
  },
  {
    id: "willowbrook-pretoria-east",
    name: "Willowbrook Inclusionary",
    city: "Pretoria",
    area: "Pretoria East",
    municipality: "City of Tshwane",
    ageRange: "Ages 4–13",
    ageMin: 4,
    ageMax: 13,
    gender: "Co-ed",
    status: "Waitlist",
    type: "Private",
    summary:
      "Integrated learning environment providing specialist support inside a mainstream curriculum.",
    about:
      "A bridging school where children on the spectrum learn alongside neurotypical peers with embedded support staff.",
    mission:
      "To enable meaningful inclusion through small classes and continuous therapy support.",
    services: ["Inclusion Support", "Speech Therapy", "Remedial Teaching"],
    programmes: ["Foundation Phase", "Intermediate Phase"],
    transport: false,
    fees: "R 92,000 / year",
    address: "8 Lynnwood Road, Lynnwood, Pretoria",
    phone: "+27 12 348 1120",
    email: "office@willowbrook.co.za",
    accent: "from-teal/20 to-mint/40",
  },
  {
    id: "midrand-spectrum",
    name: "Midrand Spectrum Academy",
    city: "Midrand",
    area: "Halfway House",
    municipality: "City of Johannesburg",
    ageRange: "Ages 3–15",
    ageMin: 3,
    ageMax: 15,
    gender: "Co-ed",
    status: "Open",
    type: "Private",
    summary:
      "Multidisciplinary therapy team on campus with strong focus on communication.",
    about:
      "Midrand Spectrum offers an extended-day programme that integrates academics, therapy and life skills.",
    mission:
      "To grow confident communicators through consistent, structured support across school and home.",
    services: ["Speech Therapy", "OT", "Communication Devices", "Music Therapy"],
    programmes: ["Pre-school", "Foundation Phase", "Senior Phase"],
    transport: true,
    fees: "R 88,000 / year",
    address: "5 New Road, Halfway House, Midrand",
    phone: "+27 11 805 4422",
    email: "info@midrandspectrum.co.za",
    accent: "from-navy/20 to-teal/30",
  },
  {
    id: "alberton-haven",
    name: "Alberton Haven School",
    city: "Ekurhuleni",
    area: "Alberton",
    municipality: "City of Ekurhuleni",
    ageRange: "Ages 6–18",
    ageMin: 6,
    ageMax: 18,
    gender: "Co-ed",
    status: "Open",
    type: "NGO",
    summary:
      "Community-funded school providing structured education and family support.",
    about:
      "A registered NPO that runs a full-day school programme and weekend parent support groups.",
    mission:
      "To support whole families, not just learners, on the autism journey.",
    services: ["Family Counselling", "Speech Therapy", "Life Skills"],
    programmes: ["Foundation", "Intermediate", "Senior", "Life Skills"],
    transport: false,
    fees: "R 22,000 / year (subsidised)",
    address: "44 Voortrekker Road, New Redruth, Alberton",
    phone: "+27 11 869 3344",
    email: "hello@albertonhaven.org.za",
    accent: "from-mint/30 to-ocean/20",
  },
  {
    id: "randburg-bridge",
    name: "Randburg Bridge College",
    city: "Johannesburg",
    area: "Randburg",
    municipality: "City of Johannesburg",
    ageRange: "Ages 12–19",
    ageMin: 12,
    ageMax: 19,
    gender: "Co-ed",
    status: "Open",
    type: "Private",
    summary:
      "FET-phase college preparing teens on the spectrum for tertiary or workplace.",
    about:
      "Specialises in older learners with strong academic potential who need a structured, low-sensory environment.",
    mission:
      "To open post-school pathways for capable learners often lost in mainstream high school.",
    services: ["Academic Support", "Career Counselling", "Mentoring"],
    programmes: ["Senior Phase", "FET Phase", "Bridging Year"],
    transport: true,
    fees: "R 96,000 / year",
    address: "21 Republic Road, Ferndale, Randburg",
    phone: "+27 11 781 0099",
    email: "admissions@randburgbridge.co.za",
    accent: "from-ocean/30 to-navy/30",
  },
  {
    id: "kempton-park-learning",
    name: "Kempton Park Learning Centre",
    city: "Ekurhuleni",
    area: "Kempton Park",
    municipality: "City of Ekurhuleni",
    ageRange: "Ages 3–10",
    ageMin: 3,
    ageMax: 10,
    gender: "Co-ed",
    status: "Waitlist",
    type: "Private",
    summary:
      "Convenient OR Tambo-area campus serving East Rand families.",
    about:
      "A small, family-run school with a calm sensory environment and individualised learning plans.",
    mission:
      "To make specialist autism education accessible to working families on the East Rand.",
    services: ["Individual Learning Plans", "OT", "Speech Therapy"],
    programmes: ["Pre-school", "Foundation Phase"],
    transport: false,
    fees: "R 72,000 / year",
    address: "16 Voortrekker Road, Kempton Park",
    phone: "+27 11 394 2200",
    email: "info@kemptonlearning.co.za",
    accent: "from-teal/30 to-mint/30",
  },
  {
    id: "germiston-step-forward",
    name: "Germiston Step Forward",
    city: "Ekurhuleni",
    area: "Germiston",
    municipality: "City of Ekurhuleni",
    ageRange: "Ages 5–14",
    ageMin: 5,
    ageMax: 14,
    gender: "Co-ed",
    status: "Open",
    type: "Government",
    summary:
      "LSEN public school with established autism classrooms and full curriculum.",
    about:
      "Part of the Gauteng Department of Education's special-needs network with on-site therapy access.",
    mission:
      "Quality public special-needs education for the south-east Rand community.",
    services: ["Speech Therapy", "OT", "School Nurse"],
    programmes: ["Foundation Phase", "Intermediate Phase", "Senior Phase"],
    transport: true,
    fees: "Government — no fees",
    address: "78 President Street, Germiston",
    phone: "+27 11 825 7711",
    email: "principal@stepforward.gov.za",
    accent: "from-mint/20 to-navy/20",
  },
  {
    id: "roodepoort-quiet-harbour",
    name: "Quiet Harbour Roodepoort",
    city: "Johannesburg",
    area: "Roodepoort",
    municipality: "City of Johannesburg",
    ageRange: "Ages 2–7",
    ageMin: 2,
    ageMax: 7,
    gender: "Co-ed",
    status: "Open",
    type: "Private",
    summary:
      "Early childhood specialists focused on calm sensory design and parent coaching.",
    about:
      "A boutique early-years centre. Every classroom is designed with sound, light and texture in mind.",
    mission:
      "To set the gentlest possible foundation for the youngest learners on the spectrum.",
    services: ["Early Intervention", "Parent Coaching", "OT"],
    programmes: ["Toddler Group", "Pre-school", "Grade R"],
    transport: false,
    fees: "R 6,800 / month",
    address: "32 Hendrik Potgieter, Constantia Kloof, Roodepoort",
    phone: "+27 11 678 4400",
    email: "hello@quietharbour.co.za",
    accent: "from-mint/40 to-ocean/30",
  },
  {
    id: "tshwane-rise",
    name: "Tshwane Rise Special School",
    city: "Pretoria",
    area: "Sunnyside",
    municipality: "City of Tshwane",
    ageRange: "Ages 6–18",
    ageMin: 6,
    ageMax: 18,
    gender: "Co-ed",
    status: "Open",
    type: "Government",
    summary:
      "Long-established GDE special school serving inner-city Pretoria families.",
    about:
      "A public special-needs school with autism-specific classrooms and an active parent association.",
    mission:
      "To serve the inner city with dignified, structured education for learners with autism.",
    services: ["Speech Therapy", "OT", "Psychology", "Library"],
    programmes: ["Foundation Phase", "Intermediate Phase", "Senior Phase", "Skills Phase"],
    transport: true,
    fees: "Government — no fees",
    address: "210 Walker Street, Sunnyside, Pretoria",
    phone: "+27 12 343 6677",
    email: "office@tshwanerise.gov.za",
    accent: "from-navy/30 to-teal/30",
  },
];

export const cities = Array.from(new Set(schools.map((s) => s.city))).sort();
export const areas = Array.from(new Set(schools.map((s) => s.area))).sort();
export const municipalities = Array.from(
  new Set(schools.map((s) => s.municipality)),
).sort();
export const allServices = Array.from(
  new Set(schools.flatMap((s) => s.services)),
).sort();

export function getSchool(id: string): School | undefined {
  return schools.find((s) => s.id === id);
}
