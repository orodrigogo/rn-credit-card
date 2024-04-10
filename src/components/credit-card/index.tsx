import { View, Text } from "react-native"

import { styles } from "./styles"

function Front() {
  return (
    <View style={[styles.card, styles.front]}>
      <View style={styles.header}>
        <View style={[styles.circle, styles.logo]} />
        <Text>Meu Cartão</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.name}>Rodrigo Gonçalves</Text>

        <View style={styles.flag}>
          <View style={[styles.circle, styles.red]} />
          <View style={[styles.circle, styles.orange]} />
        </View>
      </View>
    </View>
  )
}

function Back() {
  return (
    <View style={[styles.card, styles.back]}>
      <View>
        <Text style={styles.label}>Número do cartão</Text>
        <Text style={styles.value}>1234 5678 9012 3456</Text>
      </View>

      <View style={styles.footer}>
        <View>
          <Text style={styles.label}>Validade</Text>
          <Text style={styles.value}>01/02</Text>
        </View>

        <View>
          <Text style={styles.label}>CVV</Text>
          <Text style={styles.value}>123</Text>
        </View>
      </View>
    </View>
  )
}

export const CreditCard = { Front, Back }
