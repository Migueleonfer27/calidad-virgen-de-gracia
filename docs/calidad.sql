-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-02-2025 a las 14:16:58
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
(1, 'Proceso de planificación estratégica', '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(2, 'Procesos de enseñanza y aprendizaje', '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(3, 'Procesos de gestión', '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(4, 'Proceso de medición y mejora', '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `code` varchar(255) NOT NULL,
  `year` int(11) NOT NULL,
  `position` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `code`, `year`, `position`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, '829389', 2025, 'ADMINISTRADOR', '2025-02-03 13:14:17', '2025-02-03 13:14:17', NULL),
(2, '526549', 2025, 'SECRETARIO/A', '2025-02-03 13:14:17', '2025-02-03 13:14:17', NULL),
(3, '455683', 2025, 'JEFE/A DE DEPARTAMENTO', '2025-02-03 13:14:17', '2025-02-03 13:14:17', NULL),
(4, '866579', 2025, 'JEFE/A DE ESTUDIOS ADJUNTO', '2025-02-03 13:14:17', '2025-02-03 13:14:17', NULL),
(5, '583653', 2025, 'JEFE/A TÉCNICO/A', '2025-02-03 13:14:17', '2025-02-03 13:14:17', NULL),
(6, '709055', 2025, 'COORDINADOR DE PREVENCIÓN', '2025-02-03 13:14:17', '2025-02-03 13:14:17', NULL),
(7, '250266', 2025, 'COORDINADOR/A DE FORMACIÓN Y TRANSFORMACIÓN DIGITAL', '2025-02-03 13:14:17', '2025-02-03 13:14:17', NULL),
(8, '88857', 2025, 'DIRECTOR/A', '2025-02-03 13:14:17', '2025-02-03 13:14:17', NULL),
(9, '231842', 2025, 'COORDINADOR/A DE AULA DE TECNOLOGÍA APLICADA', '2025-02-03 13:14:17', '2025-02-03 13:14:17', NULL),
(10, '918216', 2025, 'COORDINADOR/A DE AULA PROFESIONAL DE EMPRENDIMIENTO', '2025-02-03 13:14:17', '2025-02-03 13:14:17', NULL);

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
('20250125103608-create-subcategory.cjs');

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
(1, 'Dirección y comunicación (DYC)', 1, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(2, 'Actividades de aula (ACT)', 2, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(3, 'Evaluación (EVA)', 2, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(4, 'Formación Empresas (FEM)', 2, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(5, 'Orientación (ORI)', 2, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(6, 'Programación (PROG)', 2, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(7, 'Tutoría (TUT)', 2, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(8, 'Prevención de riesgos laborales (PRL)', 3, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(9, 'Recursos Humanos (RRHH)', 3, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(10, 'Recursos materiales (RMAT)', 3, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(11, 'Auditorías', 4, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(12, 'Memorias anuales', 4, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(13, 'Registros de control', 4, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(14, 'SQRs (Sugerencias, Quejas y Reclamaciones)', 4, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL);

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
(1, 'A001', 'User', 'Admin', 'NRP001', '12345678A', 'ADM', '1980-01-01 00:00:00', 'O', 'Admin', '123 Admin Street', 'Admin City', '12345', 'Admin Province', '987654321', 'Admin Specialty', 'Admin Body', 'Admin Department', '2000-01-01 00:00:00', NULL, 'jaime.ornu@gmail.com', 'calidad.nodemailer@gmail.com', '$2b$10$be.2gln3yQJMFUCPNuZAseNWtdez/Q6Uk4kGnjj6lxCMOGS7ehqUS', '123456789', NULL, '2025-02-03 13:14:17', '2025-02-03 13:14:17', NULL),
(2, 'pQAeqxdrpu', 'Guardado Berríos', 'Irene', '558753', '70120888V', 'YZP', '1998-11-27 00:00:00', 'H', 'Funcionario de Métricas Global', 'Grupo Federico, 1', 'Almería', '01751', 'Andalucía', '973166925', 'Facilitador', 'Granados y Zúñiga', 'Electrónica', '2020-03-05 00:00:00', NULL, 'Norma_ToroAbeyta@hotmail.com', 'Ana.TrejoLara@hotmail.com', '$2b$10$fRU6XjmuGbaK2eQwuXRT7e/ftFwjXYuM8FlgjPJdtp5TOMcH8e3GO', '955 147 290', NULL, '2025-02-03 13:14:17', '2025-02-03 13:14:17', NULL),
(3, 'sKlBm97Xie', 'Padilla Benavídez', 'Antonia', '017624', '23110319F', 'DAV', '2007-12-21 00:00:00', 'O', 'Productor de Programa Inversor', 'Rua Carla, 55', 'Dos Hermanas', '90954', 'Cataluña', '992778377', 'Consultor', 'Agosto y Espinosa de los Monteros', 'Librería', '2022-01-21 00:00:00', NULL, 'Gabriela_VillaGalindo@hotmail.com', 'Elsa_MontezCovarrubias32@gmail.com', '$2b$10$a4n3qJO13N/Fr0F7tV7InOoFRyArN2S7M/VNX8F72STANMIo7EW9i', '985 644 452', NULL, '2025-02-03 13:14:17', '2025-02-03 13:14:17', NULL),
(4, 'weEbiSoIja', 'Ortiz Regalado', 'Santiago', '600380', '70466778O', 'AON', '2003-03-09 00:00:00', 'O', 'Ejecutivo de Seguro Humano', 'Manzana Mercedes Escamilla 41', 'Parla', '92455', 'Castilla-La Mancha', '942 187 558', 'Consultor', 'Escamilla, Palacios y Delarosa Asociados', 'Librería', '2021-09-16 00:00:00', NULL, 'JulioCesar_FonsecaPerea@yahoo.com', 'Claudia_MataBarragan31@yahoo.com', '$2b$10$ImKmh7XnDsrQoeHs4k7syeV6iE7CY7daDJ6ZzU1D3VSSQ1Szn4yci', '987.323.944', NULL, '2025-02-03 13:14:17', '2025-02-03 13:14:17', NULL),
(5, '4tfsEReGWP', 'Fierro Flores', 'Guillermina', '282834', '89613546G', 'MCR', '2023-05-19 00:00:00', 'M', 'Diseñador de Creativo Central', 'Riera Matilde s/n.', 'Madrid', '87390', 'Aragón', '982.469.765', 'Asistente', 'Serna Llamas Hermanos', 'Hogar', '2023-07-28 00:00:00', NULL, 'Manuela.SevillaMayorga@yahoo.com', 'Dolores_CaraballoTamez35@gmail.com', '$2b$10$pCF37UGFgDXkXXiLtzn06uD7v6fXugilcdPAwSIxLDs3BAgl34BTO', '985-248-740', NULL, '2025-02-03 13:14:17', '2025-02-03 13:14:17', NULL),
(6, 'acHUzrjzyD', 'Serrato Olivárez', 'Anita', '396273', '70433977H', 'UUH', '2019-07-16 00:00:00', 'H', 'Gerente de Seguro Regional', 'Explanada Iván, 2', 'El Prat de LLobregat', '12465', 'Canarias', '958-461-138', 'Consultor', 'Toledo Hermanos', 'Mascotas', '2020-11-23 00:00:00', '2025-02-03 00:00:00', 'Isabela1@hotmail.com', 'Leticia25@gmail.com', '$2b$10$fWhMTEA6w0czb5dPjODdn.BiDDSOb1OLi1TTBV8TJJp6kEJ0qZC.2', '926420162', NULL, '2025-02-03 13:14:17', '2025-02-03 13:14:17', NULL),
(7, '9X3dD3ilRe', 'Alonzo Gómez', 'Luis', '877868', '08882426D', 'EQQ', '1999-05-16 00:00:00', 'M', 'Planificador de Investigación Distrito', 'Parque Jennifer s/n.', 'Vigo', '42944', 'Castilla-La Mancha', '900.097.194', 'Arquitecto', 'Aparicio y Mayorga', 'Electrónica', '2020-04-26 00:00:00', NULL, 'Martin.NinoMuniz56@gmail.com', 'MariadelosAngeles14@gmail.com', '$2b$10$jp0ClESBLRGJ4iui6XrppuvgKal1BGlgr9oEF.I/1PBbLAzKed/S.', '962 603 790', NULL, '2025-02-03 13:14:17', '2025-02-03 13:14:17', NULL),
(8, 'xfvgBnscBp', 'Limón Delafuente', 'José', '355514', '70097823B', 'LIU', '2023-02-14 00:00:00', 'M', 'Funcionario de Marketing Directo', 'Vía Pablo Bahena 66', 'Torrelavega', '64905', 'Aragón', '969.083.200', 'Supervisor', 'Colunga, Arce y Armenta Asociados', 'Moda', '2023-04-01 00:00:00', NULL, 'Eloisa41@yahoo.com', 'JoseLuis_MascarenasAlejandro@hotmail.com', '$2b$10$WiEGX4diVezd2g2sPXF7RuQnVdnxjO6X50UAXLbM./uPCl3KUBPxe', '930421561', NULL, '2025-02-03 13:14:17', '2025-02-03 13:14:17', NULL),
(9, 'SdBiObSa3f', 'Lemus Holguín', 'María Eugenia', '681280', '42768638B', 'MPQ', '2016-11-23 00:00:00', 'M', 'Administrador de Aplicaciones Jefe', 'Riera Ignacio, 14', 'Mollet del Vallés', '58701', 'Aragón', '968-983-671', 'Especialista', 'Melgar y Casares', 'Bebes', '2024-03-02 00:00:00', NULL, 'Margarita_GarciaCruz39@yahoo.com', 'German_LermaDuran@hotmail.com', '$2b$10$0Tj6yatkNvoOpYKzGS.XBeLZNdpXiA98aB3OA.a3FOpIqOgGt4mG.', '966.858.830', NULL, '2025-02-03 13:14:17', '2025-02-03 13:14:17', NULL),
(10, 'BGmGOfsyyw', 'Romo Delgadillo', 'María Luisa', '939760', '20066807X', 'OHM', '1998-11-22 00:00:00', 'O', 'Coordinador de Marca Directo', 'Manzana Esperanza 1', 'Alicante', '61728', 'Andalucía', '967.542.766', 'Supervisor', 'Álvarez S.L.', 'Librería', '2021-09-17 00:00:00', NULL, 'Diana41@gmail.com', 'JoseMaria_CeballosVillarreal23@gmail.com', '$2b$10$L//R61CKr9YFo2dJaBkHhefrQ9Hl/SsNdyvMssJK4GHs35HGhFSja', '940547406', NULL, '2025-02-03 13:14:17', '2025-02-03 13:14:17', NULL),
(11, '6cwcuGbDxM', 'Montéz Espinoza', 'María Elena', '779650', '25332772O', 'RUX', '2001-02-18 00:00:00', 'O', 'Especialista de Seguridada Gerente', 'Paseo María Elena 82', 'Guadalajara', '56678', 'Navarra', '979-097-669', 'Director', 'Farías, Farías y Carrillo Asociados', 'Hogar', '2022-10-07 00:00:00', NULL, 'Daniel90@hotmail.com', 'AnaMaria27@hotmail.com', '$2b$10$HTh/WsG79TZowj/yXPPY6uxHq..HUMMV7mRAg8hbbfyu62zbtL3oO', '973743567', NULL, '2025-02-03 13:14:17', '2025-02-03 13:14:17', NULL),
(12, '78UzDHrddp', 'Matos Roybal', 'Jacobo', '984140', '23383893J', 'ZSI', '2006-07-27 00:00:00', 'H', 'Especialista de Programa Central', 'Muelle Pío Muñoz s/n.', 'El Puerto de Santa María', '49856', 'Galicia', '950 465 183', 'Coordinador', 'Carrero Merino S.L.', 'Videojuegos', '2023-07-19 00:00:00', NULL, 'Cristian.BahenaBarragan22@gmail.com', 'Gregorio_AlcarazVelasco@yahoo.com', '$2b$10$R/FeYoAwV/PjjXJUZ8F7EujfLwJCM4NDOqzivq86OM6Kiu5y8VnV6', '906-789-578', NULL, '2025-02-03 13:14:17', '2025-02-03 13:14:17', NULL),
(13, 'WMueqBysdH', 'Merino Matías', 'Carlos', '142055', '03055099V', 'QVQ', '2011-05-26 00:00:00', 'O', 'Arquitecto de División Distrito', 'Apartamento Guillermina Santillán 1', 'Gecho', '52337', 'Comunidad de Madrid', '912-097-893', 'Estratega', 'Meza Aguilera Hermanos', 'Parafarmacia', '2021-07-14 00:00:00', NULL, 'Felipe43@gmail.com', 'Susana.GamezLoera67@yahoo.com', '$2b$10$ruZd8UFK0u412ximMLXmKeCx7WCkpKT7/OTvJedqK5aQiJm9bZRuq', '903548285', NULL, '2025-02-03 13:14:17', '2025-02-03 13:14:17', NULL),
(14, 'TaLj45apRv', 'Valdés Morales', 'Elisa', '451038', '71068064A', 'VTN', '2016-07-18 00:00:00', 'M', 'Especialista de Comunicaciones Directo', 'Arrabal Ana María Pedraza 16', 'Calahorra', '64149', 'Cataluña', '996 842 012', 'Técnico', 'Cervantes e Hijos', 'Música', '2021-11-04 00:00:00', NULL, 'MariaSoledad90@hotmail.com', 'Teodoro_ValleGutierrez86@hotmail.com', '$2b$10$bwfoq08Bi.vID1kuNiPgNeWjdWJn0CYjvwotWs.AQ8EyFcD//sLuC', '990.687.945', NULL, '2025-02-03 13:14:17', '2025-02-03 13:14:17', NULL),
(15, 'h7R2f11aj5', 'Nazario Orellana', 'Mercedes', '161010', '31117620Z', 'ODZ', '2014-12-18 00:00:00', 'O', 'Administrador de Respuesta Heredado', 'Extrarradio Cristián Tirado s/n.', 'Córdoba', '60022', 'Región de Murcia', '934 410 219', 'Coordinador', 'Murillo Salazar S.A.', 'Decoración', '2022-02-18 00:00:00', '2025-02-02 00:00:00', 'Raquel.BravoMaestas69@gmail.com', 'Leticia.EsquiveldeAnda74@hotmail.com', '$2b$10$tNmT3DGyd/5evm/vlxXt5uymHNW.qm2dm4C5810KdXc90wIxy6oz6', '924.524.048', NULL, '2025-02-03 13:14:18', '2025-02-03 13:14:18', NULL),
(16, '3Vkrtwo589', 'Meza Medina', 'Óscar', '039148', '46327627K', 'PQB', '2014-07-27 00:00:00', 'M', 'Desarrollador de Intranet International', 'Carretera Lilia, 78', 'Móstoles', '39645', 'Galicia', '958-906-748', 'Gerente', 'Paredes Gallardo S.A.', 'Música', '2023-05-13 00:00:00', NULL, 'Silvia9@gmail.com', 'Estela_OlveraDelagarza@hotmail.com', '$2b$10$wZn7VS7fXnW1iTDWCy6lee4bqDa1xzKlYtJ3.Maa7N8e.HyOZOja6', '964-755-339', NULL, '2025-02-03 13:14:18', '2025-02-03 13:14:18', NULL),
(17, 'wgNTkZ0ji4', 'Dueñas Fuentes', 'Miguel', '898643', '16946612C', 'JJN', '2003-01-29 00:00:00', 'H', 'Analista de Interacciones Nacional', 'Urbanización Javier Cadena 99', 'Santa Lucía de Tirajana', '76427', 'Castilla y León', '997.802.454', 'Relacciones', 'Grijalva Lugo e Hijos', 'Cine', '2024-11-23 00:00:00', NULL, 'Patricio.SolanoArce@gmail.com', 'Marilu67@hotmail.com', '$2b$10$oUgFjL8h8ZUc6uyOTZQXhOZt8Lmo7YELn3nR4T24NrlUU1xVeruwy', '948-940-519', NULL, '2025-02-03 13:14:18', '2025-02-03 13:14:18', NULL),
(18, 'sCaAbYpl85', 'Zarate Alarcón', 'Marcela', '891795', '91268343P', 'YNP', '2024-11-04 00:00:00', 'O', 'Analista de Operaciones Global', 'Mercado Manuel s/n.', 'San Fernando', '67847', 'Región de Murcia', '942.448.489', 'Planificador', 'Griego Carrasco e Hijos', 'Papelería', '2023-02-02 00:00:00', NULL, 'Julia_LomeliCalvillo13@yahoo.com', 'Martin_BarretoMonroy3@yahoo.com', '$2b$10$ObTKg/ermaH0M4D.9pAIqOOffRGqo/yIvGcNoGMIqgS2v876R2t1i', '950-360-838', NULL, '2025-02-03 13:14:18', '2025-02-03 13:14:18', NULL),
(19, 'qJkpSungRT', 'Valenzuela Delatorre', 'Mónica', '500638', '38890750V', 'MDB', '2001-03-17 00:00:00', 'O', 'Analista de Integración Adelante', 'Cuesta Cristina Burgos 14', 'Almería', '06379', 'Comunidad Valenciana', '923 431 171', 'Coordinador', 'Véliz y Carrasco', 'Videojuegos', '2023-08-08 00:00:00', NULL, 'Emilio_DavilaYbarra4@yahoo.com', 'Santiago93@yahoo.com', '$2b$10$jWTWshwRtZs5UPHorUqspu69nKUZQWux3tim3LiTgqMrv6ROWkWqy', '971328514', NULL, '2025-02-03 13:14:18', '2025-02-03 13:14:18', NULL),
(20, 'c24bO99e9h', 'Verduzco Naranjo', 'Fernando', '844489', '89910517F', 'JWY', '2015-07-26 00:00:00', 'M', 'Supervisor de Seguridada Adelante', 'Barranco María, 41', 'Zaragoza', '60368', 'Región de Murcia', '985-041-594', 'Supervisor', 'Páez Henríquez S.A.', 'Joyería', '2024-10-09 00:00:00', NULL, 'Dorotea.OlmosSuarez@yahoo.com', 'Jeronimo_HinojosaRendon@hotmail.com', '$2b$10$yozo62AulE0vgUMR4fdwgugOLIXz926wgnobTc5oTn9RWVcpODa9K', '998.291.983', NULL, '2025-02-03 13:14:18', '2025-02-03 13:14:18', NULL),
(21, 'z5u3MYePVp', 'Maestas Tafoya', 'Silvia', '772137', '38840154H', 'EQK', '1998-12-01 00:00:00', 'M', 'Productor de Contabilidad Dinánmico', 'Muelle Alicia Lebrón, 22', 'Sanlúcar de Barrameda', '33251', 'Galicia', '939 322 633', 'Técnico', 'Vaca e Hijos', 'Mascotas', '2025-01-22 00:00:00', NULL, 'Catalina56@yahoo.com', 'Lorenzo.SierraVega8@yahoo.com', '$2b$10$YTFf4TQr0KxhHc.jipk7sOpjl84RKYzx0ZnvAdc6Qhm./j3Ay/dGO', '900-655-380', NULL, '2025-02-03 13:14:18', '2025-02-03 13:14:18', NULL),
(22, 'AUGXgaOmk6', 'Vélez Mojica', 'Nicolás', '331344', '78636036M', 'RXN', '2000-05-12 00:00:00', 'H', 'Agente de Cuentas Cliente', 'Colonia Juan Sosa, 3', 'Granada', '66506', 'Andalucía', '936 895 808', 'Especialista', 'Téllez y Ureña', 'Música', '2022-08-29 00:00:00', NULL, 'Adela.AragonValle@yahoo.com', 'Micaela_SantacruzPena@yahoo.com', '$2b$10$JdIlHDidgpAESd1tTRPCi.43ubeNk26smLDpKES/UqUXPcPuu2qGC', '983583157', NULL, '2025-02-03 13:14:18', '2025-02-03 13:14:18', NULL),
(23, 'koLobSixig', 'Armas Meraz', 'Virginia', '330192', '24452501K', 'UZA', '2022-05-11 00:00:00', 'M', 'Supervisor de Identidad Nacional', 'Subida Guadalupe s/n.', 'San Fernando', '04679', 'Comunidad de Madrid', '937 145 552', 'Analista', 'Arteaga Hermanos', 'Mascotas', '2025-01-08 00:00:00', NULL, 'David_ArenasTerrazas@hotmail.com', 'German48@hotmail.com', '$2b$10$Y1LkzQdsYwsGSDn.WMcqrOn.Yk0Jmq5gYAWabYA9xQYjxIFVjqKli', '939.004.611', NULL, '2025-02-03 13:14:18', '2025-02-03 13:14:18', NULL),
(24, 'VccuS0uKpJ', 'Alfaro Tello', 'José María', '884113', '82691394W', 'LCV', '2013-10-05 00:00:00', 'M', 'Diseñador de Seguro International', 'Carretera Carlos, 74', 'Manresa', '00544', 'Principado de Asturias', '965238255', 'Agente', 'Cuellar y Ozuna', 'Bebes', '2024-10-02 00:00:00', '2025-02-03 00:00:00', 'JoseEmilio8@hotmail.com', 'Juan96@hotmail.com', '$2b$10$dnBqdFZE3nYGuSxDedgvt.svmJKQBuQMw3EreKisUJQHsVGw0kbYe', '976 603 837', NULL, '2025-02-03 13:14:18', '2025-02-03 13:14:18', NULL),
(25, '1UipUJ2lbK', 'Muñoz Sedillo', 'Ana', '513695', '30454980N', 'DFB', '2021-12-10 00:00:00', 'O', 'Planificador de Tácticas Dinánmico', 'Prolongación Marilú 4', 'Gecho', '39308', 'Comunidad de Madrid', '922.845.003', 'Asociado', 'Olivo S.L.', 'Bricolaje', '2025-01-24 00:00:00', NULL, 'Miguel.CalderonLlamas90@yahoo.com', 'Dolores_OlivoValles60@gmail.com', '$2b$10$g.KMThh7hNyXfG5heG3/W.jwptf.M3X5PINJ.PgPiKI1.g5iOkQ2K', '994 169 562', NULL, '2025-02-03 13:14:18', '2025-02-03 13:14:18', NULL),
(26, 'NDfdthJEkR', 'Nieto Mora', 'Clara', '566701', '54321567T', 'EDA', '2010-05-30 00:00:00', 'H', 'Coordinador de Tácticas Interno', 'Terrenos Antonio Rolón, 9', 'Hospitalet de LLobregat', '95250', 'Baleares', '981-362-046', 'Analista', 'Rosas S.A.', 'Informática', '2020-10-14 00:00:00', NULL, 'Cristobal39@yahoo.com', 'Patricio_OrozcoGuerra47@gmail.com', '$2b$10$zqDaaaE9t12zSyus1WxTOOD9WUscx8Vy0yhtsQgOQ/Q7ZaVi28F02', '997-821-823', NULL, '2025-02-03 13:14:18', '2025-02-03 13:14:18', NULL),
(27, 'dJ4B5AA8Bg', 'Rivera Montemayor', 'Antonia', '971676', '39559777P', 'XWT', '2007-03-23 00:00:00', 'O', 'Técnico de Optimización Futuro', 'Calle Emilia 29', 'Linares', '54044', 'Andalucía', '913-309-741', 'Analista', 'Hinojosa Miranda S.A.', 'Bricolaje', '2022-02-10 00:00:00', NULL, 'Rocio.AguayoZamudio18@gmail.com', 'Ramona.SegoviaZayas@hotmail.com', '$2b$10$JwU6Wx.xPLsUQaAZ0kxgoeNU3j7mrOZk7EIscN.vQF5alyxScwgpW', '977-829-430', NULL, '2025-02-03 13:14:18', '2025-02-03 13:14:18', NULL),
(28, '6wAX1uwzka', 'Figueroa Lozano', 'Vicente', '430156', '33335308W', 'ZVQ', '2009-09-18 00:00:00', 'O', 'Desarrollador de Funcionalidad Cliente', 'Aldea Patricio Escamilla, 2', 'Paterna', '49699', 'Andalucía', '943-026-595', 'Ingeniero', 'Maya y Moreno', 'Música', '2023-02-18 00:00:00', NULL, 'JoseMaria.GranadosVanegas23@gmail.com', 'Ana49@yahoo.com', '$2b$10$fZmI6719FPgty/tXXVCU1uddIy2gkRTRnlONiw0M7WsJfH9Uob4nu', '970.576.149', NULL, '2025-02-03 13:14:18', '2025-02-03 13:14:18', NULL),
(29, 'Up50rJjPyz', 'Regalado Moya', 'Graciela', '639723', '77985096M', 'PAD', '2024-10-01 00:00:00', 'M', 'Gerente de Tácticas Dinánmico', 'Rua Carmen, 1', 'Vitoria', '62112', 'Canarias', '905.244.031', 'Administrador', 'Sierra y Durán', 'Parafarmacia', '2023-10-31 00:00:00', NULL, 'Roberto.QuintanillaAngulo36@hotmail.com', 'Fernando_LeyvaLopez82@hotmail.com', '$2b$10$cWPLVOeEC2Y2GfOUTWP8k.YOd5c1FUqTYktceOyw1O4WSS4NKsmC2', '963695428', NULL, '2025-02-03 13:14:18', '2025-02-03 13:14:18', NULL),
(30, 'J5BJudDp2s', 'Sierra Alcaraz', 'Débora', '459520', '93428090P', 'FWI', '2019-02-15 00:00:00', 'H', 'Planificador de Configuración Central', 'Bajada Roser Flores, 5', 'Chiclana de la Frontera', '26367', 'La Rioja', '932189456', 'Técnico', 'Ozuna S.L.', 'Papelería', '2023-07-26 00:00:00', NULL, 'JoseEduardo_ValentinOcasio@hotmail.com', 'Eloisa71@hotmail.com', '$2b$10$KBDLEwkYHVvdsH0UaWTsRObCSsGCTDBLeRcnB/WYihiLWUk/ciLo2', '928-886-615', NULL, '2025-02-03 13:14:18', '2025-02-03 13:14:18', NULL),
(31, 'DAsvjJb75j', 'Salas Trujillo', 'Jorge Luis', '360959', '76005480J', 'ZRQ', '2010-08-06 00:00:00', 'M', 'Planificador de Programa Dinánmico', 'Rampa Norma Palomo 77', 'Lugo', '41650', 'Aragón', '924-537-868', 'Administrador', 'Mares e Hijos', 'Decoración', '2020-12-09 00:00:00', NULL, 'Jordi_RosadoSauceda52@gmail.com', 'Sara73@hotmail.com', '$2b$10$vTCuP.Smtn2kLLCsuWkslul2Trcs3z..K6HEjqB/DCa9Dho4dVimS', '957 808 679', NULL, '2025-02-03 13:14:18', '2025-02-03 13:14:18', NULL),
(32, 'u6ngaCUYkN', 'Narváez Balderas', 'Roser', '128771', '56018089F', 'ENX', '2010-04-26 00:00:00', 'O', 'Coordinador de Funcionalidad Heredado', 'Colonia Fernando Gómez s/n.', 'Getafe', '96699', 'Aragón', '933950961', 'Director', 'Esquibel S.A.', 'Librería', '2021-08-07 00:00:00', NULL, 'Rafael.MarreroUribe@gmail.com', 'JoseEduardo23@yahoo.com', '$2b$10$cu0pN3ZHm7S/kVufWvQ8Ke1vW301nLaGJcnSDkoJszlQ1bm0UDyIq', '912.789.948', NULL, '2025-02-03 13:14:18', '2025-02-03 13:14:18', NULL),
(33, 'UOkUmWhG6R', 'Nieves Angulo', 'Julio César', '355932', '51438528N', 'IKD', '2019-08-19 00:00:00', 'M', 'Productor de Operaciones Corporativo', 'Barranco Cristián s/n.', 'Paterna', '07251', 'Cantabria', '957 416 650', 'Asociado', 'Venegas y Véliz', 'Electrónica', '2021-05-24 00:00:00', NULL, 'Veronica96@yahoo.com', 'Salvador_OrtaOrnelas15@gmail.com', '$2b$10$3q.q6lHS9IiLkGIeZlQDOeCaYgEwepM57Px0fioXIPdDpb2eB4iWa', '985-626-632', NULL, '2025-02-03 13:14:18', '2025-02-03 13:14:18', NULL),
(34, 'wBqOT1tQn5', 'Saucedo Saldivar', 'Reina', '717345', '65173854M', 'MYS', '2000-11-20 00:00:00', 'H', 'Productor de Investigación Heredado', 'Paseo Natalia Casanova, 8', 'Jerez de la Frontera', '01519', 'Extremadura', '955 885 943', 'Administrador', 'de Jesús, Hurtado y Tello Asociados', 'Bricolaje', '2024-06-10 00:00:00', NULL, 'MariadelosAngeles_TejadaMondragon@gmail.com', 'Ramon56@yahoo.com', '$2b$10$aMTWJhxMm0l8fymzbYYBveNyoJtgztZzOFKY5On9kUeHFMCeQzpYu', '973 539 774', NULL, '2025-02-03 13:14:18', '2025-02-03 13:14:18', NULL),
(35, '4geIfJqjfr', 'Treviño Montemayor', 'Marcos', '374016', '05677177B', 'ZXR', '2021-08-14 00:00:00', 'O', 'Especialista de Optimización Central', 'Barranco Débora Batista s/n.', 'Estepona', '99035', 'Comunidad de Madrid', '921 912 115', 'Administrador', 'Olivera Alicea S.L.', 'Hogar', '2024-06-21 00:00:00', NULL, 'Jennifer.BalderasCortes@yahoo.com', 'Berta_LozanoGaribay@yahoo.com', '$2b$10$bE6Zyzj88OPVXIMT93azeuxQs.WDMNDS7ZC8j5ukQZ.SLKTmFXEre', '991709366', NULL, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(36, 'm6FnClLYRC', 'Montoya Villalpando', 'Lorena', '006759', '25562160W', 'AIX', '2003-07-07 00:00:00', 'O', 'Asociado de Intranet Nacional', 'Vía Raúl Rivera s/n.', 'Santiago de Compostela', '25310', 'Comunidad Valenciana', '994.232.624', 'Funcionario', 'Roybal y Dueñas', 'Informática', '2022-08-25 00:00:00', NULL, 'Hermenegildo.CarrionMascarenas21@hotmail.com', 'Julia_FelicianoValladares@gmail.com', '$2b$10$GJWyoMGyV8Nt2FW3nT5vru1wsgmGGHMpUWqGhxeigt1I5hXNOfgwm', '968-850-060', NULL, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(37, 'nGTQBWuDwr', 'Baca Sáenz', 'Margarita', '298607', '10865330O', 'NHN', '2005-03-31 00:00:00', 'O', 'Productor de Seguridada Interno', 'Bloque María, 3', 'Irún', '20344', 'Principado de Asturias', '999467895', 'Desarrollador', 'Mercado, Aponte y Delgado Asociados', 'Librería', '2023-09-25 00:00:00', NULL, 'Horacio.MelendezOsorio82@hotmail.com', 'Gloria.MirelesCenteno25@hotmail.com', '$2b$10$FEUD57fabh4gfYJEjt/bvuejhS7vB48xOFnyleNp8NKj2uqnuvp5.', '919833103', NULL, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(38, 'IIPDzQ2VX5', 'Ulibarri Gracia', 'Alfonso', '366385', '81356305E', 'NID', '2000-02-28 00:00:00', 'O', 'Relacciones de Intranet Nacional', 'Barrio María Eugenia Balderas, 2', 'Dos Hermanas', '90886', 'Comunidad Valenciana', '920250479', 'Planificador', 'Vélez Ocasio S.L.', 'Juguetería', '2024-08-15 00:00:00', NULL, 'Ester.BarajasZepeda@gmail.com', 'Elena.EscamillaCasanova@hotmail.com', '$2b$10$mAz2qdO5Ax826z.oYif9R.c1JlEiqvOSvlJWJvJ8VuxuuxFS9Z7I.', '912 018 826', NULL, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(39, 'TZnPuPFZpu', 'Santillán Hinojosa', 'Gabriel', '952746', '50214643O', 'HEF', '2017-10-18 00:00:00', 'H', 'Planificador de Soluciones International', 'Escalinata Marisol Garica s/n.', 'Rivas-Vaciamadrid', '28464', 'Cantabria', '951841172', 'Ingeniero', 'Lucero y Carvajal', 'Deportes', '2021-08-26 00:00:00', '2025-02-02 00:00:00', 'MariaJose.EstevezLovato29@gmail.com', 'Manuela_GaribayAlcala@yahoo.com', '$2b$10$S9Z9xLSlaDa3Hs4yLKzB0eS2vA2aeYUsB8pLJeejQGFZg9gvLjpiW', '939091013', NULL, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(40, 'dUsHZ3bi1z', 'Adorno Razo', 'Isabel', '202018', '07929258J', 'VLD', '2019-05-31 00:00:00', 'O', 'Representante de Investigación Gerente', 'Ronda Lucía 3', 'Las Palmas de Gran Canaria', '73495', 'Comunidad Valenciana', '949804038', 'Desarrollador', 'Ávalos, Narváez y Morales Asociados', 'Videojuegos', '2024-01-24 00:00:00', NULL, 'Adriana.CintronMontenegro@hotmail.com', 'Felipe69@hotmail.com', '$2b$10$Xc6AHdgGaxmyPf/vJGaAxek8ic36N987tjvGNDwgaFqI5FT/9JDky', '995-103-231', NULL, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(41, '1euUDKqaKA', 'Nava Santiago', 'Pío', '233177', '11703431N', 'OCD', '2008-01-23 00:00:00', 'H', 'Productor de Contabilidad Gerente', 'Escalinata Hugo Amaya 62', 'Mollet del Vallés', '62910', 'La Rioja', '906-834-774', 'Facilitador', 'Salgado y Gallardo', 'Joyería', '2022-10-20 00:00:00', '2025-02-02 00:00:00', 'MariaJose_SevillaRamirez62@hotmail.com', 'Mayte.MontesCruz@hotmail.com', '$2b$10$s6wqZkvu9YAVOZV3DgePneSMZTx/gsxUyZKLLXhz9d/LUUrGW2/.i', '901.130.146', NULL, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(42, 'W9OxNDPqFJ', 'Palomo Lemus', 'Carlos', '148371', '32923203O', 'XOO', '1995-08-21 00:00:00', 'H', 'Gerente de Configuración Interno', 'Extrarradio Lilia Farías 59', 'León', '48410', 'Castilla-La Mancha', '920.044.904', 'Diseñador', 'Santillán Carreón S.L.', 'Librería', '2021-08-03 00:00:00', NULL, 'Carlos98@yahoo.com', 'Veronica_GironPacheco@yahoo.com', '$2b$10$.0/ZrX8B3npY5qwAm1SLFO/UO4D32Ty9XKEtqUjPIJsQxZnrQNxWi', '957609145', NULL, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(43, '4AbAyidfa0', 'Cerda Marrero', 'Jacobo', '998190', '44101017B', 'SQL', '2000-12-08 00:00:00', 'H', 'Agente de Programa Central', 'Extrarradio Sergi, 8', 'Lorca', '84036', 'Andalucía', '914126890', 'Administrador', 'Núñez, Valentín y Mejía Asociados', 'Marroquinería', '2024-10-12 00:00:00', NULL, 'Monica68@gmail.com', 'Alberto34@hotmail.com', '$2b$10$oC9IX0s1rd0LTJu417H60.7Y/WX1YpTYU5F/ltGjK2JcOM0Y62ud6', '952 209 105', NULL, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(44, '9hRTcZj5kr', 'Torres Alejandro', 'Armando', '270871', '59851368G', 'LCH', '2018-11-22 00:00:00', 'M', 'Administrador de Tácticas Humano', 'Bloque Emilia Altamirano 79', 'Manresa', '27956', 'Andalucía', '968283768', 'Facilitador', 'Piña e Hijos', 'Papelería', '2022-01-13 00:00:00', NULL, 'Dolores.MelgarSolorio62@yahoo.com', 'Raul.LaureanoSalas@hotmail.com', '$2b$10$ZPa446pTpL0r9MV.Ca7AUeJLzFIFqrdRL0L6KeMyawKj2Q3o6WAtO', '938285277', NULL, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(45, 'F6jXvSF1ah', 'Lira Alfaro', 'Alfredo', '495488', '83496655L', 'LOR', '2016-04-24 00:00:00', 'M', 'Coordinador de Integración Senior', 'Explanada Gregorio Gámez s/n.', 'Benalmádena', '93085', 'Castilla-La Mancha', '901.314.053', 'Representante', 'Farías Bahena S.A.', 'Librería', '2020-05-02 00:00:00', '2025-02-02 00:00:00', 'Nicolas_OlivaresPadron12@yahoo.com', 'Adan.RiveraArias@hotmail.com', '$2b$10$qhz2xMPc0xiCiFJ3rX3/4.qxJpEcHnYV6DrRQo2RB3ebf7tPoSogS', '982049648', NULL, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(46, 'EMDcsM7h6h', 'Armijo Espinosa de los Monteros', 'Rodrigo', '137270', '69017781E', 'KPQ', '2000-11-26 00:00:00', 'M', 'Representante de Usabilidad Distrito', 'Prolongación Ana, 45', 'Ávila', '20773', 'Cantabria', '985.627.924', 'Oficial', 'Uribe y Montañez', 'Papelería', '2024-07-17 00:00:00', NULL, 'Daniela_PortilloRocha24@hotmail.com', 'Julia.CarrionSanabria62@gmail.com', '$2b$10$fwZx9fIxwLbavbwvXWDILuPKxxdv49WwcqpUx96Im7Dobw.2GGAq6', '913559331', NULL, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(47, 'dhb8CtHP9i', 'Betancourt Perales', 'Sonia', '537184', '77709072G', 'GCJ', '2022-07-24 00:00:00', 'O', 'Director de Configuración Adelante', 'Mercado Vicente Cortés, 56', 'Alcalá de Guadaira', '72287', 'Cantabria', '978.701.457', 'Administrador', 'Carreón e Hijos', 'Parafarmacia', '2020-05-18 00:00:00', NULL, 'Esteban.SaldivarOlivera@yahoo.com', 'Raul_AlcalaOcasio4@gmail.com', '$2b$10$q5sAZUtIxWFlWF8JTCeUHuB1CM1tolhZJ0GNGgITYna3Lr1k1SFmy', '981 776 174', NULL, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(48, 'N8AOqJQySN', 'Villa Arriaga', 'José Eduardo', '283426', '10733627M', 'QTG', '2021-04-07 00:00:00', 'M', 'Desarrollador de Contabilidad Director', 'Rampa Mónica, 6', 'Salamanca', '12913', 'Cantabria', '999707774', 'Estratega', 'Figueroa S.A.', 'Electrónica', '2021-06-28 00:00:00', NULL, 'Carlos.CarmonaPabon89@gmail.com', 'JoseLuis39@yahoo.com', '$2b$10$WpsETR6AY/KEfLyebssQEOEw/Xap5HUvbiu3RUl6C0K4cus28INbW', '967-107-607', NULL, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(49, '6mLuDw345S', 'Cantú Bustos', 'Maricarmen', '855705', '40950576J', 'DCY', '1997-06-09 00:00:00', 'H', 'Consultor de Configuración Humano', 'Torrente Laura 4', 'Sagunto', '15060', 'País Vasco', '991169389', 'Facilitador', 'Duarte, Nájera y Cazares Asociados', 'Videojuegos', '2020-12-03 00:00:00', NULL, 'MariaSoledad_SalazarQuintana@gmail.com', 'Elisa_MayorgaEnriquez@hotmail.com', '$2b$10$WKGAdWloouNMCFecaK2ZbOWu9j/kFuOZ9bqHqP/PJZY.57xVnEBOi', '967-213-596', NULL, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(50, 'JNEo44WhIe', 'Carmona Aponte', 'Juan Ramón', '442208', '66710833Y', 'KQM', '1997-07-28 00:00:00', 'M', 'Agente de Grupo International', 'Sector Manuel, 8', 'Reus', '11983', 'Cataluña', '969 489 520', 'Facilitador', 'Berríos, Anaya y Mejía Asociados', 'Bebes', '2022-05-20 00:00:00', '2025-02-02 00:00:00', 'Ignacio_ArellanoArias39@hotmail.com', 'JoseEduardo75@gmail.com', '$2b$10$chx.CuLVuPB1OdTc3bpF4uMx1q7FJV14KJgGwIHSoUpkf2qHb2.va', '976-731-148', NULL, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(51, 'fGmKezSARX', 'Barela Calvillo', 'Esperanza', '763604', '92040876X', 'YJF', '2023-06-05 00:00:00', 'O', 'Director de Comunicaciones Global', 'Masía Jesús Godínez 31', 'Almería', '76010', 'País Vasco', '908738777', 'Estratega', 'Archuleta y Quesada', 'Salud', '2022-06-02 00:00:00', NULL, 'Timoteo28@hotmail.com', 'Alfonso5@gmail.com', '$2b$10$.cW/8T/wc4fVbE4442KVFOO1uc4Uq26t5CeG4or/45OIGm1k/G.se', '972.574.794', NULL, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL);

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
(1, 1, 1, '2025-02-03 13:14:17', '2025-02-03 13:14:17', NULL),
(2, 2, 8, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(3, 3, 8, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(4, 4, 5, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(5, 5, 6, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(6, 6, 5, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(7, 7, 8, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(8, 8, 5, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(9, 9, 2, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(10, 10, 6, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(11, 11, 9, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(12, 12, 9, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(13, 13, 4, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(14, 14, 7, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(15, 15, 8, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(16, 16, 8, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(17, 17, 5, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(18, 18, 5, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(19, 19, 8, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(20, 20, 10, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(21, 21, 6, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(22, 22, 3, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(23, 23, 6, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(24, 24, 9, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(25, 25, 9, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(26, 26, 3, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(27, 27, 10, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(28, 28, 10, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(29, 29, 3, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(30, 30, 4, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(31, 31, 10, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(32, 32, 4, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(33, 33, 6, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(34, 34, 7, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(35, 35, 8, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(36, 36, 3, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(37, 37, 2, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(38, 38, 9, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(39, 39, 6, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(40, 40, 6, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(41, 41, 7, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(42, 42, 8, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(43, 43, 4, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(44, 44, 4, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(45, 45, 4, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(46, 46, 5, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(47, 47, 8, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(48, 48, 8, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(49, 49, 5, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(50, 50, 8, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL),
(51, 51, 6, '2025-02-03 13:14:19', '2025-02-03 13:14:19', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

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
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT de la tabla `users_roles`
--
ALTER TABLE `users_roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `subcategories`
--
ALTER TABLE `subcategories`
  ADD CONSTRAINT `subcategories_ibfk_1` FOREIGN KEY (`id_category`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

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
