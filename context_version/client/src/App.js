// import React, { Component } from "react";

// const Item = props => {
//   return (
//     <li className="list-group-item">
//       {props.title} {props.author}
//     </li>
//   );
// };

// const List = props => {
//   return (
//     <ul className="list-group">
//       {props.users.map(user => (
//         <Item key={user._id} title={user.title} author={user.author} />
//       ))}
//     </ul>
//   );
// };

// class App extends Component {
//   state = {
//     users: [],
//     newses: [],
//     showForm: true,
//     drawNews: null
//   };
//   hanldeFormSubmit = event => {
//     event.preventDefault();
//     const newData = new FormData(event.target);
//     // const data = {
//     //   title: event.target.title.value,
//     //   content: event.target.content.value,
//     //   author: event.target.author.value
//     // };
//     // Symbol.iterator, iterator protocol, Generator functions,

//     // let id = Symbol("123");
//     // let sendData = { [id]: "AJDBJABJDBJDJADBJ", name: "Demo" };
//     // for (let prop in sendData) {
//     //   console.log(prop);
//     // }

//     // let id1 = Symbol("123");
//     // console.log(id === id1);

//     let data = {};
//     for (let [prop, value] of newData.entries()) {
//       data[prop] = value;
//     }

//     fetch("http://localhost:8000/api/newses", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//       },
//       body: JSON.stringify(data)
//     })
//       .then(res => res.json())
//       .then(news => {
//         console.log(news);
//         this.setState(prev => ({
//           showForm: !prev.showForm,
//           drawNews: news.news
//         }));
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   };
//   componentDidMount() {
//     Promise.all([
//       fetch("http://localhost:8000/api/newses"),
//       fetch("http://localhost:8000/api/users")
//     ])
//       .then(([newsRes, usersRes]) => {
//         return Promise.all([newsRes.json(), usersRes.json()]);
//       })
//       .then(([newses, users]) => {
//         console.log(newses, users);
//         this.setState({ newses, users });
//       });
//   }
//   render() {
//     return (
//       <div className="container">
//         {this.state.showForm && (
//           <form onSubmit={this.hanldeFormSubmit}>
//             <div className="form-group">
//               <label htmlFor="title">Title</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="title"
//                 name="title"
//                 placeholder="Title"
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="author">Author</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="author"
//                 name="author"
//                 placeholder="Author"
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="content">Content</label>
//               <textarea
//                 className="form-control"
//                 id="content"
//                 rows="3"
//                 name="content"
//               />
//             </div>
//             <div className="form-group">
//               <button type="submit" className="btn btn-outline-success">
//                 Submit
//               </button>
//             </div>
//           </form>
//         )}
//         {this.state.drawNews && (
//           <h1 className="title text-muted">{this.state.drawNews.title}</h1>
//         )}

//         {this.state.users.length ? <List users={this.state.users} /> : null}
//         <hr />
//         {this.state.newses.length ? <List users={this.state.newses} /> : null}
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "./context";
import Header from "./components/Header";
import Main from "./components/Main";
import Movie from "./components/Movie";
import Login from "./components/Login";
import Error from "./components/Error";

class App extends Component {
  hanldeFormSubmit = event => {
    event.preventDefault();
  };
  componentDidMount() {}
  render() {
    return (
      <Provider>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Switch>
              <Route path="/" component={Main} exact />
              <Route path="/movie/:id" component={Movie} />
              <Route path="/login" component={Login} />
              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
