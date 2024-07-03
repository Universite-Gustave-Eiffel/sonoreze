  // Question n°1 -----------------------------------------------------------------
  const plot1 = document.getElementById('plot_q1');

  new Chart(plot1, {
    type: 'bar',
    data: {
      labels: ['Pas du tout', 'Légèrement', 'Moyennement', 'Beaucoup', 'Extrêmement'],
      datasets: [{
        label: 'Nombre de réponse',
        data: [12, 26, 3, 5, 2],
        backgroundColor: [
        'rgba(255, 194, 205, 0.5)',
        'rgba(255, 147, 172, 0.5)',
        'rgba(255, 98, 137, 0.5)',
        'rgba(255, 52, 104, 0.5)',
        'rgba(255, 8, 74, 0.5)'
        ],
        borderColor: [
          'rgb(255, 194, 205)',
          'rgb(255, 147, 172)',
          'rgb(255, 98, 137)',
          'rgb(255, 52, 104)',
          'rgb(255, 8, 74)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      plugins: {
            title: {
                display: true,
                text: 'Question n°1 : Votre niveau de gêne de manière générale',
                padding: {
                    top: 10,
                    bottom: 10
                }
            }
        },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  // Question n°2 -----------------------------------------------------------------
  const plot2 = document.getElementById('plot_q2');

  new Chart(plot2, {
    type: 'bar',
    data: {
      labels: ['Pas du tout', 'Légèrement', 'Moyennement', 'Beaucoup', 'Extrêmement'],
      datasets: [{
        label: 'Nombre de réponse',
        data: [12, 26, 3, 5, 2],
        backgroundColor: [
        'rgba(179, 205, 224, 0.5)',
        'rgba(100, 151, 177, 0.5)',
        'rgba(0, 91, 150, 0.5)',
        'rgba(3, 57, 108, 0.5)',
        'rgba(1, 31, 75, 0.5)'
        ],
        borderColor: [
          'rgb(179, 205, 224)',
          'rgb(100, 151, 177)',
          'rgb(0, 91, 150)',
          'rgb(3, 57, 108)',
          'rgb(1, 31, 75)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      plugins: {
            title: {
                display: true,
                text: 'Question n°2 : Votre niveau de gêne la nuit',
                padding: {
                    top: 10,
                    bottom: 10
                }
            }
        },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  // Question n°3 -----------------------------------------------------------------
  const plot3 = document.getElementById('plot_q3');

  new Chart(plot3, {
    type: 'bar',
    data: {
      labels: ['Un homme', 'Une femme', 'Autre', 'Je préfère ne pas le dire'],
      datasets: [{
        label: 'Nombre de réponse',
        data: [12, 26, 3, 5],
        backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(255, 159, 64, 0.5)',
        'rgba(255, 205, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      plugins: {
            title: {
                display: true,
                text: 'Question n°3 : Vous êtes ?',
                padding: {
                    top: 10,
                    bottom: 10
                }
            }
        },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  // Question n°4 -----------------------------------------------------------------
  const plot4 = document.getElementById('plot_q4');

  new Chart(plot4, {
    type: 'bar',
    data: {
      labels: ['Moins de 18 ans', '18-24', '25-39', '40-54', '55-64', '65-79', 'Plus de 80 ans'],
      datasets: [{
        label: 'Nombre de réponse',
        data: [12, 26, 3, 5, 2, 9, 8, 34, 23, 3],
        backgroundColor: [
        'rgba(255, 228, 177, 0.7)',
        'rgba(255, 193, 132, 0.7)',
        'rgba(255, 166, 109, 0.7)',
        'rgba(220, 112, 59, 0.7)',
        'rgba(197, 88, 33, 0.7)',
        'rgba(170, 67, 10, 0.7)',
        'rgba(117, 39, 16, 0.7)'
        ],
        borderColor: [
          'rgb(255, 228, 177)',
          'rgb(255, 193, 132)',
          'rgb(255, 166, 109)',
          'rgb(220, 112, 59)',
          'rgb(197, 88, 33)',
          'rgb(170, 67, 10)',
          'rgb(117, 39, 16)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      plugins: {
            title: {
                display: true,
                text: 'Question n°4 : Votre âge',
                padding: {
                    top: 10,
                    bottom: 10
                }
            }
        },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  // Question n°5 -----------------------------------------------------------------
  const plot5 = document.getElementById('plot_q5');

  new Chart(plot5, {
    type: 'bar',
    data: {
      labels: ['Beaucoup plus sensible', 'Un peu plus sensible', 'Aussi sensible', 'Un peu moins sensible', 'Beaucoup moins sensible'],
      datasets: [{
        label: 'Nombre de réponse',
        data: [12, 26, 3, 5, 2],
        backgroundColor: [
        'rgba(238, 175, 97, 0.5)',
        'rgba(251, 144, 98, 0.5)',
        'rgba(238, 93, 108, 0.5)',
        'rgba(206, 73, 147, 0.5)',
        'rgba(106, 13, 131, 0.5)'
        ],
        borderColor: [
          'rgb(238, 175, 97)',
          'rgb(251, 144, 98)',
          'rgb(238, 93, 108)',
          'rgb(206, 73, 147)',
          'rgb(106, 13, 131)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      plugins: {
            title: {
                display: true,
                text: 'Question n°5 : Quel est votre niveau de sensibilité',
                padding: {
                    top: 10,
                    bottom: 10
                }
            }
        },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  // Question n°6 -----------------------------------------------------------------
  const plot6 = document.getElementById('plot_q6');

  new Chart(plot6, {
    type: 'bar',
    data: {
      labels: ['La Blordière', 'Château', 'La Houssais', 'Pont-Rousseau', 'Ragon', 'Rezé-Hôtel de ville', 'Trentemoult-les Isles', 'Autre'],
      datasets: [{
        label: 'Nombre de réponse',
        data: [12, 26, 3, 5, 2, 3, 5, 2],
        backgroundColor: [
        'rgba(255, 105, 97, 0.5)',
        'rgba(255, 180, 128, 0.5)',
        'rgba(248, 243, 141, 0.5)',
        'rgba(66, 214, 164, 0.5)',
        'rgba(8, 202, 209, 0.5)',
        'rgba(89, 173, 246, 0.5)',
        'rgba(157, 148, 255, 0.5)',
        'rgba(199, 128, 232, 0.5)'
        ],
        borderColor: [
          'rgb(255, 105, 97)',
          'rgb(255, 180, 128)',
          'rgb(248, 243, 141)',
          'rgb(66, 214, 164)',
          'rgb(8, 202, 209)',
          'rgb(89, 173, 246)',
          'rgb(157, 148, 255)',
          'rgb(199, 128, 232)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      plugins: {
            title: {
                display: true,
                text: 'Question n°6 : Dans quel quartier habitez-vous ?',
                padding: {
                    top: 10,
                    bottom: 10
                }
            }
        },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  // Question n°7 -----------------------------------------------------------------
  const plot7 = document.getElementById('plot_q7');

  new Chart(plot7, {
    type: 'bar',
    data: {
      labels: ['Oui', 'Non'],
      datasets: [{
        label: 'Nombre de réponse',
        data: [12, 26],
        backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      plugins: {
            title: {
                display: true,
                text: 'Question n°7 : Êtes-vous situé dans la zone III du Plan de Gêne Sonore ?',
                padding: {
                    top: 10,
                    bottom: 10
                }
            }
        },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });