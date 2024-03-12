document.getElementById("button").addEventListener("click", function() {
    document.getElementById("message").textContent = "Bonjour, ceci est un message affiché par JavaScript!";
});

document.getElementById("callApiButton").addEventListener("click", function() {
    fetch('http://localhost:8080/getInsert')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data); // Afficher les données récupérées dans la console
        // Vous pouvez faire d'autres opérations avec les données ici
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
});

document.getElementById("callApiPOST").addEventListener("click", function() {
    fetch('http://localhost:8080/api/insert', {
        method: 'POST', // Méthode de la requête
        headers: {
            'Content-Type': 'application/json' // Type de contenu de la requête
            // Vous pouvez ajouter d'autres en-têtes selon les besoins
        },
        // Corps de la requête (vide dans ce cas)
        body: JSON.stringify({})
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur lors de la requête');
        }
        return response.text(); // Récupérer la réponse de l'API comme texte
    })
    .then(data => {
        console.log(data); // Afficher la réponse de l'API dans la console
        alert('API appelée avec succès !'); // Afficher une alerte
        // Vous pouvez faire d'autres choses avec les données reçues de l'API
    })
    .catch(error => {
        console.error('Erreur:', error); // Afficher les erreurs dans la console
        alert('Erreur lors de l\'appel de l\'API !'); // Afficher une alerte en cas d'erreur
    });
});