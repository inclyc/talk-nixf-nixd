import type { HTMLAttributes } from "react";

export function RevealCodeBlock(
	props: { code: string } & HTMLAttributes<HTMLElement>,
) {
	const { code, ...rest } = props;
	return (
		<pre>
			<code
				{...rest}
				/** biome-ignore lint/security/noDangerouslySetInnerHtml: 为了正确高亮 */
				dangerouslySetInnerHTML={{ __html: code }}
			></code>
		</pre>
	);
}
