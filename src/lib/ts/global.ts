export { transitionCleanup, Particle };
export type { Speed2D };

const transitionCleanup = () => {
	const styles = document.querySelectorAll('head style');
	styles.forEach((style) => {
		if (style.attributes.length === 0) style.remove();
	});
};

interface Speed2D {
	speedX: number;
	speedY: number;
}

class Particle {
	canvas: HTMLCanvasElement;
	ctx: CanvasRenderingContext2D;
	x: number;
	y: number;
	speed: Speed2D;
	size: number;
	color: string;
	constructor(
		canvas: HTMLCanvasElement,
		x: number,
		y: number,
		speed: Speed2D,
		size: number,
		color: string
	) {
		this.canvas = canvas;
		this.ctx = this.canvas.getContext('2d');
		this.x = x;
		this.y = y;
		this.speed = speed;
		this.size = size;
		this.color = color;
	}
	draw = () => {
		this.ctx.beginPath();
		this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
		this.ctx.fillStyle = this.color;
		this.ctx.fill();
	};

	update = () => {
		try {
			this.speed.speedX *= this.x > this.canvas.width || this.x < 0 ? -1 : 1;
			this.speed.speedY *= this.y > this.canvas.width || this.y < 0 ? -1 : 1;
			this.x += this.speed.speedX;
			this.y += this.speed.speedY;
			this.draw();
		} catch (err) {
			console.warn(err);
		}
	};
}
