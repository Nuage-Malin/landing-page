<script>
    import Profile from "./Profile.svelte";
</script>

<div class="primary-container">
    <h1 class="title">Notre équipe actuelle</h1>
    <div class="grid">
        <Profile
            img="img/alexandre.jpeg"
            name="Alexandre Vranckx"
            skills="Développeur Back-end"
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
            img="img/vincent.jpeg"
            name="Vincent Andrieu"
            skills="Développeur Fullstack, DevOps"
            linkedin="https://www.linkedin.com/in/vincent-andrieu-/"
            email="mailto:vincent.andrieu@epitech.eu"
        />
        <Profile
            img="svg/unknow.svg"
            name="Florian Vanier"
            skills="Développeur Front-end, Fullstack"
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
            img="img/mathis.jpeg"
            name="Mathis Darde"
            skills="Développeur Front-end, UI & UX"
            linkedin="https://www.linkedin.com/in/mathis-darde-aa10241a3/"
            email="mailto:mathis.darde@epitech.eu"
        />
        <Profile
            img="svg/unknow.svg"
            name="Tom Seiguin"
            skills="Développeur Front-end, UI & UX"
            linkedin="https://www.linkedin.com/in/tom-seiguin-918369172/"
            email="mailto:tom.seiguin@epitech.eu"
        />
    </div>
    <br>
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
    .grid-bis {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
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