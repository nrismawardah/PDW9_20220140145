function submitForm() {
    // Ambil nilai dari masing-masing elemen input
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const ticketTypes = document.querySelectorAll('input[name="ticketType"]:checked');
    let selectedTicketTypes = '';
    ticketTypes.forEach((type, index) => {
        if (index !== 0) {
            selectedTicketTypes += ', ';
        }
        selectedTicketTypes += type.value;
    });
    const jumlah = document.getElementById('jumlah').value;

    // Tampilkan nilai dalam alert
    alert(`Nama: ${name}\nNomor HP: ${phone}\nPilih Tanggal: ${date}\nJenis Tiket: ${selectedTicketTypes}\nJumlah Tiket: ${jumlah}`);
}