<script>

	window.addEventListener('click', function(e) {
		if (document.getElementById("amorce").contains(e.target)) {
			document.getElementById("popup-amorce").setAttribute("style", "display: flex");
			document.getElementById("popup-prototype").setAttribute("style", "display: none");
			document.getElementById("popup-alpha").setAttribute("style", "display: none");
			document.getElementById("popup-beta").setAttribute("style", "display: none");
			document.getElementById("popup-tests").setAttribute("style", "display: none");
			document.getElementById("popup-lunch").setAttribute("style", "display: none");
		}
		else if (document.getElementById("prototype").contains(e.target)) {
			document.getElementById("popup-prototype").setAttribute("style", "display: flex");
			document.getElementById("popup-amorce").setAttribute("style", "display: none");
			document.getElementById("popup-alpha").setAttribute("style", "display: none");
			document.getElementById("popup-beta").setAttribute("style", "display: none");
			document.getElementById("popup-tests").setAttribute("style", "display: none");
			document.getElementById("popup-lunch").setAttribute("style", "display: none");
		}
		else if (document.getElementById("alpha").contains(e.target)) {
			document.getElementById("popup-alpha").setAttribute("style", "display: flex");
			document.getElementById("popup-amorce").setAttribute("style", "display: none");
			document.getElementById("popup-prototype").setAttribute("style", "display: none");
			document.getElementById("popup-beta").setAttribute("style", "display: none");
			document.getElementById("popup-tests").setAttribute("style", "display: none");
			document.getElementById("popup-lunch").setAttribute("style", "display: none");
		}
		else if (document.getElementById("beta").contains(e.target)) {
			document.getElementById("popup-beta").setAttribute("style", "display: flex");
			document.getElementById("popup-amorce").setAttribute("style", "display: none");
			document.getElementById("popup-alpha").setAttribute("style", "display: none");
			document.getElementById("popup-prototype").setAttribute("style", "display: none");
			document.getElementById("popup-tests").setAttribute("style", "display: none");
			document.getElementById("popup-lunch").setAttribute("style", "display: none");
		}
		else if (document.getElementById("tests").contains(e.target)) {
			document.getElementById("popup-tests").setAttribute("style", "display: flex");
			document.getElementById("popup-amorce").setAttribute("style", "display: none");
			document.getElementById("popup-alpha").setAttribute("style", "display: none");
			document.getElementById("popup-beta").setAttribute("style", "display: none");
			document.getElementById("popup-prototype").setAttribute("style", "display: none");
			document.getElementById("popup-lunch").setAttribute("style", "display: none");
		}
		else if (document.getElementById("lunch").contains(e.target)) {
			document.getElementById("popup-tests").setAttribute("style", "display: none");
			document.getElementById("popup-amorce").setAttribute("style", "display: none");
			document.getElementById("popup-alpha").setAttribute("style", "display: none");
			document.getElementById("popup-beta").setAttribute("style", "display: none");
			document.getElementById("popup-prototype").setAttribute("style", "display: none");
			document.getElementById("popup-lunch").setAttribute("style", "display: flex");
		}
		else {
			document.getElementById("popup-amorce").setAttribute("style", "display: none");
			document.getElementById("popup-prototype").setAttribute("style", "display: none");
			document.getElementById("popup-alpha").setAttribute("style", "display: none");
			document.getElementById("popup-beta").setAttribute("style", "display: none");
			document.getElementById("popup-tests").setAttribute("style", "display: none");
			document.getElementById("popup-lunch").setAttribute("style", "display: none");
		}
	});

</script>

