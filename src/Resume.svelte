<script>
</script>

<div class="primary-resume flex">
    <ul>
        <li><img class="icon" src="icon/team.png" alt="icon team"></li>
        <li><div class="mt-3 title">9</div></li>
        <li><div class="title">personnes</div></li>
    </ul>
    <ul>
        <li><img class="icon" src="icon/map.png" alt="icon map"></li>
        <li><div class="mt-3 title">En France</div></li>
    </ul>
    <ul>
        <li><img class="icon" src="icon/target.png" alt="icon target"></li>
        <li><div class="mt-3 title">Optimisation,</div></li>
        <li><div class="title">Écologie</div></li>
    </ul>
</div>

<style>
    :root {
        --ml-mr-resume: 5%;
        --fs-l: clamp(0.9rem, 1vw + 0.2rem, 1.8rem);
    }
    .primary-resume {
        align-items: center;
        margin-left: var(--ml-mr-resume);
        margin-right: var(--ml-mr-resume);
    }
    .flex {
        display: flex;
        gap: var(--gap, 2rem);
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .title {
		text-align: center;
        font-family: "Quicksand", sans-serif;
		color: #4881d5;
        font-size: var(--fs-l);
		margin: auto;
	}
	.mt-3 {
		margin-top: 3.5%;
	}
	.icon {
		width: 20%;
		margin: auto;
		display: block;
	}
    @media (max-width: 1000px) {
        .icon {
		    width: 40%;
        }
    }
    @media (max-width: 700px) {
        .primary-resume {
            flex-direction: column;
        }
        .icon {
            width: 15%;
        }
    }
</style>