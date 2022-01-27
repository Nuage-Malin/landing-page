<script>
	import NavBar from "./NavBar.svelte";
	import WhoAreUS from "./WhoAreWe.svelte"
	import Solution from "./Solution.svelte"
	import Team from "./Team.svelte"
	import Footer from "./Footer.svelte"
	import MainFrame from "./MainFrame.svelte"
    import Not404 from "./404not404.svelte";
    import { Router, Route } from "svelte-routing";
	import { Parallax, ParallaxLayer } from 'svelte-parallax'
	import {
		Container,
		Row,
		Col 
	} from 'sveltestrap'

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
<NavBar />
<Router {url}>
    <Route path="/">
		<Parallax sections={3.2} config={{stiffness: 0.3}}>
			<ParallaxLayer rate={0} offset={0}>
				<img class="banner" src="img/BannerNuageMalin.gif" alt="banner">
			</ParallaxLayer>
			<ParallaxLayer rate={0} offset={1}>
				<img class="banner" src="img/BannerNuageMalin.png" alt="banner">
			</ParallaxLayer>
			<ParallaxLayer rate={1} offset={0.99} style={"background-color: white;"}>
				<WhoAreUS />
			</ParallaxLayer>
			<ParallaxLayer rate={0.5} offset={1.3}>
				<Container>
					<Row>
						<Col xs="6" sm="4">
							<img class="icon" src="icon/team.png" alt="icon team">
							<div class="mt-3"/>
							<div class="fs-2 title">9</div>
							<div class="fs-2 title">personnes</div>
						</Col>
						<Col xs="6" sm="4">
							<img class="icon" src="icon/map.png" alt="icon map">
							<div class="mt-3"/>
							<div class="fs-2 title">En France</div>
						</Col>
						<Col xs="6" sm="4">
							<img class="icon" src="icon/target.png" alt="icon target">
							<div class="mt-3"/>
							<div class="fs-2 title">Optimisation,</div>
							<div class="fs-2 title">Écologie</div>
						</Col>
					</Row>
				</Container>
			</ParallaxLayer>
			<ParallaxLayer rate={0} offset={2}>
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
	<Route path="/404">
        <NavBar />
        <MainFrame>
            <Not404 />
        </MainFrame>
    </Route>
</Router>

<style>
	.title {
		
		text-align: center;
        font-family: "Quicksand", sans-serif;
		color: #4881d5;
		margin: auto;
	}
	.mt-3 {
		margin-top: 3.5%;
	}
	.banner {
		width: 100%;
		height: 800px;
		object-fit: cover;
	}
	.icon {
		width: 26%;
		margin: auto;
		display: block;
	}
</style>