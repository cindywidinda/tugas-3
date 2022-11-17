let Angka = [1, 2, 3, 4, 5];
const sum = Angka.reduce ((a, total) => a + total, 0);

// the prosess
for (let i = 1; i < Angka.length + 1 ; i++) {
    const jumlah = Angka.filter(el => el !== i)
    const resultAngka = sum - i;
    console.log(jumlah);
    console.log(resultAngka);
}

// to get the min & max only
console.log(sum - Angka[Angka.length - 1], sum - Angka[0]);