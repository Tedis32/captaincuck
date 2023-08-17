type PageTitleProps = {
  title: string;
  subtitle: string;
};

export default function (props: PageTitleProps) {
  return (
    <div className="flex-col flex mt-[50px]">
      <div className="flex flex-col mt-10 justify-center md:justify-start">
        <h1 className="font-bold text-headerText font-sans text-[26px] md:text-[28px] lg:text-3xl  ">
          {props.title}
        </h1>
        <span className="font-foobar font-bold text-mediumGray text-[16px] md:text-[16px] lg:text-md  ">
          {props.subtitle}
        </span>
      </div>
      <hr className="bg-gray-700 w-full mb-6" />
    </div>
  );
}
