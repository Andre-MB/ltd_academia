import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Alert, Image, SafeAreaView, StatusBar, } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../styles/colors";
import styles from "./styles";


export const Financial = () => {
  const handleViewInfo = () => {
    Alert.alert("Viewing information");
  };

  const handlePaymentHistory = () => {
    Alert.alert("Viewing payment history");
  };

  const handleMakePayment = () => {
    Alert.alert("Processing payment...");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />

      <View style={styles.header}>
        <Text style={styles.textHeader}>Financeiro</Text>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.titleContainer}>
          <Ionicons name="person-circle" size={60} color={"#2b2b2b"} />
          <Text style={styles.title}> Francisco Pinto</Text>
        </View>

        <View style={styles.titleContainer}>
          <Image
            style={styles.moneyImage}
            source={require("../../../assets/images/money.jpeg")}
          />
          <Text style={styles.subtitle}>Plano mensal</Text>
        </View>

        <Text style={styles.subtitle}>Informações Financeiras:</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Dados Financeiros</Text>
          <View style={styles.infoRow}>
            <Text style={styles.paidText}>Mensalidade paga</Text>
            <Text style={styles.amount}>R$150,00</Text>
          </View>
          <Text style={styles.mutedText}>Pagamento efetuado em 21/Set</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={handleViewInfo}
              accessibilityLabel="View information"
            >
              <Text style={styles.primaryButtonText}>Ver informações</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.mutedButton}
              onPress={handlePaymentHistory}
              accessibilityLabel="View payment history"
            >
              <Text style={styles.mutedButtonText}>Histórico de pag.</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.cardTwo}>
          <Text style={styles.cardTitle}>Próximo pagamento</Text>
          <View style={styles.infoRow}>
            <Text style={styles.pendingText}>Mensalidade Pendente</Text>
            <Text style={styles.amount}>R$150,00</Text>
          </View>
          <Text style={styles.mutedText}>Vencimento em 21/Out</Text>
          <TouchableOpacity
            style={styles.dangerButton}
            onPress={handleMakePayment}
            accessibilityLabel="Make payment"
          >
            <Text style={styles.dangerButtonText}>Efetuar pagamento</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
