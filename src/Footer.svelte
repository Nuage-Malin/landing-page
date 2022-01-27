<script>
    import { Container, Row, Col } from "sveltestrap"
</script>

<footer style="background: white;" class="shadow-lg">
	<Container>
        <Row>
            <Col xs="6">
		        <img class="logo" src="img/NuageMalin_logo2.png" alt="logo_NuageMalin">
            </Col>
            <Col xs="6">
		        <div class="fs-1 title" style="margin-top: 15%">Contactez-nous !</div>
            </Col>
        </Row>
        <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
                <a href="https://www.instagram.com/nuagemalin/"><img class="icon ml-30" src="icon/instagram.png" alt="contact_instagram_NuageMalin"></a>
                <a href="https://www.linkedin.com/company/nuage-malin"><img class="icon" src="icon/linkedinBlue.png" alt="contact_linkedin_NuageMalin"></a>
                <a href="https://twitter.com/NuageMalin_fr"><img class="icon" src="icon/twitter.png" alt="contact_twitter_NuageMalin"></a>
            </Col>
        </Row>
        <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
                <div class="fs-3 title centre mb-7">nuagemalinfr@protonmail.com</div>
            </Col>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
                <div class="fs-6 title centre mb-7">
                    <a href="404">Conditions générales de vente</a> - <a href="/404">Politique de confidentialité</a> - <a href="/404">Mentions Légales</a> - <a href="/404">Attestation conformité RGPD</a></div>
            </Col>
        </Row>
	</Container>
</footer>

<style>
    .title {
        font-family: "Quicksand", sans-serif;
		color: #4881d5;
		margin: auto;
	}
    .logo {
        margin-left: 40%;
        width: 40%;
    }
    .icon {
        width: 7%;
        margin-right: 7%;
        margin-bottom: 7%;
    }
    .ml-30 {
        margin-left: 30%;
    }
    .mb-7 {
        margin-bottom: 7%;
    }
    .centre {
        text-align: center;
    }
    a {
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
</style>