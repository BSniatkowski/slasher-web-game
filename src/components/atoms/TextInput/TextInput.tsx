import { forwardRef, useMemo, useState } from 'react'

import Icon from '../Icon/Icon'
import * as S from './TextInput.style'
import { ITextInputProps } from './TextInput.types'

const TextInput = forwardRef<HTMLInputElement, ITextInputProps>(
    ({ label, iconVariant, onIconClick, ...props }, ref) => {
        const [isFocused, setIsFocused] = useState(false)
        const isLabelSmall = useMemo(() => !!props.value || isFocused, [props.value, isFocused])

        return (
            <S.TextInputContainer $isFocused={isFocused}>
                <S.SLabel $isSmall={isLabelSmall}>{label}</S.SLabel>
                <S.STextInput
                    ref={ref}
                    {...props}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
                {iconVariant && <Icon variant={iconVariant} onClick={onIconClick} />}
            </S.TextInputContainer>
        )
    },
)

export default TextInput
