<script lang="ts">
    let bool = false;

    function toggle_menu() {
        if (bool === false) {
            bool = true;
        } else {
            bool = false;
        }
    }

    // export let route = "";
</script>

<header class="nav flex shadow">
    <a class="title" href="/">
        <img class="logo" src="svg/NuageWithoutText.svg" alt="logo" />
        Nuage Malin
    </a>
    <button class="icon-toggle" on:click={toggle_menu}><img src="svg/iconMenu.svg" alt="icon_menu"></button>
    <ul data-visible={bool} class="nav-right flex">
        <li><a href="#whoAreUs">Qui sommes-nous ?</a></li>
        <li><a href="#solution">Nos solutions</a></li>
        <li><a href="#team">Notre équipe</a></li>
        <li><a href="#contact">Nous contacter</a></li>
    </ul>
</header>

<style>
    .flex {
        display: flex;
        gap: var(--gap, 4rem);
    }
    .nav {
        align-items: center;
        justify-content: space-between;
        position: fixed;
        z-index: 9998;
        width: 100%;
        padding: 20px;
        margin: 0;

        background-color: white;
    }
    .nav-right {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .shadow {
        border-color: black;
    }
    a {
        text-decoration: none;
        font-size: 0.9vw;
        color: #4881d5;
    }
    .title {
        width: 27%;
        color: #4881d5;
        font-family: "Quicksand", sans-serif;
        font-size: 30px;
    }
    .logo {
        width: 15%;
        margin-left: 5%;
        margin-right: 5%;
    }
    .icon-toggle {
        display: none;
    }
    .nav-right[data-visible="true"] {
        transform: translateX(0%);
    }
    @media (max-width: 1164px) {
        .title {
            width: 65%;
        }
        .icon-toggle {
            display: block;
            position: absolute;
            right: 1rem;
            background: transparent;
            border: none;
            z-index: 9999;
        }
        .nav-right {
            position: fixed;
            inset: 0 0 0 50%;
            background: rgba(237, 242, 251, 0.7);
            backdrop-filter: blur(0.5rem);

            flex-direction: column;
            padding: min(30vh, 10rem) 3rem;
            width: 60%;
            transform: translateX(100%);
            transition: transform 600ms ease-out;
        }
        .nav-right a {
            font-size: 15px;
        }
    }
    @media (max-width: 422px) {
        .title {
            width: 100%;
        }
        .nav-right {
            padding: min(30vh, 10rem) 2rem;
        }
        .nav-right a {
            font-size: 12px;
        }
    }
</style>
