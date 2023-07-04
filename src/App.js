import Material from "./components/Material";

function App() {
  return (
    <div>
      <Material
        name="AERATOR"
        img="https://platincdn.com/2899/pictures/ERVEFXNFGS1142020124018_Apple-Dental-Red-Tup-Kendinden-Isikli-Led-Aerator.jpg"
        comment="Yüksek hızlarda dönen (yaklaşık 400000 devir) özellikle diş dokusunun hızla uzaklaştırılmasında kullanılan su ile soğutma sistemine sahip aletlerdir."
        price="50$"
      />
      <Material
        name="DIAMOND FREZ"
        img="https://www.dentaldunyasi.com/images/Urun/big/3dcc00e0-6376-4d7f-bf0e-55b2509d47e1.jpg"
        comment="Frezler temel olarak diş temizleme, diş eti tedavisi ve dişlerin düzeltilmesi amacıyla kullanılır.Kesici uçların takıldığı, yüksek ve düşük devirle çalışan aletlerdir. Ucuna takılan küçük frezler ile etkin ve hızlı şekilde, mine ve dentin dokularını uzaklaştırır, prepare eder. Dişin ihtiyacına göre diş hekimi tarafından tedaviye uygun frez çeşidi seçilir."
        price="0.5$"
      />
      <Material
        name="ANGULDURVA"
        img="https://st3.myideasoft.com/shop/lr/98/myassets/products/953/mk-dent-anguldurva-lb_min.jpg?revision=1571753047"
        comment="mikromotor başlığına takılarak çalışır, arkası çentikli frez veya fırçaların takılabileceği kilit sistemi bulunan su soğutmalı döner başlıklardır."
        price="45$"
      />
      <Material
        name="CARBIDE FREZ"
        img="https://www.oncudental.com/products/big/117969479015092015173421.jpg"
        comment="Tungsten Carbide ürünleri diş hekimleri için hastaların dişlerinde mükemmel bir pürüzsüz yüzeye ulaşmasını sağlayan aletlerdendir. Özel olarak geliştirilen Tungsten Carbide ürünleri yenilikçi bıçakları ile birlikte Tungsten Carbide’den üretilmiştir, yumuşak malzemelerin hassas bir şekilde dişten azaltılması için uygun olmaktadır. Diş kliniklerinde bulunması gereken Tungsten Carbide ürünleri maksimum tedavi konforu ile birlikte sorunsuz bir çalışma sağlamaktadır."
        price="3$"
      />
      <Material
        name="PIYASEMEN"
        img="https://st1.myideasoft.com/shop/lr/98/myassets/products/616/cx235-b-3_min.jpg?revision=1475677820"
        comment="Mikromotor başlığına takılarak çalışır, laboratuvar frezleri veya cerrahi frezlerin takılabildiği döner aletlerdir. "
        price="45$"
      />

      <Material
        name="CRYSTAL ALIGNER"
        img="https://crystalaligner.com/static/media/invisible.28ab5e3b.jpg"
        comment="Şeffaf plak tedavisinde tellerin olmaması göreceli olarak daha konforlu bir tedavi sunar. Şeffaf plaklar, diş teli kullanmadan dişlerinizdeki çapraşıklıkları çözümlerler."
        price="200$"
      />
    </div>
  );
}

export default App;
