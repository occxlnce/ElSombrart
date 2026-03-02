import type { Perspective } from './types';

export const images = [
  '/img/art1.jpg',
  '/img/art2.jpg',
  '/img/art3.jpg',
  '/img/art4.jpg',
  '/img/art5.jpg',
  '/img/art6.jpg',
  '/img/art7.jpg',
  '/img/art8.jpg',
  '/img/art9.jpg',
  '/img/art10.jpg',
  '/img/art11.jpg',
  '/img/art12.jpg',
];

export const perspectives: Perspective[] = [
  {
    title: 'Poster Design',
    description: 'Bold visuals, clean vector craft',
    position: 'top',
  },
  {
    title: 'Character Design',
    description: 'Distinct silhouettes and personality',
    position: 'center',
  },
  {
    title: 'Vector worlds built in Adobe Illustrator',
    position: 'bottom',
  },
];

export const cylinderConfig = {
  radius: window.innerWidth > 768 ? 2.5 : 2.2,
  height: window.innerWidth > 768 ? 2 : 1.2,
  radialSegments: 64,
  heightSegments: 1,
};

export const particleConfig = {
  numParticles: 12,
  particleRadius: 3.3, // cylinderRadius + 0.8
  segments: 20,
  angleSpan: 0.3,
};

export const imageConfig = {
  width: 1024,
  height: 1024,
};
