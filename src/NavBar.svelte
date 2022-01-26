<script lang="ts">
    import {
        Navbar,
        NavbarToggler,
        Nav,
        NavItem,
        NavLink,
        Collapse,
    } from "sveltestrap";

    let isOpen = false;

    function handleUpdate(event) {
        isOpen = event.detail.isOpen;
    }
</script>

<header>
    <Navbar style="padding-top: 0; padding-bottom: 0;"class="fixed-top shadow-lg" color="light" light expand="md">
        <a class="navbar-brand" href="/">
            <img class="logo" src="img/NuageFavicon.png" alt="logo" />
            <div class="fs-2 title" style="display:inline-block">Nuage Malin</div>
        </a>
        <NavbarToggler on:click={() => (isOpen = !isOpen)} />
        <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
            <Nav class="ms-auto" navbar>
                <NavItem>
					<NavLink href="#about" id="about-nav" class="fs-6">Qui sommes-nous ?</NavLink>
				</NavItem>
                <div class="ml"/>
                <NavItem>
                    <NavLink href="#solution" class="fs-6">Nos solutions</NavLink>
                </NavItem>
                <div class="ml"/>
                <NavItem>
                    <NavLink href="#solution" class="fs-6">Notre équipe</NavLink>
                </NavItem>
            </Nav>
        </Collapse>
    </Navbar>
</header>

<style>
    a {
        text-decoration: none;
    }
    .title {
        color: #4881d5;
        font-family: "Quicksand", sans-serif;
    }
    .ml {
        margin-left: 30px;
    }
    .logo {
        width: 15%;
        margin-left: 5%;
        margin-right: 5%;
    }
</style>
