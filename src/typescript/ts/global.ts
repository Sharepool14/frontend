export { transitionCleanup };

const transitionCleanup = () => {
	let styles = document.querySelectorAll('head style');
	styles.forEach((style) => {
		if (style.attributes.length === 0) style.remove();
	});
};
