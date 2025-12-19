import optionsGif from "@/assets/options.gif";
import semaGif from "@/assets/sema.gif";
import withPkgsGif from "@/assets/with-pkgs.gif";
import { InlineCode } from "@/InlineCode";
import { Slide } from "@/Slide";

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

function IntroSummary() {
	return (
		<Slide>
			<h3>师傅，这个有啥用？</h3>
			<hr className="pb-4" />
			<ul className="text-2xl">
				<FillPackageNamesItem />
				<NixOSOptionsItem />
				<SemaItem />
				<li>上述能力静态检查集成到 Nixpkgs CI 流程中，避免人肉 parser</li>
			</ul>
		</Slide>
	);
}

function IntroFillPackageNames() {
	return (
		<Slide>
			<ul className="text-3xl">
				<FillPackageNamesItem />
			</ul>
			<div className="flex items-center justify-center">
				<img
					src={withPkgsGif}
					alt="nixd can show package names inside with pkgs"
					className="w-[30vw] ml-8 rounded border border-gray-300 shadow-lg"
				/>
			</div>
		</Slide>
	);
}

function IntroNixOSOptions() {
	return (
		<Slide>
			<ul className="text-3xl">
				<NixOSOptionsItem />
			</ul>
			<div className="flex items-center justify-center">
				<img
					src={optionsGif}
					alt="nixd can show options for NixOS configuration"
					className="w-[30vw] ml-8 rounded border border-gray-300 shadow-lg"
				/>
			</div>
		</Slide>
	);
}

function IntroSema() {
	return (
		<Slide>
			<ul className="text-3xl">
				<SemaItem />
			</ul>
			<div className="flex items-center justify-center">
				<img
					src={semaGif}
					alt="nixd can fix semantic issues in Nix code"
					className="w-[30vw] ml-8 rounded border border-gray-300 shadow-lg"
				/>
			</div>
		</Slide>
	);
}

export function Intro() {
	return (
		<>
			<IntroSummary />
			<IntroFillPackageNames />
			<IntroNixOSOptions />
			<IntroSema />
			{/* TODO */}
		</>
	);
}
