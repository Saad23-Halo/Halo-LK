export const homeItems = [
  // {
  //   name: "Home 01",
  //   routePath: "/",
  // },
  // {
  //   name: "Home 02",
  //   routePath: "/home_2",
  // },
  // {
  //   name: "Home 03",
  //   routePath: "/home_3",
  // },
  // {
  //   name: "Home 04",
  //   routePath: "/home_4",
  // },
  // {
  //   name: "Home 05",
  //   routePath: "/home_5",
  // },
  // {
  //   name: "Home 06",
  //   routePath: "/home_6",
  // },
  // {
  //   name: "Home 07",
  //   routePath: "/home_7",
  // },
  // {
  //   name: "Home 08",
  //   routePath: "/home_8",
  // },
  // {
  //   name: "Home 09",
  //   routePath: "/home_9",
  // },
  // {
  //   name: "Home 10",
  //   routePath: "/home_10",
  // },
];
export const blogItems = [
  // {
  //   name: "Blog List V1",
  //   routePath: "/blog-list-v1",
  // },
  // {
  //   name: "Blog List V2",
  //   routePath: "/blog-list-v2",
  // },
  // {
  //   name: "Blog Single",
  //   routePath: "/blog-details/1",
  // },
];
export const pageItems = [
  // {
  //   name: "404",
  //   routePath: "/404",
  // },
  {
    name: "About",
    routePath: "/about",
  },
  {
    name: "Contact",
    routePath: "/contact",
  },
  // {
  //   name: "Become Expert",
  //   routePath: "/become-expert",
  // },
  {
    name: "Help Center",
    routePath: "/help-center",
  },
  // {
  //   name: "Register",
  //   routePath: "/signup",
  // },
  // {
  //   name: "Terms",
  //   routePath: "/terms",
  // },
  // {
  //   name: "Invoice",
  //   routePath: "/invoice",
  // },
];
export const dashboardItems = [
  {
    name: "Dashboard",
    routePath: "/dashboard/db-dashboard",
  },
  {
    name: "Booking History",
    routePath: "/dashboard/db-booking",
  },
  {
    name: "Wishlist",
    routePath: "/dashboard/db-wishlist",
  },
  {
    name: "Settings",
    routePath: "/dashboard/db-settings",
  },
  {
    name: "Vendor Dashboard",
    routePath: "/vendor-dashboard/dashboard",
  },
  {
    name: "Vendor Add Hotel",
    routePath: "/vendor-dashboard/add-hotel",
  },
  {
    name: "Vendor Booking",
    routePath: "/vendor-dashboard/booking",
  },
  {
    name: "Vendor Hotels",
    routePath: "/vendor-dashboard/hotels",
  },
  {
    name: "Vendor Recovery",
    routePath: "/vendor-dashboard/recovery",
  },
  {
    name: "Logout",
    routePath: "/login",
  },
];

