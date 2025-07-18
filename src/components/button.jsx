export default function Button({ outlined, text }) {
  let styles = "p-4 px-8  rounded-xl text-xl cursor-pointer transition-colors duration-200 border border-gunmetal ";
  styles += outlined ? "text-gunmetal hover:bg-gunmetal hover:text-white" : "bg-gunmetal text-white hover:bg-transparent hover:text-black";
  
  return <button className={styles}>{text}</button>;
}
