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
import RecursiveDescendSVG from "@/assets/recursive-descend.svg";
import RemoveExtraNIx from "@/assets/remove-extra.nix?raw";
import { InlineCode } from "@/components/InlineCode";

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
					<li>设计方案：每个 AST 节点都用 parseXXX 函数实现</li>
					<li>parse函数之间相互调用，递归完成</li>
				</ul>
				<div className="flex justify-center">
					<div className="max-w-[44%]">
						<img
							src={RecursiveDescendSVG}
							alt="recursive descend diagram"
							className="my-4"
						/>
					</div>
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

function NixdAndEvalHeader() {
	return (
		<>
			<h2>nixd：主进程 和 eval 进程</h2>
			<hr className="my-4" data-id="hline" />
		</>
	);
}

import DocCommentsPNG from "@/assets/doc-comments.png";
import DocCommentsImpl from "@/assets/doc-comments-impl.png";
import DocCommentsNixREPLPNG from "@/assets/doc-comments-nix-repl.png";

function NixdEvalDocComments() {
	return (
		<>
			<Slide data-auto-animate>
				<NixdAndEvalHeader />
				<p className="text-[1.3em]">技术细节：doc-comments 注释</p>
				<div className="flex justify-center">
					<img
						src={DocCommentsPNG}
						alt="doc comments screenshot"
						className="my-4 w-3/4 h-auto"
					/>
				</div>
			</Slide>
			<Slide data-auto-animate>
				<NixdAndEvalHeader />
				<p className="text-[1.3em]">技术细节：doc-comments 注释</p>
				<ul>
					<li>Nix's libexpr 实现：它的 yacc parser 会保存 doc-comments</li>
					<li>:doc 命令</li>
				</ul>
				<div className="flex justify-center">
					<img
						src={DocCommentsNixREPLPNG}
						alt="doc comments by nix-repl screenshot"
						className="my-4 w-3/4 h-auto"
					/>
				</div>
			</Slide>
			<Slide data-auto-animate>
				<NixdAndEvalHeader />
				<p className="text-[1.3em]">技术细节：doc-comments 注释</p>
				<ul>
					<li>API 细节？</li>
				</ul>
				<div className="flex justify-center">
					<img
						src={DocCommentsImpl}
						alt="doc comments implementation screenshot"
						className="my-4 w-3/4 h-auto"
					/>
				</div>
			</Slide>
		</>
	);
}

import NixConfig from "@/assets/config.nix?raw";
import NixdConfigJSON from "@/assets/nixd-config.json?raw";
import NixdEvalSVG from "@/assets/nixd-eval.svg";

function NixdEval() {
	return (
		<>
			<Slide data-auto-animate>
				<NixdAndEvalHeader />
				<p className="text-gray-500">nixd LSP 中最占内存的部分</p>
			</Slide>
			<Slide data-auto-animate>
				<NixdAndEvalHeader />
				<ul>
					<li>nixd 主进程：负责和编辑器通信</li>
					<li>eval 进程：负责 Nix 代码的解析与分析</li>
				</ul>
			</Slide>
			<Slide data-auto-animate>
				<NixdAndEvalHeader />
				<p className="text-[1.3em]">eval 进程架构</p>
				<ul>
					<li>几乎等价于可编程的 nix-repl</li>
					<li>为什么不全部 eval 出来导出一个 JSON?</li>
				</ul>
			</Slide>
			<Slide data-auto-animate>
				<NixdAndEvalHeader />
				<p className="text-[1.3em]">为什么不全部 eval 出来导出一个 JSON?</p>
				<ul>
					<li>性能问题：Nixpkgs 太大，eval 一次太慢</li>
					<li>其实不可行：因为 eval pkgs 实际上存在无限递归</li>
					<li>方案：外挂可编程的 “nix-repl”</li>
				</ul>
			</Slide>
			<Slide data-auto-animate>
				<NixdAndEvalHeader />
				<div className="flex justify-center">
					<img
						src={NixdEvalSVG}
						alt="nixd eval architecture diagram"
						className="my-4 w-3/4 h-auto"
					/>
				</div>
			</Slide>
			<Slide data-auto-animate>
				<NixdAndEvalHeader />
				<p className="text-[1.3em]">难题：如何确定 pkgs, lib 的具体内容？</p>
				<div className="flex justify-center">
					<div className="w-3/4">
						<RevealCodeBlock code={NixConfig} className="language-nix" />
					</div>
				</div>
				<ul>
					<li>方案：硬编码猜测，如果这个东西的变量名为 pkgs 或 lib</li>
					<li>
						就直接猜测它是
						<InlineCode code="import <nixpkgs> {}" className="text-[0.8em]" />
						的等价内容
					</li>
				</ul>
			</Slide>
			<Slide data-auto-animate>
				<NixdAndEvalHeader />
				<p className="text-[1.3em]">难题：如何保证性能？</p>
				<ul>
					<li>方案：laziness eval.</li>
					<li> 只有在编辑器请求某个路径/属性时，才真正 eval 它</li>
					<li>如果只需要提供补全，则只 eval 名字（一堆 string）</li>
				</ul>
			</Slide>
			<Slide data-auto-animate>
				<NixdAndEvalHeader />
				<p className="text-[1.3em]">难题：如何支持 flake</p>
				<ul>
					<li>目前没有什么好方法，只能让用户自己写配置文件</li>
					<li>可能会考虑在 LSP 层面主动读取当前的 flake 然后询问用户</li>
				</ul>
				<div className="flex justify-center">
					<div className="w-3/4">
						<RevealCodeBlock code={NixdConfigJSON} className="language-json" />
					</div>
				</div>
			</Slide>
			<Slide data-auto-animate>
				<NixdAndEvalHeader />
				<p className="text-[1.3em]">技术细节：实现 goto-def</p>
				<ul>
					<li>Nix Value 本身带有值</li>
					<li>derivation 里面有 position</li>
					<li>options 里面可以获取到 declarationPos</li>
				</ul>
			</Slide>
			<NixdEvalDocComments />
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
			<NixdEval />
		</>
	);
}
