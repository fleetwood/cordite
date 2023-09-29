import {Variants, variantProps} from "types";

const useVariants = (variant:Variants|undefined) => {
  const txtVariant = `text-${variant??'primary'}`,
        txtVariantContent = `text-${variant??'primary'}-content`,
        bgVariant = `bg-${variant??'primary'}`,
        borderVariant = `border-${variant??'primary'}`,
        btnVariant = `btn-${variant??'primary'}`
  
  return {
    txtVariant,
    txtVariantContent,
    bgVariant,
    borderVariant,
    btnVariant
  }
}

export default useVariants