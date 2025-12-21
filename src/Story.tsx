import type React from "react";
import { Slide } from "@/Slide";

function StoryHeader() {
	return (
		<>
			<h2>开发故事</h2>
			<hr className="my-4" data-id="hr-line" />
		</>
	);
}

function CppLogo(props: React.HTMLAttributes<HTMLImageElement>) {
	return (
		<a
			title="Jeremy Kratz, Public domain, via Wikimedia Commons"
			href="https://commons.wikimedia.org/wiki/File:ISO_C%2B%2B_Logo.svg"
		>
			<img
				width="256"
				alt="Logo of C++"
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/256px-ISO_C%2B%2B_Logo.svg.png?20170928190710"
				{...props}
			/>
		</a>
	);
}
export function Story() {
	const ChallengeSolutions = [
		{
			challenge: (
				<li>
					2023 年 3 月 Nix 生态：
					<ul>
						<li>rnix-lsp 只能做最基本的语法检查</li>
						<li>nil 有比较完备的语义检查</li>
					</ul>
				</li>
			),
			solution: <li>开发一个新的 LSP server?</li>,
		},
		{
			challenge: <li>资源寻找困难：找包名、Options都要去 search.nixos.org </li>,
			solution: (
				<li>
					要支持包名、Option 名补全，方案：对接 NixOS/nix C++ 库 <br />
					<span className="text-[0.8em] text-gray-500">
						思路背景：Nix 语言 Eval 困难，当时只有官方 C++ 库能支持靠谱的 eval
					</span>
				</li>
			),
		},
		{
			challenge: (
				<li>Parser 重复维护：NixOS/nix 、rnix 、nil 三家分别维护 Parser</li>
			),
			solution: (
				<li>
					都对接了，那必须和 NixOS/nix 统一 Parser <br />
					<span className="text-[0.8em] text-gray-500">
						思路背景：C++ 编译器 clang 和 C++ LSP clangd 共用前端
					</span>
				</li>
			),
		},
	];
	return (
		<>
			<Slide data-auto-animate>
				<StoryHeader />
				<ul>{ChallengeSolutions.map((item) => item.challenge)}</ul>
			</Slide>
			{ChallengeSolutions.map((_, i) => (
				// biome-ignore lint/correctness/useJsxKeyInIterable: list 不会变
				<Slide data-auto-animate>
					<StoryHeader />
					<ul>
						{ChallengeSolutions.map((item, index) =>
							index <= i ? item.solution : item.challenge,
						)}
					</ul>
				</Slide>
			))}
			<Slide data-auto-animate>
				<StoryHeader />
				<ul>
					{ChallengeSolutions.map((item) => item.solution)}
					<li>
						但是要链接到 NixOS/nix 就得使用{" "}
						<CppLogo className="w-[1em] inline" /> ? <br />
						<span className="line-through text-[0.8em] text-gray-500">
							众所周知这是个比较恐怖的语言
						</span>
					</li>
				</ul>
			</Slide>
		</>
	);
}
