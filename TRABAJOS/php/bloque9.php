
EJERCICIO 1
<?php
$i = 1;

while ($i <= 10) {
    echo $i . "<br>";
    $i++;
}

ejerecicio 2

<?php
$i = 2;

while ($i <= 20) {
    echo $i . "<br>";
    $i += 2;
}

EJERCICIO 3
<?php
$numero = 1;

while ($numero < 100) {
    echo $numero . "<br>";
    $numero *= 2;
}

EJERCICIO 4

<?php
$ahorro = 0;
$meses = 0;

while ($ahorro < 5000) {
    $meses++;
    $ahorro += 500;
    echo "Mes " . $meses . ": $" . $ahorro . "<br>";
}

echo "Necesitó " . $meses . " meses para alcanzar o superar los $5000.";