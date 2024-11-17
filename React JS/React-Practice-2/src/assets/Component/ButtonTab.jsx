import { example } from "../../App"
export function ButtonTab({ children, onSelect, active }) {
  return (
    <button
      className={`text-2xl font-medium p-3 rounded-t-2xl "
      }`}
      style={active ? {background: example[children].bg} : {backgroundColor: "grey"}}
      onClick={onSelect}
    >
      {children}
    </button>
  );
}
