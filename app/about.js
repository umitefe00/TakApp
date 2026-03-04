import { useRouter } from "expo-router";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function About() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Üst Kısım (Header) */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Text style={styles.backText}>← GERİ DÖN</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>HAKKINDA</Text>
        <View style={styles.profileCircle}>
          <Text style={styles.profileText}>NN</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.iconText}>ℹ️</Text>
        <Text style={styles.pageTitle}>TAK Mobil Uygulaması</Text>

        <View style={styles.card}>
          <Text style={styles.description}>
            Bu uygulama, hastaların Temiz Aralıklı Kateterizasyon (TAK)
            süreciyle ilgili doğru bilgilere hızlıca ulaşabilmesi, sıkça sorulan
            sorulara yanıt bulabilmesi ve sağlık uzmanlarıyla kolayca iletişime
            geçebilmesi amacıyla özel olarak geliştirilmiştir.
          </Text>
          <Text style={styles.version}>Sürüm 1.0.0</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0188b8" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#017aa5",
    padding: 15,
    paddingTop: 40,
  },
  backButton: { padding: 5 },
  backText: { color: "white", fontWeight: "bold", fontSize: 12 },
  headerTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    flex: 1,
  },
  profileCircle: {
    backgroundColor: "white",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  profileText: { color: "#0188b8", fontWeight: "bold", fontSize: 12 },
  content: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  iconText: { fontSize: 60, marginBottom: 10 },
  pageTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#42a5cd",
    width: "100%",
  },
  description: {
    color: "white",
    fontSize: 14,
    lineHeight: 22,
    textAlign: "center",
    marginBottom: 20,
  },
  version: {
    color: "#b3d9eb",
    fontSize: 12,
    textAlign: "center",
    fontWeight: "bold",
  },
});
