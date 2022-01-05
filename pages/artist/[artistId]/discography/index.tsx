import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Discography: NextPage = () => {
  const router = useRouter();
  const { artistId } = router.query;

  return <div>Discography {artistId}</div>;
};

export default Discography;
