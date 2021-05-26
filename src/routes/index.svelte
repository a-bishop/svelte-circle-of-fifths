<script>
import { tweened } from 'svelte/motion'; 
import { elasticInOut } from 'svelte/easing';

const progress = tweened(0.3, {
    duration: 400,
    easing: elasticInOut
});

</script>

<h1>Circle of Fifths</h1>

<progress value={$progress}></progress>

<div class="flex">
    <button on:click="{() => progress.set(0)}">
        0%
    </button>

    <button on:click="{() => progress.set(0.25)}">
        25%
    </button>

    <button on:click="{() => progress.set(0.5)}">
        50%
    </button>

    <button on:click="{() => progress.set(0.75)}">
        75%
    </button>

    <button on:click="{() => progress.set(1)}">
        100%
    </button>
</div>

<style>
	progress {
		display: block;
		width: 100%;
    }
    .flex {
        display: flex;
        justify-content: center;
    }
    .flex > * {
        margin-left: 5px;
    }
</style>
