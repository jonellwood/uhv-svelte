<script>
	import carrot from './carrott.png';
</script>

<div class="logo">
	<span class="inner">
		<span class="est">Home of the</span>
		<img src={carrot} alt="cute carrot" width="75" />
		<h1>
			<span class="make-one">
				<span class="letter unhealthy">Unhealthy</span>
				<span class="letter vegan">Vegan</span>
			</span>
		</h1>
	</span>
</div>

<style>
	.logo {
		font-size: 0.5em;
		height: 30em;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
		margin: 0;
		background: #1c1626;
		background-size: 150em;
		/* border: 1px solid black; */
		margin: 1px;
		display: grid;
		grid-template-rows: 50% 1fr 1fr;
		align-content: center;
		border-radius: 50%;
	}
	.est {
		position: relative;
		font-size: 5.5em;
		font-weight: 500;
		align-self: center;
		color: green;
		z-index: 2;
		-webkit-text-stroke-width: 1px;
		-webkit-text-stroke-color: white;
	}
	.inner {
		margin: 10px;
		align-content: center;
		text-align: center;
	}
	h1 {
		display: grid;
		grid-template-rows: 8fr 2fr;
		align-items: center;
		margin: 0;
		grid-row: 2 / span 2;
		grid-gap: 2em;
		transform: translateY(-0.7em);
	}

	.letter {
		font-size: 5em;
		--scale: 1;
		--rotate: -10deg;
		--translateX: 0;
		--translateY: 0;
		--rotateX: 0deg;
		/* display: inline-block; */
		line-height: 1;
	}
	.make-one {
		display: grid;
		grid-template-columns: 1fr;
		text-align: center;
		margin-top: -10px;
	}
	.vegan {
		color: orange;
		font-size: 3.2em;
		letter-spacing: 0.2em;
		transform: rotate(-5deg);
		perspective: 100px;
		text-shadow: 4px -5px 7px rgba(102, 102, 102, 0.9);
		/* margin-top: -45px; */
	}
	.unhealthy {
		color: orange;
		/* transform: scale(1); */
		transform: rotate(5deg);
		/* display: block; */
		text-shadow: 0.18em 0.18em 0 rgba(0, 0, 0, 0.05);
		perspective: 100px;
		letter-spacing: 0.1em;
		text-shadow: -4px 5px 7px rgba(102, 102, 102, 0.9);
	}
	img {
		position: relative;
		z-index: 1;
		transform: rotate(-75deg);
		/* margin-left: 50px; */
		/* margin-top: 20px; */
	}
</style>
