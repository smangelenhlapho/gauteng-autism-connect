export interface ResourceTopic {
  id: string;
  title: string;
  body: string;
}

export const topics: ResourceTopic[] = [
  {
    id: "what-is-asd",
    title: "What is Autism Spectrum Disorder?",
    body:
      "Autism Spectrum Disorder (ASD) is a neurodevelopmental difference that shapes how a person communicates, learns, processes sensory input and relates to others. It is a spectrum: every autistic person is unique. ASD is lifelong, but with appropriate support people on the spectrum live full, meaningful lives.",
  },
  {
    id: "early-signs",
    title: "Early Signs",
    body:
      "Common early signs include limited eye contact, delayed speech, repetitive movements, strong preference for routine, intense interests, and unusual responses to sound, light or texture. Signs vary widely — if you have concerns, speak to your clinic nurse or a developmental paediatrician.",
  },
  {
    id: "diagnosis",
    title: "Diagnosis Process",
    body:
      "Diagnosis in South Africa is usually carried out by a developmental paediatrician, psychiatrist or a registered psychologist using a combination of observation, parent interview and standardised assessments (often ADOS-2 and ADI-R). Public services are available but waiting times can be long.",
  },
  {
    id: "communication",
    title: "Communication Strategies",
    body:
      "Use clear, concrete language. Give extra processing time. Pair speech with visuals — picture schedules, choice boards, or AAC apps. Honour all forms of communication, including gestures, devices and behaviour.",
  },
  {
    id: "behaviour",
    title: "Behaviour Support",
    body:
      "Most difficult behaviour is communication. Look for the unmet need — overload, anxiety, hunger, transition, pain. Reduce sensory load, keep routines predictable, and teach a calmer way to express the same need.",
  },
  {
    id: "inclusion",
    title: "Inclusive Education",
    body:
      "South African policy (White Paper 6) commits to inclusive education. In practice options range from full-service ordinary schools with support, to LSEN schools, to specialised private provision. The right fit depends on the child's profile and family resources.",
  },
  {
    id: "grants",
    title: "Government Grants",
    body:
      "Families may qualify for the SASSA Care Dependency Grant (for severe disability) or the Child Support Grant. Eligibility is means-tested and requires a medical assessment form. Apply at your nearest SASSA office.",
  },
];

export const faqs = [
  {
    q: "Does Autism Connect place my child in a school?",
    a: "No — we are an information hub. We help you find suitable schools and contact them directly. Admissions decisions sit with each school.",
  },
  {
    q: "Are listings verified?",
    a: "We work to keep school and clinic information accurate, but details change. Always confirm directly with the school or practice before relying on the information.",
  },
  {
    q: "How do I get an autism diagnosis in Gauteng?",
    a: "Start at your nearest public clinic for a referral to a developmental paediatrician, or contact a private psychologist listed in our therapists directory.",
  },
  {
    q: "Can I volunteer if I have no formal qualifications?",
    a: "Yes. Many roles — reading partners, sports coaches, fundraising, admin — do not require formal qualifications, only a background check and commitment.",
  },
  {
    q: "How can a school be added to the directory?",
    a: "Use the contact form. We verify each listing with the school before publication.",
  },
];
