import { StepStory, type StorySlide } from './StepStory';

const slides: StorySlide[] = [
  {
    title: 'Describe the job',
    body: 'Type it or say it, in plain language or Pidgin. Bartr turns it into a clear request for you to confirm.',
    src: '/product-screenshots/screenshot_7.png',
    alt: 'Request screen with the message “My phone screen cracked, need am fix today” and a microphone button',
  },
  {
    title: 'Get matched',
    body: 'Vendors nearby are ranked by rating, response speed, and price fit, not just distance.',
    src: '/product-screenshots/screenshot_9.png',
    alt: 'Ranked list titled Matched for you, with vendor ratings, reply times, and distances',
  },
  {
    title: 'Compare and choose',
    body: 'Check a vendor’s typical price and what past customers say. Then request the one that feels right.',
    src: '/product-screenshots/screenshot_10.png',
    alt: 'Vendor profile with a rating summary, typical price range, and a request button',
  },
  {
    title: 'Track the job',
    body: 'Follow your vendor on a live map, see the arrival time, and chat without leaving the app.',
    src: '/product-screenshots/screenshot_11.png',
    alt: 'Live tracking map showing a vendor arriving in 15 minutes, with chat and cash payment details',
  },
  {
    title: 'Pay and rate',
    body: 'Pay in cash when the job is done. Then you both rate each other, and the record of trust keeps growing.',
    src: '/product-screenshots/screenshot_12.png',
    alt: 'Rating screen asking how the job went, with five stars and a submit button',
  },
];

export function HowItWorks() {
  return <StepStory slides={slides} />;
}
