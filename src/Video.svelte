<script lang="ts">
    import VideoPlayer from 'svelte-video-player';
    // let video: HTMLVideoElement;

    // video = document.querySelector("video");
    // video.addEventListener('DOMContentLoaded', () => {
    //     video.addEventListener("click", playRNot);
    // });


    // function playRNot() {
    //     console.log("test");
    //     video.played ? video.pause() : video.play(); arguments[0].preventDefault();
    // }
</script>

<div class="primary-container">
    <h1 class="title">Vidéo de présentation</h1>
    <div class=video>
        <VideoPlayer source="mp4/video.mp4" color="#4881d5" poster="img/poster_video.png"/>
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
