<script>
    import Profile from "./Profile.svelte";
</script>

<div class="primary-container">
    <h1 class="title">Notre équipe</h1>
    <div class="grid">
        <Profile
            img="img/alexandre.jpeg"
            name="Alexandre Vranckx"
            skills="Développeur Front-end"
            linkedin="https://www.linkedin.com/in/alexandre-vranckx-955029188/"
            email="mailto:alexandre.vranckx@epitech.eu"
        />
        <Profile
            img="svg/unknow.svg"
            name="Arthur Jourdan"
            skills="Développeur Back-end"
            linkedin="https://www.linkedin.com/in/arthurjourdan/"
            email="mailto:arthur.jourdan@epitech.eu"
        />
        <Profile
            img="img/evan.jpeg"
            name="Evan Sabre"
            skills="Développeur Front-end"
            linkedin="https://www.linkedin.com/in/evansabre/"
            email="mailto:evan.sabre@epitech.eu"
        />
        <Profile
            img="svg/unknow.svg"
            name="Florian Vanier"
            skills="Développeur Front-end"
            linkedin="https://www.linkedin.com/in/florian-vanier-15b0051ab/"
            email="mailto:florian.vanier@epitech.eu"
        />
        <Profile
            img="img/nell.jpeg"
            name="Nell Fauveau"
            skills="Développeur Back-end, DevOps"
            linkedin="https://www.linkedin.com/in/nell-fauveau-a8b582224/"
            email="mailto:nell.fauveau@epitech.eu"
        />
        <Profile
            img="img/pol.jpeg"
            name="Pol Bachelin"
            skills="Développeur Front-end"
            linkedin="https://www.linkedin.com/in/polbachelin/"
            email="mailto:pol.bachelin@epitech.eu"
        />
        <Profile
            img="img/romain.jpeg"
            name="Romain Bizouarn"
            skills="Développeur Front-end, Designer"
            linkedin="https://www.linkedin.com/in/romain-bizouarn-a625361a2/"
            email="mailto:romain.bizouarn@epitech.eu"
        />
        <Profile
            img="img/sullivan.jpeg"
            name="Sullivan Geslot"
            skills="Développeur Back-end"
            linkedin="https://www.linkedin.com/in/sullivan-geslot-/"
            email="mailto:sullivan.geslot@epitech.eu"
        />
        <Profile
            img="img/vincent.jpeg"
            name="Vincent Andrieu"
            skills="Développeur Fullstack, DevOps"
            linkedin="https://www.linkedin.com/in/vincent-andrieu-/"
            email="mailto:vincent.andrieu@epitech.eu"
        />
    </div>
</div>

<style>
    .primary-container {
        background: white;
        border-radius: 20px;
        margin-inline: 15%;
        margin-top: -20%;
        padding-block: 2rem;
    }
    h1 {
		text-align: center;
		color: var(--c-blue);
        font-family: var(--ff-t);
        font-weight: normal;
        font-size: var(--fs-xl);
	}
    .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 71em) {
        .primary-container {
            margin-top: -40%;
        }
        .grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media (max-width: 500px) {
        .primary-container {
            margin-top: -80%;
            margin-inline: 5%;
        }
    }
</style>