<script>
    import { links } from "svelte-routing";
    import { Col, Row } from "sveltestrap";

    const src = "img/NuageShocked.svg";
    function handleFollowClick() {
        const element = document.getElementById("linkedin");
        element.click();
    }
    function handleQuestionClick() {
        const element = document.getElementById("question");
        element.click();
    }
</script>

<!-- svelte-ignore a11y-missing-content -->
<a
    href="https://www.linkedin.com/company/nuage-malin/"
    target="_blank"
    id="linkedin"
    hidden
/>
<!-- svelte-ignore a11y-missing-content -->
<a
    href="https://docs.google.com/forms/d/e/1FAIpQLSdJnwaO0kW8Oz6FDjxTzUHthHNVbMxGNhiZQfsuwziqiDji4Q/viewform?usp=pp_url"
    target="_blank"
    id="question"
    use:links
    hidden
/>

<div class="main">
    <Row>
        <Col>
            <p class="title fs-1">Ici bientôt, une éclaircie</p>
            <p class="para fs-5">Cette page est en construction...</p>
            <p class="para margin-top fs-5">Pour nous aider :</p>
            <div class="align_button" on:click={handleQuestionClick}>
                <button class="fs-4 blue button">Une question ?</button>
                <button class="fs-4 green button" on:click={handleFollowClick}>Suivez-nous !</button>
            </div>
        </Col>
        <Col>
            <div class="margin-left">
                <img class="img margin-left" {src} alt="" />
                <p class="fs-4 title margin-top">
                    Vous voulez archiver vos données en pensant à demain ? Utilisez Nuage Malin.
                </p>
            </div>
        </Col>
    </Row>
</div>

<style>
    .main {
        position: absolute;
        margin-top: 13%;
        margin-left: 7%;
    }

    .title {
        text-align: center;
        max-width: 484px;
        font-family: "Quicksand", sans-serif;
        color: #4881d5;
    }

    .para {
        text-align: center;
        max-width: 484px;
        font-family: "Hammersmith One", sans-serif;
        color: #abc4ff;
    }

    .align_button {
        margin-top: 5%;
        margin-left: 15%;
    }

    .button {
        margin-top: 5%;
        width: 331px;
        height: 100%;
        border: 2px solid;
        box-sizing: border-box;
        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 25px;

        text-align: center;
        font-family: "Hammersmith One", sans-serif;
        color: #4881d5;
    }

    .blue {
        background: #c1d3fe;
        border-color: #4881d5;
    }

    .blue:active {
        background: #abc4ff;
        border-color: #4881d5;
    }

    .green {
        background: #bdf1c3;
        border-color: #4881d5;
    }

    .green:active {
        background: rgb(161, 207, 167);
        border-color: #4881d5;
    }

    .img {
        width: 75%;
        height: auto;
    }

    .margin-top {
        margin-top: 10%;
    }
    .margin-left {
        margin-left: 5%;
    }
</style>
