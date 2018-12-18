class DateHelper {

    static dataParaString(data) {
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }

    static stringParaData(texto) {

        if (!/^\d{2}\/\d{2}\/\d{4}$/.test(texto)) {
            throw new Error('Deve estar no formato DD/MM/AAAA');
        }

        return new Date(...texto.split('/').reverse().map((item, index) => item - index % 2));
    }

}
