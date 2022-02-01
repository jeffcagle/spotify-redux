interface Props {
  children: React.ReactNode;
}

function Body({ children }: Props) {
  return (
    <div className="relative w-full">
      <div className="absolute z-0 w-full h-60 bg-gray-600 bg-gradient-to-b from-[rgba(0,0,0,.6)] to-gray-800"></div>
      <div className="p-8 relative z-10">{children}</div>
    </div>
  );
}

export default Body;
