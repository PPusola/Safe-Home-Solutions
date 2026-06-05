export interface ServiceArea {
  slug: string;
  name: string;
  description: string;
  isPrimary?: boolean;
  cardImage?: string;
  cardTone?: string;
  imagePosition?: string;
  photoCredit?: string;
  photoLicense?: string;
  photoSourceHref?: string;
}

export const SERVICE_AREAS: ServiceArea[] = [
  {
    slug: "edmonton",
    name: "Edmonton",
    description:
      "Our home base. We serve neighbourhoods across Edmonton with local dispatch, fast arrival times, and restoration support around the clock.",
    isPrimary: true,
    cardImage:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Edmonton%20Skyline.jpg",
    cardTone: "from-[#20313b]/30 via-[#20313b]/10 to-[#20313b]/60",
    imagePosition: "object-center",
    photoCredit: "Darren Kirby",
    photoLicense: "CC BY-SA 2.0",
    photoSourceHref: "https://commons.wikimedia.org/wiki/File:Edmonton_Skyline.jpg",
  },
  {
    slug: "sherwood-park",
    name: "Sherwood Park",
    description: "Emergency water damage restoration, drying, and mold remediation for homes and businesses in Sherwood Park.",
    cardImage:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Beautiful%20Sherwood%20Park.jpg",
    cardTone: "from-[#30463f]/20 via-transparent to-[#30463f]/75",
    imagePosition: "object-center",
    photoCredit: "Super Russell 457",
    photoLicense: "CC0 1.0",
    photoSourceHref: "https://commons.wikimedia.org/wiki/File:Beautiful_Sherwood_Park.jpg",
  },
  {
    slug: "st-albert",
    name: "St. Albert",
    description: "Local response for water extraction, structural drying, and restoration work throughout St. Albert.",
    cardImage:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Downtown%20St%20Albert%20Alberta%20Canada%2002.jpg",
    cardTone: "from-[#243f56]/20 via-transparent to-[#243f56]/75",
    imagePosition: "object-center",
    photoCredit: "WinterforceMedia",
    photoLicense: "CC0 1.0",
    photoSourceHref: "https://commons.wikimedia.org/wiki/File:Downtown_St_Albert_Alberta_Canada_02.jpg",
  },
  {
    slug: "spruce-grove",
    name: "Spruce Grove",
    description: "Rapid service for flooded basements, plumbing failures, and moisture-related damage in Spruce Grove.",
    cardImage:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Overlooking%20riv%20-%20panoramio.jpg",
    cardTone: "from-[#43352b]/20 via-transparent to-[#43352b]/78",
    imagePosition: "object-center",
    photoCredit: "Wikimedia Commons",
    photoLicense: "Freely licensed",
    photoSourceHref: "https://commons.wikimedia.org/wiki/File:Overlooking_riv_-_panoramio.jpg",
  },
  {
    slug: "stony-plain",
    name: "Stony Plain",
    description: "Certified restoration support for residential and light commercial properties in Stony Plain.",
    cardImage:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Canada%20Day%20Baseball%20game%20in%20Stony%20Plain%2C%20Alberta%20%2826285271256%29.jpg",
    cardTone: "from-[#2f3a34]/20 via-transparent to-[#2f3a34]/78",
    imagePosition: "object-center",
    photoCredit: "Wikimedia Commons",
    photoLicense: "Public domain",
    photoSourceHref:
      "https://commons.wikimedia.org/wiki/File:Canada_Day_Baseball_game_in_Stony_Plain,_Alberta_(26285271256).jpg",
  },
  {
    slug: "leduc",
    name: "Leduc",
    description: "Emergency drying and cleanup services for homeowners and businesses in Leduc.",
    cardImage:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Leduc%2C%20Alberta%20%28HS85-10-40498%29.jpg",
    cardTone: "from-[#3b332b]/20 via-transparent to-[#3b332b]/78",
    imagePosition: "object-center",
    photoCredit: "William H. Bamber",
    photoLicense: "Public domain",
    photoSourceHref: "https://commons.wikimedia.org/wiki/File:Leduc,_Alberta_(HS85-10-40498).jpg",
  },
  {
    slug: "beaumont",
    name: "Beaumont",
    description: "Trusted support for water damage, mold concerns, and drying projects in Beaumont.",
    cardImage:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Beaumont%20from%20an%20Airplane%2C%20Alberta.jpg",
    cardTone: "from-[#52697d]/20 via-transparent to-[#52697d]/78",
    imagePosition: "object-center",
    photoCredit: "Ken Eckert",
    photoLicense: "CC BY-SA 4.0",
    photoSourceHref: "https://commons.wikimedia.org/wiki/File:Beaumont_from_an_Airplane,_Alberta.jpg",
  },
  {
    slug: "fort-saskatchewan",
    name: "Fort Saskatchewan",
    description: "Restoration response and claim documentation support for Fort Saskatchewan properties.",
    cardImage:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Fort%20Saskatchewan%20Downtown.jpg",
    cardTone: "from-[#7a6652]/20 via-transparent to-[#7a6652]/78",
    imagePosition: "object-center",
    photoCredit: "Matthew Boonstra",
    photoLicense: "CC BY-SA 4.0",
    photoSourceHref: "https://commons.wikimedia.org/wiki/File:Fort_Saskatchewan_Downtown.jpg",
  },
];
