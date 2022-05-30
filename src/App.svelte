<script>
	import NavBar from "./NavBar.svelte";
	import WhoAreUS from "./WhoAreWe.svelte";
	import Resume from "./Resume.svelte";
	import Solution from "./Solution.svelte";
	import Team from "./Team.svelte";
	import Footer from "./Footer.svelte";
	import Video from "./Video.svelte";
	import MainFrame from "./MainFrame.svelte";
	import Not404 from "./404not404.svelte";
	import { Router, Route } from "svelte-routing";
	import { Parallax, ParallaxLayer } from "svelte-parallax";

	let resume = 3.11;

	export const url = "";
</script>

<svelte:head>
	<style>
		@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap");
		@import url("https://fonts.googleapis.com/css2?family=Hammersmith+One&display=swap");
	</style>
</svelte:head>

<div id="whoAreUs" style="position: relative; top: 320px;" />
<div id="solution" style="position: relative; top: 950px;" />
<div id="video" style="position: relative; top: 1300px;" />
<div id="team" style="position: relative; top: 1550px;" />
<div id="contact" style="position: relative; top: 2500px;" />
<Router {url}>
	<Route path="*">
		<NavBar route="/" />
		<Parallax sections={3.7} config={{ stiffness: 0.3 }}>
			<ParallaxLayer rate={0} offset={1}>
				<img
					class="banner"
					src="img/BannerNuageMalin.png"
					alt="banner"
				/>
			</ParallaxLayer>
			<ParallaxLayer rate={0.5} offset={1.3}>
				<Resume />
			</ParallaxLayer>
			<ParallaxLayer
				rate={0}
				offset={0}
				style={"background-color: white;"}
			/>
			<ParallaxLayer
				rate={0}
				offset={2.7}
				style={"background-color: white;"}
			/>
			<ParallaxLayer rate={0} offset={0}>
				<img
					class="banner"
					src="img/BannerNuageMalin.gif"
					alt="banner"
				/>
			</ParallaxLayer>
			<ParallaxLayer
				rate={1}
				offset={0.99}
				style={"background-color: white; display: flex !important; justify-content: center !important;"}
			>
				<WhoAreUS />
			</ParallaxLayer>
			<ParallaxLayer rate={0} offset={1.9}>
				<img
					class="banner"
					src="img/BannerNuageMalin.png"
					alt="banner"
				/>
			</ParallaxLayer>
			<ParallaxLayer
				rate={1}
				offset={1.7}
				style={"background-color: white; display: flex !important; justify-content: center !important;"}
			>
				<Solution />
			</ParallaxLayer>
			<ParallaxLayer rate={0} offset={2.8}>
				<img
					class="banner"
					src="img/BannerNuageMalin.png"
					alt="banner"
				/>
			</ParallaxLayer>
			<ParallaxLayer rate={2} offset={2}>
				<Video />
				<div style="margin: 500px;" />
				<Team />
			</ParallaxLayer>
			<!-- <ParallaxLayer rate={1} offset={3}>
				<Team />
			</ParallaxLayer> -->
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
	:root {
		/* Font Family */
		--ff-t: "Quicksand", sans-serif;
		--ff-p: "Hammersmith One", sans-serif;
		/* Font-Size */
		--fs-xl: clamp(1.5rem, 1vw + 1rem, 2.5rem);
		--fs-l: clamp(1rem, 1vw + 0.7rem, 2rem);
		--fs-m: clamp(0.9rem, 1vw + 0.2rem, 1.8rem);
		--fs-s: clamp(0.8rem, 1vw + 0.6rem, 1.2rem);
		--fs-xs: clamp(0.8rem, 1vw + 0.1rem, 1rem);
		/* Color */
		--c-gray: #edf2fb;
		--c-blue-sky: #c1d3fe;
		--c-blue-sky2: #abc4ff;
		--c-blue: #4881d5;
		--c-green: #bdf1c3;
	}
	.banner {
		width: 100%;
		height: 909px;
		object-fit: cover;
	}
</style>
