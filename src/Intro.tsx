export function Intro() {
	return (
		<section>
			<h3>能为我们带来什么？</h3>
			<hr className="pb-4" />
			<ol className="text-2xl">
				<li>
					最开始的动机：在 <code>with pkgs; [ ]</code> 的里面，补全包名/版本号{" "}
					<br />
					Nix 作为一个
					<strong className="underline underline-offset-4">包管理器</strong>,
					用户能直接获得包名和版本号的补全是最基本的要求！
				</li>
				<li>NixOS 配置文件，能告诉我 options 的类型和可选值</li>
				<li>在编辑 Nix 代码时，能获得语义检查和代码补全</li>
			</ol>
		</section>
	);
}
