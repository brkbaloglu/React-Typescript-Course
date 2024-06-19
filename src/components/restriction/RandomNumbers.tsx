type RandomNumbersType = {
    value: number
}

type PositiveNumber = RandomNumbersType & {
    isPositive: boolean
    isNegative?: never
    isZero?: never
}
type NegativeNumber = RandomNumbersType & {
    isNegative: boolean
    isPositive?: never
    isZero?: never
}
type Zero = RandomNumbersType & {
    isZero: boolean
    isPositive?: never
    isNegative?: never
}

type RandomNumbersProps = PositiveNumber | NegativeNumber | Zero


export const RandomNumbers = ({
    value,
    isPositive,
    isNegative,
    isZero,
}: RandomNumbersProps) => {
    return (
        <div>
            {value} {isPositive && "positive"} {isNegative && "negative"} {" "} 
            {isZero && "zero"}
        </div>
    )
}