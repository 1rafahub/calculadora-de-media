var nome = "Rafael"
var notaDoPrimeroBimestre = 1
var notaDoSegundoBimestre = 4
var notaDoTerceiroBimestre = 3
var notaDoQuartoBimestre = 5
var notaFinal = (notaDoPrimeroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4

var notaFixada = notaFinal.toFixed(1)

if (notaFixada > 5) {
  console.log("Olá " + nome + "," + " sua nota é " + notaFixada + " - APROVADO(A)")
}else if (notaFixada < 5) {
  console.log("Olá " + nome + "," + " sua nota é " +  notaFixada + " - REPROVADO(A)")
  
}


