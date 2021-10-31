<script>
	import { browser } from '$app/env';
	import { keySignatures, positions, tonicMap, degrees } from '../data';
	
	let tonic = 'C';
	$: data = tonicMap[tonic];
	$: notes = keySignatures[data.kSig];
	$: relativeMinor = data.relativeMinor;
	$: angle = positions[data.rotation].angle;
	$: arrowPosition = data.arrowPosition;
	$: arrowTop = positions[arrowPosition].arrow.top;
	$: arrowLeft = positions[arrowPosition].arrow.left;
	$: arrowRotate = positions[arrowPosition].arrow.rotate;
	$: browser && tonic && update();

	function update() {
		const rootStyle = document.documentElement.style;
		rootStyle.setProperty('--rotation', angle);
		rootStyle.setProperty(`--arrow-top`, arrowTop);
		rootStyle.setProperty(`--arrow-left`, arrowLeft);
		rootStyle.setProperty(`--arrow-rotate`, arrowRotate);

		let j = data.rotation;
		for (let i = 0; i < degrees.length; i++) {
			rootStyle.setProperty(`--degree_${degrees[i]}_top`, positions[j].scaleDegree.top);
			rootStyle.setProperty(`--degree_${degrees[i]}_left`, positions[j].scaleDegree.left);
			j = (j + 1) % positions.length;
		}
	}

	function handleClick(e) {
		tonic = e.target.innerHTML;
	}
</script>

