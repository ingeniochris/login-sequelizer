-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-07-2021 a las 20:34:11
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `krispy`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `ADDUSER` (IN `EMAIL` VARCHAR(30), IN `PASSWORD` VARCHAR(60), IN `FULLNAME` VARCHAR(100), IN `TOKEN` VARCHAR(100))  BEGIN
INSERT INTO users(email, password, fullname, token) values (EMAIL, PASSWORD, FULLNAME, TOKEN);
SELECT token 
      FROM users u
      WHERE u.email = EMAIL; 
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ALLORDERS` ()  SELECT * FROM orden$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `FINDONE` (IN `EMAIL` VARCHAR(30))  BEGIN
      SELECT id,email,password, fullname,id_role,token
      FROM users u
      WHERE u.email = EMAIL;         
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `VALID` (IN `EMAIL` VARCHAR(30), IN `PASSWORD` VARCHAR(60))  BEGIN
      SELECT id_role 
      FROM users u
      WHERE u.email = EMAIL && u.password = PASSWORD;         
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orden`
--

CREATE TABLE `orden` (
  `idOrder` int(11) NOT NULL,
  `status` varchar(25) NOT NULL,
  `paymentMethod` varchar(25) NOT NULL,
  `totalOrder` float NOT NULL,
  `subOrder` float NOT NULL,
  `discount` float NOT NULL,
  `discountCoupon` varchar(25) NOT NULL,
  `customerName` varchar(35) NOT NULL,
  `tel` varchar(20) NOT NULL,
  `infoDeliver` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orden_detail`
--

CREATE TABLE `orden_detail` (
  `idOrder` int(11) NOT NULL,
  `items` varchar(200) NOT NULL,
  `price` float NOT NULL,
  `modifiers` varchar(200) NOT NULL,
  `extra` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orders`
--

CREATE TABLE `orders` (
  `idOrder` int(11) NOT NULL,
  `status` varchar(255) DEFAULT NULL,
  `paymentMethod` varchar(255) DEFAULT NULL,
  `totalOrder` float DEFAULT NULL,
  `subOrder` float DEFAULT NULL,
  `discount` float DEFAULT NULL,
  `discountCoupon` varchar(255) DEFAULT NULL,
  `customerName` varchar(255) DEFAULT NULL,
  `tel` varchar(255) DEFAULT NULL,
  `infoDeliver` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id_role` int(11) NOT NULL,
  `role` varchar(16) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id_role`, `role`) VALUES
(1, 'admin'),
(2, 'employed');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `id_role` int(11) DEFAULT 2,
  `token` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `fullname`, `id_role`, `token`, `createdAt`, `updatedAt`) VALUES
(14, 'jesus@krispy.com', '$2a$10$UcBW/3Igl1yLPR30MrMAGuNUg/lD1RFAhej/mQqhthPc.LCFn0kRm', 'jesus cast', 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzd29yZCI6IjEyMzQ1NiIsImlhdCI6MTYyMzk5MTM0MSwiZXhwIjoxNjIzOTk0OTQxfQ.nPr6x7V-mIIAOVqWhj5DAOcjNwkRPWsqSLiom7J5cFU', '2021-06-18 04:42:21', '2021-06-18 04:42:21'),
(15, 'peinrock86@gmail.com', '$2a$10$HURTMaZrIJEJnqg1CFKXK.OWuQp0MmZBC2uYE1aT8JZ249Ln.eo.u', 'hola', 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzd29yZCI6IjEyMzQ1NiIsImlhdCI6MTYyNDMwNTgwMSwiZXhwIjoxNjI0MzA5NDAxfQ.T_tlDzPGIjzxRZ9yrSP09dZQVEZn0_nfb0EYcAzevU8', '2021-06-21 20:03:21', '2021-06-21 20:03:21');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `orden`
--
ALTER TABLE `orden`
  ADD PRIMARY KEY (`idOrder`);

--
-- Indices de la tabla `orden_detail`
--
ALTER TABLE `orden_detail`
  ADD KEY `idOrder` (`idOrder`);

--
-- Indices de la tabla `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`idOrder`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id_role`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `orden`
--
ALTER TABLE `orden`
  MODIFY `idOrder` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `orden_detail`
--
ALTER TABLE `orden_detail`
  ADD CONSTRAINT `orden_detail_ibfk_1` FOREIGN KEY (`idOrder`) REFERENCES `orden` (`idOrder`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
