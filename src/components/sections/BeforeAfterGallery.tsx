"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { BEFORE_AFTER, GALLERY_PHOTOS, type GalleryPhoto } from "@/lib/content/gallery";

interface LightboxItem extends GalleryPhoto {
  caption: string;
}

function Lightbox({ item, onClose }: { item: LightboxItem; onClose: () => void }) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.caption}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 p-4"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        autoFocus
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/30"
      >
        <X size={20} />
      </button>
      <figure className="flex max-h-full flex-col items-center" onClick={(e) => e.stopPropagation()}>
        <Image
          src={item.src}
          alt={item.alt}
          width={item.width}
          height={item.height}
          sizes="100vw"
          className="h-auto max-h-[82vh] w-auto max-w-full rounded-[0.6rem] object-contain"
        />
        <figcaption className="mt-3 text-center text-sm font-semibold text-white">{item.caption}</figcaption>
      </figure>
    </div>
  );
}

function PhotoButton({
  photo,
  caption,
  sizes,
  onOpen,
}: {
  photo: GalleryPhoto;
  caption: string;
  sizes: string;
  onOpen: (item: LightboxItem) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen({ ...photo, caption })}
      aria-label={`Enlarge photo: ${caption}`}
      className="group relative block aspect-[3/4] w-full overflow-hidden rounded-[0.8rem] bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        loading="lazy"
        sizes={sizes}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/45 text-white opacity-90">
        <ZoomIn size={15} aria-hidden="true" />
      </span>
    </button>
  );
}

export function BeforeAfterGallery() {
  const [selected, setSelected] = useState<LightboxItem | null>(null);

  return (
    <>
      {selected && <Lightbox item={selected} onClose={() => setSelected(null)} />}

      <div className="grid gap-8">
        {BEFORE_AFTER.map((pair) => (
          <div key={pair.title} className="surface-card rounded-[1rem] border border-slate-200/70 p-4 sm:p-6">
            <h2 className="text-xl font-bold">{pair.title}</h2>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-5">
              {(["before", "after"] as const).map((stage) => (
                <figure key={stage}>
                  <PhotoButton
                    photo={pair[stage]}
                    caption={`${pair.title}: ${stage}`}
                    sizes="(min-width: 1152px) 540px, 50vw"
                    onOpen={setSelected}
                  />
                  <figcaption
                    className={
                      stage === "before"
                        ? "mt-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500"
                        : "mt-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]"
                    }
                  >
                    {stage === "before" ? "Before" : "After"}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14">
        <h2 className="text-3xl font-bold">More job photos</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
          {GALLERY_PHOTOS.map((photo) => (
            <figure key={photo.src}>
              <PhotoButton
                photo={photo}
                caption={photo.caption}
                sizes="(min-width: 768px) 33vw, 50vw"
                onOpen={setSelected}
              />
              <figcaption className="mt-2 text-sm font-semibold leading-5 text-slate-700">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </>
  );
}