<style>
	:root {
		--white: #fff;
		--grey: lightgrey;
		--rotation: -45deg;
		--degree_I_top: 115px;
		--degree_I_left: 200px;
		--degree_V_top: 130px;
		--degree_V_left: 265px;
		--degree_II_top: 175px;
		--degree_II_left: 310px;
		--degree_vi_top: 235px;
		--degree_vi_left: 325px;
		--degree_iii_top: 305px;
		--degree_iii_left: 310px;
		--degree_vii_top: 345px;
		--degree_vii_left: 265px;
		--degree_IV_top: 130px;
		--degree_IV_left: 140px;
		--arrow-top: 151px;
		--arrow-left: 240px;
		--arrow-rotate: 0deg;
	}
	.fixed-width {
		width: 500px;
	}
	@media (min-width: 720px) {
		.fixed-width {
			width: 720px;
		}
	}
	.flex-row {
		display: flex;
		flex-direction: row;
	}
	.flex-column {
		display: flex;
		flex-direction: column;
		margin: auto;
	}
	@media (max-width: 520px) {
		.sm-overflowx-scroll {
			/* overflow-x: scroll; */
		}
	}
	.tonic-selection-list-item {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 120%;
		font-weight: bold;
		padding: 10px;
		width: 25px;
		text-align: center;
		background: linen;
		box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.69);
		border-radius: 10px;
		cursor: pointer;
	}
	.line {
		position: absolute;
		width: 1px;
		background-color: black;
		z-index: 3;
		top: 1px;
		left: 250px;
		height: 500px;
	}
	.line_1 {
		transform: rotate(15deg);
	}
	.line_2 {
		transform: rotate(-15deg);
	}
	.line_3 {
		transform: rotate(-45deg);
	}
	.line_4 {
		transform: rotate(-75deg);
	}
	.line_5 {
		transform: rotate(-105deg);
	}
	.line_6 {
		transform: rotate(-135deg);
	}

	.note {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 5;
		font-size: 2rem;
		font-weight: bold;
		text-align: center;
		width: 100px;
	}
	.note_7 {
		bottom: 30px;
		right: 200px;
	}
	.note_6 {
		bottom: 60px;
		right: 100px;
	}
	.note_5 {
		bottom: 130px;
		right: 30px;
	}
	.note_4 {
		bottom: 225px;
		right: 0px;
	}
	.note_3 {
		top: 130px;
		right: 30px;
	}
	.note_2 {
		top: 60px;
		right: 100px;
	}
	.note_1 {
		top: 30px;
		left: 200px;
	}
	.note_12 {
		top: 60px;
		left: 100px;
	}
	.note_11 {
		top: 130px;
		left: 30px;
	}
	.note_10 {
		bottom: 225px;
		left: 0px;
	}
	.note_9 {
		bottom: 130px;
		left: 30px;
	}
	.note_8 {
		bottom: 60px;
		left: 100px;
	}

	.scaleDegree {
		position: absolute;
		z-index: 3;
		font-size: 1.5rem;
		font-weight: bold;
		text-align: center;
		width: 100px;
	}
	.degree_I {
		top: var(--degree_I_top);
		left: var(--degree_I_left);
	}
	.degree_V {
		top: var(--degree_V_top);
		left: var(--degree_V_left);
	}
	.degree_II {
		top: var(--degree_II_top);
		left: var(--degree_II_left);
	}
	.degree_vi {
		top: var(--degree_vi_top);
		left: var(--degree_vi_left);
	}
	.degree_iii {
		top: var(--degree_iii_top);
		left: var(--degree_iii_left);
	}
	.degree_vii {
		top: var(--degree_vii_top);
		left: var(--degree_vii_left);
	}
	.degree_IV {
		top: var(--degree_IV_top);
		left: var(--degree_IV_left);
	}
	#main-circle {
		position: relative;
		height: 500px;
		width: 500px;
		border-radius: 50%;
		border: 0;
	}
	#main-border {
		position: absolute;
		height: 500px;
		width: 500px;
		border-radius: 50%;
		border: 1px solid black;
		z-index: 4;
	}
	#inner-circle {
		position: absolute;
		border: 1px solid black;
		height: 200px;
		width: 200px;
		top: 150px;
		left: 150px;
		border-radius: 50%;
		background-color: var(--white);
		z-index: 5;
	}
	#mid-circle {
		position: absolute;
		border: 1px solid black;
		height: 300px;
		width: 300px;
		top: 100px;
		left: 100px;
		border-radius: 50%;
		z-index: 4;
	}
	#tonic-title {
		margin-bottom: 1.5rem;
	}
	#tonic-selection-list {
		display: grid;
		row-gap: 1rem;
		column-gap: 1rem;
		grid-template-columns: repeat(4, 1fr);
		list-style-type: none;
		margin: 0;
		padding: 0;
		margin-bottom: 2rem;
	}
	@media (min-width: 520px) {
		#tonic-selection-list {
			grid-template-columns: repeat(8, 1fr);
		}
	}
	#relative-minor {
		width: 100px;		
		display: flex;
		flex-direction: column;
		position: absolute;
		z-index: 5;
		top: 230px;
		left: 220px;
	}
	#arrow {
		width: 0;
		height: 0;
		border-left: 10px solid transparent;
		border-right: 10px solid transparent;
		border-bottom: 10px solid black;
		position: absolute;
		z-index: 5;
		top: var(--arrow-top);
		left: var(--arrow-left);
		transform: rotate(var(--arrow-rotate));
	}
	#semicircle {
		position: absolute;
		height: 500px;
		width: 500px;
		border-radius: 1000px;
		transform: rotate(var(--rotation));
		z-index: 3;
		background-color: var(--secondary-color);
	}
	#semicircle::before {
		content: '';
		position: absolute;
		background-color: lightgray;
		width: 250px;
		height: 500px;
		border-top-left-radius: 1000px;
		border-bottom-left-radius: 1000px;
	}
	#semicircle::after {
		content: '';
		position: absolute;
		background-color: var(--secondary-color);
		width: 250px;
		height: 500px;
		top: 63px;
		right: 16px;
		transform: rotate(30deg);
		border-top-right-radius: 1000px;
		border-bottom-right-radius: 1000px;
	}
</style>

	<div class="flex-column fixed-width">
		<h1>Circle of Fifths</h1>
		<div class="flex-column">
			<div class="flex-column">
				<h3 class="flex-column" id="tonic-title">Choose Tonic:</h3>
				<ul id="tonic-selection-list">
					{#each Object.keys(tonicMap) as tonic}
						<li class="tonic-selection-list-item" on:click={handleClick}>{tonic}</li>
					{/each}
				</ul>
			</div>

		</div>

		<div class="flex-column sm-overflowx-scroll" >
			<div id="main-circle">
				<div id="inner-circle" />
				<div id="arrow" />
				<div id="relative-minor">({relativeMinor} minor)</div>
				<div id="mid-circle" />
				<div id="semicircle" />
				<div id="main-border" />

				{#each Array(6) as _, i}
					<div class="line line_{i + 1}" />
				{/each}

				{#each notes as note, i}
					<div class="note note_{i + 1}">{note}</div>
				{/each}

				{#each degrees as degree}
					<div class="scaleDegree degree_{degree}">
						{degree}
						{#if degree === 'vii'}&deg;{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
