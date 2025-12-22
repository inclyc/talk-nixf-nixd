import { faCodeMerge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import optionsGif from "@/assets/options.gif";
import semaGif from "@/assets/sema.gif";
import withPkgsGif from "@/assets/with-pkgs.gif";
import { InlineCode } from "@/components/InlineCode";
import { Slide } from "@/components/Slide";

function FillPackageNamesItem() {
	return (
		<li>
			补全 <InlineCode code="with pkgs; [ ]" /> 里面，包名/版本号 <br />
			<span className="text-[0.8em]">
				Nix 作为一个
				<strong className="underline">包管理器</strong>,
				用户能直接获得包名和版本号的补全是最基本的要求！
			</span>
		</li>
	);
}

function NixOSOptionsItem() {
	return (
		<li>
			编辑 NixOS 配置文件，能获得：
			<u>options 的类型和可选值</u>
		</li>
	);
}

function SemaItem() {
	return (
		<li>
			在编辑 Nix 代码时，能获得：
			<u>语义检查</u>和<u>自动修复</u>
		</li>
	);
}

function NixpkgsCIItem() {
	return <li>上述能力静态检查集成到 Nixpkgs CI 流程中，避免人肉 parser</li>;
}

function IntroSummary() {
	return (
		<Slide>
			<h3>师傅，这个有啥用？</h3>
			<hr className="pb-4" />
			<ul className="text-2xl">
				<FillPackageNamesItem />
				<NixOSOptionsItem />
				<SemaItem />
				<NixpkgsCIItem />
			</ul>
		</Slide>
	);
}

function IntroFillPackageNames() {
	return (
		<Slide>
			<ul>
				<FillPackageNamesItem />
			</ul>
			<div className="flex items-center justify-center">
				<img
					src={withPkgsGif}
					alt="nixd can show package names inside with pkgs"
					className="w-[50%] ml-8 rounded border border-gray-300 shadow-lg"
				/>
			</div>
		</Slide>
	);
}

function IntroNixOSOptions() {
	return (
		<Slide>
			<ul>
				<NixOSOptionsItem />
			</ul>
			<div className="flex items-center justify-center">
				<img
					src={optionsGif}
					alt="nixd can show options for NixOS configuration"
					className="w-[55%] ml-8 rounded border border-gray-300 shadow-lg"
				/>
			</div>
		</Slide>
	);
}

function IntroSema() {
	return (
		<Slide>
			<ul>
				<SemaItem />
			</ul>
			<div className="flex items-center justify-center">
				<img
					src={semaGif}
					alt="nixd can fix semantic issues in Nix code"
					className="w-[55%] ml-8 rounded border border-gray-300 shadow-lg"
				/>
			</div>
		</Slide>
	);
}

function IntroNixpkgsCI() {
	return (
		<Slide>
			<ul>
				<NixpkgsCIItem />
			</ul>
			<hr className="my-6" />
			<div className="flex flex-col items-center justify-center">
				<ul>
					<li>Nixpkgs Reviewer: 时间紧任务重</li>
					<li>nixf-tidy: 与 nixd 共用 parser 的 CLI 工具</li>
					<li>
						nixf-diagnose: Nixpkgs CI 语义检查工具 (nixf-tidy CLI wrapper)
					</li>
				</ul>
				{/* https://github.com/NixOS/nixpkgs/pull/438559/files */}
				<span className="inline-flex items-center whitespace-nowrap text-3xl mt-8">
					<FontAwesomeIcon
						icon={faCodeMerge}
						className="text-purple-800 mr-2"
					/>
					<a href="https://github.com/NixOS/nixpkgs/pull/438559">
						<u>ci/treefmt: add nixf-diagnose</u>
					</a>
					<small className="ml-3">
						<span className="text-green-700 px-3.5">+2,239</span>
						<span className="text-red-700">−2,236</span>
					</small>
				</span>
				<p className="text-2xl">
					1570 files changed, <br />
					<a href="https://github.com/NixOS/nixpkgs/pull/438559#issuecomment-3341863861">
						<u>4 package rebuilds</u>
					</a>
				</p>
			</div>
		</Slide>
	);
}

export default function Intro() {
	return (
		<>
			<IntroSummary />
			<IntroFillPackageNames />
			<IntroNixOSOptions />
			<IntroSema />
			<IntroNixpkgsCI />
		</>
	);
}
