import * as React from 'react';

interface SvgProps {
  className?: string;
}

interface IconProps {
  className?: string;
  size: number;
  view?: number;
}

export function SpotifyLogo(props: SvgProps) {
  return (
    <svg viewBox="0 0 1134 340" data-metatip="true" {...props}>
      <path
        fill="currentColor"
        d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z"
      />
    </svg>
  );
}

export function Previous(props: SvgProps) {
  return (
    <svg
      height={16}
      width={16}
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
    >
      <path d="M13 2.5L5 7.119V3H3v10h2V8.881l8 4.619z" />
    </svg>
  );
}

export function Play(props: IconProps) {
  return (
    <svg
      height={props.size}
      width={props.size}
      viewBox={`0 0 ${props.view || props.size} ${props.view || props.size}`}
      fill="currentColor"
      {...props}
    >
      <path d="M4.018 14L14.41 8 4.018 2z" />
    </svg>
  );
}

export function Pause(props: IconProps) {
  return (
    <svg
      height={props.size}
      width={props.size}
      viewBox={`0 0 ${props.view || props.size} ${props.view || props.size}`}
      fill="currentColor"
      {...props}
    >
      <path fill="none" d="M0 0h16v16H0z" />
      <path d="M3 2h3v12H3zm7 0h3v12h-3z" />
    </svg>
  );
}

export function Next(props: SvgProps) {
  return (
    <svg
      height={16}
      width={16}
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
    >
      <path d="M11 3v4.119L3 2.5v11l8-4.619V13h2V3z" />
    </svg>
  );
}

export function Shuffle(props: SvgProps) {
  return (
    <svg
      height={16}
      width={16}
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
    >
      <path d="M4.5 6.8l.7-.8C4.1 4.7 2.5 4 .9 4v1c1.3 0 2.6.6 3.5 1.6l.1.2zm7.5 4.7c-1.2 0-2.3-.5-3.2-1.3l-.6.8c1 1 2.4 1.5 3.8 1.5V14l3.5-2-3.5-2v1.5zm0-6V7l3.5-2L12 3v1.5c-1.6 0-3.2.7-4.2 2l-3.4 3.9c-.9 1-2.2 1.6-3.5 1.6v1c1.6 0 3.2-.7 4.2-2l3.4-3.9c.9-1 2.2-1.6 3.5-1.6z" />
    </svg>
  );
}

export function Repeat(props: SvgProps) {
  return (
    <svg
      height={16}
      width={16}
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
    >
      <path d="M5.5 5H10v1.5l3.5-2-3.5-2V4H5.5C3 4 1 6 1 8.5c0 .6.1 1.2.4 1.8l.9-.5C2.1 9.4 2 9 2 8.5 2 6.6 3.6 5 5.5 5zm9.1 1.7l-.9.5c.2.4.3.8.3 1.3 0 1.9-1.6 3.5-3.5 3.5H6v-1.5l-3.5 2 3.5 2V13h4.5C13 13 15 11 15 8.5c0-.6-.1-1.2-.4-1.8z" />
    </svg>
  );
}

export function Home(props: SvgProps) {
  return (
    <svg
      height={24}
      width={24}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M9 14h6v7h5V7.8l-8-4.6-8 4.6V21h5v-7zm1 8H3V7.2L12 2l9 5.2V22h-7v-7h-4v7z" />
    </svg>
  );
}

export function HomeFilled(props: SvgProps) {
  return (
    <svg
      height={24}
      width={24}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M21 22V7.174l-9.001-5.195L3 7.214V22h7v-7h4v7z" />
    </svg>
  );
}

export function Search(props: SvgProps) {
  return (
    <svg
      height={24}
      width={24}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M16.387 16.623A8.47 8.47 0 0019 10.5a8.5 8.5 0 10-8.5 8.5 8.454 8.454 0 005.125-1.73l4.401 5.153.76-.649-4.399-5.151zM10.5 18C6.364 18 3 14.636 3 10.5S6.364 3 10.5 3 18 6.364 18 10.5 14.636 18 10.5 18z" />
    </svg>
  );
}

export function SearchFilled(props: SvgProps) {
  return (
    <svg
      height={24}
      width={24}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M16.736 16.262A8.457 8.457 0 0019 10.5a8.5 8.5 0 10-3.779 7.067l4.424 5.18 1.521-1.299-4.43-5.186zM10.5 17C6.916 17 4 14.084 4 10.5S6.916 4 10.5 4 17 6.916 17 10.5 14.084 17 10.5 17z" />
    </svg>
  );
}

