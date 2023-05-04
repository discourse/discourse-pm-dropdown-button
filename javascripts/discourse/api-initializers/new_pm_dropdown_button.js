import { withPluginApi } from "discourse/lib/plugin-api";

// now that the revamped user menu is default
// this initializer can be removed at some point
// when most sites have upgraded

export default {
  name: "custom-pm-dropdown-button",
  initialize() {
    withPluginApi("0.8.7", (api) => {
      api.decorateWidget("quick-access-messages:after", (helper) => {
        return helper.attach("custom-pm-dropdown-footer", helper);
      });
    });
  },
};
