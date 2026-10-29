// Job photos in /public/images/gallery. Captions are the approved wording only;
// do not add claims about methods, timelines or results.
export interface GalleryPhoto {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface BeforeAfterPair {
  title: string;
  before: GalleryPhoto;
  after: GalleryPhoto;
}

export interface CaptionedPhoto extends GalleryPhoto {
  caption: string;
}

export const BEFORE_AFTER: BeforeAfterPair[] = [
  {
    title: "Foundation crack repair",
    before: {
      src: "/images/gallery/crack-repair-before.webp",
      alt: "Vertical crack running down a basement foundation wall, before repair",
      width: 1200,
      height: 1600,
    },
    after: {
      src: "/images/gallery/crack-repair-after.webp",
      alt: "Basement foundation wall after crack repair, with the crack line patched",
      width: 1200,
      height: 1600,
    },
  },
  {
    title: "Bathroom water & mold damage",
    before: {
      src: "/images/gallery/bathroom-before.webp",
      alt: "Bathroom floor covered in dirty water and debris around the toilet and shower",
      width: 816,
      height: 999,
    },
    after: {
      src: "/images/gallery/bathroom-after.webp",
      alt: "The same bathroom with a clean tiled floor after the work",
      width: 599,
      height: 800,
    },
  },
  {
    title: "Basement stairs",
    before: {
      src: "/images/gallery/stairs-before.webp",
      alt: "Basement stairs stripped to bare plywood treads with worn tile at the top landing",
      width: 1200,
      height: 1600,
    },
    after: {
      src: "/images/gallery/stairs-after.webp",
      alt: "The same basement stairs finished with wood-look treads and dark stair nosings",
      width: 1200,
      height: 1600,
    },
  },
];

export const GALLERY_PHOTOS: CaptionedPhoto[] = [
  {
    src: "/images/gallery/mold-containment.webp",
    caption: "Containment set up before mold removal",
    alt: "Plastic sheeting and red tape sealing off a doorway as containment before mold removal",
    width: 1200,
    height: 1600,
  },
  {
    src: "/images/gallery/mold-behind-vanity.webp",
    caption: "Mold found behind a bathroom vanity",
    alt: "Dark mold on the wall and floor behind a removed bathroom vanity, with exposed pipes",
    width: 810,
    height: 886,
  },
  {
    src: "/images/gallery/basement-rebuild-1.webp",
    caption: "Basement rebuilt after cleanup",
    alt: "Basement room with white walls and dark plank flooring, rebuilt after cleanup",
    width: 1200,
    height: 1600,
  },
  {
    src: "/images/gallery/basement-rebuild-2.webp",
    caption: "Basement rebuilt after cleanup",
    alt: "Basement bedroom with open closets and dark plank flooring, rebuilt after cleanup",
    width: 1200,
    height: 1600,
  },
  {
    src: "/images/gallery/basement-rebuild-3.webp",
    caption: "Basement rebuilt after cleanup",
    alt: "Long basement room with wood-panel walls, ceiling lights and plank flooring, rebuilt after cleanup",
    width: 1200,
    height: 1600,
  },
  {
    src: "/images/gallery/basement-bathroom-after.webp",
    caption: "Basement rebuilt after cleanup",
    alt: "Basement bathroom with glass shower, vanity and toilet, rebuilt after cleanup",
    width: 1200,
    height: 1600,
  },
  {
    src: "/images/gallery/drying-equipment.webp",
    caption: "Drying equipment set up after water damage",
    alt: "Air mover on a bare concrete basement floor with the lower drywall removed, after water damage",
    width: 1600,
    height: 1200,
  },
];
