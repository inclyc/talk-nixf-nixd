export function Slide(props: React.PropsWithChildren) {
	return <section data-transition="slide">{props.children}</section>;
}
