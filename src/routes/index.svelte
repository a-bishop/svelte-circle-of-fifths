<script>
	import { onMount } from 'svelte';

	let ready = false;
	onMount(() => {
		ready = true;
	});

	// Hash ta♭le of key signatures, where the key is the number of sharps (positive) or flats (negative).
	// The value is an array of note names in the key signature, starting at the 12:00 clock position
	// and ending at the 11:00 position.
	const keySignatures = {
		'-13': ['C', 'G', 'D', 'A', 'E', 'B', 'G♭', 'D♭', 'A♭', 'E♭', 'B♭', 'F'],
		'-12': ['C', 'G', 'D', 'A', 'E', 'B', 'G♭', 'D♭', 'A♭', 'E♭', 'B♭', 'F'],
		'-11': ['C', 'G', 'D', 'A', 'E', 'B', 'G♭', 'D♭', 'A♭', 'E♭', 'B♭', 'F'],
		'-10': ['C', 'G', 'D', 'A', 'E', 'B', 'G♭', 'D♭', 'A♭', 'E♭', 'B♭', 'F'],
		'-9': ['C', 'G', 'D', 'A', 'E', 'B', 'G♭', 'D♭', 'A♭', 'E♭', 'B♭', 'F'],
		'-8': ['C', 'G', 'D', 'A', 'E', 'B', 'G♭', 'D♭', 'A♭', 'E♭', 'B♭', 'F'],
		'-7': ['C', 'G', 'D', 'A', 'E', 'B', 'G♭', 'D♭', 'A♭', 'E♭', 'B♭', 'F'],
		'-6': ['C', 'G', 'D', 'A', 'E', 'B', 'G♭', 'D♭', 'A♭', 'E♭', 'B♭', 'F'],
		'-5': ['C', 'G', 'D', 'A', 'E', 'B', 'G♭', 'D♭', 'A♭', 'E♭', 'B♭', 'F'],
		'-4': ['C', 'G', 'D', 'A', 'E', 'B', 'F♯', 'D♭', 'A♭', 'E♭', 'B♭', 'F'],
		'-3': ['C', 'G', 'D', 'A', 'E', 'B', 'F♯', 'D♭', 'A♭', 'E♭', 'B♭', 'F'],
		'-2': ['C', 'G', 'D', 'A', 'E', 'B', 'F♯', 'D♭', 'A♭', 'E♭', 'B♭', 'F'],
		'-1': ['C', 'G', 'D', 'A', 'E', 'B', 'F♯', 'D♭', 'A♭', 'E♭', 'B♭', 'F'],
		'0': ['C', 'G', 'D', 'A', 'E', 'B', 'F♯', 'D♭', 'A♭', 'E♭', 'B♭', 'F'],
		'1': ['C', 'G', 'D', 'A', 'E', 'B', 'F♯', 'D♭', 'A♭', 'E♭', 'B♭', 'F'],
		'2': ['C', 'G', 'D', 'A', 'E', 'B', 'F♯', 'C♯', 'A♭', 'E♭', 'B♭', 'F'],
		'3': ['C', 'G', 'D', 'A', 'E', 'B', 'F♯', 'C♯', 'G♯', 'E♭', 'B♭', 'F'],
		'4': ['C', 'G', 'D', 'A', 'E', 'B', 'F♯', 'C♯', 'G♯', 'D♯', 'B♭', 'F'],
		'5': ['C', 'G', 'D', 'A', 'E', 'B', 'F♯', 'C♯', 'G♯', 'D♯', 'A♯', 'F'],
		'6': ['C', 'G', 'D', 'A', 'E', 'B', 'F♯', 'C♯', 'G♯', 'D♯', 'A♯', 'E♯'],
		'7': ['B♯', 'G', 'D', 'A', 'E', 'B', 'F♯', 'C♯', 'G♯', 'D♯', 'A♯', 'E♯'],
		'8': ['B♯', 'G', 'D', 'A', 'E', 'B', 'F♯', 'C♯', 'G♯', 'D♯', 'A♯', 'E♯'],
		'9': ['B♯', 'G', 'D', 'A', 'E', 'B', 'F♯', 'C♯', 'G♯', 'D♯', 'A♯', 'E♯'],
		'10': ['B♯', 'G', 'D', 'A', 'E', 'B', 'F♯', 'C♯', 'G♯', 'D♯', 'A♯', 'E♯'],
		'11': ['B♯', 'G', 'D', 'A', 'E', 'B', 'F♯', 'C♯', 'G♯', 'D♯', 'A♯', 'E♯'],
		'12': ['B♯', 'G', 'D', 'A', 'E', 'B', 'F♯', 'C♯', 'G♯', 'D♯', 'A♯', 'E♯'],
		'13': ['B♯', 'G', 'D', 'A', 'E', 'B', 'F♯', 'C♯', 'G♯', 'D♯', 'A♯', 'E♯']
	};

	// corresponds to the css positioning for the scale degree and arrow at each pie segment,
	// starting at the 12:00 clock position and ending at the 11:00 position.
	const cssPositions = [
		{
			scaleDegree: {
				top: '115px',
				left: '200px'
			},
			arrow: {
				top: '151px',
				left: '240px',
				rotate: '0deg'
			}
		},
		{
			scaleDegree: {
				top: '130px',
				left: '265px'
			},
			arrow: {
				top: '163px',
				left: '288px',
				rotate: '30deg'
			}
		},
		{
			scaleDegree: {
				top: '175px',
				left: '310px'
			},
			arrow: {
				top: '200px',
				left: '325px',
				rotate: '60deg'
			}
		},
		{
			scaleDegree: {
				top: '235px',
				left: '325px'
			},
			arrow: {
				top: '248px',
				left: '337px',
				rotate: '90deg'
			}
		},
		{
			scaleDegree: {
				top: '305px',
				left: '310px'
			},
			arrow: {
				top: '295px',
				left: '324px',
				rotate: '120deg'
			}
		},
		{
			scaleDegree: {
				top: '345px',
				left: '265px'
			},
			arrow: {
				top: '328px',
				left: '290px',
				rotate: '150deg'
			}
		},
		{
			scaleDegree: {
				top: '360px',
				left: '200px'
			},
			arrow: {
				top: '341px',
				left: '240px',
				rotate: '180deg'
			}
		},
		{
			scaleDegree: {
				top: '345px',
				left: '140px'
			},
			arrow: {
				top: '328px',
				left: '194px',
				rotate: '-150deg'
			}
		},
		{
			scaleDegree: {
				top: '305px',
				left: '100px'
			},
			arrow: {
				top: '295px',
				left: '160px',
				rotate: '-120deg'
			}
		},
		{
			scaleDegree: {
				top: '235px',
				left: '80px'
			},
			arrow: {
				top: '248px',
				left: '146px',
				rotate: '-90deg'
			}
		},
		{
			scaleDegree: {
				top: '175px',
				left: '95px'
			},
			arrow: {
				top: '200px',
				left: '158px',
				rotate: '-60deg'
			}
		},
		{
			scaleDegree: {
				top: '130px',
				left: '140px'
			},
			arrow: {
				top: '164px',
				left: '194px',
				rotate: '-30deg'
			}
		}
	];

	const positionAngles = [
		'-15deg',
		'15deg',
		'45deg',
		'75deg',
		'105deg',
		'135deg',
		'165deg',
		'195deg',
		'225deg',
		'255deg',
		'285deg',
		'315deg'
	];

	const tonicMap = {
		C: { rotation: 11, arrowPosition: 0, kSig: 1, relativeMinor: 'a' },
		G: { rotation: 0, arrowPosition: 1, kSig: 2, relativeMinor: 'e' },
		D: { rotation: 1, arrowPosition: 2, kSig: 3, relativeMinor: 'b' },
		A: { rotation: 2, arrowPosition: 3, kSig: 4, relativeMinor: 'f♯' },
		E: { rotation: 3, arrowPosition: 4, kSig: 5, relativeMinor: 'c♯' },
		B: { rotation: 4, arrowPosition: 5, kSig: 6, relativeMinor: 'g♯' },
		'G♭': { rotation: 5, arrowPosition: 6, kSig: -5, relativeMinor: 'e♭' },
		'D♭': { rotation: 6, arrowPosition: 7, kSig: -4, relativeMinor: 'b♭' },
		'A♭': { rotation: 7, arrowPosition: 8, kSig: -3, relativeMinor: 'f' },
		'E♭': { rotation: 8, arrowPosition: 9, kSig: -2, relativeMinor: 'c' },
		'B♭': { rotation: 9, arrowPosition: 10, kSig: -1, relativeMinor: 'g' },
		F: { rotation: 10, arrowPosition: 11, kSig: 0, relativeMinor: 'd' },
		'D♯': { rotation: 8, arrowPosition: 9, kSig: 10, relativeMinor: 'b♯' },
		'G♯': { rotation: 7, arrowPosition: 8, kSig: 9, relativeMinor: 'e♯' },
		'C♯': { rotation: 6, arrowPosition: 7, kSig: 8, relativeMinor: 'a♯' },
		'F♯': { rotation: 5, arrowPosition: 6, kSig: 7, relativeMinor: 'd♯' }
	};

	const degrees = ['IV', 'I', 'V', 'II', 'vi', 'iii', 'vii'];

	let tonic = 'C';
	$: kSig = tonicMap[tonic].kSig;
	$: notes = keySignatures[kSig];
	$: relativeMinor = tonicMap[tonic].relativeMinor;
	$: rotation = tonicMap[tonic].rotation;
	$: angle = positionAngles[rotation];
	$: arrowPosition = tonicMap[tonic].arrowPosition;
	$: arrowTop = cssPositions[arrowPosition].arrow.top;
	$: arrowLeft = cssPositions[arrowPosition].arrow.left;
	$: arrowRotate = cssPositions[arrowPosition].arrow.rotate;
	$: tonic && ready && update();

	function update() {
		const rootStyle = document.documentElement.style;
		rootStyle.setProperty('--rotation', angle);
		rootStyle.setProperty(`--arrow-top`, arrowTop);
		rootStyle.setProperty(`--arrow-left`, arrowLeft);
		rootStyle.setProperty(`--arrow-rotate`, arrowRotate);

		let j = rotation;
		for (let i = 0; i < degrees.length; i++) {
			rootStyle.setProperty(`--degree_${degrees[i]}_top`, cssPositions[j].scaleDegree.top);
			rootStyle.setProperty(`--degree_${degrees[i]}_left`, cssPositions[j].scaleDegree.left);
			j = (j + 1) % positionAngles.length;
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
	.center {
		display: flex;
		flex-direction: column;
		margin: auto;
	}
	.tonic-selection-list {
		display: flex;
		justify-content: center;
		list-style: none;
		flex-wrap: wrap;
		cursor: pointer;
		max-width: 600px;
		margin: 20px auto;
	}
	.tonic-selection-list-item {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 120%;
		font-weight: bold;
		margin: 10px;
		padding: 10px;
		width: 25px;
		text-align: center;
		background: linen;
		box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.69);
		border-radius: 10px;
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
		/* border: 1px solid lightblue; */
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

	#relative-minor {
		width: 100px;
		display: flex;
		flex-direction: column;
		position: absolute;
		z-index: 5;
		top: 230px;
		left: 220px;
	}

	#arrow-up {
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

<body>
	<div class="center">
		<h1>Circle of Fifths</h1>
		<h3 class="center">Choose Tonic:</h3>
		<ul class="tonic-selection-list">
			{#each Object.keys(tonicMap) as tonic}
				<li class="tonic-selection-list-item" on:click={handleClick}>{tonic}</li>
			{/each}
		</ul>

		<div class="center">
			<div id="main-circle">
				<div id="inner-circle" />
				<div id="arrow-up" />
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
</body>
