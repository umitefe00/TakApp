import { useRouter } from "expo-router";
import { useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const faqs = [
  {
    id: "1",
    question:
      "İDRAR KAÇAĞIM OLDUĞU ZAMAN HASTA BEZİ KULLANMAK ZOR OLUYOR. BAŞKA ÖNEREBİLECEĞİNİZ BİR ŞEY VAR MI?",
    answer:
      "Uzmanınıza danışarak alternatif ürünler (örneğin kondom sonda) kullanmayı değerlendirebilirsiniz.",
  },
  {
    id: "2",
    question:
      "SOĞUK HAVALARDA AYAKKABISIZ BALKONA YA DA BAHÇEYE ÇIKMAK İDRAR KAÇAĞINA SEBEP OLUR MU?",
    answer:
      "Evet, ayakların üşütülmesi mesane kaslarını etkileyerek idrar kaçağı riskini artırabilir.",
  },
  {
    id: "3",
    question: "TAK SIRASINDA PENİS EREKSİYON (SERTLEŞME) OLURSA NE YAPMALIYIM?",
    answer:
      "Bir süre bekleyip ereksiyonun geçmesini sağladıktan sonra işleme devam edebilirsiniz. Zorlama yapmayınız.",
  },
  {
    id: "4",
    question: "TUVALET SANDALYESİNDE TAK YAPMAMDA SAKINCA VAR MI?",
    answer:
      "Hijyen kurallarına uyduğunuz ve doğru pozisyonu aldığınız sürece sakınca yoktur.",
  },
  {
    id: "5",
    question: "OTONOMİK DİSREFLEKSİ DURUMUNDA NE YAPMALIYIM?",
    answer:
      "Acil bir durumdur. Hemen dik pozisyona geçin ve sağlık kuruluşuna başvurun.",
  },
];

export default function FAQ() {
  const router = useRouter();
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    // Tıklanan sorunun cevabını aç, zaten açıksa kapat
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Üst Kısım (Header) - Görseldeki geri dön barlı tasarım */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Text style={styles.backText}>← GERİ DÖN</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>SIKÇA SORULAN SORULAR</Text>
        <View style={styles.profileCircle}>
          <Text style={styles.profileText}>NN</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {faqs.map((item) => (
          <View key={item.id} style={styles.faqItem}>
            <TouchableOpacity
              style={styles.questionContainer}
              onPress={() => toggleExpand(item.id)}
            >
              <Text style={styles.questionText}>{item.question}</Text>
              <Text style={styles.iconText}>
                {expandedId === item.id ? "ᐱ" : "ᐯ"}
              </Text>
            </TouchableOpacity>

            {/* Cevap sadece expandedId bu soruya eşitse görünür (Hocanın istediği State Yönetimi) */}
            {expandedId === item.id && (
              <View style={styles.answerContainer}>
                <Text style={styles.answerText}>{item.answer}</Text>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0188b8",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#017aa5",
    padding: 15,
    paddingTop: 40,
  },
  backButton: {
    padding: 5,
  },
  backText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },
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
  profileText: {
    color: "#0188b8",
    fontWeight: "bold",
    fontSize: 12,
  },
  content: {
    padding: 10,
  },
  faqItem: {
    backgroundColor: "#017aa5", // Panodaki gibi farklı bir mavi tonu
    marginBottom: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#029acc",
  },
  questionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    alignItems: "center",
  },
  questionText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
    flex: 1,
    paddingRight: 10,
  },
  iconText: {
    color: "white",
    fontSize: 16,
  },
  answerContainer: {
    padding: 15,
    paddingTop: 0,
    backgroundColor: "#01688f", // Cevap alanı için biraz daha koyu mavi
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  answerText: {
    color: "white",
    fontSize: 12,
    lineHeight: 18,
  },
});
