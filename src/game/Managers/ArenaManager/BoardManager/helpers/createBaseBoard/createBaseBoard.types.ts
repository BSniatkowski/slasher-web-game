export type TCreateBaseBoard = ({
    maxSize: { x, y },
}: {
    maxSize: { x: number; y: number }
}) => Array<Array<boolean>>
