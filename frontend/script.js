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

/*
    fetch('http://localhost:8080/api/insert', {
        method: 'POST', // Méthode de la requête
        headers: {
            'Content-Type': 'application/json' // Type de contenu de la requête
            // Vous pouvez ajouter d'autres en-têtes selon les besoins
        },
        // Corps de la requête (si nécessaire)
        body: JSON.stringify({
            // Les données à envoyer à l'API
            // Par exemple, si l'API attend un objet JSON
            key1: 'value1',
            key2: 'value2'
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur lors de la requête');
        }
        return response.json(); // Récupérer la réponse JSON de l'API
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
    */
});