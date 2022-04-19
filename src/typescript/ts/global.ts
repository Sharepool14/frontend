export { transitionCleanup };

const transitionCleanup = () => {
	let emptyStyles = document.querySelectorAll('head style');
	Array.from(emptyStyles).forEach((emptyStyle) => {
		if (!emptyStyle.hasAttribute('type')) {
			emptyStyle.remove();
		}
	});
};
