import ContentLoader from "react-content-loader";

export default function Loading() {
  return (
    <div>
      <ContentLoader
        speed={3}
        width={1500}
        height={500}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="100" y="25" rx="0" ry="23" width="200" height="300" />
        <rect x="350" y="25" rx="0" ry="23" width="200" height="300" />
        <rect x="600" y="25" rx="0" ry="23" width="200" height="300" />
        <rect x="850" y="25" rx="0" ry="23" width="200" height="300" />
        <rect x="1100" y="25" rx="0" ry="23" width="200" height="300" />
      </ContentLoader>
    </div>
  );
}