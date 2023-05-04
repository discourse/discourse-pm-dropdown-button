import Composer from "discourse/models/composer";
import { createWidget } from "discourse/widgets/widget";
import { getOwner } from "discourse-common/lib/get-owner";

// now that the revamped user menu is default
// this widget can be removed at some point
// when most sites have upgraded

export default createWidget("custom-pm-dropdown-footer", {
  tagName: "div.panel-body-bottom.custom-pm-panel-body-bottom",
  buildKey: () => `custom-pm-dropdown-footer`,

  createPM() {
    const composer = getOwner(this).lookup("controller:composer");
    composer.open({
      action: Composer.PRIVATE_MESSAGE,
      draftKey: Composer.NEW_PRIVATE_MESSAGE_KEY,
      archetypeId: "private_message",
    });
  },

  html(helper) {
    let customItems = [];
    let tab = helper.attrs.currentQuickAccess;

    customItems.push(
      this.attach("link", {
        title: "view_all",
        titleOptions: { tab },
        icon: "chevron-down",
        className: "btn btn-default btn-icon no-text show-all",
        "aria-label": "view_all",
        ariaLabelOptions: { tab },
        href: "/my/messages",
      })
    );

    if (this.currentUser.can_send_private_messages) {
      customItems.push(
        this.attach("button", {
          label: "user.new_private_message",
          title: "user.new_private_message",
          action: "createPM",
          icon: "envelope",
          className: "btn-default btn-icon-text",
        })
      );
    }

    return customItems;
  },
});
