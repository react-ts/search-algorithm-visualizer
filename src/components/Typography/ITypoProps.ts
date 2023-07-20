import { HTMLAttributes } from "react"
import { IFontSize, IFontWeight, Alignment } from "../themes/interfaces/Typography"
import { IFindHslColor } from "../themes/utils/findPaletteColor"

export interface ITypoProps<T extends HTMLElement> extends HTMLAttributes<T> {
  size?: keyof IFontSize
  weight?: keyof IFontWeight,
  textColor?: IFindHslColor,
  alignment?: Alignment, 
  capitalized?: boolean 
}
