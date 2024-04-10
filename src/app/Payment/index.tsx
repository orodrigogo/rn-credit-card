import { useState } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { useSharedValue } from "react-native-reanimated"

import { styles } from "./styles"

import { CreditCard, CARD_SIDE } from "@/components/credit-card"
import { Input } from "@/components/input"

export function Payment() {
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [date, setDate] = useState("")
  const [code, setCode] = useState("")

  const cardSide = useSharedValue(CARD_SIDE.front)

  function handleFlipCard() {
    if (cardSide.value === CARD_SIDE.front) {
      showBackCard()
    } else {
      showFrontCard()
    }
  }

  function showFrontCard() {
    cardSide.value = CARD_SIDE.front
  }

  function showBackCard() {
    cardSide.value = CARD_SIDE.back
  }

  return (
    <View style={styles.container}>
      <CreditCard
        cardSide={cardSide}
        data={{
          name,
          number: number.replace(/(\d{4})(?=\d)/g, "$1 "),
          date,
          code,
        }}
      />

      <TouchableOpacity style={styles.button} onPress={handleFlipCard}>
        <Text>Ver outro lado</Text>
      </TouchableOpacity>

      <View style={styles.form}>
        <Input
          placeholder="Nome do titular"
          onFocus={showFrontCard}
          onChangeText={setName}
        />

        <Input
          placeholder="Número do cartão"
          keyboardType="numeric"
          maxLength={16}
          onFocus={showBackCard}
          onChangeText={setNumber}
        />

        <View style={styles.inputInLine}>
          <Input
            placeholder="01/02"
            keyboardType="numeric"
            maxLength={5}
            style={styles.inputSmall}
            onFocus={showBackCard}
            onChangeText={setDate}
          />

          <Input
            placeholder="123"
            keyboardType="numeric"
            maxLength={3}
            style={styles.inputSmall}
            onFocus={showBackCard}
            onChangeText={setCode}
          />
        </View>
      </View>
    </View>
  )
}
