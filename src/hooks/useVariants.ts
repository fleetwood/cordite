import {Variants, variantProps} from "types";

const useVariants = (variant:Variants|undefined) => {
  const textVariant = `text-${variant??'primary'}`,
        textVariantContent = `text-${variant??'primary'}-content`,
        bgVariant = `bg-${variant??'primary'}`,
        bgVariantOff = `bg-${variant??'primary'}/0`,
        borderVariant = `border-${variant??'primary'}`,
        borderVariantOff = `border-${variant??'primary'}/0`,
        btnVariant = `btn-${variant??'primary'}`

  return {
    textVariant,
    textVariantContent,
    bgVariant,
    bgVariantOff,
    borderVariant,
    borderVariantOff,
    btnVariant
  }
}

export default useVariants