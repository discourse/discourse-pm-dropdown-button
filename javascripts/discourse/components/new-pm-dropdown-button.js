import Component from "@glimmer/component";
import { action } from "@ember/object";
import { service } from "@ember/service";

export default class NewPMDropdownButton extends Component {
  @service currentUser;
  @service composer;

  @action
  openComposerCloseMenu() {
    this.args.closeUserMenu();
    this.composer.openNewMessage({});
  }
}
