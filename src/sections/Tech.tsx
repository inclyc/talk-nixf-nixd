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
import { RevealCodeBlock } from "@/components/Code";

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

function LibnixfHeader() {
	return (
		<>
			<h2>libnixf</h2>
			<hr className="my-4" data-id="hline" />
		</>
	);
}

import DuplicatedAttrNix from "@/assets/duplicated-attr.nix?raw";
import GuessSemiNix from "@/assets/guess-semi.nix?raw";
import ParserSVG from "@/assets/parser.svg";
import RemoveExtraNIx from "@/assets/remove-extra.nix?raw";

function Libnixf() {
	return (
		<>
			<Slide data-auto-animate>
				<LibnixfHeader />
				<p className="text-gray-500">Nix 语言解析与分析库</p>
			</Slide>
			<Slide data-auto-animate>
				<LibnixfHeader />
				<ul>
					<li>解析器 (parser)，就是把源代码变成语法树的东西</li>
					<li>libnixf 的功能：Nix 语言、词法语法语义分析</li>
				</ul>
				<div className="flex justify-center">
					<img
						src={ParserSVG}
						alt="parser diagram"
						className="my-4 w-3/4 h-auto"
					/>
				</div>
			</Slide>
			<Slide data-auto-animate>
				<LibnixfHeader />
				<ul>
					<li>手写递归下降：错误处理：猜测分号</li>
				</ul>
				<div className="flex justify-center w-3/4 mx-auto">
					<RevealCodeBlock code={GuessSemiNix} className="language-nix" />
				</div>
			</Slide>
			<Slide data-auto-animate>
				<LibnixfHeader />
				<ul>
					<li>提示删除多余符号</li>
				</ul>
				<div className="flex justify-center w-3/4 mx-auto">
					<RevealCodeBlock code={RemoveExtraNIx} className="language-nix" />
				</div>
			</Slide>
			<Slide data-auto-animate>
				<LibnixfHeader />
				<ul>
					<li>语义分析：变量定义、重复的 attribute</li>
				</ul>
				<div className="flex justify-center w-3/4 mx-auto">
					<RevealCodeBlock code={DuplicatedAttrNix} className="language-nix" />
				</div>
			</Slide>
		</>
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
			<Libnixf />
		</>
	);
}
