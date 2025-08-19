import styles from "./card.module.css";

export default function Card({ icon: Icon, service }) {
  return (
    <div
      className={`${styles.serviceCard} bg-lavender-web-300 m-3 block h-fit overflow-hidden rounded-2xl px-4 `}
      style={{
        "--service-color": service.color,
      }}
    >
      <div className="flex justify-end">
        <div
          className="-mt-5 -mr-9 flex size-16 items-end justify-start rounded-full p-2"
          style={{
            background: service.color,
          }}
        >
          <Icon className="text-4xl text-white" />
        </div>
      </div>
      <div className="flex flex-col justify-evenly h-full">
        <h4 className="text-center text-2xl font-semibold">{service.title}</h4>

        <ul className="my-4 space-y-2">
          {service.bullets.map((item, idx) => {
            return (
              <li
                key={idx}
                className="rounded-lg bg-white/70 px-1 py-2 text-gray-700 shadow-sm"
              >
                <span>{item}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