export function Library(props: SvgProps) {
  return (
    <svg
      height={24}
      width={24}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M13.66 4.097l-.913.406 7.797 17.513.914-.406L13.66 4.097zM3 22h1V4H3v18zm6 0h1V4H9v18z" />
    </svg>
  );
}

export function LibraryFilled(props: SvgProps) {
  return (
    <svg
      height={24}
      width={24}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M14.617 3.893l-1.827.814 7.797 17.513 1.827-.813-7.797-17.514zM3 22h2V4H3v18zm5 0h2V4H8v18z" />
    </svg>
  );
}

export function CreatePlaylist(props: SvgProps) {
  return (
    <svg
      height={12}
      width={12}
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
    >
      <path d="M14 7H9V2H7v5H2v2h5v5h2V9h5z" />
      <path fill="none" d="M0 0h16v16H0z" />
    </svg>
  );
}

export function HeartFilled(props: IconProps) {
  return (
    <svg
      height={props.size}
      width={props.size}
      viewBox={`0 0 ${props.view || props.size} ${props.view || props.size}`}
      aria-hidden="true"
      fill="currentColor"
      {...props}
    >
      <path fill="none" d="M0 0h16v16H0z" />
      <path d="M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z" />
    </svg>
  );
}

export function Heart(props: IconProps) {
  return (
    <svg
      height={props.size}
      width={props.size}
      viewBox={`0 0 ${props.view || props.size} ${props.view || props.size}`}
      fill="currentColor"
      {...props}
    >
      <path d="M27.672 5.573a7.904 7.904 0 00-10.697-.489c-.004.003-.425.35-.975.35-.564 0-.965-.341-.979-.354a7.904 7.904 0 00-10.693.493A7.896 7.896 0 002 11.192c0 2.123.827 4.118 2.301 5.59l9.266 10.848a3.196 3.196 0 004.866 0l9.239-10.819A7.892 7.892 0 0030 11.192a7.896 7.896 0 00-2.328-5.619zm-.734 10.56l-9.266 10.848c-.837.979-2.508.979-3.346 0L5.035 16.104A6.9 6.9 0 013 11.192 6.9 6.9 0 015.035 6.28a6.935 6.935 0 014.913-2.048 6.89 6.89 0 014.419 1.605A2.58 2.58 0 0016 6.434c.914 0 1.555-.53 1.619-.585a6.908 6.908 0 019.346.431C28.277 7.593 29 9.337 29 11.192s-.723 3.6-2.062 4.941z" />
    </svg>
  );
}

export function PodcastMenu(props: SvgProps) {
  return (
    <svg
      width={12}
      height={12}
      viewBox="0 0 527 483"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 264.208C1.5 119.17 118.974 1.5 264 1.5s262.5 117.67 262.5 262.708c0 87.697-42.965 165.361-108.872 213.039-10.632 7.691-25.033 4.482-31.944-5.885l-8.926-13.391c-7.059-10.589-3.94-24.354 5.727-31.442 49.941-36.615 82.298-95.678 82.298-162.321 0-111.08-89.944-201.037-200.783-201.037-110.839 0-200.783 89.957-200.783 201.037 0 66.643 32.357 125.706 82.298 162.321 9.667 7.088 12.786 20.853 5.727 31.442l-8.926 13.391c-6.911 10.367-21.312 13.576-31.944 5.885C44.465 429.569 1.5 351.905 1.5 264.208z"
        fill="#1ED760"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M104.5 263.216c0-88.63 71.28-160.716 159.5-160.716s159.5 72.086 159.5 160.716c0 52.13-24.66 98.491-62.815 127.832-10.415 8.009-24.644 4.612-31.281-5.446l-6.153-9.323c-6.793-10.293-3.599-23.261 5.102-30.159 24.346-19.303 39.954-49.242 39.954-82.904 0-58.304-46.831-105.332-104.307-105.332s-104.307 47.028-104.307 105.332c0 33.662 15.608 63.601 39.954 82.904 8.701 6.898 11.895 19.866 5.102 30.159l-6.153 9.323c-6.637 10.058-20.866 13.455-31.281 5.446-38.155-29.341-62.815-75.702-62.815-127.832z"
        fill="#1ED760"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M200.5 261c0-34.704 28.618-62.5 63.5-62.5 34.882 0 63.5 27.796 63.5 62.5s-28.618 62.5-63.5 62.5c-34.882 0-63.5-27.796-63.5-62.5z"
        fill="#1ED760"
      />
    </svg>
  );
}

