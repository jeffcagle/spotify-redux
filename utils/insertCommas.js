import Link from 'next/link';

export default function insertCommas(array, urlBase) {
  if (urlBase) {
    return array.map((item, i) =>
      i < array.length - 1 ? (
        <span key={item.id}>
          <Link href={`/${urlBase}/${item.id}`}>
            <a className="track__artist hover:underline hover:text-white">
              <span>{item.name}</span>
            </a>
          </Link>
          ,{' '}
        </span>
      ) : (
        <Link href={`/${urlBase}/${item.id}`} key={item.id}>
          <a className="track__artist hover:underline hover:text-white">
            <span>{item.name}</span>
          </a>
        </Link>
      )
    );
  }

  return array.map((item, i) =>
    i < array.length - 1 ? (
      <span key={item.id}>{item.name}, </span>
    ) : (
      <span key={item.id}>{item.name}</span>
    )
  );
}
