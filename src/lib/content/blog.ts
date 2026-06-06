export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  publishedAt: string;
  body: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "what-to-do-after-water-damage",
    title: "What to Do in the First Hour After Water Damage",
    excerpt: "The first hour matters. Here is a practical checklist for Edmonton properties dealing with a leak or flood.",
    metaDescription: "A first-hour checklist after water damage, leaks, or indoor flooding in Edmonton properties.",
    publishedAt: "2026-06-01",
    body: [
      "Water damage can feel overwhelming the moment you discover it. Whether it is a burst pipe, a washing machine overflow, or water coming in from outside, the decisions you make in the first hour can significantly affect how much damage spreads and how smoothly the recovery goes.",
      "The first priority is stopping the source if it is safe to do so. Shut off the water supply at the valve nearest to the problem, or at the main shutoff if you are not sure where the leak is coming from. If there is any concern about electrical safety (standing water near outlets, panel boxes, or appliances), leave the affected area and call a professional before re-entering.",
      "Once it is safe, move valuables, electronics, documents, and anything that cannot get wet out of the affected rooms. Do this before any cleanup starts. Furniture on wet carpet can cause staining that is difficult to reverse, so placing aluminum foil under wooden legs or moving smaller pieces entirely is worth doing quickly.",
      "One of the most common mistakes is reaching for a household shop vac or mop to start cleanup before calling a restoration company. Household equipment is not designed for water extraction from structural materials. Using it may remove visible surface water while leaving moisture trapped under flooring, inside walls, and beneath baseboards, where it continues to cause damage silently.",
      "Take photos before any cleanup begins. Walk through every affected room and capture the waterline on walls, wet flooring, soaked materials, and the source area. These photos matter later when your insurer asks what the property looked like on arrival. A clear visual record of the original condition is far more useful than trying to reconstruct events after the fact.",
      "Call a restoration company early. Professional water damage teams have moisture meters, thermal imaging, and commercial extraction equipment that can identify hidden wet areas and begin proper drying before secondary damage sets in. The sooner extraction and drying equipment is running, the better the chance of preserving structural materials.",
      "Finally, contact your insurance provider as soon as practical to report the loss. Most policies require prompt notification, and early reporting gives the process time to move at a reasonable pace rather than feeling rushed later. The restoration company can typically help you organize the documentation your insurer will need.",
    ],
  },
  {
    slug: "signs-of-hidden-mold",
    title: "7 Signs There May Be Hidden Mold in Your Property",
    excerpt: "Mold is not always visible. Watch for these common warning signs after unresolved moisture problems.",
    metaDescription: "Hidden mold warning signs for Edmonton properties after leaks, humidity, or unfinished drying.",
    publishedAt: "2026-05-28",
    body: [
      "Mold does not always announce itself with visible growth on a wall. In many Edmonton properties, mold develops behind drywall, under flooring, inside wall cavities, and in areas that never fully dried after a leak or flooding event. Knowing the early warning signs can help you address a moisture problem before it becomes a larger remediation job.",
      "The most reliable early indicator is a persistent musty or earthy smell that does not go away after cleaning and ventilating a room. If a basement, bathroom, or closet consistently smells off, especially after it gets warm or humid, there is likely moisture present somewhere in the structure, even if nothing looks wrong on the surface.",
      "A second sign is drywall that has gone soft, feels slightly spongy to the touch, or shows subtle discoloration. Paint that is bubbling, peeling, or showing yellowish staining in areas that were not previously painted over is also worth investigating. These changes often indicate that moisture has been sitting behind the finish for some time.",
      "Warped or buckled flooring is another indicator, particularly in areas near plumbing, under appliances, or adjacent to exterior walls. Wood floors, laminate, and engineered flooring can all shift when moisture moves through the subfloor beneath them. If sections of flooring feel soft underfoot or have lifted at the edges, a moisture check is a reasonable next step.",
      "Recurring condensation on windows, walls, or cold surfaces, especially in rooms without obvious temperature differences, can point to elevated humidity levels that create favorable conditions for mold growth over time. A single cold morning is normal; persistent condensation in an insulated space is not.",
      "Unexplained respiratory irritation, frequent headaches, or worsening allergy symptoms in occupants, particularly when spending time in specific rooms, is worth noting. While mold is not the only possible cause, it is a common one in properties with unresolved moisture history.",
      "Finally, any area that experienced a water leak, flooding, or plumbing event that was not professionally dried and verified is at higher risk. Even if the surface appears fine months later, moisture that was never fully removed from structural cavities can quietly support mold growth. If you are unsure whether an area was properly dried after a past event, a professional assessment can provide a clearer picture.",
    ],
  },
  {
    slug: "water-damage-insurance-claim-tips",
    title: "Tips for a Smoother Water Damage Insurance Claim",
    excerpt: "Good documentation and quick action can reduce stress when you are dealing with a claim.",
    metaDescription: "Practical insurance claim tips after water damage in Edmonton, including documentation and timing.",
    publishedAt: "2026-05-20",
    body: [
      "Filing a water damage insurance claim while also managing the physical cleanup of your property is genuinely difficult. The two timelines overlap in ways that feel unfair. You need to act fast to prevent further damage, but you also need to preserve evidence and follow a process that your insurer will later scrutinize. A little preparation and clear documentation can make a meaningful difference.",
      "Report the loss to your insurer as soon as possible. Most residential policies require prompt notification after a covered event, and delays can complicate the claim later. You do not need a full scope of damage before calling. A brief description of what happened, when you discovered it, and what steps you have taken so far is enough to open the claim and get the process moving.",
      "Before significant cleanup begins, document the damage thoroughly with photos and short videos. Capture the source area, affected rooms, visible water lines on walls, damaged materials, and contents that were impacted. The more complete your visual record is at the beginning, the less you have to reconstruct from memory when an adjuster asks questions weeks later.",
      "Avoid discarding damaged materials before your adjuster has had a chance to review them. Even wet drywall sections, flooring pieces, and damaged contents may be relevant to the claim assessment. If something genuinely needs to be removed for health or safety reasons, photograph it carefully and keep notes about what was removed and why.",
      "Ask your insurer early about what documentation they specifically need from the restoration side. Different adjusters and different policies have different requirements. Some want detailed drying logs. Others want a scope of work before any demolition begins. Knowing this in advance prevents frustrating back-and-forth later and helps your restoration company provide the right records.",
      "Keep a simple written timeline of events: when the damage occurred, when you discovered it, who you called, and what actions were taken each day. Include the names of anyone you spoke with at your insurance company and the dates of those conversations. This kind of organized record often resolves disputes quickly when questions arise about timing or steps taken.",
      "Work with a restoration company that communicates clearly and keeps organized records. A well-documented mitigation file, showing moisture readings, equipment logs, affected areas, and drying progress, gives your adjuster a clear picture of the scope of work performed. This transparency tends to reduce delays and unnecessary back-and-forth during the review process.",
    ],
  },
];

export function getBlogPost(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