<div class="news container flex">
	<div class="info flex">
		<div class="flex">
			<img class="announcement" src="img/announcement.gif" alt="announcement_image" />
		</div>
		<div class="article">
			<div>
				<h1>Nos Actualités</h1>
				<p>
					Actuellement lancé sur notre sprint Business, nous travaillons sur la communication
					et le marketing du projet.
				</p>
				<p>
					L'objectif de ce sprint est de developper notre entrée sur le marché, trouver le
					business plan le plus adapté pour Nuage Malin et de continuer parallèlement à trouver
					de potentiels futurs clients. 
				</p>
				<p>
					Avec l'aide de professionnels, nous réfléchissons à plusieures manières d'obtenir des
					revenus afin de donner un vrai futur au projet.
				</p>
				<p>
					Ce sprint est le dernier dans le cadre du projet EIP, il est donc très important, nous
					continuons également à prendre en compte vos retours utilisateurs afin de corriger
					certaines fonctionnalités.
				</p>
			</div>
		</div>
	</div>
	<div class="timeline flex">
		<div class="element flex">
			<div id="popup-amorce" class="popup">
				<p class="p2">
					Cette étape représente la genèse de Nuage Malin.
					C'est à ce moment la que l'équipe s'est construite,
					que les premières idées sont arrivées en prenant en
					compte les différents thèmes de projets disponibles.
				</p>
			</div>
			<div id="amorce" class="circle">
				<h2>Amorce</h2>
			</div>
			<h2 class="date">Avril 2022</h2>
		</div>
		<div class="line" />
		<div class="element flex">
			<div id="popup-prototype" class="popup">
				<p class="p2">
					Une fois les rôles dispatchés et les objectifs fixés,
					un prototype de ce que pourrait être l'application finale
					à été développé. Ce dernier avait pour objectif de présenter
					le design de la solution ainsi que les premiers retours
					utilisateurs.
				</p>
			</div>
			<div id="prototype" class="circle">
				<h2>Prototype</h2>
			</div>
			<h2 class="date">Octobre 2022</h2>
		</div>
		<div class="line" />
		<div class="element flex">
			<div id="popup-alpha" class="popup">
				<p class="p2">
					Le sprint Alpha à été une grande avancée technique pour Nuage Malin.
					En effet lors de ce sprint nous avons repensé l'architecture de
					la solution en se basant sur les micro-services.
					Au terme de ce sprint, nous avions déjà une partie de notre solution.
				</p>
			</div>
			<div id="alpha" class="circle">
				<h2>Alpha</h2>
			</div>
			<h2 class="date">Janvier 2023</h2>
		</div>
		<div class="line" />
		<div class="element flex">
			<div id="popup-beta" class="popup">
				<p class="p2">
					Nous avons lancé la Beta durant ce sprint, notre objectif
					était d'avoir une solution stable et testable par les
					utilisateurs. Le résultat de ce sprint fut convaincant, malgré
					les contraintes hardware.
				</p>
			</div>
			<div id="beta" class="circle">
				<h2>Beta</h2>
			</div>
			<h2 class="date">Mai 2023</h2>
		</div>
		<div class="line" />
		<div class="element flex">
			<div id="popup-tests" class="popup">
				<p class="p2">
					Après la fin de la Beta, nous avons commencé le sprint Consolidation, l'objectif
					est la recherche de testeur afin de montrer le travail effectué tout au long de
					ces différents sprints et plus particulièrement sur le sprint Beta.
				</p>
			</div>
			<div id="tests" class="circle">
				<h2>Tests</h2>
			</div>
			<h2 class="date">Juillet 2023</h2>
		</div><div class="line" />
		<div class="element flex">
			<div id="popup-lunch" class="popup popup-actual">
				<p class="p2">
					Nous sommes actuellement en plein sprint Business, le dernier du projet EIP.
					L'objectif est de trouver le business plan le plus adapté.
					Pour plus d'informations, jetez un oeil aux dernières news Nuage Malin.
				</p>
			</div>
			<div id="lunch" class="actual">
				<h2 class="launch">Lancement</h2>
			</div>
			<h2 class="date">Septembre 2023</h2>
		</div>
	</div>
</div>

<style>
	.news {
		flex-direction: column;
	}
	.container {
		margin-block: 10rem;
		margin: 10%;
		/* box-shadow: 10px 10px 10px 10px #c9c9c9; */
	}
	.flex {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}
	.info {
		flex-direction: row;
	}
	.timeline {
		flex-direction: row;
		margin-top: 8%;
	}
	.element {
		flex-direction: column;
	}
	.popup {
        width: 300px;
	    height: 210px;
	    box-sizing: border-box;
        border-radius: 10px;
		background-color: var(--c-blue);
		position: absolute;
		margin-bottom: 25%;
		
		display: none;
		justify-content: center;
		align-items: center;
    }
	.popup-actual {
		background-color: #F08080;
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
	h2 {
		color: black;
		font-family: var(--ff-p);
		font-weight: normal;
		font-size: 150%;
		transform: rotate(-30deg);
		pointer-events: none;
	}
	.date {
		font-size: 100%;
		transform: rotate(0deg);
	}
	p {
		font-family: var(--ff-p);
		color: #858585;
		font-size: var(--fs-s);
	}
	.p2 {
		font-size: 18px;
		color: white;
		margin-left: 2%;
		margin-right: 2%;
		text-align: center;
	}
	.announcement {
		width: 15rem;
		margin: auto;
		margin-right: 20px;
	}
	.circle {
		display: flex;
		justify-content: center;
		align-items: center;
	  	border-radius: 50%;
	  	height: 120px;
	  	width: 120px;
	  	border: 3px solid var(--c-blue);
	}
	.launch {
		font-size: 120%;
	}
	.actual {
		display: flex;
		justify-content: center;
		align-items: center;
	  	border-radius: 50%;
	  	height: 120px;
	  	width: 120px;
	  	border: 3px solid red;
	}
	.actual:hover {
		background-color: #F08080;
	}
	.circle:hover {
		background-color: #c1d3fe;
	}
	.line {
		width: 100px;
		border-bottom: 3px solid var(--c-blue);
		margin-left: 5px;
		margin-right: 5px;
	}
	@media (max-width: 71rem) {
		.flex {
			flex-direction: row;
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