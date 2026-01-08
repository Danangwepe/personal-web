"use client";

import useFluidCursor from "@/hooks/useFluidCursor";

const FluidCursor = () => {
    useFluidCursor();

    return (
        <canvas
            id="fluid-canvas"
            className="fixed inset-0 pointer-events-none z-[999] h-full w-full"
        />
    );
};

export default FluidCursor;
