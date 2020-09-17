import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const FallbackFeed = React.lazy(() => import("feed/build/Feed"));
const Feed = React.lazy(() => import("mf-feed/Feed"));

class FeedWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {}

  render() {
    if (this.state.hasError) {
      return (
        <React.Suspense fallback={<div>Loading the fallback feed...</div>}>
          <FallbackFeed />
        </React.Suspense>
      );
    }

    return (
      <React.Suspense fallback={<div>Feed loading...</div>}>
        <Feed />
      </React.Suspense>
    );
  }
}

const App = () => (
  <div>
    <FeedWrapper />
    <div>Hi there, I'm in the home page.</div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
