import { Slide } from "@/components/Slide";

export default function Adhoc() {
	return (
		<>
			<Slide>
				<h2>杂谈</h2>
				<hr className="my-4" data-id="hline" />
				<p className="text-gray-500">不好分类的 dirty work</p>
			</Slide>
			<Slide>
				<h2>关于依赖 LLVM 资源</h2>
				<hr className="my-4" data-id="hline" />
				<ul>
					<li>clangd 的 LSP 库是依赖 LLVM Support 的</li>
					<li>所以 nixd 依赖 LLVM 动态库 libLLVM.so</li>
					<li className="text-[1.5em] fragment">这听起来很不合理对不对</li>
					<li className="line-through fragment">
						C++ 里面也没有其他好东西可以用
					</li>
					<li className="fragment">
						我的其他工作恰好是写 LLVM (committer, Backend)，所以就路径依赖一下
						<p className="text-gray-500">也可以和我交流 LLVM 后端</p>
					</li>
				</ul>
			</Slide>
			<Slide>
				<h2>nixd 被 Google 使用</h2>
				<hr className="my-4" data-id="hline" />
				<p className="line-through">Google 打钱</p>
			</Slide>
		</>
	);
}
