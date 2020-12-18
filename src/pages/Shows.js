import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import { InlineDetails } from "./index";
import { getFetch } from "../services/api";

class Shows extends Component {
  state = {
    shows: [],
  };
  componentDidMount() {
    const data = getFetch("Margarita");
    data.then((d) => {
      console.log(d);
      this.setState({ shows: [...d] });
    });
  }
  render() {
    const { shows } = this.state;
    console.log(shows);
    const { match } = this.props;
    return (
      <>
        <h2>Shows</h2>
        {shows.length > 0 && (
          <ul>
            {shows.map((el) => (
              <li key={el.idDrink}>
                <Link to={`${match.url}/${el.idDrink}`}>{el.strDrink}</Link>
              </li>
            ))}
          </ul>
        )}
        {/* встроенный роут + убрать exact в Route path="/shows" */}
        {/* <Route path={`${match.path}/:showId`} component={InlineDetails} /> */}
      </>
    );
  }
}
// match.url для указания вложенных путей
// const Shows = ({ match }) => {
//   return (
//     <>
//       <h2>Shows</h2>
//       <ul>
//         {shows.map((el) => (
//           <li key={el.id}>
//             <Link to={`${match.url}/${el.id}`}>{el.name}</Link>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };
export default Shows;
