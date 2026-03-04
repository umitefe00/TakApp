import { useRouter } from "expo-router";
import { useState } from "react";
import {
    ActivityIndicator,
    Alert,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [complaint, setComplaint] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Yükleniyor animasyonu için state

  const handleRegister = () => {
    // 1. HATA DURUMU KONTROLÜ (Hocanın istediği)
    if (name.trim() === "" || phone.trim() === "") {
      Alert.alert(
        "Eksik Bilgi",
        "Lütfen ad-soyad ve telefon alanlarını doldurunuz.",
      );
      return;
    }

    // 2. LOADING (YÜKLENİYOR) DURUMU (Hocanın istediği)
    setIsLoading(true);

    // Sahte bir API isteği simülasyonu (Vakit kazanmak ve gerçekçi yapmak için 2 saniye bekletiyoruz)
    setTimeout(() => {
      setIsLoading(false);
      Alert.alert(
        "Kayıt Başarılı",
        `Sayın ${name}, kaydınız uzmanlarımıza iletilmiştir. En kısa sürede ${phone} numarasından dönüş yapılacaktır.`,
      );

      // 2 saniye sonra ana sayfaya at
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }, 2000); // 2 saniye loading dönecek
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Text style={styles.backText}>← GERİ DÖN</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>KAYIT OLUŞTUR</Text>
        <View style={styles.profileCircle}>
          <Text style={styles.profileText}>NN</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.iconPlaceholder}>
          <Text style={styles.iconText}>🩺</Text>
        </View>

        <Text style={styles.pageTitle}>YENİ HASTA KAYDI</Text>
        <Text style={styles.infoText}>
          Lütfen iletişim bilgilerinizi eksiksiz giriniz.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="AD SOYAD"
          placeholderTextColor="#a0c4d8"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="TELEFON NUMARASI"
          placeholderTextColor="#a0c4d8"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />

        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="ŞİKAYETİNİZ / NOTUNUZ"
          placeholderTextColor="#a0c4d8"
          multiline={true}
          numberOfLines={3}
          value={complaint}
          onChangeText={setComplaint}
        />

        {/* Loading state durumuna göre Buton veya Dönen İkon gösterimi */}
        {isLoading ? (
          <ActivityIndicator
            size="large"
            color="#ffffff"
            style={{ marginTop: 20 }}
          />
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>KAYIT OLUŞTUR</Text>
          </TouchableOpacity>
        )}
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>? HAKKINDA</Text>
        <Text style={styles.footerText}>📞 İLETİŞİM</Text>
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
  content: { padding: 20, alignItems: "center" },
  iconPlaceholder: { marginBottom: 10 },
  iconText: { fontSize: 60 },
  pageTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  infoText: {
    color: "#b3d9eb",
    fontSize: 12,
    marginBottom: 25,
    textAlign: "center",
  },
  input: {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.1)",
    borderWidth: 1,
    borderColor: "#42a5cd",
    borderRadius: 15,
    padding: 15,
    color: "white",
    marginBottom: 15,
    fontWeight: "bold",
  },
  textArea: { height: 100, textAlignVertical: "top" },
  button: {
    width: "100%",
    backgroundColor: "#026b91",
    borderRadius: 25,
    padding: 15,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#029acc",
    marginTop: 10,
  },
  buttonText: { color: "white", fontWeight: "bold", fontSize: 16 },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    backgroundColor: "#017aa5",
  },
  footerText: { color: "white", fontWeight: "bold" },
});
