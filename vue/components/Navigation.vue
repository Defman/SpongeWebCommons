<template>
  <b-navbar toggleable="md" fixed="top">
    <b-container>
      <div class="navbar-toggler sponge-menu" aria-controls="sponge-menu" v-on:click="toggleSpongeMenu" v-on:mouseenter="showSpongeMenu" v-on:mouseleave="hideSpongeMenu"
           :class="spongeMenu ? 'collapsed' : null">
        <div tabindex="1" class="navbar-brand">
          <div class="logo"></div>
          <span class="sponge-headline">Sponge</span>
          <font-awesome-icon :icon="['fas', 'chevron-down']" :fixed-width="true"/>
        </div>
      </div>
      <b-collapse v-model="spongeMenu" id="sponge-menu">
        <b-navbar-nav class="sponge-dark" v-on:mouseleave="hideSpongeMenu">
          <b-nav-item active href="https://www.spongepowered.org">
            <font-awesome-icon :icon="['fas', 'home']" :fixed-width="true"/>
            <span>Homepage</span>
          </b-nav-item>
          <b-nav-item href="https://forums.spongepowered.org">
            <font-awesome-icon :icon="['fab', 'discourse']" :fixed-width="true"/>
            <span>Forums</span>
          </b-nav-item>
          <b-nav-item href="https://github.com/SpongePowered">
            <font-awesome-icon :icon="['fas', 'code']" :fixed-width="true"/>
            <span>Code</span>
          </b-nav-item>
          <b-nav-item href="https://docs.spongepowered.org">
            <font-awesome-icon :icon="['fas', 'book']" :fixed-width="true"/>
            <span>Docs</span>
          </b-nav-item>
          <b-nav-item href="https://jd.spongepowered.org">
            <font-awesome-icon :icon="['fas', 'graduation-cap']" :fixed-width="true"/>
            <span>Javadocs</span>
          </b-nav-item>
          <b-nav-item href="https://ore.spongepowered.org">
            <font-awesome-icon :icon="['fas', 'plug']" :fixed-width="true"/>
            <span>Plugins</span>
          </b-nav-item>
          <b-nav-item href="https://www.spongepowered.org/downloads">
            <font-awesome-icon :icon="['fas', 'download']" :fixed-width="true"/>
            <span>Downloads</span>
          </b-nav-item>
          <b-nav-item href="https://www.spongepowered.org/chat">
            <font-awesome-icon :icon="['fas', 'comments']" :fixed-width="true"/>
            <span>Chat</span>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>

      <div class="navbar-toggler sub-menu" aria-controls="sub-menu" @click="toggleSubMenu()" :class="subMenu ? 'collapsed' : null">
        <font-awesome-icon :icon="['fas', 'bars']" size="lg"/>
      </div>
      <b-collapse is-nav v-model="subMenu" id="sub-menu">
        <b-navbar-nav class="ml-auto sponge-dark">
          <slot></slot>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import Vue from "vue"
  import Component from "vue-class-component"

  @Component({
    components: {
      FontAwesomeIcon
    }
  })
  export default class SpongeNavigation extends Vue {
    spongeMenu = false;
    subMenu = false;

    mounted() {
      // Checks if user device has a small screen
      window.mobile = window.innerWidth <= 768;
      window.addEventListener("resize", function () {
        window.mobile = window.innerWidth <= 768;
      });
    }

    showSpongeMenu() {
      if (!window.mobile) { // Hover should be only enabled on wide screens
        if (this.subMenu) {
          this.subMenu = false;
        }

        this.spongeMenu = true;
      }
    }

    hideSpongeMenu(event) {
      if (!window.mobile) { // Hover should be only enabled on wide screens
        if (this.spongeMenu && (!event.relatedTarget
            || (event.relatedTarget && !event.relatedTarget.classList.contains("navbar-nav") && !event.relatedTarget.classList.contains("nav-link")))) {
          this.spongeMenu = false;
        }
      }
    }

    toggleSpongeMenu() {
      if (this.subMenu) {
        this.subMenu = false;
      }

      this.spongeMenu = !this.spongeMenu;
    }

    toggleSubMenu() {
      if (this.spongeMenu) {
        this.spongeMenu = false;
      }

      this.subMenu = !this.subMenu;
    }
  }
</script>

