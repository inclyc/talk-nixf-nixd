import { useEffect, useRef } from "react";
import Reveal from "reveal.js";

import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/white.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import "./index.css";
import { Intro } from "@/Intro";
import { Title } from "@/Title";

export default function App() {
	const deckDivRef = useRef<HTMLDivElement>(null);
	const deckRef = useRef<Reveal.Api | null>(null);

	useEffect(() => {
		if (deckRef.current) return;
		if (!deckDivRef.current) return;

		deckRef.current = new Reveal(deckDivRef.current, {
			transition: "slide",
		});

		deckRef.current.initialize().then(() => {});

		return () => {
			if (deckRef.current) {
				deckRef.current.destroy();
				deckRef.current = null;
			}
		};
	}, []);

	return (
		<div className="w-screen h-screen">
			<div className="reveal" ref={deckDivRef}>
				<div className="slides">
					<Title />
					<Intro />
				</div>
			</div>
		</div>
	);
}
