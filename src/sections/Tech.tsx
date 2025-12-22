import { Slide } from "@/components/Slide";

function TechIntro() {
	return (
		<Slide>
			<h2>技术路径</h2>
			<hr className="my-4" />
			<p className="text-gray-500">让梦想变成现实</p>
		</Slide>
	);
}

import ArchOverviewSVG from "@/assets/arch-overview.svg";

function OverviewArch() {
	return (
		<Slide>
			<h2>架构</h2>
			<hr className="my-4" />
			<div className="flex justify-center">
				<img
					src={ArchOverviewSVG}
					alt="架构总览"
					className="my-4 w-3/4 h-auto"
				/>
			</div>
		</Slide>
	);
}
/**
 * 技术分析/介绍
 */
export default function Tech() {
	return (
		<>
			<TechIntro />
			<OverviewArch />
		</>
	);
}
