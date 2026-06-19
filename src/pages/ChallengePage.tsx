import { Suspense } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getChallengeBySlug } from '@/challenges/registry';
import './challenge-page.css';

export function ChallengePage() {
  const { slug } = useParams();
  const challenge = slug ? getChallengeBySlug(slug) : undefined;

  if (!challenge) {
    return (
      <div className='challenge-page'>
        <p>Challenge not found.</p>
        <Link to='/'>Back to home</Link>
      </div>
    );
  }

  const Component = challenge.component;

  return (
    <div className='challenge-page'>
      <Suspense fallback={<p className='challenge-page__loading'>Loading…</p>}>
        <Component />
      </Suspense>
    </div>
  );
}
