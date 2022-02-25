<script>
</script>

<div class="container">
    <div class="col">
        <img class="icon" src="icon/team.png" alt="icon team">
        <div class="mt-3 title">9</div>
        <div class="title">personnes</div>
    </div>
    <div>
        <img class="icon" src="icon/map.png" alt="icon map">
        <div class="mt-3 title">En France</div>
    </div>
    <div>
        <img class="icon" src="icon/target.png" alt="icon target">
        <div class="mt-3 title">Optimisation,</div>
        <div class="title">Écologie</div>
    </div>
</div>

<style>
    .container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin-inline: auto;
    }
    .col {
        align-items: center;
    }
    .title {
		color: var(--c-blue);

        text-align: center;
        font-size: var(--fs-xl);
        font-family: var(--ff-t);
	}
	.mt-3 {
		margin-top: 3.5%;
	}
	.icon {
		width: 15%;
		margin: auto;
		display: block;
	}
    @media (max-width: 700px) {
        .container {
            margin-top: -30%;
            grid-template-columns: none;
            grid-template-rows: repeat(3, 1fr);
            gap: 2rem;
        }
        .icon {
            width: 10%;
        }
    }
</style>