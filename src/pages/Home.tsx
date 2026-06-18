import { Link } from 'react-router-dom'
import { challenges } from '@/challenges/registry'
import './home.css'

export function Home() {
	return (
		<div className="home">
			<h1 className="home__title">Frontend Challenges</h1>
			<p className="home__subtitle">
				Pick a challenge to open it on its own page.
			</p>
			<ul className="home__list">
				{challenges.map((challenge) => (
					<li key={challenge.slug} className="home__item">
						<Link
							to={`/challenges/${challenge.slug}`}
							className="home__link"
						>
							<span className="home__link-title">{challenge.title}</span>
							<span className="home__link-desc">
								{challenge.description}
							</span>
						</Link>
						<span className={`home__badge home__badge--${challenge.styling}`}>
							{challenge.styling}
						</span>
					</li>
				))}
			</ul>
		</div>
	)
}
