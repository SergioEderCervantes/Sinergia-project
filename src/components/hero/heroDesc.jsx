import Button from "../button";

export default function HeroDesc() {
  return (
    <div className="flex flex-col items-center px-16 text-center text-5xl text-gray-500 xl:w-1/2 xlg:text-justify">
      <h2 className="text-gunmetal-600 my-2">Elevate your Brand</h2>
      <img className="my-8 w-1/4 xl:hidden" src="/vite.svg" alt="logo" />
      <h2 className="my-2">With Strategic Marketing</h2>
      <p className="my-8 hidden text-justify text-lg font-semibold md:block">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. In quae
        deleniti, aperiam pariatur illo voluptate ab fugiat excepturi non?
        Tenetur doloremque, aliquid quasi odit cupiditate dicta neque sapiente
        libero mollitia! lorem
      </p>
      <div className="my-8 flex w-full flex-col gap-4 md:my-0 xl:flex-row">
        <Button outlined={false} text={"View Our Work"} />
        <Button outlined={true} text={"Get Started"} />
      </div>
    </div>
  );
}
