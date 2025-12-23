import { rootTaskDispose } from "next/dist/build/swc/generated-native";
import { setAbortedLogsStyle } from "next/dist/server/node-environment-extensions/console-dim.external";

export interface PackageDay {
  day: number;
  title: string;
  description: string;
  icon: string;

  location?: {
    name: string;
    region?: string;
    country: 'Sri Lanka';
  }
}

export interface Package {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  caption: string;
  description: string;
  days: string;
  image: string;
  bannerImage: string;
  category: 'Culture' | 'Wildlife' | 'Adventure' | 'Beach' | 'Family';
  itinerary: PackageDay[];
  gallery: string[];
  inclusions: string[];
  exclusions: string[];
  mapImage: string;
  seo?: {
    title?: string;
    description?: string;
    canonical?: string;
  }
}

export const packagesData: Package[] = [
  {
    id: "beach_1",
    slug: "12-day-sri-lanka-wildlife-beach-tour",
    title: "Cross Country and Down South",
    subtitle: "WildLife and Beach",
    days: "12 Days | 11 Nights",
    image: "/packages/coconut-tree-hill.jpg",
    bannerImage: "/packages/arugambay_beach.jpg",
    caption: "Explore the Wild life and Beaches from East to West",
    description: "This 12-day beach tour explores Sri Lanka’s southern and western coastline, combining relaxation, coastal towns, marine life, and colonial heritage. Perfect for travelers seeking sun, sea, and slow-paced exploration.",
    category: 'Beach',
    mapImage: "/packages/maps/beach_1.png",
    itinerary: [
      {
        day: 1,
        title: "Arrival",
        description: "Arival at Colombo Airport and Rest at Negombo Hotel. A Visit to the fish market and boat ride to the mangroves if need more relaxation",
        icon: "✈️",
        location: {
          name: "Negombo",
          region:"West Coast",
          country:"Sri Lanka"
        }
      },
      {
        day: 2,
        title:"Habarana",
        description: "Visit to the Sigiriya Rock Fortress",
        icon:"🏔️",
        location: {
          name: "Sigiriya",
          region: "Cultural Triangle",
          country: "Sri Lanka",
        },
      },
            {
        day: 3,
        title:"Trincomalee",
        description: "Pigeon Island and Swami Rock",
        icon:"🏔️",
        location: {
          name: "Trincomalee",
          region: "East Coast",
          country: "Sri Lanka",
        },
      }
,      {
        day: 4,
        title:"Trincomalee",
        description: "Koneshwaram Temple",
        icon:"🏔️",
        location: {
          name: "Trincomalee",
          region: "East Coast",
          country: "Sri Lanka",
        },
      }
,      {
        day: 5,
        title:"Pasikudah",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon:"🏔️",
        location: {
          name: "Batticaloa",
          region: "East Coast",
          country: "Sri Lanka",
        },
      }
,      {
        day: 6,
        title:"Pasikudah",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon:"🏔️",
        location: {
          name: "Pasikudah",
          region: "East Coast",
          country: "Sri Lanka",
        },
      }
,      {
        day: 7,
        title:"Arugambay",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon:"🏔️",
        location: {
          name: "Pasikudah",
          region: "East Coast",
          country: "Sri Lanka",
        },
      }
,      {
        day: 8,
        title:"Arugambay",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon:"🏔️",
        location: {
          name: "Pasikudah",
          region: "East Coast",
          country: "Sri Lanka",
        },
      }
,      {
        day: 9,
        title:"Yala",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon:"🏔️",
        location: {
          name: "Yala National Park",
          region: "Southern Province",
          country: "Sri Lanka",
        },
      }
,      {
        day: 10,
        title:"Galle",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon:"🏔️",
        location: {
          name: "Galle",
          region: "South Coast",
          country: "Sri Lanka",
        },
      }
,      {
        day: 11,
        title:"Colombo",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon:"🏔️",
        location: {
          name: "Colombo",
          region: "West Coast",
          country: "Sri Lanka",
        },
      }
,      {
        day: 12,
        title:"Departure",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        icon:"🏔️"
      }

    ],
    gallery: [
      "/packages/gallery/coconut-tree-hill.jpg",
      "/packages/gallery/galle-fort-night.jpg",
      "/packages/gallery/yala-safari.jpg",
      "/packages/gallery/galle-fort-bird.jpg"
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
    ],
    seo: {
      title: "12-Day Sri Lanka Wildlife & Beach Tour | Avora Odyssey",
      description:
        "Experience wildlife, beaches, and iconic destinations across Sri Lanka with Avora Odyssey.",
      canonical:
        "https://avoraodyssey.com/packages/12-day-sri-lanka-wildlife-beach-tour",
    },
  },
  {
    id: "cultural_1",
    slug: "9-day-sri-lanka-cultural-heritage-hill-country-tour",
    title: "Old Kindoms to Cold Hilly Towns",
    subtitle: "From Ancient Capitals to Scenic Hill Country",
    days: "9 Days | 8 Nights",
    image: "/packages/kandy.jpg",
    bannerImage: "/packages/kandy-banner.jpg",
    caption: "Discover over 2,000 years of Sri Lanka’s cultural heritage, ancient cities, and misty hill towns with Avora Odyssey.",
    description: "This 9-day cultural journey through Sri Lanka takes you from ancient royal capitals and sacred temples to the cool, scenic hill country. Explore UNESCO World Heritage Sites such as Sigiriya and Anuradhapura, experience traditional village life, visit the sacred Temple of the Tooth Relic in Kandy, and unwind in the charming hill town of Nuwara Eliya. Designed for travelers seeking history, culture, and authentic local experiences.",
    category: 'Culture',
    mapImage: "/packages/maps/cultural_1.png",
    itinerary: [
      {
      day: 1,
      title: "Arrival in Sri Lanka",
      description:
        "Arrival at Bandaranaike International Airport, followed by a comfortable transfer to your hotel. Relax after your journey and prepare for your cultural adventure across Sri Lanka.",
      icon: "✈️",
      location: {
        name: "Negombo",
        region: "West Coast",
        country: "Sri Lanka",
      },
      },
      {
      day: 2,
      title: "Dambulla & Sigiriya",
      description:
        "Visit the Dambulla Cave Temple, home to ancient Buddhist murals and statues, followed by the iconic Sigiriya Rock Fortress — one of Sri Lanka’s most celebrated UNESCO World Heritage Sites.",
      icon: "🏔️",
      location: {
        name: "Sigiriya",
        region: "Cultural Triangle",
        country: "Sri Lanka",
      },
      },
      {
      day: 3,
      title: "Hiriwadunna Village Trek",
      description:
        "Experience authentic Sri Lankan village life with a guided trek through Hiriwadunna. Enjoy a traditional village lunch, bullock cart rides, and interactions with local communities.",
      icon: "🌾",
      location: {
        name: "Hiriwadunna",
        region: "Cultural Triangle",
        country: "Sri Lanka",
      },
      },
      {
      day: 4,
      title: "Anuradhapura & Ritigala",
      description:
        "Explore the ancient city of Anuradhapura, Sri Lanka’s first kingdom, featuring sacred stupas and historical ruins. Continue to the Ritigala Forest Monastery, surrounded by nature and mystery.",
      icon: "🏛️",
       location: {
        name: "Anuradhapura",
        region: "North Central Province",
        country: "Sri Lanka",
      },
      },
      {
      day: 5,
      title: "Kandy & Temple of the Tooth Relic",
      description:
        "Travel to Kandy, the cultural capital of Sri Lanka. Visit the sacred Temple of the Tooth Relic, one of the most important pilgrimage sites for Buddhists worldwide.",
      icon: "🛕",
      location: {
        name: "Kandy",
        region: "Central Province",
        country: "Sri Lanka",
      },
      },
      {
      day: 6,
      title: "Kandy Cultural Exploration",
      description:
        "Discover Kandy’s cultural highlights, including traditional temples, scenic viewpoints, and a cultural dance performance showcasing Sri Lanka’s heritage.",
      icon: "🎭",
      location: {
        name: "Kandy",
        region: "Central Province",
        country: "Sri Lanka",
      },
      },
      {
      day: 7,
      title: "Nuwara Eliya Hill Country",
      description:
        "Journey into Sri Lanka’s central highlands to Nuwara Eliya. Visit tea plantations, enjoy cool mountain air, and experience the colonial charm of this picturesque hill town.",
      icon: "🌄",
      location: {
        name: "Nuwara Eliya",
        region: "Central Highlands",
        country: "Sri Lanka",
      },
      },
      {
      day: 8,
      title: "Colombo City Tour",
      description:
        "Return to Colombo for a guided city tour, exploring colonial landmarks, temples, markets, and modern shopping districts.",
      icon: "🏙️",
      location: {
        name: "Colombo",
        region: "Western Province",
        country: "Sri Lanka",
      },
      },
      {
      day: 9,
      title: "Departure",
      description:
        "Transfer to the airport for your departure, taking with you unforgettable memories of Sri Lanka’s rich cultural heritage.",
      icon: "✈️",
      location: {
        name: "Colombo",
        region: "Western Province",
        country: "Sri Lanka",
      },
      },
    ],
    gallery: [
      "/packages/gallery/kandy1.jpg",
      "/packages/gallery/kandy2.jpg",
      "/packages/gallery/kandy3.jpg",
      "/packages/gallery/sigiriya.jpg"
    ],
    inclusions: [
      "Airport transfers in a private air-conditioned vehicle",
      "Accommodation with breakfast throughout the tour",
      "Entrance fees to all mentioned cultural sites",
      "English-speaking professional tour guide",
      "All transportation as per the itinerary",
      "Hotel taxes and service charges",
    ],
    exclusions: [
      "International airfare",
      "Travel insurance",
      "Personal expenses",
      "Lunches and dinners unless specified",
      "Visa fees",
      "Tips for guides and drivers",
    ],
    seo: {
    title: "9-Day Sri Lanka Cultural Heritage & Hill Country Tour | Avora Odyssey",
    description:
      "Explore ancient kingdoms, UNESCO sites, sacred temples, and scenic hill towns on this 9-day Sri Lanka cultural tour with Avora Odyssey.",
    canonical:
      "https://avoraodyssey.com/packages/9-day-sri-lanka-cultural-heritage-hill-country-tour",
  },
  },
{
    id: "wildlife_1",
    slug:"17-day-sri-lanka-wildlife-nature-hill-country-tour",
    title: "Ultimate Sri Lanka Wildlife & Beach Expedition",
    subtitle: "From National Parks to Pristine Coastlines",
    days: "17 Days | 16 Nights",
    image: "/packages/leopard-wildlife.jpg",
    bannerImage: "/packages/yala-leopard.jpg",
    caption: "A complete journey through Sri Lanka’s wildlife sanctuaries, rainforests, and beaches",
    description: "This immersive 17-day Sri Lanka wildlife tour takes you across the island’s most famous national parks, rich rainforests, and tranquil beaches. Witness leopards, elephants, rare birds, and marine life while enjoying scenic landscapes and relaxing coastal stays. Ideal for nature lovers seeking the most comprehensive wildlife experience in Sri Lanka.",
    category: 'Wildlife',
    mapImage: "/packages/maps/wildlife_1.png",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Sri Lanka",
        description: "Arrival and transfer to your hotel for rest and relaxation.",
        icon: "✈️",
      },
      {
        day: 2,
        title: "Wilpattu National Park Safari",
        description: "Explore Sri Lanka’s largest national park, famous for leopards and natural lakes.",
        icon: "🐆",
      },
      {
        day: 3,
        title: "Deep Wilpattu Exploration",
        description: "A second safari covering lesser-visited zones of Wilpattu.",
        icon: "🦌",
      },
      {
        day: 4,
        title: "Habarana & Ancient Anuradhapura",
        description: "Cultural exploration of Sri Lanka’s first ancient capital.",
        icon: "🏛️",
      },
      {
        day: 5,
        title: "Minneriya Elephant Gathering",
        description: "Safari at Minneriya, renowned for large elephant herds.",
        icon: "🐘",
      },
      {
        day: 6,
        title: "Scenic Drive to Nuwara Eliya",
        description: "Travel through misty hills and tea plantations.",
        icon: "🌄",
      },
      {
        day: 7,
        title: "Horton Plains Nature Walk",
        description: "Early morning hike to World’s End and Baker’s Falls.",
        icon: "🥾",
      },
      {
        day: 8,
        title: "Journey to Ella",
        description: "Transfer to Ella, surrounded by lush valleys and waterfalls.",
        icon: "🚞",
      },
      {
        day: 9,
        title: "Relax in Arugambay",
        description: "Unwind at Sri Lanka’s most famous surf beach.",
        icon: "🏖️",
      },
      {
        day: 10,
        title: "Kumana National Park Birdlife",
        description: "Birdwatching safari through wetlands and lagoons.",
        icon: "🦜",
      },
      {
        day: 11,
        title: "Udawalawe Elephant Safari",
        description: "Close encounters with wild elephants in open grasslands.",
        icon: "🐘",
      },
      {
        day: 12,
        title: "Yala Leopard Safari",
        description: "Evening safari in one of the world’s best leopard habitats.",
        icon: "🐆",
      },
      {
        day: 13,
        title: "Transfer to Sinharaja Rainforest",
        description: "Arrival at Sri Lanka’s last primary rainforest.",
        icon: "🌿",
      },
      {
        day: 14,
        title: "Sinharaja Rainforest Trek",
        description: "Guided nature walk to discover endemic species.",
        icon: "🌧️",
      },
      {
        day: 15,
        title: "Bentota & Madu River Safari",
        description: "Boat safari through mangroves and village waterways.",
        icon: "🚤",
      },
      {
        day: 16,
        title: "Bentota Beach Leisure",
        description: "Relax on golden beaches or enjoy water activities.",
        icon: "🌴",
      },
      {
        day: 17,
        title: "Departure",
        description: "Transfer to the airport for departure.",
        icon: "✈️",
      },
    ],
    gallery: [
       "/packages/gallery/peacock.jpg",
      "/packages/gallery/ella-train.jpg",
      "/packages/gallery/leopard.jpg",
      "/packages/gallery/pinnawala.jpg"
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
    ],
    seo: {
    title: "17-Day Sri Lanka Wildlife Nature & Hill Country Tour | Avora Odyssey",
    description:
      "Explore National Parks, UNESCO sites, Nature, and scenic hill towns on this 17-day Sri Lanka wildlife tour with Avora Odyssey.",
    canonical:
      "https://avoraodyssey.com/packages/17-day-sri-lanka-wildlife-nature-hill-country-tour",
  },
  },
  {
    id: "adventure_1",
    slug:"15-day-sri-lanka-adventure-hill-country-tour",
    title: "Ultimate Sri Lanka Adventure Circuit",
    subtitle: "Hikes, Rivers, Safaris & Ocean Adventures",
    days: "15 Days | 14 Nights",
    image: "/packages/ella-train3.jpg",
    bannerImage: "/packages/mirissa-surfing.jpg",
    caption: "A thrilling island-wide adventure for adrenaline seekers",
    description: "This 15-day Sri Lanka adventure tour combines hiking, rafting, safaris, scenic train rides, diving, and beach time. Designed for active travelers, this journey showcases the island’s most exciting landscapes and outdoor experiences.",
    category: 'Adventure',
    mapImage: "/packages/maps/adventure_1.png",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Rest",
        description: "Arrival and hotel transfer.",
        icon: "✈️",
      },
      {
        day: 2,
        title: "Kandy Sacred Temple & Dance Show",
        description: "Visit the Temple of the Tooth Relic and enjoy cultural performances.",
        icon: "🛕",
      },
      {
        day: 3,
        title: "Hanthana Mountain Hike",
        description: "Guided hike with panoramic views.",
        icon: "🥾",
      },
      {
        day: 4,
        title: "Kithulgala White Water Rafting",
        description: "Exciting rafting and jungle activities.",
        icon: "🚣",
      },
      {
        day: 5,
        title: "Hatton & Laxapana Waterfalls",
        description: "Explore waterfalls and tea country scenery.",
        icon: "💦",
      },
      {
        day: 6,
        title: "Explore Nuwara Eliya",
        description: "Discover Sri Lanka’s hill-country town.",
        icon: "🌄",
      },
      {
        day: 7,
        title: "Scenic Ella Train & Ravana Falls",
        description: "One of the world’s most scenic train rides.",
        icon: "🚞",
      },
      {
        day: 8,
        title: "Mini Adam’s Peak & Flying Ravana",
        description: "Hike and zipline adventure.",
        icon: "🪂",
      },
      {
        day: 9,
        title: "Yala Evening Safari",
        description: "Wildlife safari in Yala National Park.",
        icon: "🐆",
      },
      {
        day: 10,
        title: "Mirissa Beach Relaxation",
        description: "Relax on the southern coast.",
        icon: "🏖️",
      },
      {
        day: 11,
        title: "Mirissa Dolphin & Whale Watching",
        description: "Morning ocean excursion.",
        icon: "🐬",
      },
      {
        day: 12,
        title: "Galle Fort & Hikkaduwa Beach",
        description: "Historic fort and beach leisure.",
        icon: "🏰",
      },
      {
        day: 13,
        title: "Hikkaduwa Diving Experience",
        description: "Scuba diving or snorkeling.",
        icon: "🤿",
      },
      {
        day: 14,
        title: "Colombo City Exploration",
        description: "Shopping and sightseeing.",
        icon: "🏙️",
      },
      {
        day: 15,
        title: "Departure",
        description: "Transfer to airport.",
        icon: "✈️",
      },
    ],
    gallery: [
      "/packages/gallery/waterfall.jpg",
      "/packages/gallery/surfing.jpg",
      "/packages/gallery/ella-train2.jpg",
      "/packages/gallery/surfing2.jpg"
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
    ],
    seo: {
    title: "15-Day Sri Lanka Adventure Nature & Hill Country Beach Tour | Avora Odyssey",
    description:
      "Explore Beach, UNESCO sites, Nature, and scenic hill towns on this 15-day Sri Lanka wildlife tour with Avora Odyssey.",
    canonical:
      "https://avoraodyssey.com/packages/15-day-sri-lanka-beach-nature-hill-country-tour",
  },
  },
  {
    id: "family_1",
    slug:"15-day-sri-lanka-family-nature-hill-country-tour",
    title: "Grand Sri Lanka Family Discovery Tour",
    subtitle: "A Relaxed Two-Week Journey for All Ages",
    days: "19 Days | 18 Nights",
    image: "/packages/pinnawala.jpg",
    bannerImage: "/packages/family-hotel.jpg",
    caption: "Create unforgettable family memories across Sri Lanka",
    description: "A carefully paced family tour covering wildlife, culture, hill country, and beaches. Designed for comfort, safety, and shared experiences across generations.",
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
      "/packages/gallery/ella-train4.jpg",
      "/packages/gallery/sigiriya2.jpg",
      "/packages/gallery/safari.jpg"
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
    ],
    seo: {
    title: "19-Day Sri Lanka Adventure Nature & Hill Country Beach Tour | Avora Odyssey",
    description:
      "Explore Beach, UNESCO sites, Nature, and scenic hill towns on this 19-day Sri Lanka wildlife tour with Avora Odyssey.",
    canonical:
      "https://avoraodyssey.com/packages/19-day-sri-lanka-beach-nature-hill-country-tour",
  },
  },
{
    id: "beach_2",
     slug:"15-day-sri-lanka-family-nature-hill-country-tour",
    title: "Explore Down South",
    subtitle: "From South to West",
    days: "10 Days | 9 Nights",
    image: "/packages/galle-birds-eye.jpg",
    bannerImage: "/packages/tangalle.jpg",
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
      "/packages/gallery/corals.jpg",
      "/packages/gallery/coconut-tree.jpg",
      "/packages/gallery/mirissa2.jpg",
      "/packages/gallery/galle2.jpg"
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
     slug:"15-day-sri-lanka-family-nature-hill-country-tour",
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
     slug:"15-day-sri-lanka-family-nature-hill-country-tour",
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
     slug:"15-day-sri-lanka-family-nature-hill-country-tour",
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
     slug:"15-day-sri-lanka-family-nature-hill-country-tour",
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
     slug:"15-day-sri-lanka-family-nature-hill-country-tour",
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
     slug:"15-day-sri-lanka-family-nature-hill-country-tour",
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
     slug:"15-day-sri-lanka-family-nature-hill-country-tour",
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
     slug:"15-day-sri-lanka-family-nature-hill-country-tour",
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
     slug:"15-day-sri-lanka-family-nature-hill-country-tour",
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
  

];
