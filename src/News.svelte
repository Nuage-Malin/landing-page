<script>
</script>

<div class="container flex">
	<div class="flex">
		<img class="announcement" src="img/announcement.gif" alt="announcement_image" />
	</div>
	<div class="article">
		<div>
			<h1>Nos Actualités</h1>
			<p>
				Actuellement lancé sur notre sprint Beta, nous mettons tout en place
				pour que vous puissiez tester Nuage Malin.
			</p>
			<p>
				L'objectif de ce sprint est d'avoir un résultat proche de ce que pourrait
				réellement être notre solution afin de vous permettre de tester et de
				donner vos retours. 
			</p>
			<p>
				Parler de l'avancement côté back
			</p>
			<p>
				La partie front-end de Nuage Malin continue de recevoir des ajouts comme
				le déplacement et la suppresion de vos fichiers et dossiers. Une amélioration
				de l'expérience et de l'interface utilisateur est également en cours.
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
	.announcement {
		width: 15rem;
		margin: auto;
		margin-right: 20px;
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
		.announcement {
			width: 50%;
	}
	}
	@media (max-width: 50rem) {
		.container {
			box-shadow: none;
		}
	}
</style>