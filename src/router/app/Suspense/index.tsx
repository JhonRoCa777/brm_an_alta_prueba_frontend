import { CSpinner } from '@/components/atom';
import { Suspense, lazy } from 'react';

export interface ISuspense {
  path: Promise<any>
}

export function CSuspense({
  path
}: ISuspense) {
  const LazyComponent = lazy(() => path);
  return (
    <Suspense fallback={
      <div className={`
        position-absolute d-flex
        w-100 h-100 top-0 start-0
        justify-content-center align-items-center`}>
        <CSpinner/>
      </div>
     }>
      <LazyComponent/>
    </Suspense>
  );
}