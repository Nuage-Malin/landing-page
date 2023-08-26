<script>
</script>

<div class="container flex">
	<div class="flex">
		<img class="planet" src="img/planet.gif" alt="planet_image" />
	</div>
	<div class="article">
		<div>
			<h1>Notre Solution</h1>
			<p>
				Nuage Malin propose une solution cloud innovante en
				proposant de laisser dormir vos données dans une démarche écologique.
			</p>
			<p>
				Contrairement aux autres acteurs du cloud qui proposent de
				compenser les émissions de Co2 en finançant des associations
				pour, par example, planter des arbres, nous souhaitons réduire ces émissions.
				Pour se faire, plusieurs pistes ont été étudiées.
			</p>
			<p>
				Des améliorations aussi bien physique que logiciel, comme
				éteindre les machines physiques inutilisées ou encore optimiser
				les algorithmes d’allocation et d’ordonnancement afin de limiter
				la fréquence d'utilisation de certaines machines.
			</p>
			<p>
				Pour notre solution, nous avons des axes de développement différents
				qui permettent de réduire la consommation du cloud. En combinant
				ces différentes méthodes nous pensons pouvoir atteindre des
				résultats conséquents en terme d’économie d’énergie.
			</p>
		</div>
	</div>
</div>

<style>
	.container {
		margin-block: 10rem;
		/* box-shadow: 10px 10px 10px 10px #c9c9c9; */
	}
	.flex {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}
	.article {
		max-width: 40rem;
		margin-inline: auto;
		padding-inline: 3rem;
	}
	h1 {
		color: var(--c-blue);
		font-family: var(--ff-t);
		font-weight: normal;
		font-size: var(--fs-xl);
	}
	p {
		font-family: var(--ff-p);
		color: #858585;
		font-size: var(--fs-s);
	}
	.planet {
		width: 30rem;
		margin: auto;
	}

	@media (max-width: 71rem) {
		.flex {
			flex-direction: column;
		}
		.article {
			max-width: 60rem;
		}
		h1 {
			text-align: center;
		}
		.planet {
			width: 30%;
		}
	}
	@media (max-width: 50rem) {
		.container {
			box-shadow: none;
		}
	}
</style>
