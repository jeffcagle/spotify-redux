export default function covertMilliseconds(ms, type = '') {
  const _seconds = (ms / 1000) % 60;
  const _minutes = (ms / (1000 * 60)) % 60;
  const _hours = (ms / (1000 * 60 * 60)) % 24;

  const minutes = Math.floor(_minutes);
  const hours = _hours >= 1 ? Math.floor(_hours) : '';

  if (type === 'track') {
    const seconds =
      Math.floor(_seconds).toString().length < 2
        ? `0${Math.floor(_seconds)}`
        : Math.floor(_seconds);

    return hours ? `${hours}${minutes}:${seconds}` : `${minutes}:${seconds}`;
  } else {
    const seconds = Math.floor(_seconds);

    return hours
      ? `${hours} hr ${minutes} min`
      : `${minutes} min ${seconds} sec`;
  }
}
