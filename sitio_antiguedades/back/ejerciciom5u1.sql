-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 09-02-2024 a las 16:10:43
-- Versión del servidor: 8.2.0
-- Versión de PHP: 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ejerciciom5u1`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

DROP TABLE IF EXISTS `empleados`;
CREATE TABLE IF NOT EXISTS `empleados` (
  `id_emp` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(80) NOT NULL,
  `apellido` varchar(80) NOT NULL,
  `trabajo` varchar(80) NOT NULL,
  `edad` int NOT NULL,
  `salario` double NOT NULL,
  `mail` varchar(80) NOT NULL,
  PRIMARY KEY (`id_emp`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id_emp`, `nombre`, `apellido`, `trabajo`, `edad`, `salario`, `mail`) VALUES
(1, 'Juan', 'Hagan', 'Programador Senior ', 32, 120000, 'juan_hagan@bignet.com '),
(2, 'Gonzalo', 'Pillai', 'Programador Senior ', 32, 110000, 'g_pillai@bignet.com '),
(3, 'Ana', 'Dharma', 'Desarrollador Web', 27, 90000, 'ana@bignet.com'),
(4, 'Maria', 'Anchor', 'Desarrollador Web', 26, 85000, 'mary@bignet.com'),
(5, 'Alfredo', 'Fernandez', 'Programador', 31, 75000, 'af@bignet.com'),
(6, 'Juan', 'Aguero', 'Programador', 34, 80000, 'juan@bignet.com'),
(7, 'Eduardo', 'Sacan', 'Programador', 25, 75000, 'eddie@bignet.com'),
(8, 'Alejandro', 'Nanda', 'Programador', 32, 70000, 'alenanda@bignet.com'),
(9, 'Hernan', 'Rosso', 'Especialista Multimedia', 33, 90000, 'hernan@bignet.com'),
(10, 'Paublo', 'Simon', 'Especialista Multimedia', 43, 85000, 'ps@bignet.com'),
(11, 'Arturo', 'Hernandez', 'Especialista Multimedia', 32, 75000, 'arturo@bignet.com'),
(12, 'Jimena', 'Cazado', 'Diseñador Web Senior', 32, 110000, 'jimena@bignet.com'),
(13, 'Roberto', 'Luis', 'Administrador de Sistemas', 35, 100000, 'roberto@bignet.com'),
(14, 'Daniel', 'Gutierrez', 'Administrador de Sistemas', 34, 900000, 'daniel@bignet.com'),
(15, 'Miguel', 'Harper', 'Ejecutivo de Ventas Senior', 36, 120000, 'miguel@bignet.com'),
(16, 'Monica', 'Sanchez', 'Ejecutivo de Ventas', 30, 90000, 'monica@bignet.com'),
(17, 'Alicia', 'Simlai', 'Ejecutivo de Ventas', 27, 70000, 'alicia@bignet.com'),
(18, 'Jose', 'Iriarte', 'Ejecutivo de Ventas', 27, 72000, 'jose@bignet.com'),
(19, 'Sabrina', 'Allende', 'Gerente de Soporte Tecnico', 32, 200000, 'sabrina@bignet.com'),
(20, 'Pedro', 'Campion', 'Gerente de Finanzas', 36, 220000, 'pedro@bignet.com'),
(21, 'Mariano', 'Dharma', 'Presidente', 28, 300000, 'mariano@bignet.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(1, 'La ola de calor no da tregua en Argentina: 20 provincias en alerta por altas temperaturas', 'Desde hace una semana se vienen registrando temperaturas extremas sobre el norte patagónico y sur del área pampeana. De a poco los registros elevados se van extendiendo a distintas zonas del centro y norte de Argentina.', 'Desde el comienzo de esta semana ya se encuentra bajo alerta roja toda la región cuyana, centro y norte de Neuquén, norte de Río Negro y el oeste de La Pampa. Esta zona del país ya ha alcanzado valores extremos desde el final de la semana pasada y se espera que persistan durante varios días más, con registros superiores a los 35 ºC y con picos máximos de hasta 40 ºC o 42 ºC.\r\n\r\nTambién se encuentra bajo alerta roja la zona sur y sudoeste de la provincia de Buenos Aires, que además presenta valores muy superiores a los promedios desde la semana pasada. Esta situación motiva a alcanzar el nivel más alto de alerta, ya que se llevan acumulados aproximadamente 7 días de temperaturas extremas.', 'pvm1uerzaeokjamtq7xv'),
(4, '`prueba Ni en Mar de Plata ni en Santa Fe: el mejor alfajor argentino se produce en José C. Paz', 'prueba Fue elegido en un concurso tras el voto en las redes sociales.Su creadora es Yésica Yodra y se llama \"Paceño\".', 'prueba Según un estudio que produjo el Campeonato Mundial del Alfajor, en nuestro país se consumen 79 alfajores por segundo y por día son más de 6 millones, sin contar la producción informal.\r\n\r\nComo dato de color: la Constitución Nacional de 1853 empezó a redactarse en Merengo, la fábrica de alfajores más antigua de Santa Fe y, como souvenir, los constituyentes llevaron alfajores de dulce de leche por primera vez a sus provincias.\r\n\r\nActualmente la industria del alfajor es enorme y más allá de grandes marcas, hay miles de emprendedores que armaron sus recetas con identidad propia. Es el caso de Yésica Yodra, la creadora del alfajor Paceño.\r\n\r\nUn alfajor especial que nació en el barrio bonaerense de Las Heras y compitió contra emprendimientos de Córdoba, Entre Ríos, Chubut, Santa Fe, Salta y Mendoza, entre otras, para convertirse en el mejor alfajor de Argentina en un concurso organizado por Probando Alfajores.', 'aczcnwauwylcjnvcco9b'),
(13, 'prueba nuevo', 'subtitulo prueba nuevo', 'cuerpo de prueba nuevo', 'w3ar3hzldna862d5fdjl');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'laura', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
