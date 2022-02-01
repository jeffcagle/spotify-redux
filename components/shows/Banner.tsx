import Image from 'next/image';

interface Props {
  data: {
    name: string;
    images: { url: string }[];
    publisher: string;
  };
}

function Banner(props: Props) {
  const { data } = props,
    show = data;

  return (
    <div className="show p-8 bg-gray-700">
      <div className="flex gap-6">
        <div className="show__image w-[232px] h-[232px] bg-gray-600 drop-shadow-[0_4px_60px_rgba(0,0,0,.5)] flex-shrink-0">
          <Image
            className="object-cover h-full"
            src={show.images[1].url}
            alt={show.name}
            width={232}
            height={232}
          />
        </div>
        <div className="show__details flex flex-col justify-end">
          <h2 className="show__type text-white uppercase text-xs font-medium">
            Podcast
          </h2>
          <h1 className="show__title text-white font-black text-6xl my-3 line-clamp-2">
            {show.name}
          </h1>
          <div className="show__hosts flex text-xl">
            <span className="text-white font-bold">{show.publisher}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
