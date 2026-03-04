import { useRouter } from "expo-router";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function Home() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Üst Kısım (Header) */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>+ TAK</Text>
        <View style={styles.profileCircle}>
          <Text style={styles.profileText}>NN</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Ana Video Butonu */}
        <TouchableOpacity style={styles.mainCard}>
          {/* Buraya sonradan resim eklenebilir, şimdilik kutu */}
          <View style={styles.mainImagePlaceholder} />
          <Text style={styles.cardText}>VİDEOLAR</Text>
        </TouchableOpacity>

        {/* Alt Izgara (Grid) Butonları */}
        <View style={styles.grid}>
          <TouchableOpacity style={styles.gridCard}>
            <Text style={styles.cardText}>TAK</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.gridCard}
            onPress={() => router.push("/faq")} // SSS sayfasına yönlendirir
          >
            <Text style={styles.cardText}>SIKÇA SORULAN SORULAR</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.gridCard}
            onPress={() => router.push("/register")} // Kayıt sayfasına yönlendirir
          >
            <Text style={styles.cardText}>HASTA KAYDI / İLETİŞİM</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridCard}>
            <Text style={styles.cardText}>UZMANA SOR</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Alt Menü (Footer) - YENİDEN DÜZENLENDİ */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => router.push("/about")}>
          <Text style={styles.footerText}>? HAKKINDA</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/contact")}>
          <Text style={styles.footerText}>📞 İLETİŞİM</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0188b8", // Tasarımdaki mavi tonu
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    paddingTop: 40, // Telefonun üst çubuğu (notch) için boşluk
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0188b8",
  },
  profileCircle: {
    backgroundColor: "#0188b8",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  profileText: {
    color: "white",
    fontWeight: "bold",
  },
  content: {
    padding: 15,
  },
  mainCard: {
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 15,
    elevation: 3, // Android gölge
  },
  mainImagePlaceholder: {
    height: 150,
    backgroundColor: "#e0e0e0", // Resim yokken gri alan
  },
  cardText: {
    textAlign: "center",
    padding: 15,
    fontWeight: "bold",
    color: "#0188b8",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridCard: {
    backgroundColor: "white",
    width: "48%", // Yanyana iki tane sığması için
    borderRadius: 10,
    marginBottom: 15,
    height: 120,
    justifyContent: "flex-end",
    elevation: 3,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    backgroundColor: "#017aa5",
  },
  footerText: {
    color: "white",
    fontWeight: "bold",
  },
});
