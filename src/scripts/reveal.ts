const className: Readonly<string> = "reveal-group";
const revealGroups: Readonly<HTMLCollectionOf<Element>> = document.getElementsByClassName(className);

const observer = new IntersectionObserver((entries, observer) => {
	for(const entry of entries) if(entry.isIntersecting) {
		const target = entry.target as HTMLElement;

		target.style.animationPlayState = "running";
		observer.unobserve(target);
	}
}, {
	root: null,
	rootMargin: "0px 0px 0px 0px",
	threshold: 0.0
}) as Readonly<IntersectionObserver>;

for(const revealGroup of revealGroups) {
	const group = revealGroup as Readonly<HTMLElement>;
	observer.observe(group);

	for(const child of group.children) observer.observe(child);
}