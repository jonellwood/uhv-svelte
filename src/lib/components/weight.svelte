<script>
	import { LayerCake, Svg } from 'layercake';
	import AxisX from './AxisX.svelte';
	import AxisY from './AxisY.svelte';
	import Line from './Line.svelte';
	// import Area from './Area.svelte';
	import data from './points.js';

	const xKey = 'myX';
	const yKey = 'myY';

	data.forEach((d) => {
		d[yKey] = +d[yKey];
	});
</script>

<div class="chart-container">
	<h3>My weight</h3>
	<LayerCake
		padding={{ right: 10, bottom: 20, left: 25 }}
		x={xKey}
		y={yKey}
		yDomain={[140, 200]}
		{data}
	>
		<!-- Components go here -->
		<Svg>
			<AxisY ticks={5} />
			<!-- <AxisX /> -->
			<Line />
			<!-- <Area /> -->
		</Svg>
	</LayerCake>

	<!-- <Canvas> -->
	<!-- <Scatter color="#0fc" /> -->
	<!-- </Canvas> -->
	<!-- 
			<Html>
				<Labels />
			</Html> -->
</div>

<style>
	.chart-container {
		margin-top: 25px;
		/* width: 950px; */
		width: auto;
		height: 300px;
	}
	h3 {
		text-align: center;
	}
</style>
