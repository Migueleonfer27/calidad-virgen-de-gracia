-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-03-2025 a las 09:03:23
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `calidad`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `abilities`
--

CREATE TABLE `abilities` (
  `id` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `abilities`
--

INSERT INTO `abilities` (`id`, `description`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Borrar categoría', '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(2, 'Editar categoría', '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(3, 'Crear categoría', '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(4, 'Borrar subcategoría', '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(5, 'Editar subcategoría', '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(6, 'Crear subcategoría', '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(7, 'Borrar documento', '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(8, 'Editar documento', '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(9, 'Crear documento', '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(10, 'Descargar documento autorrellenado', '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(11, 'Borrar eventos', '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(12, 'Editar eventos', '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(13, 'Crear eventos', '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(14, 'Cambiar estado de eventos', '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(15, 'Ver tareas', '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(16, 'Ver mis eventos', '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(17, 'Borrar mis eventos', '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(18, 'Ver usuarios', '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(19, 'Borrar usuario', '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(20, 'Editar usuario', '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(21, 'Crear usuario', '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(22, 'Ver roles', '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(23, 'Borrar rol', '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(24, 'Editar rol', '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(25, 'Crear rol', '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(26, 'Ver los permisos de un rol', '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(27, 'Ver los permisos de un usuario', '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(28, 'Añadir permisos a un rol', '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(29, 'Cargar foto', '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(30, 'Actualizar contraseña', '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(31, 'Importar csv', '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(32, 'Enviar mensajes', '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `abilities_roles`
--

CREATE TABLE `abilities_roles` (
  `id` int(11) NOT NULL,
  `id_rol` int(11) NOT NULL,
  `id_ability` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `abilities_roles`
--

INSERT INTO `abilities_roles` (`id`, `id_rol`, `id_ability`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 1, 1, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(2, 1, 2, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(3, 1, 3, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(4, 1, 4, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(5, 1, 5, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(6, 1, 6, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(7, 1, 7, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(8, 1, 8, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(9, 1, 9, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(10, 1, 10, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(11, 1, 11, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(12, 1, 12, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(13, 1, 13, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(14, 1, 14, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(15, 1, 15, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(16, 1, 16, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(17, 1, 17, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(18, 1, 18, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(19, 1, 19, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(20, 1, 20, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(21, 1, 21, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(22, 1, 22, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(23, 1, 23, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(24, 1, 24, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(25, 1, 25, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(26, 1, 26, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(27, 1, 27, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(28, 1, 28, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(29, 1, 29, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(30, 1, 30, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(31, 1, 31, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(32, 1, 32, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(33, 2, 10, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(34, 2, 14, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(35, 2, 16, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(36, 2, 17, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(37, 2, 18, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(38, 2, 20, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(39, 2, 22, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(40, 2, 24, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(41, 2, 25, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(42, 2, 26, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(43, 2, 28, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(44, 2, 29, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(45, 2, 30, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(46, 2, 32, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(47, 3, 7, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(48, 3, 8, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(49, 3, 9, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(50, 3, 10, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(51, 3, 14, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(52, 3, 16, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(53, 3, 17, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(54, 3, 29, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(55, 3, 30, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(56, 4, 2, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(57, 4, 3, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(58, 4, 10, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(59, 4, 14, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(60, 4, 16, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(61, 4, 17, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(62, 4, 29, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(63, 4, 30, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(64, 5, 10, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(65, 5, 11, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(66, 5, 12, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(67, 5, 13, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(68, 5, 14, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(69, 5, 15, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(70, 5, 16, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(71, 5, 17, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(72, 5, 22, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(73, 5, 29, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(74, 5, 30, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(75, 6, 10, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(76, 6, 14, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(77, 6, 16, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(78, 6, 17, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(79, 6, 29, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(80, 6, 30, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(81, 7, 10, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(82, 7, 14, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(83, 7, 16, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(84, 7, 17, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(85, 7, 29, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(86, 7, 30, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(87, 8, 18, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(88, 8, 19, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(89, 8, 20, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(90, 8, 21, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(91, 8, 22, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(92, 8, 23, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(93, 8, 24, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(94, 8, 25, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(95, 8, 26, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(96, 8, 27, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(97, 8, 28, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(98, 8, 31, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(99, 8, 32, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(100, 9, 8, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(101, 9, 9, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(102, 10, 18, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(103, 10, 20, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(104, 10, 21, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Proceso de planificación estratégica', '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(2, 'Procesos de enseñanza y aprendizaje', '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(3, 'Procesos de gestión', '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(4, 'Proceso de medición y mejora', '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `documents`
--

CREATE TABLE `documents` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `url` varchar(1000) NOT NULL,
  `id_subcategory` bigint(20) NOT NULL,
  `autofilled` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `documents`
--

INSERT INTO `documents` (`id`, `name`, `code`, `url`, `id_subcategory`, `autofilled`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Acta informe reunión', 'DYC06', 'https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/EbSJUR8BXnxIvO6Jdhk8i5oBrQNirRskAokxziSMGd0V_A?e=h1bKy1', 1, 0, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(2, 'Convocatoria de reunión', 'DYC05', 'https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/ESTouQG8LyBMjY7hM5S7KhMBo1_Z4rNLZNCNhoRTeig0UA?e=D9RRuX', 1, 0, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(3, 'Aviso previo a pérdida de evaluación continua', 'ACT03', 'https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/ES-byNxXDH1FtpX7KsbQOGYBT1jp0Ia-C7GLw1lYcHWbog?e=OCqqcV', 2, 0, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(4, 'ACT05  Parte disciplinario alumno.pdf', 'ACT05', 'https://crfpcastilla.sharepoint.com/sites/EPT13002691E03-SGC/Documentos%20compartidos/Forms/AllItems.aspx?id=%2Fsites%2FEPT13002691E03%2DSGC%2FDocumentos%20compartidos%2FSGC%2FSGC%2Dweb%2FENSENANZA%2DAPRENDIZAJE%2FACTIVIDADES%2DAULA%2FACT05%20%20Parte%20disciplinario%20alumno%2Epdf&parent=%2Fsites%2FEPT13002691E03%2DSGC%2FDocumentos%20compartidos%2FSGC%2FSGC%2Dweb%2FENSENANZA%2DAPRENDIZAJE%2FACTIVIDADES%2DAULA&p=true&ga=1', 2, 1, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(5, 'Acta de evaluación', 'EVA05', 'https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/EUg3h-eoZhlKrwxlZ0tPLSoB-lVAi-z-LoQ1DFiDoDIenw?e=uyoly6', 3, 0, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(6, 'Hoja firmas información a alumnos pendientes', 'EVA03', 'https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/EWx2V3XrhsxPgWOgV3EhQ-sBu3QmtNkdivtOMLRrSpF0rQ?e=AsHzze', 3, 0, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(7, 'Hoja firmas información alumnado', 'FEM04', 'https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/Eeg__7ch3UlAnxozPmCDXmwB1Laxy2yBxgKwtLXau4JSAA?e=1tnRGg', 4, 0, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(8, 'Protocolo accidentes alumnos', 'FEM12', 'https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/ERRpJgPy--pFuF0qnYr4pU0BN7kcDYt5kFEgUl1OI9Ln6g?e=rGIgdg', 4, 0, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(9, 'Autorización inclusión bolsa de trabajo', 'ORI04', 'https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/EWHBVIflbu9BpuKhtZjN0eYBy20uyppmI1DRl95PCx6HqA?e=JGnheJ', 5, 0, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(10, 'Firma alumnado en Dpto IOP', 'ORI05 ', 'https://crfpcastilla.sharepoint.com/:x:/s/EPT13002691E03-SGC/EUeqSPuv2F5HhfvwRcc4CtsBDHT4mJNs_w9GW7VW2bpzNw?e=QPQKGs', 5, 0, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(11, 'Reservar aulas APE-ATECA', 'PROG13', 'https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/EZYaxLmILUdJs0abfvAbQxkBqmuoX5DvPz8TPIGLeDm8Eg?e=Tn1wLM', 6, 0, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(12, 'Autorización de mayores-menores de edad', 'PROG07', 'https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/EfMiek9m1w5Dih8pceFmqEABKRP0J7JuFfzYgYUbGztg4g?e=WoEElM', 6, 0, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(13, 'TUT02 Aviso de anulacion matricula.pdf', 'TUT02', 'https://crfpcastilla.sharepoint.com/sites/EPT13002691E03-SGC/Documentos%20compartidos/Forms/AllItems.aspx?id=%2Fsites%2FEPT13002691E03%2DSGC%2FDocumentos%20compartidos%2FSGC%2FSGC%2Dweb%2FENSENANZA%2DAPRENDIZAJE%2FTUTORIA%2FTUT02%20Aviso%20de%20anulacion%20matricula%2Epdf&parent=%2Fsites%2FEPT13002691E03%2DSGC%2FDocumentos%20compartidos%2FSGC%2FSGC%2Dweb%2FENSENANZA%2DAPRENDIZAJE%2FTUTORIA&p=true&ga=1', 7, 1, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(14, 'Acta elección delegados', 'TUT07', 'https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/EXf6As9Pg0tLlsaUdZGkC-UBVZ1ESOKsxDNqOZYsRMgChQ?e=wZ5HV9', 7, 0, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(15, 'Asignación de tareas de emergencia', 'PRL03', 'https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/EWSkRErkNUBEm_z0cQsC8gUBujarDo6C7zB_ps0iE7Ndyw?e=HKDk8Q', 8, 0, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(16, 'Evaluación simulacro', 'PRL08', 'https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/EQ6XQNS0cnhGr8LlQaT9Ao8B-wMc0hxz27YDjn-vi_Hv8Q?e=z7CKzg', 8, 0, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(17, 'RRHH02 Ficha datos personales profesorado.pdf', 'RRHH02', 'https://crfpcastilla.sharepoint.com/sites/EPT13002691E03-SGC/Documentos%20compartidos/Forms/AllItems.aspx?id=%2Fsites%2FEPT13002691E03%2DSGC%2FDocumentos%20compartidos%2FSGC%2FSGC%2Dweb%2FGESTION%2FRRHH%2FRRHH02%20Ficha%20datos%20personales%20profesorado%2Epdf&parent=%2Fsites%2FEPT13002691E03%2DSGC%2FDocumentos%20compartidos%2FSGC%2FSGC%2Dweb%2FGESTION%2FRRHH&p=true&ga=1', 9, 1, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(18, 'RRHH10 Modelo asuntos propios retribuidos.pdf', 'RRHH10', 'https://crfpcastilla.sharepoint.com/sites/EPT13002691E03-SGC/Documentos%20compartidos/Forms/AllItems.aspx?id=%2Fsites%2FEPT13002691E03%2DSGC%2FDocumentos%20compartidos%2FSGC%2FSGC%2Dweb%2FGESTION%2FRRHH%2FRRHH10%20Modelo%20asuntos%20propios%20retribuidos%2Epdf&parent=%2Fsites%2FEPT13002691E03%2DSGC%2FDocumentos%20compartidos%2FSGC%2FSGC%2Dweb%2FGESTION%2FRRHH&p=true&ga=1', 9, 1, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(19, 'Préstamo de equipo informático', 'RMAT07', 'https://crfpcastilla.sharepoint.com/sites/EPT13002691E03-SGC/Documentos%20compartidos/Forms/AllItems.aspx?id=%2Fsites%2FEPT13002691E03%2DSGC%2FDocumentos%20compartidos%2FSGC%2FSGC%2Dweb%2FGESTION%2FRECURSOS%20MATERIALES%2FRMAT07%20Prestamo%20de%20Equipo%20Informatico%2Epdf&parent=%2Fsites%2FEPT13002691E03%2DSGC%2FDocumentos%20compartidos%2FSGC%2FSGC%2Dweb%2FGESTION%2FRECURSOS%20MATERIALES&p=true&ga=1', 10, 0, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(20, 'Registro de material inventariable dpto', 'RMAT09', 'https://crfpcastilla.sharepoint.com/:x:/s/EPT13002691E03-SGC/EThqb8G42jtEv7RV3T9ZJwUBknqrIc9CbLieWWiYWLuE6Q?e=f0fsJv', 10, 0, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(21, 'Plan de auditoría interna', 'AUD02', 'https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/ETF9vHxs3C5AkmfXVIkwzCEB0PGmphSZQzUgq2R3XQ7PnQ?e=aTRA2A', 11, 0, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(22, 'Informe de acciones preventivas', 'AUD05', 'https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/EXPVL-dk5KpAq0w9shIeS1IBXJurbdCJ4ecm69pJ94K9ag?e=zgpooh', 11, 0, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(23, 'Memoria anual de módulo', 'MEM02', 'https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/EaFPqlQiIOpNveRk1r40Bc8Bu1pzMK9Wkx6kf9CpBIdjfw?e=yRd3nA', 12, 0, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(24, 'Memoria anual dpto-fp', 'MEM03', 'https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/EU1-89z42RpIorttguhZHE0BMPTVBBmk0RtAcSy7ISfZEw?e=Ah3pck', 12, 0, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(25, 'ACT registro partes alumnado', 'REG11', 'https://crfpcastilla.sharepoint.com/:x:/s/EPT13002691E03-SGC/EXL4PIS6YE5BsJ-iUdkiTxcBT5KOqCu26DXuEyu2WPickQ?e=ZXPylb', 13, 0, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(26, 'ALUMNS registro control asistencia', 'REG18', 'https://crfpcastilla.sharepoint.com/:x:/s/EPT13002691E03-SGC/EdsaWRkmD91DpuGEKsWEw8oBHzFRhzgMFpsvKgHoGir7nA?e=irakDS', 13, 0, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(27, 'SQR02 Hoja de SQR.pdf', 'SQR02', 'https://crfpcastilla.sharepoint.com/sites/EPT13002691E03-SGC/Documentos%20compartidos/Forms/AllItems.aspx?id=%2Fsites%2FEPT13002691E03%2DSGC%2FDocumentos%20compartidos%2FSGC%2FSGC%2Dweb%2FMEDICION%20y%20MEJORA%2FSQR%2FSQR02%20Hoja%20de%20SQR%2Epdf&parent=%2Fsites%2FEPT13002691E03%2DSGC%2FDocumentos%20compartidos%2FSGC%2FSGC%2Dweb%2FMEDICION%20y%20MEJORA%2FSQR&p=true&ga=1', 14, 1, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(28, 'Listado SQRs', 'SQR03', 'https://crfpcastilla.sharepoint.com/:x:/s/EPT13002691E03-SGC/EeLgFy5FBnNKvst5SoSh4LIBmOmv0_MgJSLwEoGsXqYNfQ?e=Hkce2j', 14, 0, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `message` varchar(1000) NOT NULL,
  `userId` int(11) NOT NULL,
  `senderId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `messages`
--

INSERT INTO `messages` (`id`, `subject`, `message`, `userId`, `senderId`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Importe: Leer por favor', 'Hola buenos días Emilia. Te escribo para recordarte que me tienes que entregar aún la documentación relevante al proceso de evaluación. Mándamelo cuanto antes a mi correo. Gracias.', 2, 1, '2025-03-07 08:01:00', '2025-03-07 08:01:00', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `code` varchar(255) NOT NULL,
  `year` int(11) NOT NULL,
  `position` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `code`, `year`, `position`, `description`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, '815570', 2025, 'ADMINISTRADOR', 'Gestiona permisos de usuario, controla la configuración del sistema y supervisa la seguridad de la plataforma.', '2025-03-07 07:43:41', '2025-03-07 07:43:41', NULL),
(2, '655081', 2025, 'SECRETARIO/A', 'Administra tareas administrativas como la gestión de documentos, actualización de registros y asistencia en la programación de eventos.', '2025-03-07 07:43:41', '2025-03-07 07:43:41', NULL),
(3, '457117', 2025, 'JEFE/A DE DEPARTAMENTO', 'Gestiona la configuración de los departamentos, asigna tareas y supervisa los informes de progreso dentro de la aplicación.', '2025-03-07 07:43:41', '2025-03-07 07:43:41', NULL),
(4, '733912', 2025, 'JEFE/A DE ESTUDIOS ADJUNTO', 'Supervisa y aprueba los programas académicos, realiza ajustes a los contenidos y coordina la distribución de materiales educativos.', '2025-03-07 07:43:41', '2025-03-07 07:43:41', NULL),
(5, '997689', 2025, 'JEFE/A TÉCNICO/A', 'Gestiona la configuración de sistemas técnicos, supervisa las operaciones técnicas y resuelve problemas técnicos dentro de la plataforma.', '2025-03-07 07:43:41', '2025-03-07 07:43:41', NULL),
(6, '320785', 2025, 'COORDINADOR DE PREVENCIÓN', 'Controla las configuraciones de seguridad, monitorea las alertas y asegura el cumplimiento de las normativas de prevención de riesgos.', '2025-03-07 07:43:41', '2025-03-07 07:43:41', NULL),
(7, '745912', 2025, 'COORDINADOR/A DE FORMACIÓN Y TRANSFORMACIÓN DIGITAL', 'Configura y gestiona módulos de capacitación online, organiza seminarios virtuales y promueve la integración de herramientas digitales en el proceso de formación.', '2025-03-07 07:43:41', '2025-03-07 07:43:41', NULL),
(8, '124047', 2025, 'DIRECTOR/A', 'Supervisa la gestión de usuarios, ajusta políticas de acceso y toma decisiones clave sobre la evolución y expansión de la plataforma.', '2025-03-07 07:43:41', '2025-03-07 07:43:41', NULL),
(9, '440978', 2025, 'COORDINADOR/A DE AULA DE TECNOLOGÍA APLICADA', 'Gestiona las configuraciones del aula virtual de tecnología, organiza actividades prácticas y supervisa el progreso de los estudiantes.', '2025-03-07 07:43:41', '2025-03-07 07:43:41', NULL),
(10, '45746', 2025, 'COORDINADOR/A DE AULA PROFESIONAL DE EMPRENDIMIENTO', 'Gestiona módulos de emprendimiento, crea proyectos interactivos y coordina las mentorías y talleres sobre nuevas empresas dentro de la aplicación.', '2025-03-07 07:43:41', '2025-03-07 07:43:41', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20250125091642-create-category.cjs'),
('20250125101733-create-users.cjs'),
('20250125102452-create-roles.cjs'),
('20250125102815-create-user-role.cjs'),
('20250125103608-create-subcategory.cjs'),
('20250204192331-create-document.cjs'),
('20250205202939-create-task.cjs'),
('20250206083612-create-task-user.cjs'),
('20250208231842-create-task-document.cjs'),
('20250221090340-create-abilities.cjs'),
('20250221150332-create-ability-rol.cjs'),
('20250227085926-create-message.cjs');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `subcategories`
--

CREATE TABLE `subcategories` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `id_category` bigint(20) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `subcategories`
--

INSERT INTO `subcategories` (`id`, `name`, `id_category`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Dirección y comunicación (DYC)', 1, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(2, 'Actividades de aula (ACT)', 2, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(3, 'Evaluación (EVA)', 2, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(4, 'Formación Empresas (FEM)', 2, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(5, 'Orientación (ORI)', 2, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(6, 'Programación (PROG)', 2, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(7, 'Tutoría (TUT)', 2, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(8, 'Prevención de riesgos laborales (PRL)', 3, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(9, 'Recursos Humanos (RRHH)', 3, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(10, 'Recursos materiales (RMAT)', 3, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(11, 'Auditorías', 4, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(12, 'Memorias anuales', 4, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(13, 'Registros de control', 4, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(14, 'SQRs (Sugerencias, Quejas y Reclamaciones)', 4, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `end_date` varchar(255) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tasks`
--

INSERT INTO `tasks` (`id`, `description`, `end_date`, `type`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Día de asuntos propios', '2025-03-12 23:00:00', NULL, '2025-03-07 08:02:39', '2025-03-07 08:02:39', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `task_documents`
--

CREATE TABLE `task_documents` (
  `id` int(11) NOT NULL,
  `id_task` int(11) NOT NULL,
  `id_document` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `task_documents`
--

INSERT INTO `task_documents` (`id`, `id_task`, `id_document`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 1, 18, '2025-03-07 08:02:39', '2025-03-07 08:02:39', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `task_users`
--

CREATE TABLE `task_users` (
  `id` int(11) NOT NULL,
  `id_task` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `state` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `task_users`
--

INSERT INTO `task_users` (`id`, `id_task`, `id_user`, `state`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 1, 1, 1, '2025-03-07 08:02:39', '2025-03-07 08:02:39', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `code` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `nrp` varchar(255) DEFAULT NULL,
  `dni` varchar(255) NOT NULL,
  `abbreviation` varchar(255) DEFAULT NULL,
  `birth_date` datetime NOT NULL,
  `gender` varchar(255) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(255) NOT NULL,
  `postal_code` varchar(255) NOT NULL,
  `province` varchar(255) NOT NULL,
  `phone_rp` varchar(255) DEFAULT NULL,
  `specialty` varchar(255) DEFAULT NULL,
  `body` varchar(255) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  `admission_date` datetime NOT NULL,
  `leave_date` datetime DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `corporate_email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `profile_picture` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `code`, `last_name`, `first_name`, `nrp`, `dni`, `abbreviation`, `birth_date`, `gender`, `title`, `address`, `city`, `postal_code`, `province`, `phone_rp`, `specialty`, `body`, `department`, `admission_date`, `leave_date`, `email`, `corporate_email`, `password`, `phone`, `profile_picture`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'A001', 'User', 'Admin', 'NRP001', '12345678A', 'ADM', '1980-01-01 00:00:00', 'O', 'Admin', '123 Admin Street', 'Admin City', '12345', 'Admin Province', '987654321', 'Admin Specialty', 'Admin Body', 'Admin Department', '2000-01-01 00:00:00', NULL, 'jaime.ornu@gmail.com', 'calidad.nodemailer@gmail.com', '$2b$10$2e8UP5gS/R4LrkgrRudINOBE1t7t9dcfo//axwbKiXcRyYnQrb2u2', '123456789', NULL, '2025-03-07 07:43:41', '2025-03-07 07:43:41', NULL),
(2, 'dv0npUd33B', 'Peña Vargas', 'Emilia', '863326', '62096750R', 'KEA', '2007-07-20 00:00:00', 'M', 'Arquitecto de Soluciones Dinánmico', 'Calleja Blanca s/n.', 'Ferrol', '24713', 'Aragón', '949 166 574', 'Coordinador', 'Verduzco, Alvarado y Cisneros Asociados', 'Librería', '2022-11-21 00:00:00', NULL, 'Adela_BacaHuerta64@hotmail.com', 'emilia@calidad.com', '$2b$10$RifyRFS349GXg5Nmkf3fG.Jc9PjewE0JZcjsy0ohcFEz1a3rhs9OS', '996895950', '8329dc1b-cecd-4f91-a5d9-3b1ec6764109.png', '2025-03-07 07:43:41', '2025-03-07 07:59:56', NULL),
(3, 'Lzz03WUdus', 'Montaño Zamora', 'Emilio', '585859', '21985281D', 'ERY', '2001-06-23 00:00:00', 'M', 'Productor de Aplicaciones Directo', 'Torrente Salvador Villaseñor 89', 'Alicante', '67910', 'Cantabria', '969 939 543', 'Representante', 'Haro, Pineda y Carranza Asociados', 'Mascotas', '2020-05-10 00:00:00', NULL, 'Cesar_JuarezBenavides@yahoo.com', 'Gerardo.CastanedaDelafuente59@hotmail.com', '$2b$10$uAbHrDddOygWywE.Z46Wv.V/WvxY.WxYGMmUPpYV.U9sAv1vEaWTa', '928-571-752', NULL, '2025-03-07 07:43:41', '2025-03-07 07:43:41', NULL),
(4, 'QjzPMxUwRR', 'Abeyta Hernández', 'Rafael', '004243', '95982833S', 'YAO', '1996-09-14 00:00:00', 'M', 'Arquitecto de Métricas Cliente', 'Municipio Jorge Luis s/n.', 'Logroño', '84940', 'Cantabria', '982022929', 'Consultor', 'Collazo S.A.', 'Cine', '2022-09-01 00:00:00', NULL, 'Blanca76@hotmail.com', 'Samuel.SolorzanoGastelum36@gmail.com', '$2b$10$C1GhOI1i7yUO.FPIb6dM8OwdWpzgrYQBuzYWKBQtlZfu0GyKyIUoK', '938 889 115', NULL, '2025-03-07 07:43:41', '2025-03-07 07:43:41', NULL),
(5, 'fCm9BsCoLK', 'Salinas Paredes', 'Rubén', '335826', '62135725I', 'EFQ', '2020-09-18 00:00:00', 'H', 'Planificador de Marketing Distrito', 'Chalet Olivia 55', 'Cornellá de Llobregat', '92024', 'Galicia', '951 104 677', 'Estratega', 'Espinosa e Hijos', 'Electrónica', '2020-08-11 00:00:00', NULL, 'Gustavo62@yahoo.com', 'Alfredo.AbeytaGarrido3@hotmail.com', '$2b$10$F5Mzwhrdlmd.oqjolhJZxe1qzE9P5L7CjHYAUleK0Co2yhxjX9HPi', '943 360 958', NULL, '2025-03-07 07:43:41', '2025-03-07 07:43:41', NULL),
(6, 'x4Us66OKEN', 'Naranjo Melgar', 'Tomás', '732961', '74597980A', 'QWO', '2007-04-09 00:00:00', 'O', 'Oficial de Paradigma Distrito', 'Vía Pública Estela 34', 'Lugo', '03802', 'Navarra', '960 796 953', 'Productor', 'Almonte y Rolón', 'Informática', '2020-12-13 00:00:00', '2025-03-06 00:00:00', 'Laura.SaizDelatorre@hotmail.com', 'Ricardo23@hotmail.com', '$2b$10$IfIv6/CGszf4LGwb4Biu1.Tds7LtO8iqLTRFO3uO/ck.s7GIRB43S', '942-118-714', NULL, '2025-03-07 07:43:41', '2025-03-07 07:43:41', NULL),
(7, 'Z5Eb58h0p9', 'Piña Puente', 'Carla', '026104', '21486840K', 'XLZ', '2023-12-16 00:00:00', 'O', 'Consultor de Funcionalidad Producto', 'Vía Pública Tomás Montalvo, 9', 'Salamanca', '15167', 'Aragón', '993-138-369', 'Consultor', 'Amaya Pizarro S.L.', 'Decoración', '2020-08-30 00:00:00', NULL, 'Alfonso.UrenaVerdugo@hotmail.com', 'Jeronimo58@hotmail.com', '$2b$10$/dsGnz14l49jm7oBBPtah.a0qJs7j29GTUIleVhAVQoxHrRSKjxQ.', '940 434 641', NULL, '2025-03-07 07:43:41', '2025-03-07 07:43:41', NULL),
(8, '5dF7nZBWDv', 'Nava Cordero', 'Sofía', '631263', '59799169G', 'IBB', '1995-04-19 00:00:00', 'O', 'Representante de Seguridada Nacional', 'Vía Hermenegildo s/n.', 'Santiago de Compostela', '95312', 'Aragón', '935.791.666', 'Arquitecto', 'Pichardo Mora S.L.', 'Videojuegos', '2023-09-29 00:00:00', NULL, 'Leticia56@hotmail.com', 'Ricardo9@yahoo.com', '$2b$10$zvAy4ARXmVTvU/nxIFWLTuyMT8bksFXnJa2kURG8YFO2xgNK076Pa', '938 950 904', NULL, '2025-03-07 07:43:41', '2025-03-07 07:43:41', NULL),
(9, 'oMfJkGaWxs', 'Saldivar Corrales', 'Josefina', '440082', '51108682B', 'VZD', '2005-02-10 00:00:00', 'O', 'Agente de Soluciones Dinánmico', 'Edificio Guadalupe 79', 'Zamora', '61102', 'Comunidad Valenciana', '984 030 394', 'Diseñador', 'Ureña Peña S.L.', 'Electrónica', '2024-07-29 00:00:00', NULL, 'Amalia.AvilaAbeyta92@yahoo.com', 'Andrea.LaraSaenz@hotmail.com', '$2b$10$Ork6lFyQAeQ6eQGTESsmi.LWhG8UVvswYkZGIP/F2Oyin1TRmeA7a', '949 568 280', NULL, '2025-03-07 07:43:41', '2025-03-07 07:43:41', NULL),
(10, 'gC29G6sBNF', 'Delacrúz Cazares', 'Carmen', '725960', '41500261S', 'BJY', '2020-10-27 00:00:00', 'H', 'Estratega de Marca Jefe', 'Explanada Cristián 3', 'Santa Coloma de Gramanet', '35673', 'Comunidad Valenciana', '955090668', 'Consultor', 'Arriaga S.L.', 'Moda', '2022-02-06 00:00:00', NULL, 'JoseMaria_ReynaGallardo76@yahoo.com', 'MariaEugenia44@gmail.com', '$2b$10$URyEoqe/kORrVoK796lYN.OEZQR5vbZwWa6YIKXPL85Vd4VugXgj2', '940.061.999', NULL, '2025-03-07 07:43:41', '2025-03-07 07:43:41', NULL),
(11, 'w0FPRD5R1q', 'Roque Ledesma', 'Inés', '384655', '62711632S', 'NKX', '2007-08-14 00:00:00', 'H', 'Gerente de Cuentas Jefe', 'Camino Débora Mendoza 9', 'Vitoria', '74573', 'Comunidad de Madrid', '940.636.188', 'Desarrollador', 'Menchaca Baca Hermanos', 'Papelería', '2025-01-22 00:00:00', '2025-03-06 00:00:00', 'JoseEmilio_JuradoPineda@yahoo.com', 'Guadalupe.OrdonezCervantez39@yahoo.com', '$2b$10$wvFP/MUswaK9UlFrmZTSPe4YhqordlmwjEco09nh27w8kEXe5hmeW', '959371653', NULL, '2025-03-07 07:43:41', '2025-03-07 07:43:41', NULL),
(12, 'P6oFmoYVDZ', 'Mesa Gastélum', 'Barbara', '376846', '46399715I', 'SAQ', '2022-07-01 00:00:00', 'H', 'Consultor de Cuentas Regional', 'Quinta Roberto 1', 'Pamplona', '07712', 'País Vasco', '949688853', 'Coordinador', 'Villagómez S.L.', 'Salud', '2021-03-06 00:00:00', NULL, 'Rosa_NajeraBonilla70@hotmail.com', 'Antonia_RuelasEspinoza@hotmail.com', '$2b$10$9CGDinSp2tp4X6aDM5QSSe/zIrtZICA4RtweF2PpKJrriSpObqOx.', '925.444.399', NULL, '2025-03-07 07:43:41', '2025-03-07 07:43:41', NULL),
(13, 'EhLfmUeojy', 'Valenzuela Cintrón', 'Horacio', '977915', '85534348F', 'QDJ', '2009-08-15 00:00:00', 'H', 'Ingeniero de Seguro Gerente', 'Grupo Beatriz Garay 1', 'Madrid', '50948', 'Cantabria', '940.461.911', 'Diseñador', 'Carvajal S.A.', 'Deportes', '2020-09-12 00:00:00', NULL, 'MariadelosAngeles7@gmail.com', 'Mariano_SaldivarMojica20@yahoo.com', '$2b$10$ewZ0m8w540hHa0UUPYds0u7ODh6Dql3vAnFGxrz48vnonS4GuZ1J6', '995.586.707', NULL, '2025-03-07 07:43:41', '2025-03-07 07:43:41', NULL),
(14, 'O5Rt4KUtf1', 'Navarro Solorio', 'Salvador', '071166', '50809974H', 'YFG', '2015-05-25 00:00:00', 'M', 'Coordinador de Soluciones Gerente', 'Camino Ana, 2', 'Dos Hermanas', '24918', 'Canarias', '911935575', 'Planificador', 'Puente y Tovar', 'Bricolaje', '2024-10-27 00:00:00', NULL, 'Lola_BarreraRiojas44@gmail.com', 'Alberto_RosarioFlorez84@gmail.com', '$2b$10$CQbIhXm61GS7EvL.vT.zEOFpboRWpS0uMm2XQ32p804.OWCcUkL1C', '941877627', NULL, '2025-03-07 07:43:41', '2025-03-07 07:43:41', NULL),
(15, 'PbLOHZIyKm', 'Tello Villaseñor', 'Lorenzo', '177846', '75921846C', 'CUL', '1995-09-19 00:00:00', 'H', 'Coordinador de Cuentas Dinánmico', 'Apartamento Eduardo 77', 'Sagunto', '59573', 'La Rioja', '989.974.975', 'Asistente', 'Monroy S.A.', 'Salud', '2024-12-28 00:00:00', NULL, 'Ramiro35@gmail.com', 'Carmen_UribeMenchaca@hotmail.com', '$2b$10$q9Q0q1QrwWG7TG0i1Gz5hupDVE5IRO2ZsDqpZV1OvnUZF36hhPBrO', '952 151 666', NULL, '2025-03-07 07:43:41', '2025-03-07 07:43:41', NULL),
(16, 'beo3lF3g1u', 'Leal Cano', 'Guillermina', '869893', '45656512R', 'BWT', '2004-11-07 00:00:00', 'H', 'Oficial de División Dinánmico', 'Barranco Eva s/n.', 'Murcia', '19398', 'Andalucía', '953.409.398', 'Especialista', 'Garica, Puga y Almanza Asociados', 'Música', '2022-11-25 00:00:00', NULL, 'JoseLuis40@yahoo.com', 'Mercedes.OlivoCorona79@yahoo.com', '$2b$10$HWUN8k3EHyMRWHJ8Kk5gkuEn8ebwsAF9ddyDNgYACtIaYQGViQVfa', '915-083-345', NULL, '2025-03-07 07:43:41', '2025-03-07 07:43:41', NULL),
(17, 'hgutv3xz1G', 'Santana Barreto', 'Juan Carlos', '572262', '82260259C', 'QEQ', '2005-01-29 00:00:00', 'M', 'Asistente de Soluciones Inversor', 'Travesía Enrique Zúñiga 48', 'Cornellá de Llobregat', '16427', 'Cataluña', '978436945', 'Diseñador', 'Pagan Muñoz S.A.', 'Hogar', '2022-08-19 00:00:00', '2025-03-07 00:00:00', 'Concepcion.PorrasColunga@yahoo.com', 'Cristobal73@yahoo.com', '$2b$10$FCCgWOF8Y449yJhKWMqIUu2h1elp9bJ6.CZhey2g01qTWNWZKzL4e', '938779982', NULL, '2025-03-07 07:43:41', '2025-03-07 07:43:41', NULL),
(18, '4a9bsWl8zN', 'Menéndez Negrete', 'Eduardo', '757831', '06651669Y', 'MRV', '2004-04-25 00:00:00', 'H', 'Oficial de Usabilidad Interno', 'Extrarradio Carla Puga 60', 'El Ejido', '40046', 'Castilla y León', '929 241 289', 'Planificador', 'Guajardo Lomeli e Hijos', 'Bricolaje', '2023-06-21 00:00:00', '2025-03-07 00:00:00', 'Raquel.AlejandroMenendez@yahoo.com', 'Luisa46@yahoo.com', '$2b$10$oBxn3JWfictHhfddB8i/0uh/Bl/fLBpxA5DFuIC5IJ9Mq9sGvOcmS', '902344062', NULL, '2025-03-07 07:43:42', '2025-03-07 07:43:42', NULL),
(19, 'fhLBekXBlV', 'Porras Soliz', 'Gabriela', '489619', '47386002J', 'HIV', '1995-10-30 00:00:00', 'O', 'Asociado de Identidad Producto', 'Colegio Germán Benavídez 95', 'Fuenlabrada', '74952', 'Comunidad Valenciana', '977 159 796', 'Ingeniero', 'Véliz, Alarcón y Banda Asociados', 'Videojuegos', '2020-09-04 00:00:00', NULL, 'Sancho13@gmail.com', 'Cesar.OrellanaTrujillo@hotmail.com', '$2b$10$XNnkMc/oA4xCOe7TQ0HegeeBqZyzgJxJP4ScbvjYRBoywoZPxvJqK', '964.759.701', NULL, '2025-03-07 07:43:42', '2025-03-07 07:43:42', NULL),
(20, 'Ow9OGisuMh', 'Valentín Ruelas', 'Ramiro', '503657', '24738375P', 'AHY', '2023-05-30 00:00:00', 'H', 'Gerente de Optimización Senior', 'Aldea Leticia Acosta, 3', 'Hospitalet de LLobregat', '94511', 'Cantabria', '921.535.668', 'Consultor', 'Mejía Alaníz S.A.', 'Decoración', '2022-01-11 00:00:00', NULL, 'Maricarmen13@yahoo.com', 'Lorena.EstevezPerales@yahoo.com', '$2b$10$qvpOjFhnwpE8RXkZCmprb.sKQNn7j/UqTqcw3rE/xRsCy1JKzy7mq', '973-013-330', NULL, '2025-03-07 07:43:42', '2025-03-07 07:43:42', NULL),
(21, 'bkXWgowXZ5', 'Camarillo González', 'Jaime', '652457', '70002203X', 'EMY', '2014-12-03 00:00:00', 'H', 'Planificador de Funcionalidad Gerente', 'Polígono Federico Villarreal, 85', 'Irún', '93754', 'País Vasco', '988 070 833', 'Administrador', 'Lebrón y Caballero', 'Música', '2021-10-17 00:00:00', NULL, 'AnaMaria0@gmail.com', 'Santiago80@gmail.com', '$2b$10$Od05Bn6IRiIChCYqEn57k.3vnJoyBAquR3Y67oSaPEwwu5H5BqFbG', '995 931 629', NULL, '2025-03-07 07:43:42', '2025-03-07 07:43:42', NULL),
(22, 'mUJRdKkaIW', 'Ortega Colunga', 'Gonzalo', '592172', '35874784H', 'DXK', '2022-08-26 00:00:00', 'H', 'Gerente de Factores Senior', 'Lado Luis Miguel, 6', 'Sanlúcar de Barrameda', '81875', 'Canarias', '928 934 026', 'Asociado', 'Lucio, Negrón y Soliz Asociados', 'Música', '2021-05-29 00:00:00', NULL, 'Sofia_VargasAngulo@yahoo.com', 'Jaime_CamachoVillegas@yahoo.com', '$2b$10$WxUxCYdoC7AD/Y9.lszS1eZhVOEqay8dRn.iiv8UhhkQfTyBXaFsO', '966 199 182', NULL, '2025-03-07 07:43:42', '2025-03-07 07:43:42', NULL),
(23, 'VEwZyCoJhO', 'Salazar Toro', 'Manuela', '048201', '70801096U', 'KSV', '2002-08-05 00:00:00', 'M', 'Diseñador de Investigación Global', 'Explanada Ana María Osorio 85', 'El Prat de LLobregat', '33451', 'País Vasco', '931-127-810', 'Asociado', 'Zarate S.A.', 'Juguetería', '2021-06-16 00:00:00', NULL, 'Maria_ValverdeLucio@gmail.com', 'Adela0@gmail.com', '$2b$10$B7.ymqvwSV/A7pSfYZzx0.ZxE4LXpy4fGcaTo63FO0wUAMT3/f.Py', '992141891', NULL, '2025-03-07 07:43:42', '2025-03-07 07:43:42', NULL),
(24, 'F5JmBl3TEr', 'Santillán Contreras', 'Alejandra', '301163', '30509722N', 'TMQ', '2006-09-06 00:00:00', 'O', 'Coordinador de Web Interno', 'Urbanización Rosario Corrales, 6', 'Cádiz', '14045', 'Navarra', '960-805-346', 'Especialista', 'Quezada S.L.', 'Electrónica', '2023-09-20 00:00:00', NULL, 'Ivan.AlcarazQuezada@gmail.com', 'MariaJose58@yahoo.com', '$2b$10$lOQQVXyvyyKjVkEQ1V744.npjToOro9DxIFWgVwoXRxAMCi/wPVZm', '991 204 767', NULL, '2025-03-07 07:43:42', '2025-03-07 07:43:42', NULL),
(25, 'CpoEOB3Vj7', 'Mata Peña', 'Ana', '220115', '11930369K', 'ZOO', '2005-04-04 00:00:00', 'M', 'Administrador de División Jefe', 'Extrarradio Reina 58', 'Coslada', '12256', 'Castilla-La Mancha', '965-468-466', 'Coordinador', 'Lebrón, Sotelo y Barreto Asociados', 'Bricolaje', '2020-05-06 00:00:00', '2025-03-06 00:00:00', 'Emilia_AlbaBalderas64@hotmail.com', 'Vicente.EstradaCisneros@gmail.com', '$2b$10$Uq1DntkjVJwCv16u/XS4i.Z0UVcNuL64GFHQZWA65axFalAvHjRDG', '941.766.924', NULL, '2025-03-07 07:43:42', '2025-03-07 07:43:42', NULL),
(26, 'D6PkIFwkFV', 'Henríquez Aranda', 'Agustín', '858280', '28370066D', 'XUR', '2007-11-09 00:00:00', 'M', 'Ingeniero de Datos Cliente', 'Apartamento Dorotea Ayala, 2', 'Granada', '24262', 'Navarra', '987.748.659', 'Consultor', 'Gaytán y Zambrano', 'Cine', '2020-03-18 00:00:00', NULL, 'MiguelAngel_ZarateZuniga@yahoo.com', 'Santiago_CarrionQuinonez@hotmail.com', '$2b$10$xieF73i5bOTWqh8lA0kMMOnB3LS6V3kgzf52j2YxJdFoIgqAD62Qe', '970 521 590', NULL, '2025-03-07 07:43:42', '2025-03-07 07:43:42', NULL),
(27, 'hweaghXZkx', 'Terán Lara', 'Pedro', '627192', '30588110Z', 'VEN', '1996-08-25 00:00:00', 'M', 'Oficial de Programa Producto', 'Barrio Jerónimo s/n.', 'Alcalá de Guadaira', '56106', 'Extremadura', '979-296-802', 'Administrador', 'Zapata y Pabón', 'Parafarmacia', '2023-01-12 00:00:00', '2025-03-06 00:00:00', 'Soledad.OrdonezVelazquez83@hotmail.com', 'Jorge_PereaOcampo23@yahoo.com', '$2b$10$KEsc6KLraJ/0inrdBITtCufeWrS8kvb.IouB2fn.Gf4Hlp2mRRPcy', '969-355-602', NULL, '2025-03-07 07:43:42', '2025-03-07 07:43:42', NULL),
(28, 'Ld0MZzftuk', 'Benítez Guerra', 'Victoria', '465094', '00117872D', 'RYF', '2024-02-11 00:00:00', 'O', 'Asistente de Usabilidad Gerente', 'Lugar Clara Limón s/n.', 'Lorca', '80086', 'Aragón', '986877281', 'Director', 'Delafuente y Bernal', 'Videojuegos', '2021-01-25 00:00:00', NULL, 'Alfonso85@yahoo.com', 'Maria87@gmail.com', '$2b$10$c6h0xzmQJPg2sey/8azgu.dyhdvbAizKyooHB5uNFc1liNhEvIswi', '962-034-717', NULL, '2025-03-07 07:43:42', '2025-03-07 07:43:42', NULL),
(29, 'Zx0NzLy7n6', 'Rodríguez Gómez', 'Alberto', '757396', '04974130T', 'ZEJ', '2022-09-19 00:00:00', 'H', 'Coordinador de Paradigma Corporativo', 'Rampa José Bueno, 4', 'Jaén', '35298', 'Navarra', '986 762 212', 'Administrador', 'González Salgado e Hijos', 'Moda', '2024-08-28 00:00:00', NULL, 'Claudio51@gmail.com', 'MariaSoledad9@yahoo.com', '$2b$10$58RsDiEG3nAsrYhiFfLfReVOGDMyQqYV48h0pSdOm.Xh1.6.5nNm2', '953.177.743', NULL, '2025-03-07 07:43:42', '2025-03-07 07:43:42', NULL),
(30, 'BBlCZHiAgh', 'Dueñas Paredes', 'Juan Ramón', '135202', '35887485H', 'VFC', '2012-12-19 00:00:00', 'H', 'Diseñador de Marca Cliente', 'Calleja Antonio Meléndez, 1', 'Tarragona', '60814', 'Andalucía', '918-008-104', 'Agente', 'Segura y Ocampo', 'Mascotas', '2021-06-13 00:00:00', NULL, 'Hernan.RivasCarrillo42@yahoo.com', 'Homero_QuinonezSegura@gmail.com', '$2b$10$pKHGovK8nMXdxfVMo4.wJuPjF9UroRDYCk0MPpw/DNUn5GiJr3PeC', '927.722.007', NULL, '2025-03-07 07:43:42', '2025-03-07 07:43:42', NULL),
(31, 'mGUGPQtMCu', 'Galarza Escalante', 'Rubén', '434534', '44827901Z', 'YLL', '2004-11-12 00:00:00', 'O', 'Estratega de Marketing Jefe', 'Poblado Bernardo 5', 'Dos Hermanas', '03008', 'Comunidad de Madrid', '934433733', 'Técnico', 'Alicea Hermanos', 'Cine', '2023-03-12 00:00:00', NULL, 'Eduardo.MarinSanchez82@hotmail.com', 'Patricia.ArreolaPabon@hotmail.com', '$2b$10$2C3vmSbbAJi9W2txybC00.D0nIrunjMHNhqJKuW7SRsNCj8XJKiOy', '969992139', NULL, '2025-03-07 07:43:42', '2025-03-07 07:43:42', NULL),
(32, 'HxdZM46J1n', 'Aponte Marroquín', 'Juan Ramón', '340945', '36320760B', 'HTW', '2009-09-15 00:00:00', 'H', 'Administrador de Implementación Corporativo', 'Arrabal Teodoro, 92', 'Badalona', '20146', 'Baleares', '925 645 584', 'Administrador', 'Rodríguez y Rosales', 'Parafarmacia', '2022-10-11 00:00:00', '2025-03-07 00:00:00', 'LuisMiguel10@gmail.com', 'Jose_OlivasPadilla@gmail.com', '$2b$10$WzFoAI.GzIrjRS6uScfURu4CGaX8FSzgq7B7x533Sb7QGi8zU.rW.', '949.929.007', NULL, '2025-03-07 07:43:42', '2025-03-07 07:43:42', NULL),
(33, 'YZuFMeER7r', 'Padrón Varela', 'Mónica', '049763', '98528586J', 'OTY', '2024-03-19 00:00:00', 'O', 'Estratega de Funcionalidad Global', 'Salida Mariana 3', 'Mijas', '73166', 'Comunidad Valenciana', '922-471-136', 'Productor', 'Báez Polanco S.A.', 'Papelería', '2021-11-09 00:00:00', NULL, 'Reina.SolisMadrigal75@gmail.com', 'Juan.IbarraMuniz@yahoo.com', '$2b$10$AD2m7jUC0DXk1rKALuvSPuoSMx5A6frcerf4aDPzQzMe5RicB4vdG', '915-296-900', NULL, '2025-03-07 07:43:42', '2025-03-07 07:43:42', NULL),
(34, 'xWEFNwYmlm', 'Monroy Ceja', 'Andrés', '368575', '88217407A', 'SNV', '2018-07-02 00:00:00', 'O', 'Arquitecto de Paradigma Directo', 'Huerta Carolina Martínez s/n.', 'Tarragona', '76930', 'Comunidad Valenciana', '964039995', 'Ingeniero', 'Alemán, Armijo y Ruelas Asociados', 'Marroquinería', '2025-02-24 00:00:00', NULL, 'MariaCristina72@yahoo.com', 'Clara.MuroSauceda@yahoo.com', '$2b$10$GIFzr2lmmEr4c4UEO5LYp.ScZlB8XGL5qiPNx3s3jPydj2.y3/um2', '940-348-126', NULL, '2025-03-07 07:43:42', '2025-03-07 07:43:42', NULL),
(35, '8pKL452Z5I', 'Armenta Casillas', 'Débora', '638817', '08037662A', 'UFO', '2003-03-30 00:00:00', 'H', 'Ejecutivo de Cuentas Dinánmico', 'Carretera César 3', 'Baracaldo', '74431', 'Comunidad de Madrid', '970-651-808', 'Especialista', 'Argüello S.A.', 'Deportes', '2023-07-08 00:00:00', NULL, 'Ana_ContrerasPuga70@hotmail.com', 'Debora2@gmail.com', '$2b$10$DZD/hRcN3.G1FU.8gLWNXezj/9SoC91u1Xw5dP5FaYSiIV6ZnCgsS', '962660711', NULL, '2025-03-07 07:43:42', '2025-03-07 07:43:42', NULL),
(36, 'FAi68r5M2T', 'Carrera Cedillo', 'Arturo', '026449', '33805495N', 'HLM', '2004-05-21 00:00:00', 'H', 'Oficial de Web Distrito', 'Puente Pablo 3', 'Santa Cruz de Tenerife', '00148', 'Baleares', '972.273.674', 'Especialista', 'Farías S.L.', 'Librería', '2020-04-09 00:00:00', NULL, 'Lucia54@gmail.com', 'Julio97@yahoo.com', '$2b$10$v4vkYqkxAsQuXMqhTlNQy.znUqnWP.MXe8QP3jTjbLtYCQHJXwd4W', '945660315', NULL, '2025-03-07 07:43:42', '2025-03-07 07:43:42', NULL),
(37, 'usXjMSKv2B', 'Farías Berríos', 'Patricio', '125639', '17280526X', 'RDG', '1998-10-02 00:00:00', 'M', 'Planificador de Paradigma Directo', 'Sector Lourdes Saucedo, 53', 'Gijón', '39453', 'Comunidad Valenciana', '904 838 402', 'Relacciones', 'Moreno y Mora', 'Parafarmacia', '2024-10-11 00:00:00', NULL, 'Daniela_MontenegroArana86@hotmail.com', 'MariaTeresa85@hotmail.com', '$2b$10$zEuQNCrz/y/bxSPVBCJ4.OAF1nrRF2FnbL.OSkESs9VLOkj8lNgU.', '953082496', NULL, '2025-03-07 07:43:42', '2025-03-07 07:43:42', NULL),
(38, 'SXWDw4P2k7', 'Calvillo Ruelas', 'Vicente', '459665', '10591009F', 'ELW', '2000-06-02 00:00:00', 'H', 'Administrador de Investigación Interno', 'Partida Ángel 64', 'Córdoba', '88139', 'País Vasco', '978-089-511', 'Consultor', 'Barraza Cisneros S.A.', 'Decoración', '2022-11-14 00:00:00', NULL, 'Elvira42@gmail.com', 'Luis_HerediaBotello@yahoo.com', '$2b$10$k2r/8bSYLAA6eEDB98Xw3e/KCgTEMATXIJIhzawGEaTzEGaJqBPsu', '931 796 366', NULL, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(39, '6Vd7RIjlG2', 'Ornelas Luna', 'Hernán', '644553', '45292056S', 'NLQ', '2010-12-07 00:00:00', 'M', 'Consultor de Marketing Corporativo', 'Vía Pública Gilberto, 34', 'Gerona', '34508', 'País Vasco', '944-479-923', 'Oficial', 'Patiño S.L.', 'Música', '2023-10-13 00:00:00', NULL, 'Marta.OcasioVargas79@gmail.com', 'Fernando_MayaCarrillo79@yahoo.com', '$2b$10$kAQJXBTuAqVSi1Dsmc8R0.B01Nv4DT5qALW3SRNTm18rmMMSAPeFC', '906-197-877', NULL, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(40, 'xLg7dulndp', 'Carrero Sotelo', 'Cecilia', '383961', '28054957S', 'PAG', '2023-05-06 00:00:00', 'M', 'Asociado de Seguridada Adelante', 'Escalinata Luisa 2', 'Gerona', '17596', 'Andalucía', '942.084.878', 'Agente', 'Garica Hermanos', 'Juguetería', '2021-05-05 00:00:00', NULL, 'Anni.AguayoCoronado79@gmail.com', 'Horacio_DelatorreValencia@gmail.com', '$2b$10$Qcyn87xmQQ7GEvE9PbmkOOmYwthH0GVj1/dHmpkdC/5CDDRBS/lh.', '907-461-828', NULL, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(41, 'fOka0Qtqfq', 'Verdugo Juárez', 'Jordi', '925587', '52110576V', 'CMC', '2005-10-18 00:00:00', 'M', 'Gerente de Aplicaciones Distrito', 'Urbanización Eva Mata, 8', 'Cartagena', '35064', 'Canarias', '947943331', 'Diseñador', 'Orosco y Verdugo', 'Papelería', '2020-06-16 00:00:00', NULL, 'Rosalia.MaestasCepeda@gmail.com', 'Patricio6@gmail.com', '$2b$10$NB8LVovoQZYk/TRQTHPK2uxZIa020SFTA7it360Mw7De9ILto8Ml2', '936-906-958', NULL, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(42, 's4tRvqQs9K', 'Garay Villagómez', 'Homero', '002644', '53840230T', 'YQY', '2002-10-02 00:00:00', 'H', 'Ejecutivo de Tácticas Producto', 'Entrada David Sauceda, 8', 'El Ejido', '39437', 'Baleares', '907614390', 'Relacciones', 'Valdivia y González', 'Parafarmacia', '2024-08-13 00:00:00', NULL, 'Gonzalo48@yahoo.com', 'Ivan.RangelCedillo42@gmail.com', '$2b$10$5BRFIEeKruK1zwttHokT9eLxeF/tdpCgP5gX7YvqRKX5XdIWA4qXG', '956 074 164', NULL, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(43, '9mElj850GO', 'Tirado Rentería', 'Leticia', '537738', '23262922C', 'RRC', '2002-06-29 00:00:00', 'O', 'Funcionario de Datos Heredado', 'Torrente Alicia Otero, 53', 'Granada', '01891', 'Aragón', '978 480 124', 'Representante', 'Viera, Zúñiga y Alonzo Asociados', 'Mascotas', '2024-08-30 00:00:00', NULL, 'Hermenegildo27@gmail.com', 'Sergi4@yahoo.com', '$2b$10$2Fi4moHiN7HYTp776/.KSOjL61bM2ha/aMpZxEmAIKNmrwIaQcBwG', '969 642 389', NULL, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(44, 'WGLCLxx84a', 'Rosas Arenas', 'Julio César', '821349', '37268249O', 'ECV', '2007-09-08 00:00:00', 'O', 'Supervisor de Paradigma Central', 'Ronda Claudio Cazares 76', 'Alcorcón', '34271', 'Cantabria', '962-510-813', 'Director', 'Gurule, Rojas y Guardado Asociados', 'Parafarmacia', '2024-10-23 00:00:00', NULL, 'Joaquin.MenendezOrellana99@gmail.com', 'MariaJose28@gmail.com', '$2b$10$SIcfHfYpprtfvyVwMobIJeh8zpA3/f2S8t0Rw/oVYK/81PotBvS1y', '958-630-760', NULL, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(45, 'g4WEqH3J59', 'Maya Estévez', 'Carmen', '808070', '85925337R', 'DBC', '1996-10-04 00:00:00', 'M', 'Desarrollador de Mercados Nacional', 'Huerta José Eduardo Sandoval, 4', 'Estepona', '61352', 'Aragón', '916 832 887', 'Técnico', 'Marrero, Aguilar y Galván Asociados', 'Hogar', '2025-02-25 00:00:00', NULL, 'Mariana_VillasenorMelgar92@gmail.com', 'Elvira_AyalaPalomo@yahoo.com', '$2b$10$KF6feTPgKFRjq6ecoAUy9uuaUe.BwEZ8Gga7ZsQmYj.qiHxlIyR9a', '959.655.255', NULL, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(46, 'hpqqOIW69I', 'Ferrer Montéz', 'Ana María', '448682', '95521754H', 'TOU', '1999-06-11 00:00:00', 'M', 'Especialista de Paradigma Jefe', 'Explanada Marco Antonio, 56', 'Alcobendas', '96819', 'Comunidad de Madrid', '969 061 467', 'Analista', 'Delrío, Robledo y Medrano Asociados', 'Joyería', '2021-09-25 00:00:00', NULL, 'Oscar.RoybalLovato@gmail.com', 'Barbara69@hotmail.com', '$2b$10$4tWYvvj.ggWEDXcJtVcByedgJRRuzFWIqLhD1RUMDj23bUhyg.kgO', '949323986', NULL, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(47, 'w05K7IxeHF', 'Nájera Vargas', 'Florencia', '003803', '18273913N', 'BPN', '2010-05-21 00:00:00', 'M', 'Supervisor de Cuentas Central', 'Puerta Eduardo, 5', 'Murcia', '75765', 'Baleares', '919494599', 'Técnico', 'Mares, Esquivel y Alcaraz Asociados', 'Mascotas', '2023-06-12 00:00:00', '2025-03-06 00:00:00', 'Graciela_TafoyaCarvajal84@hotmail.com', 'Enrique.EnriquezAmaya@hotmail.com', '$2b$10$eU4QN1JiBumuindWyifQiOotCefnu2IRqzhtdKhXQKZFxdW69weZK', '963-303-008', NULL, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(48, 'f3OeWu92qr', 'Villalpando Agosto', 'Julio César', '637940', '83575854I', 'TMA', '2007-02-28 00:00:00', 'H', 'Desarrollador de Mobilidad Futuro', 'Bloque Claudio 38', 'Granada', '94641', 'Navarra', '945-111-082', 'Director', 'Tórrez, Araña y Bueno Asociados', 'Informática', '2023-09-06 00:00:00', NULL, 'Maria_SalasArmas@gmail.com', 'Marcela_OrtegaBonilla@yahoo.com', '$2b$10$o7PWVEzKWaXNp/OaMBwbyur4hTvra0Kq1GdXfBhMcUBOEB6JHSsS6', '907.271.932', NULL, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(49, '6eE6N6T9fc', 'Serrano Apodaca', 'Carla', '386158', '52278739H', 'PTS', '2015-01-06 00:00:00', 'H', 'Analista de Programa Interno', 'Avenida Salvador, 5', 'Mérida', '46078', 'Baleares', '994 288 050', 'Especialista', 'Delao Arenas S.A.', 'Librería', '2023-11-16 00:00:00', NULL, 'Leticia59@gmail.com', 'Luz92@yahoo.com', '$2b$10$wGA2Xs9kXC8zmiqbynnlXu8KFtGF5.j513E3zKouXk.1AtqGn7/ui', '990-363-261', NULL, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(50, 'y12Q3EPBXt', 'Torres Preciado', 'Victoria', '643754', '07942387R', 'NIE', '2020-04-06 00:00:00', 'H', 'Facilitador de Programa Futuro', 'Rambla Mario 96', 'Valdemoro', '37482', 'Extremadura', '981-999-657', 'Especialista', 'Fonseca e Hijos', 'Deportes', '2023-12-10 00:00:00', NULL, 'Jacobo78@yahoo.com', 'Josep.PaganLoya@hotmail.com', '$2b$10$E..FKG.w6K4Qkmg7dyuxyOSdNqln4UtNdO1Mi8gVdsKFRdBkZK7W2', '947 737 970', NULL, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(51, 'eJRUhxaZiX', 'Palomo Delrío', 'Sergio', '515566', '45413460Q', 'IFW', '2006-04-15 00:00:00', 'H', 'Administrador de Cuentas Corporativo', 'Glorieta Cristóbal 78', 'Parla', '38921', 'Comunidad Valenciana', '921992776', 'Ingeniero', 'Montalvo S.L.', 'Música', '2022-01-29 00:00:00', NULL, 'Hermenegildo_AbreuLlamas@gmail.com', 'Jennifer_GaonaAlicea97@gmail.com', '$2b$10$RvfSnGImBsz9LUFWtSLR8OS6WvXH9l8JR0WT09IBdYGUZ.aTocnIy', '948704198', NULL, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_roles`
--

CREATE TABLE `users_roles` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users_roles`
--

INSERT INTO `users_roles` (`id`, `user_id`, `role_id`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 1, 1, '2025-03-07 07:43:41', '2025-03-07 07:43:41', NULL),
(2, 2, 2, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(3, 3, 8, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(4, 4, 10, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(5, 5, 7, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(6, 6, 2, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(7, 7, 5, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(8, 8, 9, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(9, 9, 2, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(10, 10, 2, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(11, 11, 4, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(12, 12, 7, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(13, 13, 3, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(14, 14, 6, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(15, 15, 7, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(16, 16, 5, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(17, 17, 8, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(18, 18, 2, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(19, 19, 9, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(20, 20, 8, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(21, 21, 9, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(22, 22, 9, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(23, 23, 10, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(24, 24, 10, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(25, 25, 3, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(26, 26, 6, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(27, 27, 6, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(28, 28, 8, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(29, 29, 10, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(30, 30, 5, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(31, 31, 8, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(32, 32, 5, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(33, 33, 3, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(34, 34, 9, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(35, 35, 4, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(36, 36, 2, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(37, 37, 2, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(38, 38, 5, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(39, 39, 4, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(40, 40, 8, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(41, 41, 3, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(42, 42, 9, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(43, 43, 3, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(44, 44, 5, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(45, 45, 9, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(46, 46, 8, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(47, 47, 3, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(48, 48, 5, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(49, 49, 9, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(50, 50, 10, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(51, 51, 8, '2025-03-07 07:43:43', '2025-03-07 07:43:43', NULL),
(52, 1, 2, '2025-03-07 07:50:28', '2025-03-07 07:50:28', NULL),
(53, 1, 3, '2025-03-07 07:50:28', '2025-03-07 07:50:28', NULL),
(54, 1, 4, '2025-03-07 07:50:28', '2025-03-07 07:50:28', '2025-03-07 07:52:14'),
(55, 1, 5, '2025-03-07 07:50:28', '2025-03-07 07:50:28', '2025-03-07 07:53:11'),
(56, 1, 6, '2025-03-07 07:50:28', '2025-03-07 07:50:28', NULL),
(57, 1, 7, '2025-03-07 07:50:28', '2025-03-07 07:50:28', '2025-03-07 07:53:25'),
(58, 1, 8, '2025-03-07 07:50:28', '2025-03-07 07:50:28', NULL),
(59, 1, 9, '2025-03-07 07:50:28', '2025-03-07 07:50:28', '2025-03-07 07:53:03'),
(60, 1, 10, '2025-03-07 07:50:28', '2025-03-07 07:50:28', '2025-03-07 07:53:08');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `abilities`
--
ALTER TABLE `abilities`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `abilities_roles`
--
ALTER TABLE `abilities_roles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_rol` (`id_rol`),
  ADD KEY `id_ability` (`id_ability`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `documents`
--
ALTER TABLE `documents`
  ADD PRIMARY KEY (`id`,`id_subcategory`),
  ADD KEY `id_subcategory` (`id_subcategory`);

--
-- Indices de la tabla `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `senderId` (`senderId`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `code` (`code`);

--
-- Indices de la tabla `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `subcategories`
--
ALTER TABLE `subcategories`
  ADD PRIMARY KEY (`id`,`id_category`),
  ADD KEY `id_category` (`id_category`);

--
-- Indices de la tabla `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `type` (`type`);

--
-- Indices de la tabla `task_documents`
--
ALTER TABLE `task_documents`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_task` (`id_task`),
  ADD KEY `id_document` (`id_document`);

--
-- Indices de la tabla `task_users`
--
ALTER TABLE `task_users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_task` (`id_task`),
  ADD KEY `id_user` (`id_user`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `code` (`code`),
  ADD UNIQUE KEY `dni` (`dni`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indices de la tabla `users_roles`
--
ALTER TABLE `users_roles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `role_id` (`role_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `abilities`
--
ALTER TABLE `abilities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT de la tabla `abilities_roles`
--
ALTER TABLE `abilities_roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=105;

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `documents`
--
ALTER TABLE `documents`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT de la tabla `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `subcategories`
--
ALTER TABLE `subcategories`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `task_documents`
--
ALTER TABLE `task_documents`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `task_users`
--
ALTER TABLE `task_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT de la tabla `users_roles`
--
ALTER TABLE `users_roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `abilities_roles`
--
ALTER TABLE `abilities_roles`
  ADD CONSTRAINT `abilities_roles_ibfk_1` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `abilities_roles_ibfk_2` FOREIGN KEY (`id_ability`) REFERENCES `abilities` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `documents`
--
ALTER TABLE `documents`
  ADD CONSTRAINT `documents_ibfk_1` FOREIGN KEY (`id_subcategory`) REFERENCES `subcategories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `messages_ibfk_2` FOREIGN KEY (`senderId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `subcategories`
--
ALTER TABLE `subcategories`
  ADD CONSTRAINT `subcategories_ibfk_1` FOREIGN KEY (`id_category`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `tasks_ibfk_1` FOREIGN KEY (`type`) REFERENCES `roles` (`id`);

--
-- Filtros para la tabla `task_documents`
--
ALTER TABLE `task_documents`
  ADD CONSTRAINT `task_documents_ibfk_1` FOREIGN KEY (`id_task`) REFERENCES `tasks` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `task_documents_ibfk_2` FOREIGN KEY (`id_document`) REFERENCES `documents` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `task_users`
--
ALTER TABLE `task_users`
  ADD CONSTRAINT `task_users_ibfk_1` FOREIGN KEY (`id_task`) REFERENCES `tasks` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `task_users_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `users_roles`
--
ALTER TABLE `users_roles`
  ADD CONSTRAINT `users_roles_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `users_roles_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
