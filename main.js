onload = () =>{
        document.body.classList.remove("container");
};
document.addEventListener("DOMContentLoaded", function() {
    // Kumpulan gombalan maut kamu
    const pesan = [
        "Sayang, ini ada bunga untuk kamu",
        "Bunga ini tu nggak akan layu tau",
        "Sama kayak perasaanku ke kamu.",
        "kalo boleh jujur, aku tu sebenarnya...",
        "hantu, yang selalu menghantui hati mu🤭",
        "aku nggk mau kehilangan kamu sayang...😘",
        "I love You So Much Zaskya 🤍"
    ];
    // const pesan = [
    //     "Elsa, ini ada bunga untuk kamu",
    //     "Bunga ini tu nggak akan layu",
    //     "Sama kayak perasaanku ke kamu, eak.",
    //     "kalo boleh jujur, sebenarnya",
    //     "sebenarnya aku suka sama kamu sa...",
    //     "I love You Elsa 🤍"
    // ];
    
    let urutanPesan = 0;
    let urutanHuruf = 0;
    let lagiNgapus = false;
    let wadahTeks = document.getElementById("teks-ngetik");
    
    function efekNgetik() {
        let kataSekarang = pesan[urutanPesan];
        
        if (lagiNgapus) {
            wadahTeks.innerHTML = kataSekarang.substring(0, urutanHuruf - 1);
            urutanHuruf--;
        } else {
            wadahTeks.innerHTML = kataSekarang.substring(0, urutanHuruf + 1);
            urutanHuruf++;
        }
        
        let kecepatan = 100;
        if (lagiNgapus) kecepatan = 50; // Kalau ngapus lebih ngebut
        
        // Kalau kalimat udah beres diketik semua
        if (!lagiNgapus && urutanHuruf === kataSekarang.length) {
        if(urutanPesan === pesan.length - 1){
                kecepatan = 8000;
        }       else{
                kecepatan = 3000;
        }
            lagiNgapus = true;
        } 
        // Kalau kalimat udah beres dihapus semua
        else if (lagiNgapus && urutanHuruf === 0) {
            lagiNgapus = false;
            urutanPesan++;
            if (urutanPesan === pesan.length) urutanPesan = 0; // Ngulang ke awal
            kecepatan = 500; // Jeda setengah detik sebelum ngetik kalimat baru
        }
        
        setTimeout(efekNgetik, kecepatan);
    }
    
    // Nunggu 2 detik dulu biar bunga merahnya mekar, baru mulai ngetik
    setTimeout(efekNgetik, 2000);
});