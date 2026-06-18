import { lazy, type ComponentType } from 'react';

export type Styling = 'tailwind' | 'styled-components' | 'css-modules' | 'css';

export interface Challenge {
  slug: string;
  title: string;
  description: string;
  styling: Styling;
  component: ComponentType;
}

export const challenges: Challenge[] = [
  {
    slug: 'qr-code',
    title: 'QR Code',
    description: 'Display a QR code for desktop and mobile devices',
    styling: 'tailwind',
    component: lazy(() => import('./qr-code')),
  },
];

export function getChallengeBySlug(slug: string): Challenge | undefined {
  return challenges.find((challenge) => challenge.slug === slug);
}
