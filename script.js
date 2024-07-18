const tauxChange = {
    'USD_EUR': 0.85,
    'USD_TND': 2.75,
    'USD_CHF': 0.91,
    'USD_GBP': 0.74,
    'EUR_USD': 1.18,
    'EUR_TND': 3.24,
    'EUR_CHF': 1.07,
    'EUR_GBP': 0.87,
    'TND_USD': 0.36,
    'TND_EUR': 0.31,
    'TND_CHF': 0.26,
    'TND_GBP': 0.29,
    'CHF_USD': 1.10,
    'CHF_EUR': 0.93,
    'CHF_TND': 3.87,
    'CHF_GBP': 0.81,
    'GBP_USD': 1.35,
    'GBP_EUR': 1.15,
    'GBP_TND': 4.75,
    'GBP_CHF': 1.23
};

function convertir() {
    var montant = document.getElementById('montant').value;
    var deviseFrom = document.getElementById('deviseFrom').value;
    var deviseTo = document.getElementById('deviseTo').value;

    var taux = tauxChange[`${deviseFrom}_${deviseTo}`];

    if (taux !== undefined) {
        var montantConverti = montant * taux;
        document.getElementById('text').value = montantConverti.toFixed(2);
    } else {
        document.getElementById('text').value = "Taux de change indisponible";
    }
}
