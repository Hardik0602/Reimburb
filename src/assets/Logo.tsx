const tailwindSizeMap: Record<string, number> = {
    xs: 64,
    sm: 80,
    md: 120,
    lg: 160,
    xl: 200,
    '2xl': 260,
}
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
type Props = {
    size?: Size
    color?: string
}
const ReimburseOSLogo = ({ size = 'md', color = '#c8ff57' }: Props) => {
    const px = tailwindSizeMap[size]
    const scale = px / 120
    const w = 120 * scale
    const h = 88 * scale
    return (
        <svg
            width={w}
            height={h}
            viewBox="0 0 120 88"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect x="38" y="0" width="44" height="44" rx="10" fill={color} />
            <polygon points="60,9 76,18 76,26 60,35 44,26 44,18" fill="#0a0b0e" />
            <line x1="60" y1="9" x2="60" y2="35" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
            <line x1="44" y1="18" x2="76" y2="18" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
            <line x1="44" y1="26" x2="76" y2="26" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
            <text
                x="60"
                y="68"
                textAnchor="middle"
                fontFamily="Syne, sans-serif"
                fontSize="17"
                fontWeight="800"
                fill="#f0f0ee"
                letterSpacing="-0.3">
                Reimburse
            </text>
            <text
                x="60"
                y="86"
                textAnchor="middle"
                fontFamily="Syne, sans-serif"
                fontSize="17"
                fontWeight="800"
                fill={color}
                letterSpacing="-0.3">
                OS
            </text>
        </svg>
    )
}
export default ReimburseOSLogo