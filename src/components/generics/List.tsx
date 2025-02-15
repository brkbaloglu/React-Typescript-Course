type ListProps<T> = {
    items: T[]
    onClick: (value: T) => void
}

export const List = <T extends string | number>({items, onClick}: ListProps<T>) => {
    return (
        <div>
            {
                items.map((item, index) => {
                    return (
                        <div key={index} onClick={() => onClick(item)} >
                            {item}
                        </div>
                    )
                })
            }
        </div>
    )
}