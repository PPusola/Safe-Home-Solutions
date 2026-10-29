// Real 5-star reviews from the Google Business Profile, copied word for word on
// 2026-10-28. Do not edit, shorten or add to the wording. Only add reviews that
// exist on Google. Names are shown as first name + last initial.
export interface GoogleReview {
  name: string;
  text: string;
}

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    name: "Jennifer B.",
    text: "Amazing service! I had a leak at 3:00 AM and he was there within 30 minutes to help. He was professional, reliable, and went above and beyond to make a stressful situation easier. Highly recommend Jay for anyone needing restoration services!",
  },
  {
    name: "Brooklynn G.",
    text: "Great price, they helped me with my flood damage from all of the rain this year, incredibly quick response and very good customer service! Would recommend",
  },
  {
    name: "Nancy W.",
    text: "I found they had reasonable prices. Called and were there that day and had my estimate emailed to me. The same day. Work was done in two days. I would up loaded before and after but not good at that.",
  },
  {
    // Reviewer name was not included when this review was copied; replace with
    // first name + last initial from the Google profile.
    name: "Google reviewer",
    text: "Great people to deal with professional and honest. I definitely recommend these guys for any water damages",
  },
  {
    name: "Yahya M.",
    text: "Amazing service , highly recommend for all your water damage restoration needs.",
  },
];
