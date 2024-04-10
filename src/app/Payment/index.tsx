import { useState } from "react"
import { View, Button } from "react-native"
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated"

import { styles } from "./styles"

import { CreditCard } from "@/components/credit-card"

enum CARD_VIEW {
  front = 0,
  back = 1,
}

export function Payment() {
  const rotate = useSharedValue(CARD_VIEW.front)

  function handleFlipCard() {
    rotate.value =
      rotate.value === CARD_VIEW.back ? CARD_VIEW.front : CARD_VIEW.back
  }

  const frontAnimatedStyles = useAnimatedStyle(() => {
    const rotateValue = interpolate(
      rotate.value,
      [CARD_VIEW.front, CARD_VIEW.back],
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
      rotate.value,
      [CARD_VIEW.front, CARD_VIEW.back],
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

      <Button title="Inverter" onPress={handleFlipCard} />
    </View>
  )
}
