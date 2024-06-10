const Loading = ({ width = 100, height = 100, fill = '#f44242' }) => {
  return (
    <div
      style={{
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <svg width={width} height={height} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="20" r="10" fill={fill}>
          <animate attributeName="cy" dur="2s" values="20;80;20" repeatCount="indefinite" />
        </circle>
        <circle cx="20" cy="80" r="10" fill={fill}>
          <animate attributeName="cx" dur="2s" values="20;80;20" repeatCount="indefinite" />
        </circle>
        <circle cx="80" cy="80" r="10" fill={fill}>
          <animate attributeName="cx" dur="2s" values="80;20;80" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
};

export default Loading;
