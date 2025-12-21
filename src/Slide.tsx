export function Slide({ children, ...props }: React.PropsWithChildren) {
	return <section {...props}>{children}</section>;
}