export function Speaker(props: SvgProps) {
  return (
    <svg
      height={12}
      width={12}
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
    >
      <path d="M12.945 1.379l-.652.763c1.577 1.462 2.57 3.544 2.57 5.858s-.994 4.396-2.57 5.858l.651.763a8.966 8.966 0 00.001-13.242zm-2.272 2.66l-.651.763a4.484 4.484 0 01-.001 6.397l.651.763c1.04-1 1.691-2.404 1.691-3.961s-.65-2.962-1.69-3.962zM0 5v6h2.804L8 14V2L2.804 5H0zm7-1.268v8.536L3.072 10H1V6h2.072L7 3.732z" />
    </svg>
  );
}

export function User(props: SvgProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 18 20"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M15.216 13.717L12 11.869a.492.492 0 01-.243-.348.496.496 0 01.112-.41l1.311-1.537A5.498 5.498 0 0014.5 6v-.5a5.524 5.524 0 00-1.739-4.014A5.46 5.46 0 008.636.011c-2.88.187-5.135 2.673-5.135 5.66V6c0 1.311.469 2.58 1.319 3.574l1.311 1.537a.49.49 0 01.112.41.49.49 0 01-.244.348l-3.213 1.847A5.513 5.513 0 000 18.501V20h1v-1.499c0-1.616.874-3.116 2.283-3.917l3.215-1.848c.388-.223.654-.604.73-1.045a1.494 1.494 0 00-.337-1.229L5.579 8.925A4.505 4.505 0 014.499 6v-.329c0-2.461 1.845-4.509 4.2-4.662a4.468 4.468 0 013.377 1.206A4.461 4.461 0 0113.5 5.5V6a4.5 4.5 0 01-1.08 2.925l-1.311 1.537a1.499 1.499 0 00.394 2.274l3.218 1.849a4.513 4.513 0 012.28 3.916V20h1v-1.499a5.517 5.517 0 00-2.785-4.784z" />
    </svg>
  );
}

export function CaretDown(props: SvgProps) {
  return (
    <svg
      height={16}
      width={16}
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
    >
      <path d="M3 6l5 5.794L13 6z" />
    </svg>
  );
}

export function LeftChevron(props: SvgProps) {
  return (
    <svg
      height={24}
      width={24}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1pt"
      {...props}
    >
      <path fill="none" d="M16 4L7 12 16 20" />
    </svg>
  );
}

export function RightChevron(props: SvgProps) {
  return (
    <svg
      height={24}
      width={24}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1pt"
      {...props}
    >
      <path fill="none" d="M8 4L17 12 8 20" />
    </svg>
  );
}

// export function BgNoise(props: SvgProps) {
//   return (
//     <svg xmlns="http://www.w3.org/2000/svg" width={300} height={300} {...props}>
//       <filter id="a" x={0} y={0}>
//         <feTurbulence
//           type="fractalNoise"
//           baseFrequency={0.75}
//           stitchTiles="stitch"
//         />
//         <feColorMatrix type="saturate" values={0} />
//       </filter>
//       <path filter="url(#a)" opacity={0.05} d="M0 0h300v300H0z" />
//     </svg>
//   );
// }

export function MenuDots(props: SvgProps) {
  return (
    <svg
      height={32}
      width={32}
      viewBox="0 0 32 32"
      fill="currentColor"
      {...props}
    >
      <path d="M5.998 13.999A2 2 0 105.999 18a2 2 0 00-.001-4zm10.001 0A2 2 0 1016 18a2 2 0 000-4zm10.001 0A2 2 0 1026.001 18 2 2 0 0026 14z" />
    </svg>
  );
}

export function Clock(props: SvgProps) {
  return (
    <svg
      height={16}
      width={16}
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
    >
      <path d="M7.999 3h-1v5h3V7h-2V3zM7.5 0a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 14C3.916 14 1 11.084 1 7.5S3.916 1 7.5 1 14 3.916 14 7.5 11.084 14 7.5 14z" />
      <path fill="none" d="M16 0v16H0V0z" />
    </svg>
  );
}

export function Verified(props: SvgProps) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 21.66l-3.38 1.854-1.842-3.388-3.847-.268.282-3.845-3.09-2.305 2.316-3.083-1.355-3.61L4.7 5.675l.812-3.77 3.767.827L12 0l2.721 2.732 3.767-.827.812 3.77 3.616 1.34-1.355 3.61 2.317 3.083-3.091 2.305.282 3.845-3.847.268-1.841 3.388L12 21.66z"
        fill="#2E77D0"
      />
      <path
        d="M16.864 7.412l-6.644 7.779-2.804-3.285-.494.578 3.298 3.862 7.214-8.447-.57-.487z"
        fill="#fff"
      />
    </svg>
  );
}
