import Component from "@glimmer/component";
import Composer from "discourse/models/composer";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import { getOwner } from "discourse-common/lib/get-owner";

export default class NewPMDropdownButton extends Component {
  @service currentUser;

  #createPM() {
    const composer = getOwner(this).lookup("controller:composer");
    composer.open({
      action: Composer.PRIVATE_MESSAGE,
      draftKey: Composer.NEW_PRIVATE_MESSAGE_KEY,
      archetypeId: "private_message",
    });
  }

  @action
  openComposerCloseMenu() {
    this.#createPM();
    this.args.closeUserMenu();
  }
}
