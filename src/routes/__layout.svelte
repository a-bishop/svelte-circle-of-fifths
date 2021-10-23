<script lang="ts">
	// import Header from '$lib/Header/index.svelte';
	import '../app.css';
</script>

<style>
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	/* footer a {
		font-weight: bold;
	} */

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>

<main>
	<slot />
</main>

<footer>
	<!-- <p>
		Made with
		<a href="https://kit.svelte.dev">kit.svelte.dev</a>
	</p> -->
</footer>
