export default function AboutCard({ icon: Icon, title, desc }) {
  return (
    <div className="flex w-full flex-col items-center py-4 sm:w-1/4 sm:min-w-80 sm:p-4">
      <div className="bg-lavender-web grid aspect-square w-20 place-items-center rounded-full text-white">
        <Icon className="text-gunmetal text-3xl" />
      </div>
      <span className="text-gunmetal text-xl font-semibold">{title}</span>
      <p className="text-center">{desc}</p>
    </div>
  );
}
