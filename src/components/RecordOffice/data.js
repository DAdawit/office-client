const organizationsData = [
  {
    id: 1,
    name: "Main Branch",
    structures: [
      {
        id: 1,
        name: "Main Director",
        personName: "Thomas Debele Robi",
        parentStructure: "Not available",
        levels: [
          {
            id: 1,
            level: "Level 1",
            name: "Executive Level",
            description: "Top management level",
            structureTitle: "Main Director",
            headName: "Thomas Debele Robi",
            parentStructure: "Not available",
          },
        ],
      },
      {
        id: 2,
        name: "Division Managers",
        headName: "Elena Getachew",
        parentStructure: "Main Director",
        levels: [
          // {
          //     id: 1,
          //     level: "Level 2",
          //     name: "Management Level",
          //     description: "Division management level",
          //     structureTitle: "Division Managers",
          //     headName: "Elena Getachew",
          //     parentStructure: "Main Director"
          // }
        ],
      },
      {
        id: 3,
        name: "Director Directorates",
        headName: "Abel Wondimu",
        parentStructure: "Division Managers",
        levels: [
          {
            id: 1,
            level: "Level 3",
            name: "Director Level",
            description: "Directorate level",
            structureTitle: "Director Directorates",
            headName: "Abel Wondimu",
            parentStructure: "Division Managers",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "North Branch",
    structures: [
      {
        id: 1,
        name: "Regional Director",
        headName: "Martha Alemu",
        parentStructure: "Not available",
        levels: [
          {
            id: 1,
            level: "Level 1",
            name: "Regional Executive",
            description: "Regional top management",
            structureTitle: "Regional Director",
            headName: "Martha Alemu",
            parentStructure: "Not available",
          },
        ],
      },
      {
        id: 2,
        structureTitle: "Project Coordinators",
        headName: "Samuel Bekele",
        parentStructure: "Regional Director",
        levels: [
          {
            id: 1,
            level: "Level 2",
            name: "Coordination Level",
            description: "Project coordination level",
            structureTitle: "Project Coordinators",
            headName: "Samuel Bekele",
            parentStructure: "Regional Director",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "East Branch",
    structures: [
      {
        id: 1,
        name: "Branch Director",
        headName: "Daniel Girma",
        parentStructure: "Not available",
        levels: [
          {
            id: 1,
            level: "Level 1",
            name: "Branch Executive",
            description: "Branch top management",
            structureTitle: "Branch Director",
            headName: "Daniel Girma",
            parentStructure: "Not available",
          },
        ],
      },
      {
        id: 2,
        structureTitle: "Operations Head",
        headName: "Tsedey Welde",
        parentStructure: "Branch Director",
        levels: [
          {
            id: 1,
            level: "Level 2",
            name: "Operations Level",
            description: "Operations management level",
            structureTitle: "Operations Head",
            personName: "Tsedey Welde",
            parentStructure: "Branch Director",
          },
        ],
      },
      {
        id: 3,
        structureTitle: "Supervisors",
        personName: "Kibrom Tesfaye",
        parentStructure: "Operations Head",
        levels: [
          {
            id: 1,
            level: "Level 3",
            name: "Supervisory Level",
            description: "Supervision and monitoring level",
            structureTitle: "Supervisors",
            personName: "Kibrom Tesfaye",
            parentStructure: "Operations Head",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "West Branch",
    structures: [
      {
        id: 1,
        name: "Area Director",
        personName: "Fikirte Mekonnen",
        parentStructure: "Not available",
        levels: [
          {
            id: 1,
            level: "Level 1",
            name: "Area Executive",
            description: "Area top management",
            structureTitle: "Area Director",
            personName: "Fikirte Mekonnen",
            parentStructure: "Not available",
          },
        ],
      },
      {
        id: 2,
        structureTitle: "Consultants",
        personName: "Abraham Lema",
        parentStructure: "Area Director",
        levels: [
          {
            id: 1,
            level: "Level 2",
            name: "Consultancy Level",
            description: "Consultation and advisory level",
            structureTitle: "Consultants",
            personName: "Abraham Lema",
            parentStructure: "Area Director",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "South Branch",
    structures: [
      // Example of empty structure with potential levels
      // {
      //     id: 1,
      //     structureTitle: "Branch Director",
      //     personName: "Hana Tesema",
      //     parentStructure: "Not available",
      //     levels: [
      //         {
      //             id: 1,
      //             level: "Level 1",
      //             name: "Branch Executive",
      //             description: "Branch top management",
      //             structureTitle: "Branch Director",
      //             personName: "Hana Tesema",
      //             parentStructure: "Not available"
      //         }
      //     ]
      // },
    ],
  },
];

const structural_by_levels = [
  {
    id: 1,
    name: "Main Director",
    level: "1",
    structures: [
      { id: 1, name: "Division Main Director" },
      { id: 2, name: "Director Director" },
      { id: 3, name: "Executive Director" },
      { id: 4, name: "Chief Executive Officer" },
      { id: 5, name: "Managing Director" },
    ],
  },
  {
    id: 2,
    name: "Corporate Service Division",
    level: "2",
    structures: [
      { id: 6, name: "Corporate Service Division" },
      { id: 7, name: "HR Department" },
      { id: 8, name: "Finance Department" },
      { id: 9, name: "IT Support Unit" },
      { id: 10, name: "Administration Section" },
      { id: 11, name: "Legal Compliance Team" },
    ],
  },
  {
    id: 3,
    name: "Land, Design And Infrastructure Sector",
    level: "2",
    structures: [
      { id: 12, name: "Land, Design And Infrastructure Sector" },
      { id: 13, name: "Urban Planning Division" },
      { id: 14, name: "Architectural Design Unit" },
      { id: 15, name: "Civil Engineering Team" },
      { id: 16, name: "Environmental Assessment Group" },
      { id: 17, name: "Infrastructure Development Wing" },
    ],
  },
  {
    id: 4,
    name: "Construction Division",
    level: "2",
    structures: [
      { id: 18, name: "Construction Division" },
      { id: 19, name: "Residential Projects Unit" },
      { id: 20, name: "Commercial Projects Team" },
      { id: 21, name: "Site Management Section" },
      { id: 22, name: "Quality Control Department" },
      { id: 23, name: "Safety Compliance Unit" },
      { id: 24, name: "Project Coordination Cell" },
    ],
  },
  {
    id: 5,
    name: "House Transfer And Construction Finance Division",
    level: "2",
    structures: [
      { id: 25, name: "House Transfer And Construction Finance Division" },
      { id: 26, name: "Loan Processing Department" },
      { id: 27, name: "Mortgage Services Unit" },
      { id: 28, name: "Property Transfer Section" },
      { id: 29, name: "Financial Advisory Team" },
      { id: 30, name: "Credit Assessment Division" },
      { id: 31, name: "Client Services Wing" },
    ],
  },
  {
    id: 6,
    name: "Technical Operations",
    level: "3",
    structures: [
      { id: 32, name: "Technical Operations" },
      { id: 33, name: "Engineering Support Unit" },
      { id: 34, name: "Technical Design Team" },
      { id: 35, name: "Research & Development" },
      { id: 36, name: "Innovation Lab" },
      { id: 37, name: "Technical Standards Committee" },
    ],
  },
  {
    id: 7,
    name: "Regional Operations",
    level: "3",
    structures: [
      { id: 38, name: "Regional Operations" },
      { id: 39, name: "Northern Region Office" },
      { id: 40, name: "Southern Region Office" },
      { id: 41, name: "Eastern Region Branch" },
      { id: 42, name: "Western Region Division" },
      { id: 43, name: "Central Operations Hub" },
    ],
  },
  {
    id: 8,
    name: "Support Services",
    level: "3",
    structures: [
      { id: 44, name: "Support Services" },
      { id: 45, name: "Logistics Department" },
      { id: 46, name: "Procurement Unit" },
      { id: 47, name: "Facilities Management" },
      { id: 48, name: "Maintenance Division" },
      { id: 49, name: "Supply Chain Coordination" },
    ],
  },
];

export default { organizationsData, structural_by_levels };
