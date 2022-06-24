import React from 'react';

const ReportIcon = ({ color }: { color?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.3315 5.62161L16.7099 0H1.6687V24H22.3315V5.62161ZM17.2129 2.93176L19.3997 5.1186H17.2129V2.93176ZM20.6141 22.2826H3.38609V1.71739H15.4955V6.83598H20.6141V22.2826Z"
        fill={color}
      />
      <path
        d="M19.1748 9.35454H10.8408V11.0719H19.1748V9.35454Z"
        fill={color}
      />
      <path
        d="M6.35119 13.6472L5.67631 12.9724L4.46191 14.1867L6.35119 16.076L9.47211 12.9551L8.25774 11.7407L6.35119 13.6472Z"
        fill={color}
      />
      <path
        d="M6.35117 17.9251L5.67628 17.2502L4.46191 18.4646L6.35117 20.3539L9.47209 17.233L8.25772 16.0186L6.35117 17.9251Z"
        fill={color}
      />
      <path
        d="M6.35117 9.36944L5.67628 8.69453L4.46191 9.9089L6.35117 11.7982L9.47209 8.67728L8.25772 7.46291L6.35117 9.36944Z"
        fill={color}
      />
      <path
        d="M19.1748 13.6352H10.8408V15.3525H19.1748V13.6352Z"
        fill={color}
      />
      <path
        d="M19.1748 17.9157H10.8408V19.6331H19.1748V17.9157Z"
        fill={color}
      />
    </svg>
  );
};

ReportIcon.defaultProps = {
  color: '#42427D',
};

export default ReportIcon;
