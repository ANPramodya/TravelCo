import { rootTaskDispose } from "next/dist/build/swc/generated-native";
import { setAbortedLogsStyle } from "next/dist/server/node-environment-extensions/console-dim.external";

export interface PackageDay {
  day: number;
  title: string;
  description: string;
  icon: string;
}

export interface Package {
  id: string;
  title: string;
  subtitle: string;
  days: string;
  image: string;
  bannerImage: string;
  caption: string;
  description: string;
  category: 'Culture' | 'Wildlife' | 'Adventure' | 'Beach' | 'Family';
  itinerary: PackageDay[];
  gallery: string[];
  inclusions: string[];
  exclusions: string[];
  mapImage: string;
}

export const packagesData: Package[] = [
  {
    id: "beach_1",
    title: "Cross Country and Down South",
    subtitle: "WildLife and Beach",
    days: "12 Days | 11 Nights",
    image: "/packages/kandy.jpg",
    bannerImage: "/packages/kandy-banner.jpg",
    caption: "Explore the Wild life and Beaches from East to West",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    category: 'Beach',
    mapImage: "/packages/maps/beach_1.png",
    itinerary: [
      {
        day: 1,
        title: "Arrival",
        description: "Arival at Colombo Airport and Rest at Negombo Hotel. A Visit to the fish market and boat ride to the mangroves if need more relaxation",
        icon: "✈️",
      },
      {
        day: 2,
        title:"Habarana",
        description: "Visit to the Sigiriya Rock Fortress",
        icon:"🏔️"
      },
            {
        day: 3,
        title:"Trincomalee",
        description: "Pigeon Island and Swami Rock",
        icon:"🏔️"
      }
,      {
        day: 4,
        title:"Trincomalee",
        description: "Koneshwaram Temple",
        icon:"🏔️"
      }
,      {
        day: 5,
        title:"Pasikudah",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon:"🏔️"
      }
,      {
        day: 6,
        title:"Pasikudah",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon:"🏔️"
      }
,      {
        day: 7,
        title:"Arugambay",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon:"🏔️"
      }
,      {
        day: 8,
        title:"Arugambay",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon:"🏔️"
      }
,      {
        day: 9,
        title:"Yala",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon:"🏔️"
      }
,      {
        day: 10,
        title:"Galle",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon:"🏔️"
      }
,      {
        day: 11,
        title:"Colombo",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon:"🏔️"
      }
,      {
        day: 12,
        title:"Departure",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon:"🏔️"
      }

    ],
    gallery: [
      "/packages/gallery/kandy1.jpg",
      "/packages/gallery/kandy2.jpg",
      "/packages/gallery/kandy3.jpg",
      "/packages/gallery/kandy4.jpg"
    ],
    inclusions: [
      "Airport transfers in private vehicle",
      "2 nights accommodation with breakfast",
      "Entrance fees to all mentioned sites",
      "English-speaking guide throughout",
      "All transportation as per itinerary",
      "Hotel taxes and service charges"
    ],
    exclusions: [
      "International airfare",
      "Travel insurance",
      "Personal expenses",
      "Lunches and dinners",
      "Visa fees if applicable",
      "Tips for guides and drivers"
    ]
  },
  {
    id: "cultural_1",
    title: "Old Kindoms to Cold Hilly Towns",
    subtitle: "From Old Kingdoms to Chilling Hill Side",
    days: "9 Days | 8 Nights",
    image: "/packages/kandy.jpg",
    bannerImage: "/packages/kandy-banner.jpg",
    caption: "Experiance the Culture of 2000 years of Sri Lanka",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    category: 'Culture',
    mapImage: "/packages/maps/cultural_1.png",
    itinerary: [
      {
        day: 1,
        title: "Arrival",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 2,
        title: "Dambulla & Sigiriya",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 3,
        title: "Hiriwadunna Trek",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 4,
        title: "Anuradhapura & Ritigala",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 5,
        title: "Kandy Temple of Tooth Relic",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 6,
        title: "Other Temples in Kandy",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 7,
        title: "NuwaraEliya",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 8,
        title: "Colombo",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 9,
        title: "Departure",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
    ],
    gallery: [
      "/packages/gallery/kandy1.jpg",
      "/packages/gallery/kandy2.jpg",
      "/packages/gallery/kandy3.jpg",
      "/packages/gallery/kandy4.jpg"
    ],
    inclusions: [
       "Airport transfers in private vehicle",
      "2 nights accommodation with breakfast",
      "Entrance fees to all mentioned sites",
      "English-speaking guide throughout",
      "All transportation as per itinerary",
      "Hotel taxes and service charges"
    ],
    exclusions: [
      "International airfare",
      "Travel insurance",
      "Personal expenses",
      "Lunches and dinners",
      "Visa fees if applicable",
      "Tips for guides and drivers"
    ]
  },
{
    id: "wildlife_1",
    title: "WildLife and Beach",
    subtitle: "Wild Life of All around the Country",
    days: "17 Days | 16 Nights",
    image: "/packages/kandy.jpg",
    bannerImage: "/packages/kandy-banner.jpg",
    caption: "Experience the vivid wild life of Sri Lanka",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    category: 'Wildlife',
    mapImage: "/packages/maps/wildlife_1.png",
    itinerary: [
      {
        day: 1,
        title: "Arrival",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 2,
        title: "Wilpattu",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 3,
        title: "Wilpattu",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 4,
        title: "Habarana & Anuradhapura",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 5,
        title: "Minneriya Park",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 6,
        title: "Nuwara Eliya",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 7,
        title: "Horton Plains",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 8,
        title: "Ella",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 9,
        title: "Arugambay",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 10,
        title: "Kumana Park",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 11,
        title: "Udawalawe",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 12,
        title: "Yala",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 13,
        title: "Sinharaja",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 14,
        title: "Sinharaja",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 15,
        title: "Bentota & Madu River",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 16,
        title: "Bentota Beach",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 17,
        title: "Departure",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
    ],
    gallery: [
       "/packages/gallery/kandy1.jpg",
      "/packages/gallery/kandy2.jpg",
      "/packages/gallery/kandy3.jpg",
      "/packages/gallery/kandy4.jpg"
    ],
    inclusions: [
      "Airport transfers in private vehicle",
      "2 nights accommodation with breakfast",
      "Entrance fees to all mentioned sites",
      "English-speaking guide throughout",
      "All transportation as per itinerary",
      "Hotel taxes and service charges"
    ],
    exclusions: [
      "International airfare",
      "Travel insurance",
      "Personal expenses",
      "Lunches and dinners",
      "Visa fees if applicable",
      "Tips for guides and drivers"
    ]
  },
  {
    id: "adventure_1",
    title: "Adventure of 2weeks in Sri Lanka",
    subtitle: "From all around the Sri Lanka",
    days: "15 Days | 14 Nights",
    image: "/packages/kandy.jpg",
    bannerImage: "/packages/kandy-banner.jpg",
    caption: "Experience a thrilling adventourous Tour in Sri Lanka",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    category: 'Adventure',
    mapImage: "/packages/maps/adventure_1.png",
    itinerary: [
      {
        day: 1,
        title: "Arrival",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 2,
        title: "Kandy Temple & Dance",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 3,
        title: "Hanthana",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 4,
        title: "Kithulgala Water sports",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 5,
        title: "Hatton, Laxapana Water falls",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 6,
        title: "Nuwara Eliya",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 7,
        title: "Ella Train, Rawana Falls",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 8,
        title: "Ella Mini Adams Peak, Flying Rawana",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 9,
        title: "Yala Evening Safari",
        description: "",
        icon: "✈️",
      },
      {
        day: 10,
        title: "Mirissa Relax",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 11,
        title: "Mirissa Dolphins",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 12,
        title: "Hikkaduwa & Galle",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 13,
        title: "Hikkaduwa Diving",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 14,
        title: "Colombo",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 15,
        title: "Departure",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
    ],
    gallery: [
      "/packages/gallery/kandy1.jpg",
      "/packages/gallery/kandy2.jpg",
      "/packages/gallery/kandy3.jpg",
      "/packages/gallery/kandy4.jpg"
    ],
    inclusions: [
      "Airport transfers in private vehicle",
      "2 nights accommodation with breakfast",
      "Entrance fees to all mentioned sites",
      "English-speaking guide throughout",
      "All transportation as per itinerary",
      "Hotel taxes and service charges"
    ],
    exclusions: [
       "International airfare",
      "Travel insurance",
      "Personal expenses",
      "Lunches and dinners",
      "Visa fees if applicable",
      "Tips for guides and drivers"
    ]
  },
  {
    id: "family_1",
    title: "Long Family Vacation",
    subtitle: "2 Weeks of Leisure with family",
    days: "19 Days | 18 Nights",
    image: "/packages/kandy.jpg",
    bannerImage: "/packages/kandy-banner.jpg",
    caption: "Experience the whole Sri Lanka with your family for 2 whole weeks",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    category: 'Family',
    mapImage: "/packages/maps/family_1.png",
    itinerary: [
      {
        day: 1,
        title: "Arrival",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️"
      },
      {
        day: 2,
        title: "Kalpitiya Kite Surfing",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️"
      },
      {
        day: 3,
        title: "Kalpitiya Dolphins",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️"
      },
      {
        day: 4,
        title: "Wilpattu",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️"
      },
      {
        day: 5,
        title: "Anuradhapura & Sigiriya",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️"
      },
      {
        day: 6,
        title: "Minneriya",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️"
      },
      {
        day: 7,
        title: "kandy Temple & Cultural Dance",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️"
      },
      {
        day: 8,
        title: "Kandy Ambuluwawa",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️"
      },
      {
        day: 9,
        title: "Nuwara Eliya Ramboda Falls",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️"
      },
      {
        day: 10,
        title: "Horton Plains",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️"
      },
      {
        day: 11,
        title: "Ella Train Ride & Rawan Falls",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️"
      },
      {
        day: 12,
        title: "Ella Mini Adam's Peak & Flying Rawana Zip Line",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️"
      },
      {
        day: 13,
        title: "Yala Eveing Safari",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️"
      },
      {
        day: 14,
        title: "Weligama Hummanaya",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️"
      },
      {
        day: 15,
        title: "Weligama Relax",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️"
      },
      {
        day: 16,
        title: "Bentota & Galle",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️"
      },
      {
        day: 17,
        title: "Bentota Madu river",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️"
      },
      {
        day: 18,
        title: "Colombo",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️"
      },
      {
        day: 19,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️"
      },
    ],
    gallery: [
      "/packages/gallery/kandy1.jpg",
      "/packages/gallery/kandy2.jpg",
      "/packages/gallery/kandy3.jpg",
      "/packages/gallery/kandy4.jpg"
    ],
    inclusions: [
      "Airport transfers in private vehicle",
      "2 nights accommodation with breakfast",
      "Entrance fees to all mentioned sites",
      "English-speaking guide throughout",
      "All transportation as per itinerary",
      "Hotel taxes and service charges"
    ],
    exclusions: [
      "International airfare",
      "Travel insurance",
      "Personal expenses",
      "Lunches and dinners",
      "Visa fees if applicable",
      "Tips for guides and drivers"
    ]
  },
{
    id: "beach_2",
    title: "Explore Down South",
    subtitle: "From South to West",
    days: "10 Days | 9 Nights",
    image: "/packages/kandy.jpg",
    bannerImage: "/packages/kandy-banner.jpg",
    caption: "Experiance the Southern Beaches of Sri Lanka",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    category: 'Beach',
    mapImage: "/packages/maps/beach_1.png",
    itinerary: [
      {
        day: 1,
        title: "Arrival",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 2,
        title: "Tangalle",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 3,
        title: "Tangalle",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 4,
        title: "Mirissa",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 5,
        title: "Mirissa",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 6,
        title: "Galle",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 7,
        title: "Hikkaduwa",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 8,
        title: "Hikkdauwa",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 9,
        title: "Bentota",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 10,
        title: "Departure",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️"
      }
    ],
    gallery: [
      "/packages/gallery/kandy1.jpg",
      "/packages/gallery/kandy2.jpg",
      "/packages/gallery/kandy3.jpg",
      "/packages/gallery/kandy4.jpg"
    ],
    inclusions: [
      "Airport transfers in private vehicle",
      "2 nights accommodation with breakfast",
      "Entrance fees to all mentioned sites",
      "English-speaking guide throughout",
      "All transportation as per itinerary",
      "Hotel taxes and service charges"
    ],
    exclusions: [
      "International airfare",
      "Travel insurance",
      "Personal expenses",
      "Lunches and dinners",
      "Visa fees if applicable",
      "Tips for guides and drivers"
    ]
  },
  {
    id: "beach_3",
    title: "All around the Island",
    subtitle: "Explore All Around Sri Lanka",
    days: "14 Days | 13 Nights",
    image: "/packages/kandy.jpg",
    bannerImage: "/packages/kandy-banner.jpg",
    caption: "Explore all the beaches in Sri Lanka",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    category: 'Beach',
    mapImage: "/packages/maps/beach_1.png",
    itinerary: [
      {
        day: 1,
        title: "Arrival",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 2,
        title: "Kalpitiya",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 3,
        title: "Kalpitiya",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 4,
        title: "Mannar",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 5,
        title: "Jaffna",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 6,
        title: "Jaffna",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 7,
        title: "Tincomalee",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 8,
        title: "Trincomalee",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 9,
        title: "Arugambay",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 10,
        title: "Arugambay",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 11,
        title: "Yala",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 12,
        title: "Galle",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 13,
        title: "Colombo",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 14,
        title: "Departure",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
    ],
    gallery: [
      "/packages/gallery/kandy1.jpg",
      "/packages/gallery/kandy2.jpg",
      "/packages/gallery/kandy3.jpg",
      "/packages/gallery/kandy4.jpg"
    ],
    inclusions: [
      "Airport transfers in private vehicle",
      "2 nights accommodation with breakfast",
      "Entrance fees to all mentioned sites",
      "English-speaking guide throughout",
      "All transportation as per itinerary",
      "Hotel taxes and service charges"
    ],
    exclusions: [
      "International airfare",
      "Travel insurance",
      "Personal expenses",
      "Lunches and dinners",
      "Visa fees if applicable",
      "Tips for guides and drivers"
    ]
  },{
    id: "cultural_2",
    title: "Full Cultural Experience",
    subtitle: "Experience everything in one Journey",
    days: "15 Days | 1 Nights",
    image: "/packages/kandy.jpg",
    bannerImage: "/packages/kandy-banner.jpg",
    caption: "Whole Sri Lanka in one Journey",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    category: 'Culture',
    mapImage: "/packages/maps/beach_1.png",
    itinerary: [
      {
        day: 1,
        title: "Arrival",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
            {
        day: 2,
        title: "Anuradhapura",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },

            {
        day: 3,
        title: "Jaffna",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 4,
        title: "Nagadeepa",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },

            {
        day: 5,
        title: "Jaffna, Keerimalai",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },

            {
        day: 6,
        title: "Dambulla, Polonnaruwa",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },

            {
        day: 7,
        title: "Dambulla Sigiriya",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },

            {
        day: 8,
        title: "Kandy Temple",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },

            {
        day: 9,
        title: "Kandy Other Temples",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },

            {
        day: 10,
        title: "Nuwara Eliya",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },

            {
        day: 11,
        title: "Ella",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 12,
        title: "Kataragama",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon:"✈️"
      },
      {
        day: 13,
        title: "Galle",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon:"✈️"
      },
      {
        day: 14,
        title: "Colombo",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon:"✈️"
      },
      {
        day: 15,
        title: "Departure",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️"
      }
    ],
    gallery: [
      "/packages/gallery/kandy1.jpg",
      "/packages/gallery/kandy2.jpg",
      "/packages/gallery/kandy3.jpg",
      "/packages/gallery/kandy4.jpg"
    ],
    inclusions: [
      "Airport transfers in private vehicle",
      "2 nights accommodation with breakfast",
      "Entrance fees to all mentioned sites",
      "English-speaking guide throughout",
      "All transportation as per itinerary",
      "Hotel taxes and service charges"
    ],
    exclusions: [
      "International airfare",
      "Travel insurance",
      "Personal expenses",
      "Lunches and dinners",
      "Visa fees if applicable",
      "Tips for guides and drivers"
    ]
  },
  {
    id: "cultural_3",
    title: "Most from a Short stay",
    subtitle: "Experience most of it from few days",
    days: "6 Days | 5 Nights",
    image: "/packages/kandy.jpg",
    bannerImage: "/packages/kandy-banner.jpg",
    caption: "Experience mmost of it in a short time",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    category: 'Culture',
    mapImage: "/packages/maps/beach_1.png",
    itinerary: [
      {
        day: 1,
        title: "Arrival",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 2,
        title: "Kandy",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 3,
        title: "Dambulla & Sigiriya",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 4,
        title: "Polonnaruwa",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 5,
        title: "Colombo",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 6,
        title: "Departure",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
    ],
    gallery: [
      "/packages/gallery/kandy1.jpg",
      "/packages/gallery/kandy2.jpg",
      "/packages/gallery/kandy3.jpg",
      "/packages/gallery/kandy4.jpg"
    ],
    inclusions: [
      "Airport transfers in private vehicle",
      "2 nights accommodation with breakfast",
      "Entrance fees to all mentioned sites",
      "English-speaking guide throughout",
      "All transportation as per itinerary",
      "Hotel taxes and service charges"
    ],
    exclusions: [
      "International airfare",
      "Travel insurance",
      "Personal expenses",
      "Lunches and dinners",
      "Visa fees if applicable",
      "Tips for guides and drivers"
    ]
  },
  {
    id: "hill_country_1",
    title: "Chilling Hills",
    subtitle: "A chilling experience in a Tropical Country",
    days: "7 Days | 6 Nights",
    image: "/packages/kandy.jpg",
    bannerImage: "/packages/kandy-banner.jpg",
    caption: "Experience the Chilling Hills of a Tropical Country",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    category: 'Adventure',
    mapImage: "/packages/maps/beach_1.png",
    itinerary: [
      {
        day: 1,
        title: "Arrival",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 2,
        title: "Kandy Cultural",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 3,
        title: "Kandy Temple",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 4,
        title: "Nuwara Eliya to Ella Train",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 5,
        title: "Nuwara Eliya",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 6,
        title: "Colombo",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 7,
        title: "Departure",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
    ],
    gallery: [
      "/packages/gallery/kandy1.jpg",
      "/packages/gallery/kandy2.jpg",
      "/packages/gallery/kandy3.jpg",
      "/packages/gallery/kandy4.jpg"
    ],
    inclusions: [
       "Airport transfers in private vehicle",
      "2 nights accommodation with breakfast",
      "Entrance fees to all mentioned sites",
      "English-speaking guide throughout",
      "All transportation as per itinerary",
      "Hotel taxes and service charges"
    ],
    exclusions: [
       "International airfare",
      "Travel insurance",
      "Personal expenses",
      "Lunches and dinners",
      "Visa fees if applicable",
      "Tips for guides and drivers"
    ]
  },
  {
    id: "wildlife_2",
    title: "Wild Life in 2 weeks",
    subtitle: "Wild Parks and Nature in two weeks",
    days: "14 Days | 13 Nights",
    image: "/packages/kandy.jpg",
    bannerImage: "/packages/kandy-banner.jpg",
    caption: "National Parks, Ancient Cities and Nature",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    category: 'Wildlife',
    mapImage: "/packages/maps/beach_1.png",
    itinerary: [
      {
        day: 1,
        title: "Arrival",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 2,
        title: "Wilpattue Leisure",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 3,
        title: "Wilpattu Safari",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 4,
        title: "Habarana & Anuradhapura",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 5,
        title: "Habarana Sigiriya & Minneriya",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 6,
        title: "Kandy & Dambulla",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 7,
        title: "NuwaraEliya, Tea",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 8,
        title: "Horton Plains",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 9,
        title: "Ella Train Ride",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 10,
        title: "Mini Adam's Peak",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 11,
        title: "Yala Evening Safari",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 12,
        title: "Galle",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 13,
        title: "Bentota",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 14,
        title: "Departure",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      }

    ],
    gallery: [
      "/packages/gallery/kandy1.jpg",
      "/packages/gallery/kandy2.jpg",
      "/packages/gallery/kandy3.jpg",
      "/packages/gallery/kandy4.jpg"
    ],
    inclusions: [
      "Airport transfers in private vehicle",
      "2 nights accommodation with breakfast",
      "Entrance fees to all mentioned sites",
      "English-speaking guide throughout",
      "All transportation as per itinerary",
      "Hotel taxes and service charges"
    ],
    exclusions: [
      "International airfare",
      "Travel insurance",
      "Personal expenses",
      "Lunches and dinners",
      "Visa fees if applicable",
      "Tips for guides and drivers"
    ]
  },
  {
    id: "wildlife_3",
    title: "Wild Life in a Glimpse",
    subtitle: "National Parks Covered",
    days: "8 Days | 7 Nights",
    image: "/packages/kandy.jpg",
    bannerImage: "/packages/kandy-banner.jpg",
    caption: "Expereince Sri Lanka's Wildlife in the shortest possible time",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    category: 'Wildlife',
    mapImage: "/packages/maps/beach_1.png",
    itinerary: [
      {
        day: 1,
        title: "Arrival",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 2,
        title: "Habarana & Minneriya",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 3,
        title: "Sigiriya",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 4,
        title: "Habarana & Wasgamuwa",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 5,
        title: "Nuwara Eliya, Tea",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 6,
        title: "Horton Plains",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 7,
        title: "Colombo",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
      {
        day: 8,
        title: "Departure",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
    ],
    gallery: [
      "/packages/gallery/kandy1.jpg",
      "/packages/gallery/kandy2.jpg",
      "/packages/gallery/kandy3.jpg",
      "/packages/gallery/kandy4.jpg"
    ],
    inclusions: [
      "Airport transfers in private vehicle",
      "2 nights accommodation with breakfast",
      "Entrance fees to all mentioned sites",
      "English-speaking guide throughout",
      "All transportation as per itinerary",
      "Hotel taxes and service charges"
    ],
    exclusions: [
      "International airfare",
      "Travel insurance",
      "Personal expenses",
      "Lunches and dinners",
      "Visa fees if applicable",
      "Tips for guides and drivers"
    ]
  },
  {
    id: "adventure_2",
    title: "Adventure in week",
    subtitle: "Adventurous week in Sri Lanka",
    days: "6 Days | 6 Nights",
    image: "/packages/kandy.jpg",
    bannerImage: "/packages/kandy-banner.jpg",
    caption: "Experience a week of Adventure in Sri Lanka",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    category: 'Adventure',
    mapImage: "/packages/maps/beach_1.png",
    itinerary: [
      {
        day: 1,
        title: "Arrival",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },
            {
        day: 2,
        title: "Yala",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },

            {
        day: 3,
        title: "Mirissa & Hummanaya",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },

            {
        day: 4,
        title: "Bentota, Galle",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },

            {
        day: 5,
        title: "Colombo",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },

            {
        day: 6,
        title: "Departure",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️",
      },

    ],
    gallery: [
      "/packages/gallery/kandy1.jpg",
      "/packages/gallery/kandy2.jpg",
      "/packages/gallery/kandy3.jpg",
      "/packages/gallery/kandy4.jpg"
    ],
    inclusions: [
      "Airport transfers in private vehicle",
      "2 nights accommodation with breakfast",
      "Entrance fees to all mentioned sites",
      "English-speaking guide throughout",
      "All transportation as per itinerary",
      "Hotel taxes and service charges"
    ],
    exclusions: [
      "International airfare",
      "Travel insurance",
      "Personal expenses",
      "Lunches and dinners",
      "Visa fees if applicable",
      "Tips for guides and drivers"
    ]
  },
  {
    id: "adventure_3",
    title: "",
    subtitle: "",
    days: "11 Days | 10 Nights",
    image: "/packages/kandy.jpg",
    bannerImage: "/packages/kandy-banner.jpg",
    caption: "",
    description: "",
    category: 'Adventure',
    mapImage: "/packages/maps/beach_1.png",
    itinerary: [
      {
        day: 1,
        title: "Arrival",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️"
      },
      {
        day: 2,
        title: "kalpitiya Kite Surfing",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️"
      },
      {
        day: 3,
        title: "Kalpitiya",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️"
      },
      {
        day: 4,
        title: "Wilpattu",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️"
      },
      {
        day: 5,
        title: "Habarana",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️"
      },
      {
        day: 6,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        description: "Sigiriya & Pidurangala",
        icon: "✈️"
      },
      {
        day: 7,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        description: "Kandy",
        icon: "✈️"
      },
      {
        day: 8,
        title: "Hatton Leisure",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️"
      },
            {
        day: 9,
        title: "Hatton, Laxapana Falls",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️"
      },
      {
        day: 10,
        title: "Colombo",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️"
      },
      {
        day: 11,
        title: "Departure",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️"
      },
    ],
    gallery: [
      "/packages/gallery/kandy1.jpg",
      "/packages/gallery/kandy2.jpg",
      "/packages/gallery/kandy3.jpg",
      "/packages/gallery/kandy4.jpg"
    ],
    inclusions: [
      "Airport transfers in private vehicle",
      "2 nights accommodation with breakfast",
      "Entrance fees to all mentioned sites",
      "English-speaking guide throughout",
      "All transportation as per itinerary",
      "Hotel taxes and service charges"
    ],
    exclusions: [
      "International airfare",
      "Travel insurance",
      "Personal expenses",
      "Lunches and dinners",
      "Visa fees if applicable",
      "Tips for guides and drivers"
    ]
  },
  {
    id: "family_2",
    title: "",
    subtitle: "",
    days: "15 Days | 14 Nights",
    image: "/packages/kandy.jpg",
    bannerImage: "/packages/kandy-banner.jpg",
    caption: "",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    category: 'Family',
    mapImage: "/packages/maps/beach_1.png",
    itinerary: [
      {
        day: 1,
        title: "Arrival",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️"
      },
      {
        day: 2,
        title: "Minneriya",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️"
      },
      {
        day: 3,
        title: "Sigiriya",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️"
      },
      {
        day: 4,
        title: "Kandy Temple, Dambulla & Spice Gardens",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️"
      },
      {
        day: 5,
        title: "Nuwara Eliya & Ramboda Falls",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️"
      },
      {
        day: 6,
        title: "Horton Plains",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️"
      },
      {
        day: 7,
        title: "Ella Train Ride & Rawana Falls",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️"
      },
      {
        day: 8,
        title: "Mini Adam's Peak & Rawaa Falls",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️"
      },
      {
        day: 9,
        title: "Yala Evening Safari",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️"
      },
      {
        day: 10,
        title: "Weligama, Hummanaya ",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️"
      },
      {
        day: 11,
        title: "Weligama Relax",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️"
      },
      {
        day: 12,
        title: "Bentota, Galle",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️"
      },
      {
        day: 13,
        title: "Bentota",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️"
      },
      {
        day: 14,
        title: "Colombo",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️"
      },
      {
        day: 15,
        title: "Departure",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon: "✈️"
      },
    ],
    gallery: [
      "/packages/gallery/kandy1.jpg",
      "/packages/gallery/kandy2.jpg",
      "/packages/gallery/kandy3.jpg",
      "/packages/gallery/kandy4.jpg"
    ],
    inclusions: [
      "Airport transfers in private vehicle",
      "2 nights accommodation with breakfast",
      "Entrance fees to all mentioned sites",
      "English-speaking guide throughout",
      "All transportation as per itinerary",
      "Hotel taxes and service charges"
    ],
    exclusions: [
      "International airfare",
      "Travel insurance",
      "Personal expenses",
      "Lunches and dinners",
      "Visa fees if applicable",
      "Tips for guides and drivers"
    ]
  },
  
  // Add similar data for other packages...
];
