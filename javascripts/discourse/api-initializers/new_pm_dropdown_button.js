import { withPluginApi } from "discourse/lib/plugin-api";

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
