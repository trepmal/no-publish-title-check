const { Component } = wp.element;

class NoPublishOverride extends Component {
  render() {
    const hidden = this.props.showCheckbox ? "" : "hidden";
    return (
      <p className={hidden}>
        <label>
          <input onChange={() => this.props.clickCallback()} type="checkbox" />
          Override
        </label>
      </p>
    );
  }
}

export default NoPublishOverride;
