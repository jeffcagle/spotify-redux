import { convertMs } from '../../utils/maths';

interface Props {
  children: React.ReactNode;
  data: {
    release_date: string;
    duration_ms: number;
  };
}

function Body({ children, data }: Props) {
  const episode = data;
  return (
    <div className="relative w-full">
      <div className="absolute z-0 w-full h-60 bg-gray-600 bg-gradient-to-b from-[rgba(0,0,0,.6)] to-gray-800">
        {/* Bg Gradient */}
      </div>
      <div className="p-8 relative z-10">
        <div className="playlist__meta flex text-sm mb-4">
          <span className="text-gray-100">{episode.release_date}</span>
          <span className="before:content-['•'] before:mx-1 text-gray-100">
            {convertMs(episode.duration_ms)}
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Body;
