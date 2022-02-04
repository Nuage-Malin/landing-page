<script>
	import NavBar from "./NavBar.svelte";
	import WhoAreUS from "./WhoAreWe.svelte"
	import Resume from "./Resume.svelte"
	import Solution from "./Solution.svelte"
	import Team from "./Team.svelte"
	import Footer from "./Footer.svelte"
	import MainFrame from "./MainFrame.svelte"
    import Not404 from "./404not404.svelte";
    import { Router, Route } from "svelte-routing";
	import { Parallax, ParallaxLayer } from 'svelte-parallax'

	let resume = 0.5;

	function upRate() {
		if (window.screen.width <= 700) {
			resume = -0.7;
		} else {
			resume = 0.5;
		}
		return resume;
	}
	console.log(upRate());

    export const url = "";
</script>

<svelte:head>
    <style>
        @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Hammersmith+One&display=swap");
    </style>
</svelte:head>

<div id="whoAreUs" style="position: relative; top: 400px;"/>
<div id="solution" style="position: relative; top: 1175px;"/>
<div id="team" style="position: relative; top: 1750px;"/>
<div id="contact" style="position: relative; top: 2500px;"/>
<Router {url}>
    <Route path="*">
		<NavBar route="/" />
		<Parallax sections={3.2} config={{stiffness: 0.3}}>
			<ParallaxLayer rate={0} offset={1}>
				<img class="banner" src="img/BannerNuageMalin.png" alt="banner">
			</ParallaxLayer>
			<ParallaxLayer rate={resume} on:update={upRate} offset={1.31}>
				<Resume />
			</ParallaxLayer>
			<ParallaxLayer rate={0} offset={0}>
				<img class="banner" src="img/BannerNuageMalin.gif" alt="banner">
			</ParallaxLayer>
			<ParallaxLayer rate={1} offset={0.99} style={"background-color: white; height: 34% !important;"}>
				<WhoAreUS />
			</ParallaxLayer>
			<ParallaxLayer rate={0} offset={1.8}>
				<img src="img/BannerNuageMalin.png" alt="banner">
			</ParallaxLayer>
			<ParallaxLayer rate={1} offset={1.70} style={"background-color: white;"}>
				<Solution />
			</ParallaxLayer>
			<ParallaxLayer rate={2} offset={2}>
				<Team />
			</ParallaxLayer>
		</Parallax>
		<Footer />
	</Route>
	<!-- <Route path="*">
        <NavBar route="404"/>
        <MainFrame>
            <Not404 />
        </MainFrame>
    </Route> -->
</Router>

<style>
	.banner {
		width: 100%;
		height: 800px;
		object-fit: cover;
	}
</style>