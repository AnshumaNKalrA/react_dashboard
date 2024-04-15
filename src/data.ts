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

export const chartBoxUser = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Total Users",
  number: "11.238",
  dataKey: "users",
  percentage: 45,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

export const chartBoxProduct = {
  color: "skyblue",
  icon: "/productIcon.svg",
  title: "Total Products",
  number: "238",
  dataKey: "products",
  percentage: 21,
  chartData: [
    { name: "Sun", products: 400 },
    { name: "Mon", products: 600 },
    { name: "Tue", products: 500 },
    { name: "Wed", products: 700 },
    { name: "Thu", products: 400 },
    { name: "Fri", products: 500 },
    { name: "Sat", products: 450 },
  ],
};
export const chartBoxRevenue = {
  color: "teal",
  icon: "/revenueIcon.svg",
  title: "Total Revenue",
  number: "$56.432",
  dataKey: "revenue",
  percentage: -12,
  chartData: [
    { name: "Sun", revenue: 400 },
    { name: "Mon", revenue: 600 },
    { name: "Tue", revenue: 500 },
    { name: "Wed", revenue: 700 },
    { name: "Thu", revenue: 400 },
    { name: "Fri", revenue: 500 },
    { name: "Sat", revenue: 450 },
  ],
};
export const chartBoxConversion = {
  color: "gold",
  icon: "/conversionIcon.svg",
  title: "Total Ratio",
  number: "2.6",
  dataKey: "ratio",
  percentage: 12,
  chartData: [
    { name: "Sun", ratio: 400 },
    { name: "Mon", ratio: 600 },
    { name: "Tue", ratio: 500 },
    { name: "Wed", ratio: 700 },
    { name: "Thu", ratio: 400 },
    { name: "Fri", ratio: 500 },
    { name: "Sat", ratio: 450 },
  ],
};

export const barChartBoxRevenue = {
  title: "Profit Earned",
  color: "#8884d8",
  dataKey: "profit",
  chartData: [
    {
      name: "Sun",
      profit: 4000,
    },
    {
      name: "Mon",
      profit: 3000,
    },
    {
      name: "Tue",
      profit: 2000,
    },
    {
      name: "Wed",
      profit: 2780,
    },
    {
      name: "Thu",
      profit: 1890,
    },
    {
      name: "Fri",
      profit: 2390,
    },
    {
      name: "Sat",
      profit: 3490,
    },
  ],
};

export const barChartBoxVisit = {
  title: "Total Visit",
  color: "#FF8042",
  dataKey: "visit",
  chartData: [
    {
      name: "Sun",
      visit: 4000,
    },
    {
      name: "Mon",
      visit: 3000,
    },
    {
      name: "Tue",
      visit: 2000,
    },
    {
      name: "Wed",
      visit: 2780,
    },
    {
      name: "Thu",
      visit: 1890,
    },
    {
      name: "Fri",
      visit: 2390,
    },
    {
      name: "Sat",
      visit: 3490,
    },
  ],
};

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