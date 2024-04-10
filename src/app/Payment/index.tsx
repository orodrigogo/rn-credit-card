import { View, Text, TouchableOpacity } from "react-native"

import Animated, {
  withTiming,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated"

import { styles } from "./styles"

import { CreditCard } from "@/components/credit-card"

enum CARD_SIDE {
  front = 0,
  back = 1,
}

export function Payment() {
  const cardSide = useSharedValue(CARD_SIDE.front)

  function handleFlipCard() {
    cardSide.value =
      cardSide.value === CARD_SIDE.back ? CARD_SIDE.front : CARD_SIDE.back
  }

  const frontAnimatedStyles = useAnimatedStyle(() => {
    const rotateValue = interpolate(
      cardSide.value,
      [CARD_SIDE.front, CARD_SIDE.back],
      [0, 180]
    )

    return {
      transform: [
        {
          rotateY: withTiming(`${rotateValue}deg`, { duration: 1000 }),
        },
      ],
    }
  })

  const backAnimatedStyles = useAnimatedStyle(() => {
    const rotateValue = interpolate(
      cardSide.value,
      [CARD_SIDE.front, CARD_SIDE.back],
      [180, 360]
    )

    return {
      transform: [
        {
          rotateY: withTiming(`${rotateValue}deg`, { duration: 1000 }),
        },
      ],
    }
  })

  return (
    <View style={styles.container}>
      <View>
        <Animated.View style={[styles.frontCard, frontAnimatedStyles]}>
          <CreditCard.Front />
        </Animated.View>

        <Animated.View style={[styles.backCard, backAnimatedStyles]}>
          <CreditCard.Back />
        </Animated.View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleFlipCard}>
        <Text>Ver outro lado</Text>
      </TouchableOpacity>
    </View>
  )
}
