import { useRouter } from "expo-router";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function Contact() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Text style={styles.backText}>← GERİ DÖN</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>İLETİŞİM</Text>
        <View style={styles.profileCircle}>
          <Text style={styles.profileText}>NN</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.specialistTitle}>Uzm. Hem.</Text>
        <Text style={styles.specialistName}>Nilgün ARAS</Text>

        <View style={styles.contactBox}>
          <Text style={styles.contactIcon}>📞</Text>
          <Text style={styles.contactText}>+90 (505) XXX XX XX</Text>
        </View>

        <View style={styles.contactBox}>
          <Text style={styles.contactIcon}>✉️</Text>
          <Text style={styles.contactText}>iletisim@takapp.com</Text>
        </View>

        <Text style={styles.warningText}>
          Lütfen acil durumlarda arayın. Sorularınıza "Sıkça Sorulan Sorular"
          kısmından daha etkin cevaplar bulabilirsiniz.
        </Text>
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
  content: { flex: 1, padding: 20, paddingTop: 40 },
  specialistTitle: { color: "white", fontSize: 20 },
  specialistName: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 40,
  },
  contactBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
    borderWidth: 1,
    borderColor: "#42a5cd",
    borderRadius: 25,
    padding: 15,
    marginBottom: 20,
  },
  contactIcon: { fontSize: 20, marginRight: 15 },
  contactText: { color: "white", fontSize: 16, fontWeight: "bold" },
  warningText: {
    color: "#b3d9eb",
    fontSize: 13,
    lineHeight: 20,
    marginTop: 20,
  },
});
