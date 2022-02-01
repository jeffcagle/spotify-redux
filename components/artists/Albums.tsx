import AlbumCard from '../cards/AlbumCard';

interface Props {
  data: {
    id: string;
    name: string;
    artists: object[];
    images: { url: string }[];
  }[];
}

function Albums(props: Props) {
  const { data } = props,
    albums = data;

  return (
    <section className="albums mb-4">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-white font-bold text-xl">Albums</h2>
        {/* <Link href={`/artist/${data.id}/discography/album`}>
          <a className="albums__discography text-gray-100 font-medium text-xs tracking-widest uppercase">
            See Discography
          </a>
        </Link> */}
      </div>
      <div className="albums__list grid grid-rows-1 grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-6">
        {albums.map(album => (
          <AlbumCard
            key={album.id}
            id={album.id}
            name={album.name}
            artists={album.artists}
            imageUrl={album.images[1].url}
          />
        ))}
      </div>
    </section>
  );
}

export default Albums;
