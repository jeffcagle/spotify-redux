import { useSelector } from 'react-redux';
import { selectDuration, selectProgress } from '../../store/playback';
import { convertMs } from '../../utils/maths';

function Progress() {
  const progress = useSelector(selectProgress);
  const duration = useSelector(selectDuration);

  return (
    <div className="flex mt-3">
      <audio>
        <source src="" type="audio/mpeg" />
      </audio>
      <div className="flex items-center gap-2 text-xs text-gray-100">
        <div>{convertMs(progress, 'track')}</div>
        <progress
          className="w-80 h-1"
          max="100"
          value={handleProgress()}
        ></progress>
        <div>{convertMs(duration, 'track')}</div>
      </div>
    </div>
  );

  function handleProgress() {
    return ((progress / duration) * 100).toString();
  }
}

export default Progress;
