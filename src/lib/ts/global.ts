export { Particle, formDataToObject, sleep };
export type { Speed2D };

function sleep(ms) {
	return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

const formDataToObject = <Type>(formData: FormData) => {
	const object = {};
	formData.forEach((value, key) => {
		if (!Reflect.has(object, key)) {
			object[key] = value;
			return;
		}
		if (!Array.isArray(object[key])) {
			object[key] = [object[key]];
		}
		object[key].push(value);
	});
	return <Type>object;
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
