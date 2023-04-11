<script>

</script>

<div class="container">
    <div class="col">
        <img class="icon" src="icon/medail.png" alt="icon medail">
        <br>
        <div class="title">Meilleur EIP - Epitech Rennes 2022</div>
    </div>
</div>


<style>
    .container {
        display: grid;
        justify-content: center;
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
	.icon {
		width: 15%;
		margin: auto;
		display: block;
	}
    @media (max-width: 700px) {
        .container {
            margin-top: -30%;
            grid-template-columns: none;
            justify-content: center;
            gap: 2rem;
        }
        .icon {
            width: 10%;
        }
    }
</style>