'use client';

import useCanvasCursor from '@/shared/utils/canvasCursor';

const CanvasCursor = () => {
  useCanvasCursor();

  return <canvas className="z-1000 pointer-events-none fixed inset-0" id="canvas" />;
};
export default CanvasCursor;
