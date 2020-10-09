const { Component } = wp.element;
const { registerPlugin } = wp.plugins;
const { PluginPrePublishPanel } = wp.editPost;
const { select, dispatch, subscribe } = wp.data;

class NoPublishComponent extends Component {
  state = {
    postTitle: select("core/editor").getEditedPostAttribute("title"),
    icon: "thumbs-up",
    message: "Title checks out!",
  };
  componentDidMount() {
    let locked = false; // post lock flag

    subscribe(() => {
      postTitle = select("core/editor").getEditedPostAttribute("title");
      this.setState({
        postTitle: postTitle,
      });

      if (postTitle.toLowerCase().indexOf("do not publish") !== -1) {
        this.setState({
          icon: "thumbs-down",
          message: "Title must be corrected",
        });
        if (!locked) {
          locked = true;
          dispatch("core/editor").lockPostSaving("do-not-publish");
        }
      } else {
        this.setState({
          icon: "thumbs-up",
          message: "Title checks out!",
        });
        if (locked) {
          locked = false;
          dispatch("core/editor").unlockPostSaving("do-not-publish");
        }
      }
    });
  }
  render() {
    return (
      <PluginPrePublishPanel title="Title Check" icon={this.state.icon}>
        <p>{this.state.message}</p>
        <strong>{this.state.postTitle}</strong>
      </PluginPrePublishPanel>
    );
  }
}

registerPlugin("no-publish", { render: NoPublishComponent });
