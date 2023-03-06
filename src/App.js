class McreynoldsApp extends React.Component {
  render() {
    const title = "Jared McReynolds Site";

    return (
      <div>
       <Header></Header>
       <Content></Content> 
       <Footer></Footer>
      </div>
    );
  }
}

class Header extends React.Component{
  render() {
    return (
      <div>
        <figure class="logo-image">
          <img src="./images/Logo1.png" alt="JM logo"></img>
        </figure>
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return(
      <div></div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div>
        <p>@2022</p> 
      </div>      
    );
  }
}

ReactDOM.render(<McreynoldsApp />, document.getElementById('app'));