import React from "react";
import PropTypes from "prop-types";

export default class Api extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPending: true,
      isSuccess: false,
      isError: false,
      response: null,
      error: null
    };
  }

  async componentDidMount() {
    // this.setState({ isError: false, isPending: true, isSuccess: false });
    try {
      let response = await this.props.req();
      this.setState({
        response,
        isError: false,
        isPending: false,
        isSuccess: true
      });
    } catch (error) {
      this.setState({
        error,
        isError: true,
        isPending: false,
        isSuccess: false
      });
    }
  }

  render() {
    const { isPending, isSuccess, isError, response, error } = this.state;
    const { renderPending, renderSuccess, renderError } = this.props;
    if (isPending) {
      return renderPending();
    }
    if (isSuccess) {
      return renderSuccess(response);
    }
    if (isError) {
      return renderError(error);
    }
  }
}

Api.propTypes = {
  req: PropTypes.func.isRequired,
  renderSuccess: PropTypes.func.isRequired,
  renderPending: PropTypes.func.isRequired,
  renderError: PropTypes.func.isRequired
};

Api.defaultProps = {
  renderPending: () => <div>Loading ...</div>,
  renderError: error => <pre>{JSON.stringify(error)}</pre>
};
