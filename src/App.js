import "./styles.css";

var shoppingList = ["milk", "bread", "eggs", "flowers"];

export default function App() {
  function getBg(index) {
    if (index % 2 === 0) {
      return "white";
    }
    return "gray";
  }

  function listItemClickHandler(item) {
    console.log("clicked", item);
  }

  return (
    <div className="App">
      <h1>print my shopping List</h1>
      <ul>
        {shoppingList.map(function (item, index) {
          return (
            <li
              key={item}
              onClick={() => listItemClickHandler(item)}
              style={{ backgroundColor: getBg(index), padding: "1rem" }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
