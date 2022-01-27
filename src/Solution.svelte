<script>
    import { Container, Row, Col } from "sveltestrap"
</script>

<Container>
    <div class="mt-10">
    <Row>
        <Col xs="6">
            <img class="planet" src="img/planet.gif" alt="planet_image">
        </Col>
        <Col xs="6">
            <div style="text-align: left;" class="fs-1 title">Nos solutions</div>
            <div class="mt-7" />
            <div style="text-align: left;" class="fs-5 paragraphe">
                Nuage Malin propose une solution cloud innovante en vous proposent de laisser 
                dormir vos données pour respecter la planete.
            </div>
        </Col>
    </Row>
</Container>

<style>
    .title {
		
		text-align: center;
        font-family: "Quicksand", sans-serif;
		color: #4881d5;
		margin: auto;
	}
	.paragraphe {
		text-align: center;
        font-family: "Hammersmith One", sans-serif;
		color: #858585;
		margin: auto;
	}
	.mt-10 {
		margin-top: 10%;
	}
	.mt-7 {
		margin-top: 7%;
	}
	.planet {
		width: 75%;
		margin: auto;
	}
</style>