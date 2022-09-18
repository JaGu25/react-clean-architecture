interface IObjectKeys {
    [key: string]: string;
}

export const colors: IObjectKeys = {
    text: "#1e293b",
    white: "#ffffff",
    gray: '#e5e7eb',
    primary: '#6200EE',
    primary_variant: "#3700B3",
    secondary: "#03DAC6",
    secondary_variant: "#018786",
    red: "#ef4444"
}

export const md = {
    xs: '(min-width: 560px)',
    sm: '(min-width: 768px)',
    md: `(min-width: 1024px)`,
    lg: `(min-width: 1280px)`,
    xl: `(min-width: 1520px)`
}

enum SpacingEnum {
    Spacing0 = "0rem",
    Spacing1 = "0.5rem",
    Spacing2 = "1rem",
    Spacing3 = "1.5rem",
    Spacing4 = "2rem",
    Spacing5 = "3rem",
    Spacing6 = "4rem",
    Spacing7 = "5rem",
    Spacing8 = "6rem"
}

export const spacing = {
    Spacing0: SpacingEnum.Spacing0,
    Spacing1: SpacingEnum.Spacing1,
    Spacing2: SpacingEnum.Spacing2,
    Spacing3: SpacingEnum.Spacing3,
    Spacing4: SpacingEnum.Spacing4,
    Spacing5: SpacingEnum.Spacing5,
    Spacing6: SpacingEnum.Spacing6,
    Spacing7: SpacingEnum.Spacing7,
    Spacing8: SpacingEnum.Spacing8
}

export const boxShadow = {
    basic: "0 4px 8px 0 rgba(0,0,0,0.2)"
}

enum FontSizes {
    xs = "1.2rem",
    sm = "1.4rem",
    base = "1.6rem",
    lg = "1.8rem",
    xl = "2rem",
    '2xl' = "4rem",
    '3xl' = "6rem"
}

export const fontSizes = {
    xs: FontSizes.xs,
    sm: FontSizes.sm,
    base: FontSizes.base,
    lg: FontSizes.lg,
    xl: FontSizes.xl,
    '2xl': FontSizes["2xl"],
    '3xl': FontSizes["3xl"]
}