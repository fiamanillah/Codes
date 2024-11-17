import { useState } from "react";
import "./App.css";
import { ButtonTab } from "./assets/Component/ButtonTab"; // Import the ButtonTab component

export const example = {
  Tab1: {
    name: "Tab 1 heading",
    des: "Tab 1 is selected now",
    bg: "#f65223",
  },
  Tab2: {
    name: "Tab 2 heading",
    des: "Tab 2 is selected now",
    bg: "#37843c",
  },
  Tab3: {
    name: "Tab 3 heading",
    des: "Tab 3 is selected now",
    bg: "#2d89c5",
  },
  Tab4: {
    name: "Tab 4 heading",
    des: "Tab 4 is selected now",
    bg: "#cb197d",
  },
};

function App() {
  return <TabSwitcherComponent />;
}

function TabSwitcherComponent() {
  const [content, setContent] = useState("");
  const [color, setColor] = useState("");

  function handleClick(tabKey) {
    setContent(tabKey);
    setColor(example[tabKey].bg);
  }

  return (
    <div>
      {/* Step 1: Map through the keys of the 'example' object to dynamically render buttons */}
      <ul className="flex gap-3 pt-5 pl-5">
        {Object.keys(example).map((tabKey) => (
          <ButtonTab
            key={tabKey}
            active={content === tabKey}
            onSelect={() => handleClick(tabKey)}
          >
            {tabKey}
          </ButtonTab>
        ))}
      </ul>

      {/* Step 2: Render the selected tab's content */}
      <div>
        {content === "" ? (
          <div
            className="mx-5 rounded-b-3xl p-9 rounded-tr-3xl"
            style={{ backgroundColor: "grey" }}
          >
            <p>Please Select a Tab</p>
          </div>
        ) : (
          <div
            className="mx-5 rounded-b-3xl p-9 rounded-tr-3xl"
            style={{ backgroundColor: color }}
          >
            <h1 className="text-5xl font-bold">{example[content].name}</h1>
            <p>{example[content].des}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
