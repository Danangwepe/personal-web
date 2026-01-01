"use client";

import useCanvasCursor from "@/hooks/useCanvasCursor";

const CanvasCursor = () => {
    useCanvasCursor();

    return (
        <canvas
            className="pointer-events-none fixed py-0 inset-0 z-0 h-full w-full"
            id="canvas"
        />
    );
};

export default CanvasCursor;
