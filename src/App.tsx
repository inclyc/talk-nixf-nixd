import { useEffect, useRef } from "react";
import Reveal from "reveal.js";

import RevealHighlight from "reveal.js/plugin/highlight/highlight.esm.js";
import "@/assets/highlight-ice.css";

import RevealNotes from "reveal.js/plugin/notes/notes.esm.js";

import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/white.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import "./index.css";

import NixOSSVG from "@/assets/NixOS.svg";
import FutureWork from "@/sections/FutureWork";
import Intro from "@/sections/Intro";
import Story from "@/sections/Story";
import Tech from "@/sections/Tech";
import Thankyou from "@/sections/Thankyou";
import Title from "@/sections/Title";

export default function App() {
	const deckDivRef = useRef<HTMLDivElement>(null);
	const deckRef = useRef<Reveal.Api | null>(null);

	useEffect(() => {
		if (deckRef.current) return;
		if (!deckDivRef.current) return;

		deckRef.current = new Reveal(deckDivRef.current, {
			transition: "slide",
			transitionSpeed: "fast",
		});

		deckRef.current
			.initialize({
				plugins: [RevealHighlight, RevealNotes],
			})
			.then(() => {});

		return () => {
			if (deckRef.current) {
				deckRef.current.destroy();
				deckRef.current = null;
			}
		};
	}, []);

	return (
		<div className="relative w-screen h-screen">
			<div className="reveal" ref={deckDivRef}>
				<div className="slides">
					<Title />
					<Intro />
					<Story />
					<Tech />
					<FutureWork />
					<Thankyou />
				</div>
			</div>
			<div className="absolute top-20 left-20 flex flex-col items-center justify-center">
				<img src={NixOSSVG} alt="NixOS Logo" className="h-20 w-auto" />
			</div>
		</div>
	);
}
