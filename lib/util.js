class Utils {

  interData(data) {
    const now = new Date(); // Data de hoje
    const past = new Date(data); // Outra data no passado
    const diff = Math.abs(now.getTime() - past.getTime()); // Subtrai uma data pela outra
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24)); // Divide o total pelo total de milisegundos correspondentes a 1 dia. (1000 milisegundos = 1 segundo).
    return days;
  }

  verificaUF(UF) {
    if (
      UF === 'RS' || UF === 'SC' || UF === 'PR'
    )
      return true
    else
      return false

  }

}

module.exports = Utils;