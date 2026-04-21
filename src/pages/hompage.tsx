import Header from "./components/Header";
import Button from "./components/ui/Button";
import { Collapse } from "./components/ui/Collapse";
import SpeakerCard from "./components/ui/SpeakerCard";
import { Card } from "./components/ui/Card";

function App() {
  const speakers = [
    {
      name: "Vans AUTHENTIC",
      role: "Timeless Street Style",
      imageUrl:
        "https://media.sivasdescalzo.com/media/catalog/product/V/N/VN0A4BV91X7_sivasdescalzo-Vans_Vault-UA_OG_Authentic_LX-1625663130-2.jpg?quality=70&auto=webp&fit=bounds&width=",
    },
    {
      name: "Vans SK8 hi",
      role: "Built for Skate Culture",
      imageUrl:
        "data:image/webp;base64,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",
    },
    {
      name: "Vans KNU",
      role: "Bold 90s Revival",
      imageUrl:
        "https://th.bing.com/th/id/OIP.EmrD93lRJ0echUYRrZZduwHaJS?w=202&h=254&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    },
  ];

  const collapseItems = [
    {
      title: "Apa itu Vans?",
      description:
        "Vans adalah brand sepatu asal California yang dikenal dengan desain klasik dan hubungannya yang erat dengan budaya skateboard serta streetwear sejak tahun 1966.",
    },
    {
      title: "Bagaimana cara memilih ukuran sepatu Vans yang tepat?",
      description:
        "Gunakan panduan size chart yang tersedia dan pilih ukuran sesuai panjang kaki Anda untuk memastikan kenyamanan maksimal.",
    },
    {
      title: "Apakah produk Vans yang dijual original?",
      description:
        "Ya, semua produk yang tersedia merupakan produk original dengan kualitas terbaik.",
    },
  ];

  const cardItems = [
    {
      title: "Vans Authentic",
      description:
        "Sepatu klasik dengan desain minimalis yang timeless dan nyaman digunakan sepanjang hari. Pilihan sempurna untuk gaya kasual yang autentik.",
    },
    {
      title: "Vans SK8 hi",
      description:
        "Model high-top ikonik yang terinspirasi dari budaya skateboard, memberikan perlindungan pergelangan kaki sekaligus tampilan street yang stylish.",
    },
    {
      title: "Vans KNU",
      description:
        "Terinspirasi dari gaya retro 90-an dengan desain chunky yang berani, sempurna untuk kamu yang ingin tampil standout.",
    },
  ];

  return (
    <>
      <Header />

      <div className="max-w-7xl mx-auto">
        <section
          id="hero"
          className="py-10 flex gap-10 justify-between items-center "
        >
          <div className="w-2/3 flex flex-col gap-6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThS_LhiH5lPmdRZrVdfRWZGE2aV1_H_V_pLA&s"
              alt=""
              className="w-96"
            />
            <p>
              Vans adalah simbol kebebasan berekspresi yang memadukan
              gaya klasik dengan budaya street dan skateboarding — Off The Wall, Always Original.
              Menghadirkan kenyamanan serta desain ikonik yang tak lekang oleh waktu.
            </p>

            <div className="flex gap-3">
              <Button label="Lihat Koleksi" variant="primary" />
              <Button label="Beli Sekarang" variant="outline" />
            </div>
          </div>
          <div className="w-1/3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWwU2cc0rmH_4duuJcceSkQVunzbetNTXelQ&s"
              alt=""
            />
          </div>
        </section>

        <section id="speaker" className="py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-3">
            {speakers.map((speaker, index) => (
              <SpeakerCard
                key={index}
                name={speaker.name}
                role={speaker.role}
                imageUrl={speaker.imageUrl}
              />
            ))}
          </div>
        </section>

        <section
          id="cards"
          className="py-24 grid grid-cols-1 md:grid-cols-2 gap-10 px-3"
        >
          {cardItems.map((item, index) => (
            <Card key={index} className="w-full">
              <h3 className="text-2xl text-red-900 mb-4">{item.title}</h3>
              <p>{item.description}</p>
              <Button
                label="Lihat Koleksi"
                variant="primary"
                className="mt-4"
              />
            </Card>
          ))}
        </section>

        <section id="collapse" className="py-24 flex flex-col gap-2 px-3">
          {collapseItems.map((item, index) => (
            <Collapse
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </section>
      </div>
    </>
  );
}

export default App;
