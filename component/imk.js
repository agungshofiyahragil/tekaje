function JumlahTotal(){

	var myForm=document.form_pujas;
	var total1;
	
	total1 =parseInt(myForm.harga1.value) * parseInt(myForm.pesan1.value);
	myForm.JumTotal.value=total1;
}

function show_dialog(jawab)
{
	//var myForm=document.form_soal;

	if (jawab == 1){
		alert('salah');
	}
	else if (jawab == 2){
		alert('benar');
	}
	else
	alert('ngawur');
}

function cek_jawaban(soal, jawab)
{
	//var myForm=document.form_soal;

	if (soal == 1){
		if (jawab == 2)
		{
			alert('benar');
		}
		else
			alert('salah');
	}
}

function soal()
{
	var soal = new Array("a","b","c");
	for (i=0; i>=2; i++)
	{
		return soal[i];
	}
}

function potongan(){
	var myForm=document.form_pujas;

	if (myForm.JumTotal.value < 50000){
	myForm.Diskon.value = 0;
	}
	else{
	myForm.Diskon.value = 10000;
	}
}

function JumlahBayar(){
	var myForm=document.form_pujas;

	myForm.JumBayar.value = myForm.JumTotal.value - myForm.Diskon.value ;
}

function proses(){
	JumlahTotal();
	potongan();
	JumlahBayar();
	reset();
}

function reset(){
	var elemen = document.pemesanan;

	elemen.pesan1.value = "";
	elemen.pesan2.value = "";
	elemen.pesan3.value = "";
	elemen.pesan4.value = "";
	elemen.pesan5.value = "";
	elemen.total.value = "";
	elemen.diskon.value = "";
	elemen.bayar.value = "";
}

function pesan_sekarang()
{
	var myForm = document.form_pujas;
	if (myForm.JumBayar.value=="" || myForm.JumBayar.value==0)
	{
		alert("Anda belum memesan apapun, silakan pilih menu terlebih dahulu!");
	}
	else
	{
		alert("Terima kasih, total biaya yang harus dibayar sebesar Rp" + myForm.JumBayar.value + " dapat Anda bayarkan di meja kasir. Selamat menikmati!");
	}
}
