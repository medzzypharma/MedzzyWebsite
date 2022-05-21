import { connect } from "react-redux";
import { Loader } from "./components/loader/loader";
import Landing from "./pages/landing/landing";

function App({ loading }) {
  return (
    <>
      {loading && <Loader />}

      <Landing />
    </>
  );
}

const mapStateToProps = (state) => ({
  loading: state.loader.loading,
});
export default connect(mapStateToProps, null)(App);
