<template>
  <div id="footer">
    <div class="footer-row terms">
      <b-container>
        <b-row>
          <b-col>
            <slot name="terms"/>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="footer-row info">
      <b-container>
        <b-row>
          <b-col>
            <slot name="info"/>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="footer-row copyright">
      <b-container>
        <b-row>
          <b-col>
            <p>Copyright &copy; SpongePowered 2014-2018</p>
            <slot name="accelerator"/>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
  import Vue from "vue"
  import Component from "vue-class-component"

  @Component({})
  export default class SpongeFooter extends Vue {
  }
</script>

<style lang="scss">
  @import "../../styles/variables";

  #footer {
    text-align: center;
    color: #ffffff;
    font-size: 0.875rem;

    .footer-row {
      padding: 1rem 0;

      p {
        margin: 0;
      }

      [class*="col-"] {
        align-self: center;
      }

      &.copyright {
        background: $sponge_grey_dark;
      }

      &.terms {
        padding: 0.35rem;
        background: $sponge_grey_light;
      }

      &.info {
        background: $sponge_grey;
      }
    }
  }
</style>
