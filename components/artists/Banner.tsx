import Image from 'next/image';

interface Props {
  data: {
    name: string;
    images: { url: string }[];
    followers: { total: number };
  };
}

function Banner(props: Props) {
  const { data } = props,
    image = data.images[0].url,
    name = data.name,
    followers = data.followers.total;

  return (
    <div className="playlist p-8 bg-gray-700">
      <div className="flex gap-6">
        <div className="playlist__image w-[232px] h-[232px] bg-gray-600 drop-shadow-[0_4px_60px_rgba(0,0,0,.5)] flex-shrink-0">
          <Image
            className="object-cover h-full"
            src={image}
            alt={name}
            width={232}
            height={232}
          />
        </div>
        <div className="flex flex-col justify-end">
          <h2 className="text-white uppercase text-xs font-medium">Artist</h2>
          <h1 className="playlist__title text-white font-black text-6xl my-3 line-clamp-2">
            {name}
          </h1>
          <div className="artist__meta flex text-sm">
            <span className="text-white">{followers} followers</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
