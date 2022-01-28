<script>
    import { Container, Row, Col } from "sveltestrap";
</script>

<Container>
    <div class="mt-7" />
    <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
            <div class="fs-1 title">Qui sommes-nous ?</div>
            <div class="mt-7" />
            <div class="fs-5 paragraphe">
                Nous sommes 9 étudiants à Epitech Rennes et nous développons ce
                projet dans le cadre de nos études.
            </div>
            <div class="fs-5 paragraphe">
                Notre mission est l'ultra optimisation pour que Nuage Malin
                puisse être le service le plus écologique possible.
            </div>
            <div class="mt-3" />
            <div class="fs-5 paragraphe">
                Nous développons activement une solution cloud écologique qui
                permettra d'archiver vos données tout en pensant à demain.
            </div>
            <div class="mt-15" />
            <div class="fs-1 title">Pourquoi nous faire confiance ?</div>
            <div class="mt-7" />
            <div class="fs-5 paragraphe">
                Notre équipe s'investit énormément jour après jour pour garder
                en ligne de mire leurs valeurs, celles qui leurs ont donné envie
                de créer ce projet : la réduction de notre consommation
                énergétique.
            </div>
            <div class="mt-3" />
            <div class="fs-5 paragraphe">
                Nuage Malin est un projet entièrement pensé et réfléchi en
                France, plus particulièrement à Rennes. De sa position
                géographique jusqu'à son nom, Nuage Malin s'engage à rester
                Français.
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
        font-family: "Hammersmith One", sans-serif;
        color: #858585;
        margin: auto;
    }
    .mt-15 {
        margin-top: 15%;
    }
    .mt-7 {
        margin-top: 7%;
    }
    .mt-3 {
        margin-top: 3.5%;
    }
</style>
