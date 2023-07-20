import styled from '@emotion/styled'
import { IFindHslColor } from '../themes/utils/findPaletteColor'

export interface IconProps {
  icon: string,
  iconColor?: IFindHslColor,
  size?: number,
  fill?: number,
  weight?: number,
  grade?: number,
  opticalSize?: number
}

export const StyledSpan = styled.span<Omit<IconProps, "icon">>`
  color: ${({ iconColor, theme }: any) => theme.palette.find(iconColor)};
  ${({ size }) => size && `
    font-size: ${size}px; 
    width: ${size}px;
    height: ${size}px;
  `};

  ${({ fill, weight, grade, opticalSize }) => `
    font-variation-settings: 'FILL' ${fill || 0},
    'wght' ${weight || 700},
    'GRAD' ${grade || 200},
    'opsz' ${opticalSize || 48}
  `};
`
