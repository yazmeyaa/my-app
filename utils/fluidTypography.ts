function fluidTypography(vMin: number, vMax: number, fMin: number, fMax: number) {
    return `calc((100vw - ${vMin}px ) / (${vMax} - ${vMin}) * (${fMax} - ${fMin}) + ${fMin}px)`
}

export { fluidTypography }
