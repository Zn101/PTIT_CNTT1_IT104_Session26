import { Suspense, lazy } from "react";

const LazyLoadComp = lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => resolve(import("./pages/Bai8/LazyLoading")), 2000);
  })
);

export default function Bai8() {
  return (
    <div>
      <Suspense
        fallback={
          <div className="d-flex justify-content-center my-5">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        }
      >
        <LazyLoadComp />
      </Suspense>
    </div>
  );
}
