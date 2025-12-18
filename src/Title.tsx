import { faGithub, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Title() {
	return (
		<section>
			<h3>nixf/nixd：nixpkgs CI linter & Nix LSP</h3>
			<p>
				<small>Nixpkgs CI 语义检查 + 日常编辑用的语言服务</small>
			</p>
			<p>
				<small>
					Yingchi Long, <code>@inclyc</code>{" "}
					<a href="https://github.com/inclyc">
						<FontAwesomeIcon icon={faGithub} />
					</a>
					<a href="https://t.me/inclyc">
						<FontAwesomeIcon icon={faTelegram} />
					</a>
				</small>
			</p>
			<p>
				<small>2025年12月27日</small>
			</p>
		</section>
	);
}
