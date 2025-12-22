import { Slide } from "@/Slide";

export default function FutureWork() {
	const hlineID = "future-work-hr";
	return (
		<>
			<Slide data-auto-animate>
				<h2>未来工作</h2>
				<hr className="my-4" data-id={hlineID} />
				<div className="text-gray-500 text-[0.8em]">
					<span className="line-through">说实话，想找新的 maintainer</span>
					<aside className="notes">
						这个项目是我第一个（第一作者）完成的 1k+ start 开源项目 <br />
						个人精力有限，且项目已经比较稳定 <br />
						希望能有新的 maintainer 加入进来，持续推进这个项目 <br />
					</aside>
				</div>
			</Slide>
			<Slide data-auto-animate>
				<h2>未来工作</h2>
				<hr className="my-4" data-id={hlineID} />
				<ul>
					<li>
						可能想要把 nixd 主进程等部件逐渐换成
						<img
							className="inline w-[1em] h-[1em] align-middle"
							src="https://raw.githubusercontent.com/rust-lang/rust-artwork/refs/heads/master/logo/rust-logo-blk.svg"
							alt="Rust Logo"
						/>
					</li>
					<li>配置难度依然存在，默认值不够用户友好</li>
					<li>对注释的支持</li>
				</ul>
			</Slide>
		</>
	);
}
