EJERCICIO 1

<?php
$suma = 0;

for ($i = 1; $i <= 10; $i++) {
    $suma += $i;
}

echo "La suma es: " . $suma;

EJERCICIO 2

<?php
$suma = 0;

for ($i = 1; $i <= 100; $i++) {
    $suma += $i;
}

echo "La suma es: " . $suma;

EJERCICIO 3

<?php
$contador = 0;

for ($i = 1; $i <= 50; $i++) {
    if ($i % 2 == 0) {
        $contador++;
    }
}

echo "Cantidad de números pares: " . $contador;

EJERCICIO 4

<?php
$suma = 0;

for ($i = 1; $i <= 100; $i++) {
    if ($i % 3 == 0) {
        $suma += $i;
    }
}

echo "La suma de los múltiplos de 3 es: " . $suma;