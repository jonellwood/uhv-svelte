<script>
	import { scaleLinear } from 'd3-scale';

	import points from '../chart-data/points.js';

	const yTicks = [
		135, 140, 145, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 205, 210,
		215,
	];
	const xTicks = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70];
	const padding = { top: 20, right: 5, bottom: 20, left: 5 };

	let width = 900;
	let height = 600;

	$: xScale = scaleLinear()
		.domain([minX, maxX])
		.range([padding.left, width - padding.right]);

	$: yScale = scaleLinear()
		.domain([Math.min.apply(null, yTicks), Math.max.apply(null, yTicks)])
		.range([height - padding.bottom, padding.top]);

	$: minX = points[0].x;
	$: maxX = points[points.length - 1].x;
	$: path = `M${points.map((p) => `${xScale(p.x)},${yScale(p.y)}`).join('L')}`;
	$: area = `${path}L${xScale(maxX)},${yScale(0)}L${xScale(minX)},${yScale(
		0
	)}Z`;

	function formatMobile(tick) {
		return "'" + tick.toString().slice(-2);
	}
</script>

<div class="chart" bind:clientWidth={width} bind:clientHeight={height}>
	<svg>
		<!-- y axis -->
		<g class="axis y-axis" transform="translate(0, {padding.top})">
			{#each yTicks as tick}
				<g
					class="tick tick-{tick}"
					transform="translate(0, {yScale(tick) - padding.bottom})"
				>
					<line x2="100%" />
					<text y="-4">{tick} {tick === 8 ? ' million sq km' : ''}</text>
				</g>
			{/each}
		</g>

		<!-- x axis -->
		<g class="axis x-axis">
			{#each xTicks as tick}
				<g
					class="tick tick-{tick}"
					transform="translate({xScale(tick)},{height})"
				>
					<line y1="-{height}" y2="-{padding.bottom}" x1="0" x2="0" />
					<text y="-2">{width > 380 ? tick : formatMobile(tick)}</text>
				</g>
			{/each}
		</g>

		<!-- data -->
		<!-- <path class="path-area" d={area} /> -->
		<path class="path-line" d={path} />
	</svg>
</div>

<style>
	.chart,
	h3,
	p {
		/* width: 90%; */
		/* max-width: 500px; */
		margin-left: auto;
		margin-right: auto;
		margin-top: 25px;
		margin-right: 25px;
	}
	h3 {
		text-align: center;
	}
	.chart {
		margin: 10px;
		/* border: 2px solid green; */
		/* box-shadow: 0px 0px 30px 5px darkgreen; */
	}
	svg {
		position: relative;
		width: 100%;
		height: 250px;
		overflow: visible;
	}

	.tick {
		font-size: 0.725em;
		font-weight: 200;
	}

	.tick line {
		stroke: #aaa;
		stroke-dasharray: 2;
	}

	.tick text {
		fill: #666;
		text-anchor: start;
	}

	.tick.tick-0 line {
		stroke-dasharray: 0;
	}

	.x-axis .tick text {
		text-anchor: middle;
	}

	.path-line {
		fill: none;
		stroke: rgb(255, 99, 71);
		stroke-linejoin: round;
		stroke-linecap: round;
		stroke-width: 3;
	}

	.path-area {
		fill: rgba(0, 100, 100, 0.2);
	}
</style>
