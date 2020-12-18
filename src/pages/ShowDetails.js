import React, { Component } from "react";
import { getFetchById } from "../services/api";

class ShowDetails extends Component {
  state = {
    show: null,
  };

  componentDidMount() {
    const { showId } = this.props.match.params;
    console.log("showId", showId);
    const d = getFetchById(showId);
    d.then((c) => this.setState({ show: { ...c } }));
  }

  render() {
    const { show } = this.state;
    console.log(show);
    return (
      <>
        {show && (
          <div style={{ marginTop: "30px" }}>
            <img src={show.strDrinkThumb} alt={show.strDrink} width="200" />
            <h2>{show.strDrink}</h2>
            <p>{show.strAlcoholic}</p>
            <p>{show.strCategory}</p>
          </div>
        )}
      </>
    );
  }
}

export default ShowDetails;