export const categorieMegaMenuItems = [
  {
    id: 1,
    menuCol: [
      {
        id: 1,
        // megaBanner: "/img/backgrounds/7.png",
        // title: "Things to do on your hotel",
        btnText: "See Family Deals ",
        btnRoute: "/hotel-list-v1",
        menuItems: [
          {
            id: 1,
            // title: "Hotel List",
            menuList: [
              {
                name: "Family Deal 1",
                routePath: "/cruise-single/2",
              },
              {
                name: "Family Deal 2",
                routePath: "/cruise-single/2",
              },
              {
                name: "Family Deal 3",
                routePath: "/cruise-single/2",
              },
              
            ],
          },
          
          {
            id: 3,
           
            menuList: [
              {
                name: "Family Deal 4",
                routePath: "/cruise-single/2",
              },
              {
                name: "Family Deal 5",
                routePath: "/cruise-single/2",
              }
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    menuCol: [
      {
        id: 1,
        // megaBanner: "/img/backgrounds/8.png",
        // title: "Things to do on your tour",
        btnText: "See All Inclusive Deals",
        btnRoute: "/tour-list-v1",
        menuItems: [
          {
            id: 1,
            // title: "Tour List",
            menuList: [
              {
                name: "All Inclusive Deal 1",
                routePath: "/cruise-single/2",
              },
              {
                name: "All Inclusive Deal 2",
                routePath: "/cruise-single/2",
              },
              {
                name: "All Inclusive Deal 3",
                routePath: "/cruise-single/2",
              },
              
            ],
          },
          {
            id: 2,
            // title: "Tour Pages",
            menuList: [
              {
                name: "All Inclusive Deal 4",
                routePath: "/cruise-single/2",
              },
              {
                name: "All Inclusive Deal 5",
                routePath: "/cruise-single/2",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    menuCol: [
      {
        id: 1,
        // megaBanner: "/img/backgrounds/9.png",
        // title: "Things to do on your activity",
        btnText: "See Luxury Deals",
        btnRoute: "/activity-list-v1",
        menuItems: [
          {
            id: 1,
            // title: "Activity List",
            menuList: [
              {
                name: "Luxury Deal 1",
                routePath: "/cruise-single/2",
              },
              {
                name: "Luxury Deal 2",
                routePath: "/cruise-single/2",
              },
              {
                name: "Luxury Deal 3",
                routePath: "/cruise-single/2",
              },
              
            ],
          },
          {
            id: 2,
            menuList: [
              {
                name: "Luxury Deal 4",
                routePath: "/cruise-single/2",
              },
              {
                name: "Luxury Deal 5",
                routePath: "/cruise-single/2",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    menuCol: [
      {
        id: 1,
        // megaBanner: "/img/backgrounds/10.png",
        // title: "Things to do on your rentals",
        btnText: "See Honeymoon Deals",
        btnRoute: "/rental-list-v1",
        menuItems: [
          {
            id: 1,
            // title: "Rental List",
            menuList: [
              {
                name: "Honeymoon Deal 1",
                routePath: "/cruise-single/2",
              },
              {
                name: "Honeymoon Deal 2",
                routePath: "/cruise-single/2",
              },
              {
                name: "Honeymoon Deal 3",
                routePath: "/cruise-single/2",
                
              }
            ],
          },
          {
            id: 2,
            // title: "Rental Pages",
            menuList: [
              {
                name: "Honeymoon Deal 4",
                routePath: "/cruise-single/2",
                
              },
              {
                name: "Honeymoon Deal 5",
                routePath: "/cruise-single/2",
                
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    menuCol: [
      {
        id: 1,
        // megaBanner: "/img/backgrounds/5.png",
        // title: "Things to do on your Next Car",
        btnText: "See Multi-City Deals",
        btnRoute: "/car-list-v1",
        menuItems: [
          {
            id: 1,
            // title: "Car List",
            menuList: [
              {
                name: "Multi-City Deal 1",
                routePath: "/cruise-single/2",
                
              },
              {
                name: "Multi-City Deal 2",
                routePath: "/cruise-single/2",
              },
              {
                name: "Multi-City Deal 3",
                routePath: "/cruise-single/2",
              },
            ],
          },
          {
            id: 2,
            // title: "Car Pages",
            menuList: [
              {
                name: "Multi-City 4",
                routePath: "/cruise-single/2",
              },
              {
                name: "Multi-City 5",
                routePath: "/cruise-single/2",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 6,
    menuCol: [
      {
        id: 1,
        // megaBanner: "/img/backgrounds/5.png",
        // title: "Things to do on your Next Car",
        btnText: "See Cruise Deals",
        btnRoute: "/car-list-v1",
        menuItems: [
          {
            id: 1,
            // title: "Car List",
            menuList: [
              {
                name: "Cruise Deal 1",
                routePath: "/cruise-single/2",
                
              },
              {
                name: "Cruise Deal 2",
                routePath: "/cruise-single/2",
              },
              {
                name: "Cruise Deal 3",
                routePath: "/cruise-single/2",
              },
            ],
          },
          {
            id: 2,
            // title: "Car Pages",
            menuList: [
              {
                name: "Cruise Deal 4",
                routePath: "/cruise-single/2",
              },
              {
                name: "Cruise Deal 5",
                routePath: "/cruise-single/2",
              },
            ],
          },
        ],
      },
    ],
  },
  
];

export const categorieMobileItems = [
  {
    id: 1,
    title: "Family",
    menuList: [
      {
        name: "Family Deal 1 ",
        routePath: "/cruise-list-v2",
      },
      {
        name: "Family Deal 2 ",
        routePath: "/cruise-list-v2",
      },
      {
        name: "Family Deal 3 ",
        routePath: "/cruise-list-v2",
      },
      {
        name: "Family Deal 4 ",
        routePath: "/cruise-list-v2",
      },
      {
        name: "Family Deal 5 ",
        routePath: "/cruise-list-v2",
      },
    ],
  },
  {
    id: 2,
    title: "Budget",
    menuList: [
      {
        name: "Budget Deal 1",
        routePath: "/cruise-list-v2",
      },
      {
        name: "Budget Deal 2",
        routePath: "/cruise-list-v2",
      },
      {
        name: "Budget Deal 3",
        routePath : "/cruise-list-v2",
      },
      {
        name: "Budget Deal 4",
        routePath: "/cruise-list-v2", 
      },
       {
        name: "Budget Deal 5",
        routePath: "/cruise-deal-v2",
       }
    ],
  },
  {
    id: 3,
    title: "Luxury",
    menuList: [
      {
        name: "Luxury Deal 1",
        routePath: "/cruise-list-v2",
      },
      {
        name: "Luxury Deal 2",
        routePath: "/cruise-list-v2",
      },
      {
        name: "Luxury Deal 3",
        routePath: "/cruise-list-v2",
      },
      {
        name: "Luxury Deal 4",
        routePath: "/cruise-deal-v2",
      },
      {
        name: "Luxury Deal 5",
        routePath: "/cruise-deal-v2",
      }
    ],
  },
  {
    id: 4,
    title: "Honeymoon",
    menuList: [
      {
        name: "Honeymoon Deal 1",
        routePath: "/cruise-list-v2",
      },
      {
        name: "Honeymoon Deal 2",
        routePath: "/cruise-list-v2",
      },
      {
        name: "Honeymoon Deal 3",
        routePath: "/cruise-list-v2",
      },
      {
        name: "Honeymoon Deal 4",
        routePath: "/cruise-list-v2",
      },
      {
        name: "Honeymoon Deal 5",
        routePath: "/cruise-list-v2",
      }
    ],
  },
  {
    id: 5,
    title: "Multi-City",
    menuList: [
      {
        name: "Multi-City Deal 1",
        routePath: "/cruise-list-v2",
      },
      {
        name: "Multi-City Deal 2",
        routePath: "/cruise-list-v2",
      },
      {
        name: "Multi-City  Deal 3",
        routePath: "/cruise-list-v2", 
      },
      {
        name: "Multi-City Deal 4",
        routePath: "/cruise-list-v2",
      },
      {
        name: "Multi-City Deal 5",
        routePath: "/cruise-list-v2",
      }
    ],
  },
  {
    id: 6,
    title: "Cruise",
    menuList: [
      {
        name: "Cruise Deal 1",
        routePath: "/cruise-list-v2",
      },
      {
        name: "Cruise Deal 2",
        routePath: "/cruise-list-v2",
      },
      {
        name: "Cruise Deal 3",
        routePath: "/cruise-list-v2",
      },
      {
        name: "Cruise Deal 4",
        routePath: "/cruise-list-v2",
      },
      {
        name: "Cruise Deal 5",
        routePath: "/cruise-list-v2",
      }
    ],
  },
];
