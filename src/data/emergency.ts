export const emergencyNumbers = [
  { label: "Ambulance", number: "10177", tel: "10177" },
  { label: "Police (SAPS)", number: "10111", tel: "10111" },
  { label: "Fire Department", number: "10177", tel: "10177" },
  { label: "Poison Info", number: "0861 555 777", tel: "0861555777" },
  {
    label: "Child Protection",
    number: "0800 055 555",
    tel: "0800055555",
  },
  { label: "Childline SA", number: "116", tel: "116" },
  { label: "GBV Command Centre", number: "0800 428 428", tel: "0800428428" },
];

export interface Clinic {
  id: string;
  name: string;
  type: "Public Clinic" | "Private Hospital" | "Public Hospital" | "Day Clinic";
  city: string;
  area: string;
  address: string;
  phone: string;
  emergencyServices: boolean;
}

export const clinics: Clinic[] = [
  {
    id: "chris-hani-baragwanath",
    name: "Chris Hani Baragwanath Academic Hospital",
    type: "Public Hospital",
    city: "Johannesburg",
    area: "Soweto",
    address: "26 Chris Hani Road, Diepkloof, Soweto",
    phone: "+27 11 933 8000",
    emergencyServices: true,
  },
  {
    id: "charlotte-maxeke",
    name: "Charlotte Maxeke Johannesburg Academic Hospital",
    type: "Public Hospital",
    city: "Johannesburg",
    area: "Parktown",
    address: "17 Jubilee Road, Parktown, Johannesburg",
    phone: "+27 11 488 4911",
    emergencyServices: true,
  },
  {
    id: "steve-biko",
    name: "Steve Biko Academic Hospital",
    type: "Public Hospital",
    city: "Pretoria",
    area: "Pretoria CBD",
    address: "Cnr Steve Biko & Malherbe Street, Pretoria",
    phone: "+27 12 354 1000",
    emergencyServices: true,
  },
  {
    id: "tembisa-hospital",
    name: "Tembisa Provincial Tertiary Hospital",
    type: "Public Hospital",
    city: "Ekurhuleni",
    area: "Tembisa",
    address: "Hospital Road, Tembisa",
    phone: "+27 11 923 2000",
    emergencyServices: true,
  },
  {
    id: "netcare-sunninghill",
    name: "Netcare Sunninghill Hospital",
    type: "Private Hospital",
    city: "Johannesburg",
    area: "Sunninghill",
    address: "Cnr Witkoppen & Nanyuki Rd, Sunninghill",
    phone: "+27 11 806 1500",
    emergencyServices: true,
  },
  {
    id: "life-fourways",
    name: "Life Fourways Hospital",
    type: "Private Hospital",
    city: "Johannesburg",
    area: "Fourways",
    address: "Cedar Road, Fourways",
    phone: "+27 11 875 1000",
    emergencyServices: true,
  },
  {
    id: "mediclinic-midstream",
    name: "Mediclinic Midstream",
    type: "Private Hospital",
    city: "Pretoria",
    area: "Centurion",
    address: "Midstream Estate, Centurion",
    phone: "+27 12 652 5000",
    emergencyServices: true,
  },
  {
    id: "alex-clinic",
    name: "Alexandra Community Health Centre",
    type: "Public Clinic",
    city: "Johannesburg",
    area: "Alexandra",
    address: "1st Avenue, Alexandra",
    phone: "+27 11 882 6111",
    emergencyServices: false,
  },
];
