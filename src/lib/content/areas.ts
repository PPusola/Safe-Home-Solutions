import stAlbertImage from "../../../St_Albert.jpg";
import stonyPlainImage from "../../../stony plain.jpg";
import fortSaskatchewanImage from "../../../Fort_Saskatchewan_Downtown.jpg";
import spruceGroveImage from "../../../spruce_grove.jpg";
import leducImage from "../../../leduc.jpg";
import sherwoodParkImage from "../../../sherwood park.jpg";
import beaumontImage from "../../../beaumont.jpg";

export interface ServiceArea {
  slug: string;
  name: string;
  description: string;
  isPrimary?: boolean;
  cardImage?: string;
  cardTone?: string;
  imagePosition?: string;
}

export const SERVICE_AREAS: ServiceArea[] = [
  {
    slug: "edmonton",
    name: "Edmonton",
    description:
      "Our home base. We serve neighbourhoods across Edmonton with local dispatch, fast arrival times, and restoration support around the clock.",
    isPrimary: true,
    cardImage:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
    cardTone: "from-[#20313b]/30 via-[#20313b]/10 to-[#20313b]/60",
    imagePosition: "object-center",
  },
  {
    slug: "sherwood-park",
    name: "Sherwood Park",
    description: "Emergency water damage restoration, drying, and mold remediation for homes and businesses in Sherwood Park.",
    cardImage: sherwoodParkImage.src,
    cardTone: "from-[#30463f]/20 via-transparent to-[#30463f]/75",
    imagePosition: "object-center",
  },
  {
    slug: "st-albert",
    name: "St. Albert",
    description: "Local response for water extraction, structural drying, and restoration work throughout St. Albert.",
    cardImage: stAlbertImage.src,
    cardTone: "from-[#243f56]/20 via-transparent to-[#243f56]/75",
    imagePosition: "object-center",
  },
  {
    slug: "spruce-grove",
    name: "Spruce Grove",
    description: "Rapid service for flooded basements, plumbing failures, and moisture-related damage in Spruce Grove.",
    cardImage: spruceGroveImage.src,
    cardTone: "from-[#43352b]/20 via-transparent to-[#43352b]/78",
    imagePosition: "object-center",
  },
  {
    slug: "stony-plain",
    name: "Stony Plain",
    description: "Certified restoration support for residential and light commercial properties in Stony Plain.",
    cardImage: stonyPlainImage.src,
    cardTone: "from-[#2f3a34]/20 via-transparent to-[#2f3a34]/78",
    imagePosition: "object-center",
  },
  {
    slug: "leduc",
    name: "Leduc",
    description: "Emergency drying and cleanup services for homeowners and businesses in Leduc.",
    cardImage: leducImage.src,
    cardTone: "from-[#3b332b]/20 via-transparent to-[#3b332b]/78",
    imagePosition: "object-center",
  },
  {
    slug: "beaumont",
    name: "Beaumont",
    description: "Trusted support for water damage, mold concerns, and drying projects in Beaumont.",
    cardImage: beaumontImage.src,
    cardTone: "from-[#52697d]/20 via-transparent to-[#52697d]/78",
    imagePosition: "object-center",
  },
  {
    slug: "fort-saskatchewan",
    name: "Fort Saskatchewan",
    description: "Restoration response and claim documentation support for Fort Saskatchewan properties.",
    cardImage: fortSaskatchewanImage.src,
    cardTone: "from-[#7a6652]/20 via-transparent to-[#7a6652]/78",
    imagePosition: "object-center",
  },
];
