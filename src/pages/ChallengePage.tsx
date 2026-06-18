import { Suspense } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getChallengeBySlug } from '@/challenges/registry'
import './challenge-page.css'

export function ChallengePage() {
	const { slug } = useParams()
	const challenge = slug ? getChallengeBySlug(slug) : undefined

	if (!challenge) {
		return (
			<div className="challenge-page">
				<p>Challenge not found.</p>
				<Link to="/">Back to home</Link>
			</div>
		)
	}

	const Component = challenge.component

	return (
		<div className="challenge-page">
			<header className="challenge-page__header">
				<Link to="/" className="challenge-page__back">
					← All challenges
				</Link>
				<h1 className="challenge-page__title">{challenge.title}</h1>
				<span
					className={`challenge-page__badge challenge-page__badge--${challenge.styling}`}
				>
					{challenge.styling}
				</span>
			</header>
			<Suspense fallback={<p className="challenge-page__loading">Loading…</p>}>
				<Component />
			</Suspense>
		</div>
	)
}
