
import { TimelineEvent, MemoryItem } from './types';

const BASE_URL = import.meta.env.BASE_URL;

export const TARGET_DATE = "2026-02-04T00:00:00";

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    year: "The Foundation",
    title: "Nimesh: The Silent Protector",
    description: "For every sleepless night you worked to ensure our comfort, and every sacrifice you made without a word of complaint. You are the rock our family is built upon.",
    imageUrl: "https://picsum.photos/seed/nimesh1/800/600",
    color: "from-blue-500 to-indigo-600"
  },
  {
    year: "Teaching Prath Resilience",
    title: "The Mentor",
    description: "You didn't just tell me how to live; you lived, and let me watch you do it. From my first steps to navigating the complexities of life, your wisdom has been my guiding light.",
    imageUrl: "https://picsum.photos/seed/nimesh2/800/600",
    color: "from-emerald-500 to-teal-600"
  },
  {
    year: "The Friend",
    title: "A Bond Beyond Words",
    description: "Beyond a father, you became my greatest confidant. Your laughter is the music of our home, and your hugs are the safest place on earth for me.",
    imageUrl: "https://picsum.photos/seed/nimesh3/800/600",
    color: "from-amber-500 to-orange-600"
  },
  {
    year: "The Legacy",
    title: "A Lifetime of Love",
    description: "As we celebrate your birthday in 2026, I want the world to know how proud I am to be called your son. Your legacy is written in the love we share.",
    imageUrl: "https://picsum.photos/seed/nimesh4/800/600",
    color: "from-rose-500 to-pink-600"
  }
];

export const MEMORIES_DATA: MemoryItem[] = [
  {
    id: 1,
    type: 'video',
    url: `${BASE_URL}MEMORIES_DATA/You as a tower in my life.mp4`,
    caption: 'The Best Head Massage!',
    size: 'large'
  },
  {
    id: 2,
    type: 'image',
    url: `${BASE_URL}MEMORIES_DATA/We in car.jpeg`,
    caption: 'Road Trip Smiles',
    size: 'medium'
  },
  {
    id: 3,
    type: 'image',
    url: `${BASE_URL}MEMORIES_DATA/Me as footballer.jpeg`,
    caption: 'Our Little Champion',
    size: 'small'
  },
  {
    id: 4,
    type: 'image',
    url: `${BASE_URL}MEMORIES_DATA/Birthday.jpeg`,
    caption: 'Sweetest Celebrations',
    size: 'medium'
  },
  {
    id: 5,
    type: 'video',
    url: `${BASE_URL}MEMORIES_DATA/You with Hetsh Eating Pizza.mp4`,
    caption: 'Pizza Time is the Best Time',
    size: 'small'
  },
  {
    id: 6,
    type: 'image',
    url: `${BASE_URL}MEMORIES_DATA/Our family.jpeg`,
    caption: 'Cuddles and Giggles',
    size: 'medium'
  },
  {
    id: 7,
    type: 'image',
    url: `${BASE_URL}MEMORIES_DATA/We with mom and Daksh.jpeg`,
    caption: 'The Whole Crew Outing',
    size: 'large'
  },
  {
    id: 8,
    type: 'image',
    url: `${BASE_URL}MEMORIES_DATA/We in bus.jpeg`,
    caption: 'Too Cute in Panda!',
    size: 'small'
  },
  {
    id: 9,
    type: 'image',
    url: `${BASE_URL}MEMORIES_DATA/You thinking about me.jpeg`,
    caption: 'Quiet Moments Together',
    size: 'medium'
  },
  {
    id: 10,
    type: 'image',
    url: `${BASE_URL}MEMORIES_DATA/We with Daksh.jpeg`,
    caption: 'Forever Your Boys',
    size: 'small'
  }
];

export const HEARTFELT_LETTER = `Dear Papa Nimesh,

Words often fail to capture the depth of gratitude I feel when I think of you. You are more than just my father; you are my hero, my first teacher, and my greatest inspiration. 

I've watched you face life's challenges with a quiet strength that I strive to emulate every single day. I've seen your kindness in the way you help everyone around you, and your boundless love in the way you protect our family.

As you celebrate this beautiful milestone on February 4th, 2026, I want you to know that the greatest gift I have ever received is the privilege of being your son. I am who I am today because of you.

May your year be filled with the same infinite joy you've brought into my life since the day I was born.

With all my love and respect, 
Your son, Prath.`;
