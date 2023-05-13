import React from 'react';
import { useTranslation } from 'react-i18next';

function BearProgressModal(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <span className='sr-only'>{t('icons.bear-progress')}</span>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 187 175'
        width='187'
        height='178'
        fill='none'
        {...props}
      >
        <path
          d='M187 95c0 32.268-8.375 58.697-34 75.376h-22.5c-10 3.124-10.5 4.124-32 5.124-20.5-1-26.5-1-36-5.124h-27C9.875 153.697 0 124.268 0 92 0 40.638 40.257 0 93 0s94 43.638 94 95z'
          fill='#fff'
        />
        <path
          d='M32.938 76.065c-.243 1.039-.459 2.75-1.285 3.294-.885.58-2.41-.051-3.522-.312-2.15-.504-4.298-3.575-2.982-4.807 1.316-1.232 3.149-.29 3.149-.29s-.03-2.06 1.658-2.692c2.07-.774 3.486 2.656 2.982 4.807z'
          fill='#EA6853'
          fillOpacity='.2'
        />
        <path
          d='M172.894 46.77c-.659.454-1.642 1.295-2.374 1.18-.784-.124-1.311-1.244-1.797-1.95-.939-1.364-.582-4.15.77-4.17 1.351-.02 1.893 1.427 1.893 1.427s1.022-1.159 2.278-.658c1.538.615.594 3.232-.77 4.171z'
          fill='#FBE1DD'
        />
        <path
          d='M161.97 82.814c-.746.29-1.897.88-2.583.6-.734-.302-.988-1.513-1.298-2.312-.599-1.544.392-4.173 1.712-3.88 1.32.292 1.512 1.826 1.512 1.826s1.263-.892 2.368-.115c1.355.953-.167 3.282-1.711 3.881z'
          fill='#EA6853'
          fillOpacity='.2'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M56.643 94.997c3.483-6.078 6.6-9.902 8.128-11.622h66.702a305.11 305.11 0 0 1 4.322 11.194 168.54 168.54 0 0 0-2.297-.008c-5.99.02-10.661.41-15.325.8-4.711.394-9.415.787-15.464.797-6.257.011-11.123-.392-15.996-.797-4.823-.4-9.653-.8-15.846-.8-4.278 0-9.375.188-14.224.436zm-10.468 25.66a118.368 118.368 0 0 1 5.015-14.58c6.466.2 13.614.467 16.255.734.936.095 2.166.232 3.628.396 6.763.755 18.493 2.065 29.004 2.268 12.307.236 30.89-1.292 34.019-1.559.31-.027.609-.058.917-.095l5.129-.621a310.704 310.704 0 0 1 4.025 13.46H46.396c-.074 0-.148-.001-.22-.003zm-4.125 22.07c.54-5.036 1.297-9.737 2.209-14.111.116.003.232.008.35.016l24.152 1.616h31.842l31.842-1.066 13.794-.461c1.251 5.225 2.343 10.564 3.15 15.828-5.884-.388-12.409-.776-17.733-.985-9.771-.384-16.088-.427-24.525-.484h-.001c-2.027-.014-4.177-.029-6.527-.049-11.97-.104-30.401-.008-31.762 0H44.127c-.722 0-1.42-.106-2.077-.304zm-.874 21.712a175.35 175.35 0 0 1 .109-11.431 6.511 6.511 0 0 1 2.793-.846c6.736-.472 17.686-1.139 25.736-1.141 7.941-.003 14.149.672 20.325 1.344 6.4.695 12.765 1.387 20.991 1.319 7.246-.06 17.841-.752 21.261-.988a32.38 32.38 0 0 1 2.225-.077h15.779c.409 4.382.564 8.638.387 12.651-5.699-.019-12.099.002-17.284.132-5.594.14-10.076.477-14.447.806-5.354.402-10.54.792-17.395.792-10.56 0-26.115-1.15-30.594-1.499a32.254 32.254 0 0 0-2.506-.099h-23.93a6.623 6.623 0 0 1-3.45-.963z'
          fill='#BED4FF'
        />
        <path
          d='M63 170.5H44C40 111.5 67.404 82 67.404 82h62S153 140 147.5 170.5H130'
          stroke='#000'
        />
        <mask id='a' fill='#fff'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M71.392 8.639C69.766 3.625 65.056 0 59.5 0 52.596 0 47 5.596 47 12.5c0 3.868 1.757 7.326 4.516 9.619C44.902 29.382 41 38.326 41 48c0 24.3 24.624 44 55 44s55-19.7 55-44c0-7.755-2.508-15.04-6.91-21.368 5.269-2.646 8.078-8.746 6.39-14.618-1.907-6.635-8.831-10.468-15.466-8.561a12.482 12.482 0 0 0-8.385 7.995C117.875 6.745 107.338 4 96 4c-8.846 0-17.204 1.67-24.608 4.639z'
          />
        </mask>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M71.392 8.639C69.766 3.625 65.056 0 59.5 0 52.596 0 47 5.596 47 12.5c0 3.868 1.757 7.326 4.516 9.619C44.902 29.382 41 38.326 41 48c0 24.3 24.624 44 55 44s55-19.7 55-44c0-7.755-2.508-15.04-6.91-21.368 5.269-2.646 8.078-8.746 6.39-14.618-1.907-6.635-8.831-10.468-15.466-8.561a12.482 12.482 0 0 0-8.385 7.995C117.875 6.745 107.338 4 96 4c-8.846 0-17.204 1.67-24.608 4.639z'
          fill='#CAB9A7'
        />
        <path
          d='m71.392 8.639-.95.308.33 1.018.992-.398-.372-.928zm-19.876 13.48.74.673.704-.774-.805-.668-.639.769zm92.574 4.513-.448-.893-1.031.517.659.947.82-.57zm6.39-14.618-.961.276.961-.276zm-15.466-8.561.276.96-.276-.96zm-8.385 7.995-.474.881 1.04.56.38-1.118-.946-.323zM72.343 8.33C70.587 2.916 65.503-1 59.5-1v2c5.11 0 9.444 3.334 10.941 7.947l1.902-.617zM59.5-1C52.044-1 46 5.044 46 12.5h2C48 6.149 53.149 1 59.5 1v-2zM46 12.5c0 4.178 1.899 7.913 4.877 10.388l1.278-1.538A11.474 11.474 0 0 1 48 12.5h-2zm4.777 8.945C44.018 28.867 40 38.045 40 48h2c0-9.392 3.786-18.104 10.256-25.208l-1.479-1.347zM40 48c0 25.05 25.292 45 56 45v-2c-30.043 0-54-19.448-54-43h-2zm56 45c30.708 0 56-19.95 56-45h-2c0 23.552-23.957 43-54 43v2zm56-45c0-7.977-2.581-15.46-7.089-21.939l-1.641 1.142C147.566 33.38 150 40.468 150 48h2zm-7.461-20.474c5.691-2.858 8.725-9.445 6.902-15.788l-1.922.552c1.552 5.402-1.031 11.014-5.877 13.449l.897 1.787zm6.902-15.788c-2.059-7.166-9.538-11.306-16.704-9.246l.553 1.922c6.104-1.755 12.475 1.772 14.229 7.876l1.922-.552zm-16.704-9.246a13.486 13.486 0 0 0-9.055 8.634l1.893.645a11.486 11.486 0 0 1 7.715-7.357l-.553-1.922zm-7.635 8.076C118.198 5.783 107.498 3 96 3v2c11.178 0 21.551 2.706 30.155 7.33l.947-1.762zM96 3c-8.971 0-17.456 1.694-24.98 4.71l.744 1.857C79.048 6.647 87.28 5 96 5V3z'
          fill='#000'
          mask='url(#a)'
        />
        <ellipse cx='98' cy='46' rx='20' ry='19' fill='#fff' />
        <path d='M98 36v15' stroke='#000' />
        <path
          d='M102.952 32.742c.702.85-.324 2.856-1.309 3.67-.986.815-3.246 1.524-3.947.675-.702-.849.42-2.935 1.405-3.75.985-.814 3.149-1.444 3.851-.595z'
          fill='#000'
        />
        <path
          d='M93.41 32.41c.78-.778 2.874.053 3.778.957.904.904 1.824 3.087 1.045 3.866-.78.779-2.962-.14-3.866-1.045-.904-.904-1.736-2.998-.957-3.778z'
          fill='#000'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M100.893 51.385a7.457 7.457 0 0 1-5.93 0l-.051-.075a.628.628 0 0 1 .648-.972 5.958 5.958 0 0 0 4.737 0l.106-.016c.605-.093.954.664.49 1.063z'
          fill='#000'
        />
        <path
          d='M78 33a5 5 0 1 1-9.716-1.667c1.938-1.666 1.938-1.666 3.605-3.21A5 5 0 0 1 78 33z'
          fill='#000'
        />
        <path
          d='M75.619 31.577a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z'
          fill='#fff'
        />
        <circle cx='70.5' cy='34.5' r='.5' fill='#fff' />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='m70 33-1.5 1s-1.5.5-1.5 0 .5-1 .5-1l1.5-1 1 1z'
          fill='#000'
        />
        <ellipse cx='58.5' cy='50' rx='9.5' ry='9' fill='#EA6853' />
        <ellipse cx='136.5' cy='50' rx='9.5' ry='9' fill='#EA6853' />
        <path
          d='M60 9a5 5 0 0 0-5 5c0 1.636.286 3.088 1.5 4 0 0 2.446-2.35 4-3.5 1.492-1.104 4-2.5 4-2.5-.711-1.895-2.357-3-4.5-3zM136.492 12.498c2.944.268 4.963 2.622 4.999 5.533.02 1.663-.247 1.978-1.559 3.963 0 0-2.942-2.825-4.455-4.109-1.453-1.232-3.937-2.85-3.937-2.85.911-1.805 2.723-2.74 4.952-2.537zM119 33a5 5 0 1 0 9.715-1.667c-1.937-1.666-1.937-1.666-3.604-3.21A5 5 0 0 0 119 33z'
          fill='#000'
        />
        <path
          d='M121.381 31.577a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0z'
          fill='#fff'
        />
        <circle
          cx='.5'
          cy='.5'
          r='.5'
          transform='matrix(-1 0 0 1 127 34)'
          fill='#fff'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='m127 33 1.5 1s1.5.5 1.5 0-.5-1-.5-1l-1.5-1-1 1z'
          fill='#000'
        />
        <path
          d='M63 170s5.912-5 33.993-5c28.081 0 33.007 5 33.007 5'
          stroke='#000'
        />
        <path
          d='M109.5 159c0 6.942-5.186 12.5-11.5 12.5s-11.5-5.558-11.5-12.5 5.186-12.5 11.5-12.5 11.5 5.558 11.5 12.5z'
          fill='#FFC224'
          stroke='#000'
        />
        <path
          d='M102 155.675s-1-1.8-3.5-2.175m0 0s-3.5-.05-3.5 2.5c0 3.325 7 3 7 7.325 0 1.675-1.812 2.454-3.5 2.55-1.517.086-3-1.375-3-1.375m3-11V151v17'
          stroke='#000'
        />
        <path
          d='M120.5 84V67.5s-14.9-2.033-24.5-2c-9.21.032-23.5 2-23.5 2V84s-5 5-8.5 10c-2.375 5.568-1 15.5-1 15.5s11.734-3.398 15 1.5c4 6-15 15.5-15 15.5V170s5.5 5.5 34 5.5 33-5.5 33-5.5v-41.5s-13-12.5-9.5-16.5 9.5-2.5 9.5-2.5.5-13-.5-15.5-6-6.5-9-10z'
          fill='#9EA7FA'
          fillOpacity='.4'
        />
        <path
          d='M72.5 138.121V97.583l.123.019a292.181 292.181 0 0 0 8.485 1.145C86.334 99.371 92.858 100 98 100c5.142 0 11.666-.628 16.892-1.254a292.323 292.323 0 0 0 8.608-1.163v41.026l-.316.077a189.703 189.703 0 0 1-8.445 1.823c-5.217.999-11.678 1.991-16.739 1.991-5.054 0-11.51-1.115-16.728-2.239a170.644 170.644 0 0 1-8.443-2.05l-.329-.09z'
          fill='#fff'
          stroke='#000'
        />
        <path
          d='m108.5 127.5.5-5-3.5 2-3 2-4 2.425L94 126l-2.5-1.962L88 122l.5 6 3.5 3 5.236 1.611c.828.255 1.709.29 2.555.102L103 132l3-2 2.5-2.5z'
          fill='#000'
        />
        <path
          d='M83 122v-6l4.557-2.279a4.99 4.99 0 0 0 .834-.525l3.58-2.785c.351-.273.737-.498 1.147-.669L98.5 107.5l3 1.7 5.988 2.579c.34.147.663.331.963.549L113.5 116l-3.75 2.125-3.75 2.125-3.75 2.125-3.75 2.125-3.875-2.125L88.5 119l-5.5-3v6l2 5.5h-4l2-5.5z'
          fill='#000'
        />
        <path
          d='M83 116v6m0-6 4.557-2.279a4.99 4.99 0 0 0 .834-.525l3.58-2.785c.351-.273.737-.498 1.147-.669L98.5 107.5l3 1.7 5.988 2.579c.34.147.663.331.963.549L113.5 116l-3.75 2.125-3.75 2.125-3.75 2.125-3.75 2.125-3.875-2.125L88.5 119l-5.5-3zm0 6-2 5.5h4l-2-5.5zm5 0 .5 6 3.5 3 5.236 1.611c.828.255 1.709.29 2.555.102L103 132l3-2 2.5-2.5.5-5-3.5 2-3 2-4 2.425L94 126l-2.5-1.962L88 122z'
          stroke='#000'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M118.834 67.5a.3.3 0 0 0-.014-.003c-1.169-.282-2.906-.546-5.106-.77C109.327 66.279 103.241 66 96.5 66c-6.74 0-12.827.279-17.214.727-2.2.224-3.937.488-5.106.77-.005 0-.01.002-.014.003l.014.003c1.169.282 2.906.546 5.106.77C83.673 68.721 89.76 69 96.5 69c6.741 0 12.827-.279 17.214-.727 2.2-.224 3.937-.488 5.106-.77a.3.3 0 0 0 .014-.003zM96.5 70c13.531 0 24.5-1.12 24.5-2.5S110.031 65 96.5 65 72 66.12 72 67.5 82.969 70 96.5 70zM119.766 77.5c-1.228-.284-3.043-.548-5.332-.772C109.861 76.279 103.52 76 96.5 76c-7.02 0-13.36.28-17.934.728-2.29.224-4.104.488-5.332.772 1.228.284 3.043.548 5.332.772C83.14 78.721 89.48 79 96.5 79c7.02 0 13.361-.28 17.934-.728 2.289-.224 4.104-.488 5.332-.772zM96.5 80c14.083 0 25.5-1.12 25.5-2.5S110.583 75 96.5 75 71 76.12 71 77.5 82.417 80 96.5 80z'
          fill='#000'
        />
        <path d='M62.5 170s6 5.5 34.5 5.5 33.5-5.5 33.5-5.5' stroke='#000' />
        <path
          d='m69.5 122.732-5-13.629c2.43-.532 8.119-1.265 11.5-.103.643.221 1.714 1.329 2 2 .286.671.264 1.811 0 3-.699 3.08-4.569 6.235-8.5 8.732z'
          fill='#CAB9A7'
        />
        <path
          d='M72.5 67.5v14.929a5 5 0 0 1-1.465 3.535l-5.133 5.134a10 10 0 0 0-2.929 7.006l-.075 11.396M62.5 170l.286-43.5m.112-17s.614-.18 1.602-.397m-1.602.397-6.898 2m6.786 15s3.198-1.534 6.714-3.768m-6.714 3.768-6.786 3m8.5-20.397 5 13.629m-5-13.629c2.43-.532 8.119-1.265 11.5-.103m-6.5 13.732c3.931-2.497 7.801-5.652 8.5-8.732m-2-5c.643.221 1.714 1.329 2 2 .286.671.264 1.811 0 3m-2-5-3 2m5 3h-3.5'
          stroke='#000'
        />
        <path
          d='m130.45 110 1.775.25-6.725 13.588c-2.664-2.814-5.478-6.41-5.84-9.338-.168-1.358.192-2.573 1.34-3.5.234-.189.488-.355.756-.5 3.243-1.752 8.694-.5 8.694-.5z'
          fill='#CAB9A7'
        />
        <path
          d='M120.5 67v14.951c0 1.362.556 2.665 1.538 3.608l5.335 5.118a9.998 9.998 0 0 1 3.077 7.216V110m0 60v-41.5m0-18.5 1.775.25m-1.775-.25s-5.451-1.252-8.694.5m8.694 18L135 132m-4.55-3.5s-2.406-1.975-4.95-4.662M134 110.5l-1.775-.25m0 0-6.725 13.588m0 0c-2.664-2.814-5.478-6.41-5.84-9.338m0 0c-.168-1.358.192-2.573 1.34-3.5.234-.189.488-.355.756-.5m-2.096 4 3.34 1m-1.244-5 2.744 1.5'
          stroke='#000'
        />
      </svg>
    </>
  );
}

BearProgressModal.displayName = 'BearProgressModal';

export default BearProgressModal;
