<script lang="ts">
</script>

<div class="primary-container">
    <h1 class="title">Vidéo de présentation</h1>
    <div>
        <video class="video" id="video" autoplay loop>
            <source src="mp4/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            <track kind="captions" />
        </video>
    </div>
</div>

<style>
    .video {
        min-width: 5%;
        min-height: 5%;
        max-width: 70%;
        max-height: 70%;
        width: auto;
        height: auto;
        z-index: -100;
        background-size: cover;
        overflow: hidden;
        border-radius: 20px;
        margin-left: 15%;
    }

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
    @media (max-width: 71em) {
        .primary-container {
            margin-top: -40%;
        }
    }
    @media (max-width: 500px) {
        .primary-container {
            margin-top: -80%;
            margin-inline: 5%;
        }
    }
</style>
