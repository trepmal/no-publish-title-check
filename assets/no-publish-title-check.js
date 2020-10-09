const { Component } = wp.element;
const { registerPlugin } = wp.plugins;
const { PluginPrePublishPanel } = wp.editPost;
const { select, dispatch, subscribe } = wp.data;

import NoPublishOverride from "./no-publish-override";

class NoPublishComponent extends Component {
  state = {
    postTitle: select("core/editor").getEditedPostAttribute("title"),
    icon: "thumbs-up",
    message: "Title checks out!",
  };
  locked = false; // post lock flag
  override = false; // checkbox override flag
  showCheckbox = false;
  componentDidMount() {
    this.unsubscribe = subscribe(() => {
      const postTitle = select("core/editor").getEditedPostAttribute("title");
      this.setState({
        postTitle: postTitle,
      });

      if (!this.override) {
        if (postTitle.toLowerCase().includes("do not publish")) {
          this.showCheckbox = true;
          this.setState({
            icon: "thumbs-down",
            message: "Title must be corrected",
          });
          if (!this.locked) {
            this.locked = true;
            dispatch("core/editor").lockPostSaving("do-not-publish");
          }
        } else {
          this.showCheckbox = false;
          this.setState({
            icon: "thumbs-up",
            message: "Title checks out!",
          });
          if (this.locked) {
            //
            this.locked = false;
            dispatch("core/editor").unlockPostSaving("do-not-publish");
          }
        }
      } else {
        this.showCheckbox = true;
        this.setState({
          icon: "thumbs-up",
          message: "Override!",
        });
      }
    });
  }
  componentDidUnmount() {
    this.unsubscribe();
  }
  onCheckboxChange = (event) => {
    this.override = !this.override;

    if (this.locked) {
      this.locked = false;
      dispatch("core/editor").unlockPostSaving("do-not-publish");
    } else {
      this.locked = true;
      dispatch("core/editor").lockPostSaving("do-not-publish");
    }
  };
  render() {
    return (
      <PluginPrePublishPanel title="Title Check" icon={this.state.icon}>
        <p>{this.state.message}</p>
        <NoPublishOverride
          changeCallback={this.onCheckboxChange}
          locked={this.locked}
          showCheckbox={this.showCheckbox}
        />
      </PluginPrePublishPanel>
    );
  }
}

registerPlugin("no-publish", { render: NoPublishComponent });
