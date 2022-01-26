<script>
	import NavBar from "./NavBar.svelte";
	import { Parallax, ParallaxLayer } from 'svelte-parallax'
	import {
		Container,
		Row,
		Col 
	} from 'sveltestrap'
</script>

<svelte:head>
    <style>
        @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Hammersmith+One&display=swap");
    </style>
</svelte:head>

<div id="about" style="position: relative; top: 400px;"/>
<div id="solution" style="position: relative; top: 1175px;"/>
<NavBar />
<Parallax sections={5} config={{stiffness: 0.3}}>
	<ParallaxLayer rate={0} offset={0}>
		<img class="banner" src="img/BannerNuageMalin.gif" alt="banner">
	</ParallaxLayer>
	<ParallaxLayer rate={0} offset={1}>
		<img class="banner" src="img/BannerNuageMalin.png" alt="banner">
	</ParallaxLayer>
	<ParallaxLayer rate={1} offset={0.99} style={"background-color: white; height: 21% !important;"}>
		<Container>
			<div class="mt-7" />
			<Row>
				<Col sm="12" md={{ size: 6, offset: 3 }}>
					<div class="fs-1 title">Qui sommes-nous ?</div>
					<div class="mt-7" />
					<div class="fs-5 paragraphe">
						Nous sommes 9 étudiants à Epitech Rennes et nous développons 
						ce projet dans le cadre de nos études.
					</div>
					<div class="fs-5 paragraphe">
						Notre mission est l'ultra optimisation pour que Nuage Malin 
						puisse être le service le plus écologique possible.
					</div>
					<div class="mt-3" />
					<div class="fs-5 paragraphe">
						Nous développons activement une solution cloud écologique qui permettra
						d'archiver vos données tout en pensant à demain.
					</div>
					<div class="mt-15" />
					<div class="fs-1 title">Pourquoi nous faire confiance ?</div>
					<div class="mt-7" />
					<div class="fs-5 paragraphe">
						Notre équipe s'investit énormément jour après jour pour garder en ligne de mire 
						leurs valeurs, celles qui leurs a donné envie de créer ce projet :
						la réduction d'énergie.
					</div>
					<div class="mt-3" />
					<div class="fs-5 paragraphe">
						Nuage Malin est un projet entièrement pensé et réfléchie en France plus 
						particulièrement à Rennes. De sa position géographique jusqu'à son nom 
						Nuage Malin s'engage à rester Francer.
					</div>
				</Col>
			</Row>
		</Container>
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
	<ParallaxLayer rate={1} offset={1.70} style={"background-color: white;"}>
		<Container>
			<div class="mt-10">
			<Row>
				<Col sm="12" md={{ size: 6, offset: 3 }}>
					<div class="fs-1 title">Nos solutions</div>
					<div class="mt-7" />
					<div class="fs-5 paragraphe">
						Nuage Malin propose une solution cloud innovante.
					</div>
				</Col>
			</Row>
		</Container>
	</ParallaxLayer>
</Parallax>

<style>
	.title {
		text-align: center;
        font-family: "Quicksand", sans-serif;
		color: #4881d5;
	}
	.paragraphe {
        font-family: "Hammersmith One", sans-serif;
		color: #858585;
	}
	.mt-15 {
		margin-top: 15%;
	}
	.mt-10 {
		margin-top: 10%;
	}
	.mt-7 {
		margin-top: 7%;
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
		width: 25%;
		margin: auto;
		display: block;
	}
</style>