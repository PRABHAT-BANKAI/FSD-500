// function components start with capital letter

const App = () => {
  function showData() {
    return <h1>game sports </h1>;
  }

  return (
    <div>
      <h1>Hello world</h1>
      <h2>second heading </h2>
      <h3>third heading</h3>

      {showData()}
    </div>
  );
};

export default App;