<style lang="scss">
  @import "../../styles/variables";

  $nav-padding: 1.5rem;
  $nav-logo-size: 2.813rem;
  $nav-brand-width: 14rem; // manually define this to calculate the width of the dropdown
  $nav-brand-font-size: 1.438rem;
  $nav-brand-padding: 0 ($nav-padding - 0.5rem) 0 $nav-padding;
  $nav-brand-margin: 0;
  $nav-logo: url(../../images/icons/spongie-mark.svg);
  $nav-logo-padding: 0 0.5rem;
  $nav-toggle-button-padding: 0 1.5rem;
  $nav-indicator-color: #808080;

  $nav-link-color: #f3f3f3;
  $nav-link-font-size: 1.2rem;
  $nav-link-padding: 0.75rem 1.5rem;
  $nav-link-svg-margin: 0.8rem;

  $nav-desktop-sub-menu-item-margin-right: 1rem;
  $nav-desktop-sub-menu-link-font-size: 1rem;
  $nav-desktop-sub-menu-item-padding: 0.75rem;

  $nav-mobile-border: 7px solid $sponge_grey_dark;
  $nav-mobile-padding: 0.5rem 0;
  $nav-mobile-sponge-menu-padding: 0.5rem 0;
  $nav-mobile-sponge-menu-link-padding: 0.45rem 0.75 + ($nav-logo-size / 2);
  $nav-mobile-sponge-menu-link-font-size: 1.2rem;

  .collapsing {
    transition: none;
  }

  .sponge-headline {
    font-family: $sponge_headline_font;
    font-weight: $sponge_headline_weight;
    text-transform: uppercase;
    text-decoration: none;
  }

  #sponge-menu {
    .navbar-nav.sponge-dark {
      @media (min-width: 768px) {
        flex-direction: column;
        width: $nav-brand-width;
        background: $sponge_grey_light;
        padding: $nav-mobile-sponge-menu-padding;
        border-bottom: $nav-mobile-border;
        border-top-color: $sponge_grey_light;
        border-bottom: $nav-mobile-border;

        .nav-item {
          .nav-link {
            padding: $nav-mobile-sponge-menu-link-padding;
            font-size: $nav-mobile-sponge-menu-link-font-size;
          }
        }
      }
    }

    @media (min-width: 768px) {
      position: absolute;
      top: $sponge_navigation_height;
    }
  }

  #sub-menu {
    .navbar-nav.sponge-dark {
      @media (min-width: 768px) {
        .nav-item {
          margin-right: $nav-desktop-sub-menu-item-margin-right;

          &:last-child {
            margin-right: 0;
          }

          .nav-link {
            font-size: $nav-desktop-sub-menu-link-font-size;
            padding: $nav-desktop-sub-menu-item-padding;
          }
        }
      }
    }
  }

  .navbar-nav.sponge-dark {
    .nav-item {
      width: 100%;

      .nav-link {
        color: $nav-link-color;
        font-size: $nav-link-font-size;
        padding: $nav-link-padding;

        &.active, &.active:hover {
          color: $nav-link-color;
          background: $sponge_grey_dark;
        }

        &:hover, &:focus {
          color: $nav-link-color;
          background: $sponge_grey;
          outline: none;
        }

        svg {
          margin-right: $nav-link-svg-margin;
        }
      }
    }

    @media (max-width: 768px) {
      border-bottom: $nav-mobile-border;
      border-top: $nav-mobile-border;
      padding: $nav-mobile-padding;
      width: 100vw;
      background: $sponge_grey_light;
    }
  }

  .navbar {
    background: $sponge_grey;
    min-height: $sponge_navigation_height;
    padding: 0;

    .container {
      max-height: $sponge_navigation_height;

      @media (max-width: 768px) {
        margin: 0;
      }
    }

    .navbar-brand {
      display: flex;
      align-items: center;
      min-height: $sponge_navigation_height;
      padding: $nav-brand-padding;
      margin: $nav-brand-margin;

      &, * {
        user-select: none;
      }

      .logo {
        height: $nav-logo-size;
        width: $nav-logo-size;
        background: $nav-logo;
      }

      .sponge-headline {
        height: $nav-logo-size;
        display: flex;
        align-items: center;
      }

      span {
        font-size: $nav-brand-font-size;
        color: $sponge_yellow;
        margin: $nav-logo-padding;
      }

      svg {
        color: $nav-indicator-color;
      }

      &:hover, &:focus {
        background: $sponge_grey_dark;
        outline: none;
      }
    }
  }

  .navbar-toggler {
    border: none;
    border-radius: 0;
    padding: 0;

    &.collapsed {
      background: $sponge_grey_dark;
    }

    svg {
      color: $nav-indicator-color;
    }

    &:hover, &:focus {
      background: $sponge_grey_dark;
      outline: none;
    }

    &.sponge-menu {
      @media (min-width: 768px) {
        display: flex;
      }
    }

    &.sub-menu {
      @media (min-width: 768px) {
        display: none;
      }

      position: absolute;
      right: 0;

      display: flex;
      align-items: center;
      height: 100%;

      padding: $nav-toggle-button-padding;
      border: none;
    }
  }

</style>
