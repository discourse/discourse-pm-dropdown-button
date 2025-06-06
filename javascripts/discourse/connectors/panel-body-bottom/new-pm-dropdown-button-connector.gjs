import Component from "@ember/component";
import { tagName } from "@ember-decorators/component";
import { eq } from "truth-helpers";
import NewPmDropdownButton from "../../components/new-pm-dropdown-button";

@tagName("")
export default class NewPmDropdownButtonConnector extends Component {
  <template>
    {{#if (eq this.itemsCacheKey "user-menu-messages-tab")}}
      <NewPmDropdownButton @closeUserMenu={{this.closeUserMenu}} />
    {{/if}}
  </template>
}
