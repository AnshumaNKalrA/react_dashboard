import TeamData from "./components/teamTable/TeamTable";

export const menu = [
  {
    id: 1,
    title: "tools",
    listItems: [
      {
        id: 1,
        title: "Overview",
        url: "/",
        icon: "home.svg",
      },
    ]
  },
  {
    id: 1,
    title: "tools",
    listItems: [
      {
        id: 1,
        title: "Checkmarx",
        url: "/checkmarx",
        icon: "checkmarx.svg",
      },
      {
        id: 2,
        title: "Mend",
        url: "/mend",
        icon: "mend.svg",
      },
      {
        id: 3,
        title: "Burp enterprise",
        url: "/burp",
        icon: "burp.svg",
      },
      {
        id: 4,
        title: "Data Theorem",
        url: "/datatheorem",
        icon: "datatheorem.svg",
      },
      {
        id: 5,
        title: "Bugcrowd",
        url: "/bugcrowd",
        icon: "bugcrowd.svg",
      },
    ],
  },
];

export const severityData = {
  title : "Severity Data",
  chartData : [
    {name:"High",value:101,color:"#E72929"},
    {name:"Medium",value:1545,color:"#FDA403"},
    {name:"Low",value:4656,color:"#C7B7A3"},
  ]
};

export const teamsData = [  
  { id: 'CrowdCompass', name: 'CrowdCompass' },  
  { id: 'Stargate', name: 'Stargate' },  
  { id: 'Falcon', name: 'Falcon' },  
  { id: 'QuickMobile', name: 'QuickMobile' },  
  { id: 'WeddingSpot', name: 'WeddingSpot' },  
  { id: 'EMI', name: 'EMI' },  
];  

export const tableData: TeamData[] = [  
  {  
    name: "CrowdCompass",  
    high: 4,  
    medium: 7,  
    low: 10,  
    projects: 2,  
    scanTrend: [20, 15, 18, 22, 19],  
    highNew: 2,  
    mediumNew: 3,  
    projectTrend:4,
    lowNew: 5,  
  },  
  {  
    name: "Stargate",  
    high: 3,  
    medium: 5,  
    low: 8,  
    projects: 3,  
    scanTrend: [10, 12, 14, 13, 15],  
    highNew: 1,  
    projectTrend:-3,
    mediumNew: 2,  
    lowNew: 4,  
  },  
  // Add more team data as needed  
];