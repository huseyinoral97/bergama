import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: {
            "hakkimizda": "Bergama Industry designs and manufactures steel structures, heat exchangers, pressure vessels, pipe spools and cable trays for oil & gas, petrochemicals, power plants and other industrial facilities. Bergama Industry is a reliable solution partner that provides fast and timely product supply to its customers with its modern production infrastructure with a total closed area of 15,000 m2 and a stock area of 10,000 m2, built on an area of 60,000 m2. Thanks to its location in the Bergama organized industrial zone (BOSBI), Bergama Industry offers its customers different transportation alternatives. Distances to important locations.",
            "hakkimizda-button": "About Us",
            "title": "BERGAMA INDUSTRY",
            "li1": "New Izmir-Canakkale highway connection 1km",
            "li2": "Dikili Port 16km",
            "li3": "Candarlı Kuzey Ege Port 25km",
            "li4": "Star Refinery 54km",
            "li5": "Aliaga Nemport 55km",
            "li6": "Izmir Adnan Menderes Airport 135km",
            "lisub": "For Bergama Industry, quality and standards are an indispensable part of the production philosophy, and compliance with relevant standards is meticulously followed",
            "hakkimizda3": "Our team of ASME certified fitters/welders can successfully manufacture a unique variety of welding processes (SMAW, SAW, TIG, MIG), materials (steel, stainless), and products ranging from small tabletop fabrications to large ASME pressure vessels. Bergama Industry provides complete solution including designing, procurement, fabrication, test and documentation to its customers. In addition to our own standard products, we have the manufacturing and engineering experience to realize special design productions as per customer requirement.",
            "ceo": "We are globally recognised as leaders in this industry, and we have garnered hundreds of awards for our work. Today, brands are more than what they say. We believe in creating meaningful experience for clients.",
            "iletisim": "Contact",
            "iletisimaciklama": "Lorem Ipsum Lorem Ipsum",
            "formad": "Name Surname",
            "formmail": "Email",
            "formmesaj": "Message",
            "formbuton": "Send",
            "anasayfa": "Home",
            "fabrika": "Factory",
            "merkez": "HQ",
            "haberler": "News",
            "haberlertitle": "NEWS",
            "kalitesistemleri": "Quality Systems",
            "kalitesistemlerititle": "QUALITY SYSTEMS",
            "kalitesistemleriaciklama": "Dynamic structure and modern manufacturing infrastructure allow Bergama Industry to manage complex projects with versatility and flexibility, ensuring customers the optimization of delivery times and competitive costs reflecting the quality of the service supplied. We focus on the quality of services and the reduction of environmental impact. We maintain a strong conviction that the improvement of production performance comes above all from protecting both workers and the environment. The company has developed an integrated quality, health and safety management system in compliance with current legislation. With the EN ISO 9001, ISO14001 and ISO 45001 certifications.",
            "products": "Products",
            "productstitle": "PRODUCTS",
            "sectordetail": "Sector Detail",
            "watertreatment": "Water Treatment Plants",
            "water1": "Water Treatment Plants",
            "water2": "Desalination plants",
            "water3": "Wastewater plant",
            "tel": "Phone",
            "profil": "Company Profile",
            "etik": "Ethical Code of Conduct",
            "vizyon": "Vision, Mission and Values",
            "fayda": "Useful Links",
            "celik": "Steel Structures",
            "boru": "Pipe Spools",
            "isi": "Heat Exchangers",
            "basinc": "Pressure Vessels",
            "kablo": "Cable Trays",
            "otherproducts": "Other Products",
            "etikkod": "Code of Ethical Conducts",
            "powerplant": "Power Plants",
            "combined": "Combined cycle power plant",
            "nukleer": "Nuclear power plants",
            "hidro": "Hydro power plants",
            "coal": "Coal power plants",
            "wind": "Wind and Solar power plants",
            "oil": "Oil & Gas",
            "rafi": "Refineries",
            "lng": "LNG plants",
            "gas": "Gas processing plants",
            "petro": "Petrochemical",
            "ammo": "Ammonia and urea plants",
            "olefin": "Olefin plants",
            "aromatic": "Aromatic plants",
            "incele": "View"
        }
    },
    tr: {
        translation: {
            "hakkimizda": "Bergama Industry, petrol ve gaz, petrokimya, enerji santralleri ve diğer endüstriyel tesisler için çelik yapılar, ısı eşanjörleri, basınçlı kaplar, boru makaraları ve kablo kanalları tasarlar ve üretir. Bergama Sanayi 60.000 m2 alan üzerine kurulu toplam 15.000 m2 kapalı ve 10.000 m2 stok alanına sahip modern üretim altyapısı ile müşterilerine hızlı ve zamanında ürün tedariği sağlayan güvenilir bir çözüm ortağıdır. Bergama Organize Sanayi Bölgesi'ndeki (BOSBİ) konumu sayesinde Bergama Sanayi, müşterilerine farklı ulaşım alternatifleri sunmaktadır. Önemli yerlere mesafeler.",
            "hakkimizda-button": "Hakkımızda",
            "title": "BERGAMA INDUSTRY",
            "li1": "İzmir-Çanakkale otoyolu",
            "li2": "Dikili limanı 16km",
            "li3": "Çandarlı Kuzey Ege limanı 25km",
            "li4": "Star Refinerisi 54km",
            "li5": "Aliaga Nemport 55km",
            "li6": "Izmir Adnan Menderes Havalimanı 135km",
            "lisub": "Bergama Industry için kalite ve standartlar üretim felsefesinin vazgeçilmez bir parçası olup her aşamada ilgili standartlara uygunluk titizlikle takip edilmekte ve sertifikalandırılmaktadır.",
            "hakkimizda3": "ASME sertifikalı tesisatçılardan/kaynakçılardan oluşan ekibimiz, benzersiz çeşitlilikte kaynak işlemlerini (SMAW, SAW, TIG, MIG), malzemeleri (çelik, paslanmaz) ve küçük masa üstü imalatlardan büyük ASME basınçlı kaplara kadar uzanan ürünleri başarıyla üretebilir. Bergama Industry müşterilerine tasarım, tedarik, imalat, test ve dokümantasyon dahil komple çözümler sunmaktadır. Kendi standart ürünlerimizin yanı sıra müşteri ihtiyacına göre özel tasarım üretimleri gerçekleştirebilecek imalat ve mühendislik tecrübesine sahibiz.",
            "ceo": "Bu sektörde dünya çapında lider olarak tanınıyoruz ve çalışmalarımız için yüzlerce ödül kazandık. Günümüzde markalar söylediklerinden daha fazlasıdır. Müşteriler için anlamlı bir deneyim yaratmaya inanıyoruz.",
            "iletisim": "İletişim",
            "iletisimaciklama": "Lorem Ipsum Lorem Ipsum",
            "formad": "Ad Soyad",
            "formmail": "E-Mail Adresiniz",
            "formmesaj": "Mesajınız",
            "formbuton": "Gönder",
            "anasayfa": "Anasayfa",
            "fabrika": "Fabrika",
            "merkez": "Merkez",
            "haberler": "Haberler",
            "haberlertitle": "HABERLER",
            "kalitesistemleri": "Kalite Sistemleri",
            "kalitesistemlerititle": "KALİTE SİSTEMLERİ",
            "kalitesistemleriaciklama": "Dinamik yapı ve modern üretim altyapısı, Bergama Industry'nin karmaşık projeleri esnek ve çok yönlü bir şekilde yönetmesine olanak tanımaktadır. Teslimat sürelerinde ve maliyetlerde optimizasyon sağlayarak sunulan hizmetin kalitesini arttırmaktadır. Hizmet kalitesine ve çevresel etkinin azaltılması odak noktamızır. Bu sebeple üretim performansının iyileştirilmesinin her şeyden önce hem çalışanları hem de çevreyi korumaktan geldiğine inanıyoruz. Bergama Industry, mevcut mevzuata uygun entegre bir kalite, sağlık ve güvenlik yönetim sistemi geliştirmiştir. İlgili sertifikalar EN ISO 9001, ISO14001 ve ISO 45001.",
            "products": "Ürünler",
            "productstitle": "ÜRÜNLER",
            "sectordetail": "Sektör Detayı",
            "watertreatment": "Su Arıtma Tesisleri",
            "water1": "Su arıtma tesisleri",
            "water2": "Tuzdan arındırma tesisleri",
            "water3": "Atıksu tesisi",
            "tel": "Tel",
            "profil": "Şirket Profili",
            "etik": "Etik Davranış Kuralları",
            "vizyon": "Vizyon, Misyon ve Değerler",
            "fayda": "Faydalı Linkler",
            "celik": "Çelik Yapılar",
            "boru": "Boru Devreleri",
            "isi": "Isı Eşanjörleri",
            "basinc": "Basınçlı Kaplar",
            "kablo": "Kablo Kanalları",
            "otherproducts": "Diğer Ürünler",
            "etikkod": "Etik Davranış Kuralları",
            "powerplant": "Enerji Santralleri",
            "combined": "Kombine çevrim santrali",
            "nukleer": "Nükleer enerji santralleri",
            "hidro": "Hidro enerji santralleri",
            "coal": "Kömür santralleri",
            "wind": "Rüzgar ve Güneş enerjisi santralleri",
            "oil": "Petrol & Gaz",
            "rafi": "Rafineriler",
            "lng": "LNG tesisleri",
            "gas": "Gaz işleme tesisleri",
            "petro": "Petrokimya",
            "ammo": "Amonyak ve üre bitkileri",
            "olefin": "Olefin bitkileri",
            "aromatic": "Aromatik bitkiler",
            "incele": "İncele"
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        },
        fallbackLng: "en",
    });

export default i18n;