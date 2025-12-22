import hljs from "highlight.js";
import type { HTMLAttributes } from "react";

export function InlineCode(
	props: { code: string } & HTMLAttributes<HTMLElement>,
) {
	const { code, ...rest } = props;
	return (
		<code
			{...rest}
			/** biome-ignore lint/security/noDangerouslySetInnerHtml: 为了正确高亮 */
			dangerouslySetInnerHTML={{
				__html: hljs.highlight(code, { language: "nix" }).value,
			}}
		></code>
	);
}
