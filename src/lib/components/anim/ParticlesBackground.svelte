<script lang="ts">
	import { onMount } from 'svelte';

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
				console.error(err);
			}
		};
	}
	let particleColor = 'hsl(291 70% 20%)';
	let canvas: HTMLCanvasElement;
	let context: CanvasRenderingContext2D;
	let particles: Particle[] = [];

	const particleFactory = (color: string) => {
		let size = Math.random() * 5 + 1;
		let x = Math.random() * (innerWidth - size * 4) + size * 2;
		let y = Math.random() * (innerHeight - size * 4) + size * 2;
		let speed: Speed2D = {
			speedX: Math.random() * 0.1 - 0.05,
			speedY: Math.random() * 0.1 - 0.05,
		};
		return new Particle(canvas, x, y, speed, size, color);
	};

	const initParticles = (color: string) => {
		let particleQuantity = (canvas.width * canvas.height) / 9000;
		for (let i = 0; i < particleQuantity; i++) {
			particles.push(particleFactory(color));
		}
	};

	const animateParticles = (color: string) => {
		requestAnimationFrame(() => animateParticles(color));
		context.clearRect(0, 0, innerWidth, innerHeight);
		particles.forEach((particle) => {
			particle.update();
		});
		connectParticles();
	};

	const connectParticles = () => {
		let opacity = 1;
		for (let a = 0; a < particles.length; a++) {
			for (let b = a; b < particles.length; b++) {
				let distance =
					Math.pow(particles[a].x - particles[b].x, 2) +
					Math.pow(particles[a].y - particles[b].y, 2);
				if (distance < Math.pow(canvas.width / 12, 2)) {
					opacity = 1 - distance / 20000;
					context.strokeStyle = `hsl(291 70% 20% / ${opacity})`;
					context.lineWidth = 1;
					context.beginPath();
					context.moveTo(particles[a].x, particles[a].y);
					context.lineTo(particles[b].x, particles[b].y);
					context.stroke();
				}
			}
		}
	};

	onMount(() => {
		context = canvas.getContext('2d');
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		window.addEventListener('resize', () => {
			let previousWidth = canvas.width;
			let previousHeigt = canvas.height;
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			let widthRatio = canvas.width / previousWidth;
			let heightRatio = canvas.height / previousHeigt;

			particles.forEach((particle) => {
				particle.x *= widthRatio;
				particle.y *= heightRatio;
				particle.update();
			});
			connectParticles();
		});
		initParticles(particleColor);
		animateParticles(particleColor);
	});
</script>

<canvas bind:this={canvas} />

<style lang="postcss">
	canvas {
		z-index: -1000;
		position: fixed;
		top: 0;
		left: 0;
	}
</style>
