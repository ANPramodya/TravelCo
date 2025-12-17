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
  itinerary: PackageDay[];
  gallery: string[];
  inclusions: string[];
  exclusions: string[];
}

export const packagesData: Package[] = [
  {
    id: "kandy-nuwara-eliya",
    title: "Kandy & Nuwara Eliya",
    subtitle: "Heart of the Hill Country",
    days: "3 Days | 2 Nights",
    image: "/packages/kandy.jpg",
    bannerImage: "/packages/kandy-banner.jpg",
    caption: "Experience the misty mountains and colonial charm",
    description: "Journey through Sri Lanka's picturesque hill country, where tea plantations stretch as far as the eye can see and cool mountain air refreshes your soul. Discover colonial architecture, sacred temples, and breathtaking views.",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Kandy City Tour",
        description: "Arrive at Colombo airport, transfer to Kandy. Visit the Temple of the Sacred Tooth Relic, explore the Royal Botanical Gardens, and enjoy a traditional cultural dance show in the evening.",
        icon: "✈️"
      },
      {
        day: 2,
        title: "Nuwara Eliya Exploration",
        description: "Travel to Nuwara Eliya through scenic tea plantations. Visit a tea factory, explore Gregory Lake, and stroll through the colonial-style town known as 'Little England'.",
        icon: "🏔️"
      },
      {
        day: 3,
        title: "Waterfalls & Departure",
        description: "Visit Ramboda Falls, enjoy a scenic train ride through the mountains, then transfer back to Colombo for your departure flight.",
        icon: "🚂"
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
    id: "ella-yala-safari",
    title: "Ella & Yala Safari",
    subtitle: "Adventure & Wildlife",
    days: "5 Days | 4 Nights",
    image: "/packages/ella.jpg",
    bannerImage: "/packages/ella-banner.jpg",
    caption: "Wild encounters and mountain adventures await",
    description: "Combine the thrill of wildlife spotting with the serenity of mountain landscapes. From leopard sightings in Yala to hiking Ella's iconic peaks, this package offers the perfect balance of adventure and relaxation.",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Transfer to Ella",
        description: "Arrive at Colombo airport, take a scenic train ride to Ella. Check into your hotel and enjoy sunset views from your accommodation.",
        icon: "🚆"
      },
      {
        day: 2,
        title: "Ella Rock Hike",
        description: "Morning hike to Ella Rock for panoramic views. Visit the Nine Arch Bridge in the afternoon and enjoy a cooking class featuring local cuisine.",
        icon: "🥾"
      },
      {
        day: 3,
        title: "Little Adam's Peak & Transfer",
        description: "Sunrise hike to Little Adam's Peak, then travel to Tissamaharama. Evening at leisure by the lake.",
        icon: "🌄"
      },
      {
        day: 4,
        title: "Yala National Park Safari",
        description: "Early morning safari in Yala National Park for leopard and elephant spotting. Afternoon visit to Sithulpawwa Rock Temple.",
        icon: "🐆"
      },
      {
        day: 5,
        title: "Departure",
        description: "Morning at leisure, then transfer to the airport for your departure flight.",
        icon: "✈️"
      }
    ],
    gallery: [
      "/packages/gallery/ella1.jpg",
      "/packages/gallery/ella2.jpg",
      "/packages/gallery/ella3.jpg",
      "/packages/gallery/ella4.jpg"
    ],
    inclusions: [
      "Airport transfers",
      "4 nights accommodation",
      "All safari fees and permits",
      "Scenic train tickets",
      "Professional safari guide",
      "National park entrance fees"
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Alcoholic beverages",
      "Optional activities",
      "Camera fees in national parks"
    ]
  },
  // Add similar data for other packages...
];