import { View, Text, TouchableOpacity } from "react-native"
import { useSharedValue } from "react-native-reanimated"

import { styles } from "./styles"

import { CreditCard, CARD_SIDE } from "@/components/credit-card"

export function Payment() {
  const cardSide = useSharedValue(CARD_SIDE.front)

  function handleFlipCard() {
    cardSide.value =
      cardSide.value === CARD_SIDE.back ? CARD_SIDE.front : CARD_SIDE.back
  }

  return (
    <View style={styles.container}>
      <CreditCard cardSide={cardSide} />

      <TouchableOpacity style={styles.button} onPress={handleFlipCard}>
        <Text>Ver outro lado</Text>
      </TouchableOpacity>
    </View>
  )
}
