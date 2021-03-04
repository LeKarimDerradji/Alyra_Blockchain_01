let countWheels = (nb_monocycle, nb_moto, nb_voiture, nb_limousine) => {
    return 2 * nb_monocycle + 2 * nb_moto + 4 * nb_voiture + 6 * nb_limousine;
}

console.log(countWheels(2, 1, 1, 1))