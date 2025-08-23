export default function Button({ outlined, text }) {
  let styles =
    "p-4 px-8  rounded-xl text-xl hover:text-white cursor-pointer hover:bg-tercero hover:border-tercero transition-colors duration-200 border border-gunmetal ";
  styles += outlined ? "text-gunmetal  " : "bg-gunmetal text-white";

  return <button className={styles}>{text}</button>;
}
