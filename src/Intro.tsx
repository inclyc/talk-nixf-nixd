export function Intro() {
	return (
		<section>
			<h3>能为我们带来什么？</h3>
			<hr className="pb-4" />
			<ul className="text-2xl">
				{/* TODO: 或许作为单个的页面更好 */}
				<li>
					补全 <code>with pkgs; [ ]</code> 里面，包名/版本号 <br />
					<span className="text-[0.8em]">
						Nix 作为一个
						<strong className="underline">包管理器</strong>,
						用户能直接获得包名和版本号的补全是最基本的要求！
					</span>
				</li>
				<li>
					编辑 NixOS 配置文件，能获得：
					<u>options 的类型和可选值</u>
				</li>
				<li>
					在编辑 Nix 代码时，能获得：
					<u>语义检查</u>和<u>代码补全</u>
				</li>
				<li>上述能力静态检查集成到 Nixpkgs CI 流程中，避免人肉 parser</li>
			</ul>
		</section>
	);
}
