export default function addDurations(items) {
  let total = 0;
  for (const item of items) {
    total += item.track.duration_ms;
  }
  return total;
}
