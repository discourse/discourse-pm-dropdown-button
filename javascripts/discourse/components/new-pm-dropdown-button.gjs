import Component from "@glimmer/component";
import { action } from "@ember/object";
import { service } from "@ember/service";
import DButton from "discourse/components/d-button";

export default class NewPMDropdownButton extends Component {
  @service currentUser;
  @service composer;

  @action
  openComposerCloseMenu() {
    this.args.closeUserMenu();
    this.composer.openNewMessage({});
  }

  <template>
    {{#if this.currentUser.can_send_private_messages}}
      <DButton
        class="btn-default btn-icon-text new-pm-dropdown-button"
        @icon="envelope"
        @label="user.new_private_message"
        @title={{if settings.hide_button_text "user.new_private_message"}}
        @action={{this.openComposerCloseMenu}}
      />
    {{/if}}
  </template>
}
