-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-02-2025 a las 11:52:36
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
(1, 'Proceso de planificación estratégica', '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(2, 'Procesos de enseñanza y aprendizaje', '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(3, 'Procesos de gestión', '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(4, 'Proceso de medición y mejora', '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL);

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
(1, 'Convocatoria de Reunión', 'DYC05', 'https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/ESTouQG8LyBMjY7hM5S7KhMBo1_Z4rNLZNCNhoRTeig0UA?e=D9RRuX', 1, 0, '2025-02-18 10:03:08', '2025-02-18 09:08:49', NULL),
(2, 'Protección de datos', 'DYC12', 'https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/EaKJ_ArMD2ZCgvRky57RxAABBAseeN0wru_u9COLFDJL0Q?e=bZuu1P', 1, 0, '2025-02-18 10:03:08', '2025-02-18 09:08:51', NULL),
(3, 'Ficha de Proceso - Actividades de Aula', 'ACT01', 'https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/Ecl-7OtaOgZArNDTZ5BvuisBDIoDSAa1FlKtvYoj03Uy5Q?e=MumMPD', 2, 0, '2025-02-18 10:04:23', '2025-02-18 09:08:54', NULL),
(4, 'Justificante faltas de alumnado', 'ACT02', 'https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/EUCn_eac2ttOsCX3wDUDtGABrmfgR4RadMFnVlS05uITZQ?e=m8TAvT', 2, 0, '2025-02-18 10:04:23', '2025-02-18 09:08:56', NULL),
(5, 'Modelo de reclamación notas parciales', 'EVA04', 'https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/EcjGd_JW03NKp_jMNpAfpcUBXOo8JmNFm5msUR06A_T9Kw?e=VLgOqK', 3, 0, '2025-02-18 09:10:51', '2025-02-18 09:10:51', NULL),
(6, 'Acta de Evaluación', 'EVA05', 'https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/EUg3h-eoZhlKrwxlZ0tPLSoB-lVAi-z-LoQ1DFiDoDIenw?e=uyoly6', 3, 0, '2025-02-18 09:12:42', '2025-02-18 09:12:42', NULL),
(7, 'Ficha datos alumnado', 'FEM05', 'https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/Ed9OSl6bqHBOjIPcBFnmn5EBFwdIhiaC2mGB0-kjJ3dyAA?e=ik2tnM', 4, 0, '2025-02-18 09:13:46', '2025-02-18 09:13:46', NULL),
(8, 'Ficha datos empresas', 'FEM10', 'https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/EXxZuhBJ01hAkjwGbMyCzYcB8ywMmP5kfEJkSd1g8wwB9g?e=cSLKqJ', 4, 0, '2025-02-18 09:14:28', '2025-02-18 09:14:28', NULL),
(9, 'Autorización Inclusión en bolsa de trabajo', 'ORI04', 'https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/EWHBVIflbu9BpuKhtZjN0eYBy20uyppmI1DRl95PCx6HqA?e=JGnheJ', 5, 0, '2025-02-18 09:15:20', '2025-02-18 09:15:20', NULL),
(10, 'Firma Alumnado en Dpto IOP', 'ORI05', 'https://crfpcastilla.sharepoint.com/:x:/s/EPT13002691E03-SGC/EUeqSPuv2F5HhfvwRcc4CtsBDHT4mJNs_w9GW7VW2bpzNw?e=QPQKGs', 5, 0, '2025-02-18 09:16:09', '2025-02-18 09:16:09', NULL),
(11, 'Autorización alumnado mayor-menor de edad', 'PROG07', 'https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/EfMiek9m1w5Dih8pceFmqEABKRP0J7JuFfzYgYUbGztg4g?e=WoEElM', 6, 0, '2025-02-18 09:17:13', '2025-02-18 09:17:13', NULL),
(12, 'Ficha de datos de ACE', 'PROG11', 'https://crfpcastilla.sharepoint.com/sites/EPT13002691E03-SGC/Documentos%20compartidos/Forms/AllItems.aspx?id=%2Fsites%2FEPT13002691E03%2DSGC%2FDocumentos%20compartidos%2FSGC%2FSGC%2Dweb%2FENSENANZA%2DAPRENDIZAJE%2FPROGRAMACION%2FPROG11%20Ficha%20de%20datos%20de%20ACE%2Epdf&parent=%2Fsites%2FEPT13002691E03%2DSGC%2FDocumentos%20compartidos%2FSGC%2FSGC%2Dweb%2FENSENANZA%2DAPRENDIZAJE%2FPROGRAMACION&p=true&ga=1', 6, 0, '2025-02-18 09:23:56', '2025-02-18 09:23:56', NULL),
(13, 'TUT02 Aviso de anulacion matricula.pdf', 'TUT02', 'https://crfpcastilla.sharepoint.com/sites/EPT13002691E03-SGC/Documentos%20compartidos/Forms/AllItems.aspx?id=%2Fsites%2FEPT13002691E03%2DSGC%2FDocumentos%20compartidos%2FSGC%2FSGC%2Dweb%2FENSENANZA%2DAPRENDIZAJE%2FTUTORIA%2FTUT02%20Aviso%20de%20anulacion%20matricula%2Epdf&parent=%2Fsites%2FEPT13002691E03%2DSGC%2FDocumentos%20compartidos%2FSGC%2FSGC%2Dweb%2FENSENANZA%2DAPRENDIZAJE%2FTUTORIA&p=true&ga=1', 7, 1, '2025-02-18 09:25:56', '2025-02-18 09:25:56', NULL),
(14, 'Acta de elección de delegados', 'TUT07', 'https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/EXf6As9Pg0tLlsaUdZGkC-UBVZ1ESOKsxDNqOZYsRMgChQ?e=wZ5HV9', 7, 0, '2025-02-18 09:26:34', '2025-02-18 09:26:34', NULL),
(15, 'Listado material botiquín', 'PRL02', 'https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/EbMRo3EcwxpCuNXC1k3ptCIBIaEESDkhhmBL3vKEpAA-1g?e=FFIBeY', 8, 0, '2025-02-18 09:27:12', '2025-02-18 09:27:12', NULL),
(16, 'Evaluación Simulacro', 'PRL08', 'https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/EQ6XQNS0cnhGr8LlQaT9Ao8B-wMc0hxz27YDjn-vi_Hv8Q?e=z7CKzg', 8, 0, '2025-02-18 09:27:40', '2025-02-18 09:27:40', NULL),
(17, 'RRHH02 Ficha datos personales profesorado.pdf', 'RRHH02', 'https://crfpcastilla.sharepoint.com/sites/EPT13002691E03-SGC/Documentos%20compartidos/Forms/AllItems.aspx?id=%2Fsites%2FEPT13002691E03%2DSGC%2FDocumentos%20compartidos%2FSGC%2FSGC%2Dweb%2FGESTION%2FRRHH%2FRRHH02%20Ficha%20datos%20personales%20profesorado%2Epdf&parent=%2Fsites%2FEPT13002691E03%2DSGC%2FDocumentos%20compartidos%2FSGC%2FSGC%2Dweb%2FGESTION%2FRRHH&p=true&ga=1', 9, 0, '2025-02-18 09:28:21', '2025-02-18 10:50:09', NULL),
(18, 'Modelo de asuntos propios retribuidos', 'RRHH10', 'https://crfpcastilla.sharepoint.com/sites/EPT13002691E03-SGC/Documentos%20compartidos/Forms/AllItems.aspx?id=%2Fsites%2FEPT13002691E03%2DSGC%2FDocumentos%20compartidos%2FSGC%2FSGC%2Dweb%2FGESTION%2FRRHH%2FRRHH10%20Modelo%20asuntos%20propios%20retribuidos%2Epdf&parent=%2Fsites%2FEPT13002691E03%2DSGC%2FDocumentos%20compartidos%2FSGC%2FSGC%2Dweb%2FGESTION%2FRRHH&p=true&ga=1', 9, 0, '2025-02-18 09:29:45', '2025-02-18 09:29:45', NULL),
(19, 'Control de Averías y Suministros del Centro', 'RMAT04', 'https://crfpcastilla.sharepoint.com/:x:/s/EPT13002691E03-SGC/EcVwgtzmbJZDj696UtToBe0BPP_cvywRcuE4bqWaYbRFXg?e=hfHfAB', 10, 0, '2025-02-18 09:30:44', '2025-02-18 09:30:44', NULL),
(20, 'Préstamo de Equipo Informático', 'RMAT07', 'https://crfpcastilla.sharepoint.com/sites/EPT13002691E03-SGC/Documentos%20compartidos/Forms/AllItems.aspx?id=%2Fsites%2FEPT13002691E03%2DSGC%2FDocumentos%20compartidos%2FSGC%2FSGC%2Dweb%2FGESTION%2FRECURSOS%20MATERIALES%2FRMAT07%20Prestamo%20de%20Equipo%20Informatico%2Epdf&parent=%2Fsites%2FEPT13002691E03%2DSGC%2FDocumentos%20compartidos%2FSGC%2FSGC%2Dweb%2FGESTION%2FRECURSOS%20MATERIALES&p=true&ga=1', 10, 0, '2025-02-18 09:31:51', '2025-02-18 09:31:51', NULL),
(21, 'Informe de Auditoría Interna', 'AUD03', 'https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/ESjTFdIo1gtCuoxyHUL5UUYBVf1hy4ZvRILn0gmbLKUIWg?e=CnTlg9', 11, 0, '2025-02-18 09:32:43', '2025-02-18 09:32:43', NULL),
(22, 'Listado de No Conformidades (NC)', 'AUD06', 'https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/Efsv4VQD7cpFmjhQ2m5KWtUB0Jov9e3RmxPlmCiPf4wH6w?e=qEkaWT', 11, 0, '2025-02-18 09:33:12', '2025-02-18 09:33:12', NULL),
(23, 'Memoria Final Curso', 'MEM01', 'https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/EfyMXntGPiBJnl-wy_tR0tEB_TmdV6-bxNPVVj089OSCKA?e=JKiRGl', 12, 0, '2025-02-18 09:34:21', '2025-02-18 09:34:21', NULL),
(24, 'Memoria Encuesta ACE', 'MEM04', 'https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/Ef0GB9f--lNBpsftiaz_OecBFDMPmgk9Z-pFxu7J6z9fOA?e=qlsVMH', 12, 0, '2025-02-18 09:35:09', '2025-02-18 09:35:09', NULL),
(25, 'Hoja de SQR', 'SQR02', 'https://crfpcastilla.sharepoint.com/sites/EPT13002691E03-SGC/Documentos%20compartidos/Forms/AllItems.aspx?id=%2Fsites%2FEPT13002691E03%2DSGC%2FDocumentos%20compartidos%2FSGC%2FSGC%2Dweb%2FMEDICION%20y%20MEJORA%2FSQR%2FSQR02%20Hoja%20de%20SQR%2Epdf&parent=%2Fsites%2FEPT13002691E03%2DSGC%2FDocumentos%20compartidos%2FSGC%2FSGC%2Dweb%2FMEDICION%20y%20MEJORA%2FSQR&p=true&ga=1', 14, 0, '2025-02-18 09:36:09', '2025-02-18 09:36:09', NULL);

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
(1, '765107', 2025, 'ADMINISTRADOR', 'Gestiona permisos de usuario, controla la configuración del sistema y supervisa la seguridad de la plataforma.', '2025-02-18 08:59:40', '2025-02-18 08:59:40', NULL),
(2, '782771', 2025, 'SECRETARIO/A', 'Administra tareas administrativas como la gestión de documentos, actualización de registros y asistencia en la programación de eventos.', '2025-02-18 08:59:40', '2025-02-18 08:59:40', NULL),
(3, '204341', 2025, 'JEFE/A DE DEPARTAMENTO', 'Gestiona la configuración de los departamentos, asigna tareas y supervisa los informes de progreso dentro de la aplicación.', '2025-02-18 08:59:40', '2025-02-18 08:59:40', NULL),
(4, '793851', 2025, 'JEFE/A DE ESTUDIOS ADJUNTO', 'Supervisa y aprueba los programas académicos, realiza ajustes a los contenidos y coordina la distribución de materiales educativos.', '2025-02-18 08:59:40', '2025-02-18 08:59:40', NULL),
(5, '805767', 2025, 'JEFE/A TÉCNICO/A', 'Gestiona la configuración de sistemas técnicos, supervisa las operaciones técnicas y resuelve problemas técnicos dentro de la plataforma.', '2025-02-18 08:59:40', '2025-02-18 08:59:40', NULL),
(6, '842058', 2025, 'COORDINADOR DE PREVENCIÓN', 'Controla las configuraciones de seguridad, monitorea las alertas y asegura el cumplimiento de las normativas de prevención de riesgos.', '2025-02-18 08:59:40', '2025-02-18 08:59:40', NULL),
(7, '742061', 2025, 'COORDINADOR/A DE FORMACIÓN Y TRANSFORMACIÓN DIGITAL', 'Configura y gestiona módulos de capacitación online, organiza seminarios virtuales y promueve la integración de herramientas digitales en el proceso de formación.', '2025-02-18 08:59:40', '2025-02-18 08:59:40', NULL),
(8, '112397', 2025, 'DIRECTOR/A', 'Supervisa la gestión de usuarios, ajusta políticas de acceso y toma decisiones clave sobre la evolución y expansión de la plataforma.', '2025-02-18 08:59:40', '2025-02-18 08:59:40', NULL),
(9, '857253', 2025, 'COORDINADOR/A DE AULA DE TECNOLOGÍA APLICADA', 'Gestiona las configuraciones del aula virtual de tecnología, organiza actividades prácticas y supervisa el progreso de los estudiantes.', '2025-02-18 08:59:40', '2025-02-18 08:59:40', NULL),
(10, '16291', 2025, 'COORDINADOR/A DE AULA PROFESIONAL DE EMPRENDIMIENTO', 'Gestiona módulos de emprendimiento, crea proyectos interactivos y coordina las mentorías y talleres sobre nuevas empresas dentro de la aplicación.', '2025-02-18 08:59:40', '2025-02-18 08:59:40', NULL);

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
('20250208231842-create-task-document.cjs');

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
(1, 'Dirección y comunicación (DYC)', 1, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(2, 'Actividades de aula (ACT)', 2, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(3, 'Evaluación (EVA)', 2, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(4, 'Formación Empresas (FEM)', 2, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(5, 'Orientación (ORI)', 2, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(6, 'Programación (PROG)', 2, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(7, 'Tutoría (TUT)', 2, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(8, 'Prevención de riesgos laborales (PRL)', 3, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(9, 'Recursos Humanos (RRHH)', 3, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(10, 'Recursos materiales (RMAT)', 3, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(11, 'Auditorías', 4, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(12, 'Memorias anuales', 4, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(13, 'Registros de control', 4, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(14, 'SQRs (Sugerencias, Quejas y Reclamaciones)', 4, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL);

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
(1, 'Actualización de datos del profesorado', '2025-02-19 23:00:00', 6, '2025-02-18 09:46:57', '2025-02-18 09:46:57', NULL),
(2, 'Aviso anulación de matrícula', '2025-02-18 23:00:00', 6, '2025-02-18 09:59:48', '2025-02-18 09:59:48', NULL);

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
(1, 1, 17, '2025-02-18 09:46:57', '2025-02-18 09:46:57', NULL),
(2, 2, 13, '2025-02-18 09:59:48', '2025-02-18 09:59:48', NULL);

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
(1, 1, 2, 1, '2025-02-18 09:46:57', '2025-02-18 09:54:32', NULL),
(2, 1, 25, 1, '2025-02-18 09:46:57', '2025-02-18 09:46:57', NULL),
(3, 1, 35, 1, '2025-02-18 09:46:57', '2025-02-18 09:46:57', NULL),
(4, 1, 16, 1, '2025-02-18 09:46:57', '2025-02-18 09:46:57', NULL),
(5, 1, 19, 1, '2025-02-18 09:46:57', '2025-02-18 09:46:57', NULL),
(6, 1, 4, 1, '2025-02-18 09:46:57', '2025-02-18 09:46:57', NULL),
(7, 1, 32, 1, '2025-02-18 09:46:57', '2025-02-18 09:46:57', NULL),
(8, 1, 37, 1, '2025-02-18 09:46:57', '2025-02-18 09:46:57', NULL),
(9, 1, 51, 1, '2025-02-18 09:46:57', '2025-02-18 09:46:57', NULL),
(10, 2, 2, 1, '2025-02-18 09:59:48', '2025-02-18 10:05:08', NULL),
(11, 2, 4, 1, '2025-02-18 09:59:48', '2025-02-18 09:59:48', NULL),
(12, 2, 16, 1, '2025-02-18 09:59:48', '2025-02-18 09:59:48', NULL),
(13, 2, 19, 1, '2025-02-18 09:59:48', '2025-02-18 09:59:48', NULL),
(14, 2, 25, 1, '2025-02-18 09:59:48', '2025-02-18 09:59:48', NULL),
(15, 2, 32, 1, '2025-02-18 09:59:48', '2025-02-18 09:59:48', NULL),
(16, 2, 35, 1, '2025-02-18 09:59:48', '2025-02-18 09:59:48', NULL),
(17, 2, 37, 1, '2025-02-18 09:59:48', '2025-02-18 09:59:48', NULL),
(18, 2, 51, 1, '2025-02-18 09:59:48', '2025-02-18 09:59:48', NULL);

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
(1, 'A001', 'User', 'Admin', 'NRP001', '12345678A', 'ADM', '1980-01-01 00:00:00', 'O', 'Admin', '123 Admin Street', 'Admin City', '12345', 'Admin Province', '987654321', 'Admin Specialty', 'Admin Body', 'Admin Department', '2000-01-01 00:00:00', NULL, 'jaime.ornu@gmail.com', 'calidad.nodemailer@gmail.com', '$2b$10$fnTZ6iczrUlNMQWBn.ZY7OU.0lSsrmyPorKuPG9MsCxSv.wNVQb96', '123456789', NULL, '2025-02-18 08:59:41', '2025-02-18 08:59:41', NULL),
(2, 'ShZga3Njjj', 'Ulloa Cuellar', 'Irene', '822858', '79078261J', 'FOY', '2003-01-08 00:00:00', 'H', 'Analista de Tácticas Interno', 'Extrarradio Magdalena 9', 'La Coruña', '49815', 'Cantabria', '952-343-324', 'Asociado', 'Carreón S.L.', 'Mascotas', '2020-03-11 00:00:00', NULL, 'Eva_AlemanParedes@gmail.com', 'Antonio65@gmail.com', '$2b$10$g/SfJpoWl5Fl6MbSryKqKuLQWHITU7kLkohE3rRgB1BV0udYCbROm', '910502783', NULL, '2025-02-18 08:59:41', '2025-02-18 08:59:41', NULL),
(3, 'WxCpOaLAJA', 'Ocasio Roldán', 'Sergi', '087617', '46503138P', 'PPW', '1996-03-10 00:00:00', 'M', 'Coordinador de Calidad Nacional', 'Puerta José 34', 'Zaragoza', '94348', 'Comunidad Valenciana', '913.569.190', 'Oficial', 'Ocasio S.L.', 'Electrónica', '2022-11-04 00:00:00', NULL, 'Benjamin19@gmail.com', 'Alberto.CardonaZamudio@gmail.com', '$2b$10$V1nNzYgLztEyNX72xXZL5OIX6EDywlNLc7pvBS6nUjs.VX.jHRrDS', '918698137', NULL, '2025-02-18 08:59:41', '2025-02-18 08:59:41', NULL),
(4, '6MF7cejVWP', 'Cervántez Robledo', 'Matilde', '663990', '74975195P', 'EPM', '2005-10-31 00:00:00', 'H', 'Estratega de Configuración Producto', 'Ramal Marta Herrera 8', 'Elda', '46091', 'Navarra', '949546921', 'Agente', 'Yáñez y Bustos', 'Joyería', '2024-03-23 00:00:00', NULL, 'Jordi.ZayasOsorio50@hotmail.com', 'Josefina97@yahoo.com', '$2b$10$d9ZymeceCwwx55tejFmb0uvX.25NAGRCI29kiHAqi7xxmH9xw/AKa', '983 552 877', NULL, '2025-02-18 08:59:41', '2025-02-18 08:59:41', NULL),
(5, 'KXQGYBZ7Om', 'Aparicio Cotto', 'Victoria', '733082', '01583201W', 'CUV', '2021-12-29 00:00:00', 'H', 'Consultor de Marca Nacional', 'Sector Federico Mireles s/n.', 'Lugo', '47792', 'Castilla-La Mancha', '982.762.819', 'Planificador', 'Valdez, Saldivar y Collado Asociados', 'Moda', '2023-11-12 00:00:00', NULL, 'JoseLuis21@hotmail.com', 'Irene.ManzanaresReyes97@hotmail.com', '$2b$10$LMVg2kR7iPfjz6ov5EpOP.w0Y1oqVuz9XhKCLc.GfzjbphSabhIRi', '933815874', NULL, '2025-02-18 08:59:41', '2025-02-18 08:59:41', NULL),
(6, 'y6G9WHaX00', 'Rangel Polanco', 'María de los Ángeles', '741895', '38318289D', 'OPT', '2002-03-25 00:00:00', 'H', 'Asistente de Calidad Humano', 'Apartamento Ángela, 24', 'Benalmádena', '93967', 'La Rioja', '998 347 151', 'Oficial', 'Casas y Mares', 'Marroquinería', '2022-05-25 00:00:00', NULL, 'Caridad_TiradoDominguez@yahoo.com', 'Gilberto.FonsecaBriseno45@gmail.com', '$2b$10$0xrslqZwwFNU5cypwWqYWOnNuwGKRNmqerkBzGW8mHKuLDIjoV3qW', '951.464.209', NULL, '2025-02-18 08:59:41', '2025-02-18 08:59:41', NULL),
(7, '1ExLQ96tlM', 'Carranza Lara', 'Benito', '400973', '03931829N', 'MEG', '2019-12-05 00:00:00', 'M', 'Productor de Normas Humano', 'Riera Anita 6', 'Elda', '68182', 'Región de Murcia', '993.846.320', 'Técnico', 'Márquez y Cadena', 'Librería', '2021-05-06 00:00:00', NULL, 'Cesar.BenitezGalarza66@hotmail.com', 'Blanca90@hotmail.com', '$2b$10$PZ2GMEimbUnWH78ab/Qx1OLm2MU1wHYm0OM12BEnPG3zkl448P2sK', '926-504-690', NULL, '2025-02-18 08:59:41', '2025-02-18 08:59:41', NULL),
(8, 'FnI8FsEhUD', 'Quiróz Benavídez', 'Raquel', '699941', '91698775U', 'LNV', '2011-03-25 00:00:00', 'H', 'Analista de Factores Nacional', 'Rincón Salvador s/n.', 'Alcoy', '53047', 'Principado de Asturias', '968.646.601', 'Oficial', 'Alanis y Cervántez', 'Parafarmacia', '2022-11-13 00:00:00', NULL, 'Daniela93@gmail.com', 'Guadalupe_BritoCovarrubias@yahoo.com', '$2b$10$W2GdfVs7Wx/I7i1rwkUKpe28jQe1At7.WOKFLd7DPFrqglm8lWe5y', '931.947.364', NULL, '2025-02-18 08:59:41', '2025-02-18 08:59:41', NULL),
(9, 'cOecnclZLh', 'Rosado Salinas', 'Jerónimo', '511312', '13903733H', 'LYV', '2024-05-08 00:00:00', 'M', 'Relacciones de Configuración Dinánmico', 'Huerta Tomás Casares, 68', 'Telde', '79509', 'Navarra', '979-654-674', 'Coordinador', 'Velasco, Sevilla y Archuleta Asociados', 'Joyería', '2024-12-08 00:00:00', NULL, 'Blanca.SoriaDelgado75@hotmail.com', 'Ariadna_PelayoSarabia@hotmail.com', '$2b$10$CAcNKrKEt3Zc63YDBe6OoO8upp9znjH2L5BsDLW50bnobDsXLFL7W', '923-976-068', NULL, '2025-02-18 08:59:41', '2025-02-18 08:59:41', NULL),
(10, 'xloDZH709g', 'Montoya Ibarra', 'Carla', '883032', '16258377E', 'EMQ', '1996-12-23 00:00:00', 'O', 'Técnico de Mobilidad Interno', 'Parcela Esteban s/n.', 'Sabadell', '35017', 'Baleares', '918153303', 'Agente', 'Rivas S.L.', 'Mascotas', '2020-10-03 00:00:00', NULL, 'Dorotea69@gmail.com', 'JoseEmilio28@yahoo.com', '$2b$10$/mjuiz4oCrthqPJAdqfteO5.octSkGv4L.5DyvVwHMrjAchxkEED6', '933348237', NULL, '2025-02-18 08:59:41', '2025-02-18 08:59:41', NULL),
(11, 'r5uNgkCOTS', 'Banda Escobar', 'Timoteo', '240568', '34454704B', 'VZI', '2015-05-04 00:00:00', 'O', 'Desarrollador de Contabilidad Inversor', 'Escalinata Felipe 60', 'Coslada', '23085', 'Andalucía', '970527120', 'Agente', 'Jiménez, Aponte y Palomo Asociados', 'Joyería', '2023-04-23 00:00:00', NULL, 'Bernardo_MaciasVazquez@yahoo.com', 'Hugo_MercadoRios@yahoo.com', '$2b$10$9htWmp5FG7h91PxrRJHCC.Uqmg4d8I88kg26MqzXxnT7OMWJzwmkO', '971212722', NULL, '2025-02-18 08:59:41', '2025-02-18 08:59:41', NULL),
(12, 'uoq7TpW3yh', 'Rentería de Jesús', 'Julia', '551348', '05526933D', 'CVN', '1997-04-08 00:00:00', 'M', 'Representante de Aplicaciones Senior', 'Bloque Micaela Dávila 5', 'Mijas', '26476', 'La Rioja', '937-866-296', 'Asistente', 'Mercado, Parra y Benavídez Asociados', 'Juguetería', '2023-02-19 00:00:00', NULL, 'Maria_CabanArguello@hotmail.com', 'Guillermina.NegreteLaboy@yahoo.com', '$2b$10$px2P9.V4eN5EStGMdTZCaephY4haNiExXigHClaB2mZxxjKG2t/By', '999 233 847', NULL, '2025-02-18 08:59:41', '2025-02-18 08:59:41', NULL),
(13, 'rarAv7xh3u', 'Segura Carrasquillo', 'Miguel', '360865', '32366201T', 'XAG', '2019-07-15 00:00:00', 'M', 'Agente de Operaciones International', 'Puente Rebeca, 9', 'Segovia', '66123', 'Navarra', '943-755-028', 'Gerente', 'Garay Villagómez S.L.', 'Hogar', '2021-07-29 00:00:00', NULL, 'Clara82@hotmail.com', 'Virginia_PerezEspinoza49@gmail.com', '$2b$10$am5z9XNOjyV9irvx68LjT.IgN7US2nxETvuASSCr5p0gd3uaRG4eu', '929 101 323', NULL, '2025-02-18 08:59:41', '2025-02-18 08:59:41', NULL),
(14, 'pr8baz8Cq4', 'Valverde Villanueva', 'Adán', '063726', '00943611S', 'CTR', '2024-05-03 00:00:00', 'M', 'Analista de Seguridada Adelante', 'Subida Adán Briseño, 40', 'Palma de Mallorca', '54343', 'Comunidad Valenciana', '974805349', 'Analista', 'Aragón Becerra Hermanos', 'Informática', '2023-12-30 00:00:00', NULL, 'Maria71@hotmail.com', 'Leonor.ZunigaGuevara@hotmail.com', '$2b$10$Pvs5zR0T5Wz7aD1oa8RZwOKzXpuPpM3RRF/yWiASViCh45JWlEi9C', '962-318-406', NULL, '2025-02-18 08:59:41', '2025-02-18 08:59:41', NULL),
(15, 'Oy7jVzAtle', 'Contreras Granado', 'Agustín', '312965', '66445187J', 'COY', '2001-06-22 00:00:00', 'O', 'Asistente de Creativo Cliente', 'Carretera Arturo Terrazas s/n.', 'Pamplona', '89089', 'Comunidad Valenciana', '933.653.956', 'Estratega', 'Verduzco, Cintrón y Collazo Asociados', 'Marroquinería', '2024-11-12 00:00:00', NULL, 'Gilberto69@hotmail.com', 'Ivan24@yahoo.com', '$2b$10$WDp8.TCET8e0a1AnKnAD.OsVnpM21EubosL.LWXTDBpMpmqDhLQCy', '942-193-726', NULL, '2025-02-18 08:59:41', '2025-02-18 08:59:41', NULL),
(16, 'OYujItovnm', 'Mojica Romero', 'María Elena', '041503', '16754499N', 'LSH', '1999-04-28 00:00:00', 'O', 'Administrador de Implementación Global', 'Arrabal Victoria Mares, 42', 'Mérida', '01017', 'Canarias', '934 729 091', 'Facilitador', 'Contreras e Hijos', 'Electrónica', '2022-03-10 00:00:00', '2025-02-17 00:00:00', 'Carla.SaucedaGaitan43@hotmail.com', 'Ramon.RodarteRosado89@yahoo.com', '$2b$10$3mhTKO4Vo0BfwtdzrlIG2.3.xXszxg2sWZlhwTNhCRbBL64k2cBey', '930184947', NULL, '2025-02-18 08:59:41', '2025-02-18 08:59:41', NULL),
(17, '4sRVe2XIQx', 'Espinoza Rodríguez', 'Jaime', '208377', '65824818F', 'HHR', '1995-09-12 00:00:00', 'O', 'Representante de Integración Senior', 'Barranco María de los Ángeles Rodarte s/n.', 'Tarragona', '58613', 'Aragón', '962.596.721', 'Ingeniero', 'Castellanos, López y Mateo Asociados', 'Cine', '2021-08-24 00:00:00', NULL, 'Isabel47@hotmail.com', 'Silvia71@yahoo.com', '$2b$10$mz6qmaRS.FNPDAzbT0jvTepMYo6NkMBEi7glDr9WsQ1k08jU29hpq', '998 531 391', NULL, '2025-02-18 08:59:41', '2025-02-18 08:59:41', NULL),
(18, 'AleLH56454', 'Centeno Valles', 'María Teresa', '454931', '27207847B', 'ZIT', '1996-03-12 00:00:00', 'M', 'Coordinador de Calidad International', 'Conjunto Homero Delapaz, 8', 'Segovia', '11506', 'La Rioja', '949.205.044', 'Administrador', 'Pedraza Hermanos', 'Informática', '2020-03-24 00:00:00', NULL, 'Dolores71@gmail.com', 'Anita.OrdonezCardona@hotmail.com', '$2b$10$5JXSopTO17wToiIya1DHvO.rMOzb4oh7DNavFFMfHOgoJ0BfUkHEK', '949459004', NULL, '2025-02-18 08:59:41', '2025-02-18 08:59:41', NULL),
(19, 'GQw1Z6A9ow', 'Santiago Chávez', 'Víctor', '766115', '09304935F', 'QPX', '1999-11-23 00:00:00', 'H', 'Arquitecto de Normas International', 'Arrabal Cristóbal Flórez s/n.', 'San Sebastían de los Reyes', '98780', 'Extremadura', '946.466.074', 'Facilitador', 'Rentería, Almanza y Hinojosa Asociados', 'Mascotas', '2022-04-18 00:00:00', NULL, 'Jacobo_DelatorreRosado@yahoo.com', 'Leonor_TrevinoValverde82@hotmail.com', '$2b$10$OFkDVtqo5mxoECtZtgrGsevzx1BHyJJeFD99W6A66ZsYQ4M1JaKCS', '910-323-981', NULL, '2025-02-18 08:59:41', '2025-02-18 08:59:41', NULL),
(20, 'ALQlblOC6g', 'Cuellar Longoria', 'Roser', '213351', '21278467M', 'GCS', '2011-03-29 00:00:00', 'H', 'Técnico de Seguro Gerente', 'Puerta Rodrigo Bueno s/n.', 'Manresa', '63801', 'Baleares', '904328433', 'Analista', 'Leal e Hijos', 'Informática', '2022-07-16 00:00:00', NULL, 'Monica1@gmail.com', 'Elsa_MirandaCarrero25@yahoo.com', '$2b$10$teCt/4VOExKxk2pF4308GeFDzEutwLHdX1PkIN1IHO1ONsK3MbZzu', '948 508 354', NULL, '2025-02-18 08:59:42', '2025-02-18 08:59:42', NULL),
(21, 'WS2FvQUMQc', 'León Lozano', 'Carlota', '813858', '53424698T', 'OHH', '2007-12-15 00:00:00', 'M', 'Ejecutivo de Contabilidad Interno', 'Rambla Luis 76', 'Baracaldo', '66418', 'Canarias', '941 554 198', 'Ejecutivo', 'Olivo y Crespo', 'Bricolaje', '2022-01-09 00:00:00', '2025-02-18 00:00:00', 'Josep_MerinoAlmanza72@gmail.com', 'Jeronimo76@gmail.com', '$2b$10$QFs5J93RhZpcbrvCNg/ES.xTjHATmS0.FqrFPsjLxjDoewqWqEMH6', '925-361-033', NULL, '2025-02-18 08:59:42', '2025-02-18 08:59:42', NULL),
(22, 'xJ9TqfDOhI', 'Angulo Pagan', 'Leonor', '067245', '00027438P', 'TOG', '2003-11-22 00:00:00', 'M', 'Facilitador de Usabilidad Producto', 'Mercado Felipe Tórrez, 45', 'Córdoba', '26573', 'País Vasco', '982.908.967', 'Representante', 'Dueñas, Maldonado y Torres Asociados', 'Parafarmacia', '2021-03-01 00:00:00', NULL, 'Maricarmen44@gmail.com', 'Carles50@gmail.com', '$2b$10$aMsdWpEJCSZToLBK9beETeKwxx8p/zvdIURcpzPPxqna1uewrQGWe', '977 028 633', NULL, '2025-02-18 08:59:42', '2025-02-18 08:59:42', NULL),
(23, 'IjFOCSUSnZ', 'Iglesias Pizarro', 'Teresa', '929289', '00538506J', 'EEE', '2009-04-25 00:00:00', 'O', 'Relacciones de Implementación Jefe', 'Jardines María Eugenia 14', 'Tarrasa', '33294', 'Castilla y León', '910544152', 'Productor', 'Medrano, Hernández y de Jesús Asociados', 'Hogar', '2024-11-16 00:00:00', NULL, 'Fernando38@hotmail.com', 'Elena75@gmail.com', '$2b$10$i2OHU6q1bKKS2IE/Odl2uOM/aUWt.vHKZ05FeBoFX1NRtC9muh/m.', '960-819-701', NULL, '2025-02-18 08:59:42', '2025-02-18 08:59:42', NULL),
(24, 'EYtixG8T2U', 'Valadez Camarillo', 'Pío', '403847', '03218054U', 'NRJ', '2003-08-22 00:00:00', 'H', 'Diseñador de Marketing Director', 'Cuesta Rebeca Zaragoza 81', 'Calahorra', '97417', 'Castilla-La Mancha', '945137963', 'Consultor', 'Reséndez Olivas S.A.', 'Informática', '2023-07-28 00:00:00', NULL, 'Mariana_AvilaMadrigal@hotmail.com', 'Ana_MojicaAlarcon@yahoo.com', '$2b$10$x1Mu.pP6tRn6kReZq4DS.OAgPom1z6u1jERC0Cyq29V/5EhDJ6lfW', '910-352-874', NULL, '2025-02-18 08:59:42', '2025-02-18 08:59:42', NULL),
(25, 'tfosrTkS8o', 'Dávila Candelaria', 'Ramiro', '305115', '49880743C', 'XVP', '2017-10-06 00:00:00', 'H', 'Relacciones de Tácticas Distrito', 'Calle María Teresa 39', 'Estepona', '34870', 'Andalucía', '973 169 398', 'Consultor', 'Armas, Vallejo y Montalvo Asociados', 'Moda', '2022-07-07 00:00:00', NULL, 'Marilu55@gmail.com', 'Virginia5@gmail.com', '$2b$10$x0QoGnJ22bOgBZfyQIptIuh7K3SGQ25UM9aH4W19SEhbLvvxIPnXu', '996 460 962', NULL, '2025-02-18 08:59:42', '2025-02-18 08:59:42', NULL),
(26, 'u1oMrgn7T9', 'Noriega Quiñones', 'Concepción', '981928', '59175175P', 'GBT', '1995-11-10 00:00:00', 'O', 'Supervisor de Tácticas International', 'Torrente Soledad Soria, 58', 'Almería', '51010', 'Cataluña', '978170623', 'Desarrollador', 'Vera y Bañuelos', 'Librería', '2023-05-09 00:00:00', NULL, 'Debora_ArmentaNajera6@yahoo.com', 'Alfredo11@yahoo.com', '$2b$10$GnZzdHxXPU3yl21VnSOzXuGJZQ.Obrqr9mhZfjTkld74iDWH2x1KK', '911 979 126', NULL, '2025-02-18 08:59:42', '2025-02-18 08:59:42', NULL),
(27, 'cmTqaUaGMx', 'Granados Atencio', 'Jorge Luis', '358906', '07796935Y', 'ZZR', '2005-04-22 00:00:00', 'H', 'Productor de Aplicaciones Central', 'Bloque Hermenegildo 40', 'Parla', '81846', 'Castilla-La Mancha', '995 595 035', 'Funcionario', 'Nevárez, Gurule y Gamboa Asociados', 'Moda', '2023-04-23 00:00:00', NULL, 'Fernando.PinaGallardo@gmail.com', 'Gonzalo_EscobarMejia54@hotmail.com', '$2b$10$xBr7Nc3qdeL8eiUPJdQs1OFZ3sTg3K5KZksQJ5V0npSGIm510pTGO', '975-649-472', NULL, '2025-02-18 08:59:42', '2025-02-18 08:59:42', NULL),
(28, 'Ow4JEbkhsS', 'Archuleta Olvera', 'Samuel', '047064', '32753991V', 'XYU', '2018-11-09 00:00:00', 'M', 'Asociado de Configuración Producto', 'Apartamento Gloria Sepúlveda s/n.', 'Almería', '78006', 'La Rioja', '990035305', 'Oficial', 'Covarrubias Rosario e Hijos', 'Librería', '2024-11-06 00:00:00', NULL, 'Jaime_ReyesVelez60@hotmail.com', 'Barbara.NajeraAlcaraz@gmail.com', '$2b$10$MIVXCJiIjeCQtwmteKoul.5o.9/yINfjo58lx9W.hkGR7yaxqxC/y', '922.075.539', NULL, '2025-02-18 08:59:42', '2025-02-18 08:59:42', NULL),
(29, 'g9hXHcp9Q3', 'Lozada León', 'Hugo', '830688', '18814213K', 'AXK', '2010-08-03 00:00:00', 'O', 'Relacciones de Intranet Futuro', 'Arrabal Maricarmen Jaimes s/n.', 'Reus', '19326', 'Cataluña', '966-279-495', 'Estratega', 'Mata y Toledo', 'Parafarmacia', '2022-07-14 00:00:00', '2025-02-17 00:00:00', 'Juan_GomezPartida76@hotmail.com', 'Gregorio.VanegasPerales@yahoo.com', '$2b$10$AfKfBBeUOZ5Ddb0V91yMi.2wh4vblHnwTSvD9bmbtESDBEIGHckGK', '971.722.948', NULL, '2025-02-18 08:59:42', '2025-02-18 08:59:42', NULL),
(30, 'UPI3gmZlqB', 'Alonzo Iglesias', 'Amalia', '306595', '16909921T', 'QPJ', '2006-04-20 00:00:00', 'M', 'Consultor de Web Dinánmico', 'Ronda Javier Mora, 1', 'Mollet del Vallés', '50435', 'Galicia', '994 345 454', 'Técnico', 'Melgar, Calderón y Terán Asociados', 'Papelería', '2024-05-25 00:00:00', NULL, 'Beatriz86@hotmail.com', 'Jeronimo.RazoPonce@gmail.com', '$2b$10$YsvVHQZideL.j1ejaiKwUeH595bRiGufMEskhB9W7HxLM7C6iKbv6', '921 825 223', NULL, '2025-02-18 08:59:42', '2025-02-18 08:59:42', NULL),
(31, '0YvUQv3iM4', 'Cavazos Ontiveros', 'Jesús', '227296', '04012851N', 'NHZ', '2021-04-09 00:00:00', 'M', 'Coordinador de Métricas Gerente', 'Torrente Marta s/n.', 'El Ejido', '89905', 'Galicia', '958 204 623', 'Arquitecto', 'Loya, Jiménez y Corrales Asociados', 'Informática', '2020-09-26 00:00:00', '2025-02-18 00:00:00', 'Jordi88@hotmail.com', 'Clemente57@gmail.com', '$2b$10$VwiW8QnUFGNlCkpk24BSiOU.akr..Rvs/mt9mXUnYqFP0.waRBUxm', '960098660', NULL, '2025-02-18 08:59:42', '2025-02-18 08:59:42', NULL),
(32, 'dr6gSw2OEE', 'Cadena Perales', 'Miguel', '588510', '67524285O', 'WSJ', '2023-01-30 00:00:00', 'M', 'Oficial de Aplicaciones Producto', 'Polígono Jennifer 28', 'San Cristróbal de la Laguna', '75198', 'Comunidad Valenciana', '907413824', 'Relacciones', 'Olivas Munguía e Hijos', 'Parafarmacia', '2021-05-19 00:00:00', NULL, 'Hugo.MenendezMurillo@yahoo.com', 'Benito18@gmail.com', '$2b$10$RQE7lRznJfa2UIJIAJcLzeh4zX7MRybdqEp7WhZmXfYRw0yJzEbi.', '932-028-481', NULL, '2025-02-18 08:59:42', '2025-02-18 08:59:42', NULL),
(33, 'prZJJSxldw', 'Caballero Miranda', 'Claudia', '856068', '54088745Q', 'JCJ', '2008-08-26 00:00:00', 'M', 'Estratega de Normas Adelante', 'Pasaje Enrique Jaimes, 87', 'Paterna', '67254', 'Galicia', '957-079-290', 'Facilitador', 'Gastélum y Negrón', 'Marroquinería', '2024-08-13 00:00:00', NULL, 'Esteban_FigueroaRodriguez92@hotmail.com', 'Virginia38@gmail.com', '$2b$10$VOTs1G62Ek5yrG0waW.vgugzCqv.ei39mHKr.1SvmHWhLM4mfo4Tq', '996.811.715', NULL, '2025-02-18 08:59:42', '2025-02-18 08:59:42', NULL),
(34, 'Xhdx44EpJY', 'Partida Durán', 'Julia', '546324', '47379398N', 'GQG', '2008-02-11 00:00:00', 'M', 'Asociado de Calidad Central', 'Colegio Berta 9', 'Pamplona', '09798', 'Región de Murcia', '981 904 650', 'Consultor', 'Muñiz y Vela', 'Cine', '2020-04-26 00:00:00', NULL, 'Matilde.MerinoZayas@hotmail.com', 'Elena65@yahoo.com', '$2b$10$5CK3rimPtcMRCUBvVuPuCussA19.ijxBG8xfQMLod45ELHB7dN.g.', '950-336-312', NULL, '2025-02-18 08:59:42', '2025-02-18 08:59:42', NULL),
(35, 'DFZ6jBndbi', 'Loya Cortés', 'María Cristina', '496867', '02454485R', 'QXP', '2008-07-23 00:00:00', 'M', 'Oficial de Interacciones Heredado', 'Masía Pablo Ureña, 57', 'Aýna', '60676', 'Andalucía', '916.495.571', 'Administrador', 'Reyes Esparza Hermanos', 'Música', '2025-01-19 00:00:00', NULL, 'MariadelosAngeles33@hotmail.com', 'Rebeca_PonceTrejo@gmail.com', '$2b$10$.Pr1Y9hbcbolB8/6od1PhelJrNksmjm1cD1i.qg.Vk8WnCOISTI16', '989 108 541', NULL, '2025-02-18 08:59:42', '2025-02-18 08:59:42', NULL),
(36, 'py1nBHMH0D', 'Guzmán Lemus', 'Martín', '819850', '57660272J', 'SOK', '2024-10-31 00:00:00', 'O', 'Director de Marca Futuro', 'Partida Salvador Armijo, 33', 'Ávila', '35362', 'Extremadura', '965-029-981', 'Arquitecto', 'Covarrubias y Rendón', 'Música', '2021-08-10 00:00:00', '2025-02-17 00:00:00', 'Eva_SoriaLeal99@gmail.com', 'Gabriel.ArenasMelendez75@yahoo.com', '$2b$10$Ugdtm7yW9WXY6Vl4Ky.VWueIE0UJ5m1SkCi.GR.EFoWStNSqL5Wgm', '920-852-299', NULL, '2025-02-18 08:59:42', '2025-02-18 08:59:42', NULL),
(37, 'xyGN08BYSx', 'Benítez Pizarro', 'Clemente', '509661', '26925317P', 'PQQ', '2009-02-22 00:00:00', 'M', 'Director de Respuesta Heredado', 'Senda Daniel Mejía, 4', 'Murcia', '22232', 'Canarias', '947 252 435', 'Funcionario', 'Jaimes, Trujillo y Matías Asociados', 'Salud', '2023-09-01 00:00:00', '2025-02-17 00:00:00', 'MariaJose31@hotmail.com', 'JoseMaria78@yahoo.com', '$2b$10$ovzDEFbNs6aLSuPrJ5Uin.BqH2hssakPG8cd4yI9qksiaCDec8oWy', '947.894.021', NULL, '2025-02-18 08:59:42', '2025-02-18 08:59:42', NULL),
(38, 'T3cgodF4QH', 'Sarabia Pizarro', 'Armando', '826547', '51762522V', 'WET', '2009-08-29 00:00:00', 'M', 'Representante de Web Regional', 'Mercado Berta 4', 'Valladolid', '37121', 'Cataluña', '988.311.834', 'Representante', 'Casas y Rivera', 'Informática', '2025-01-24 00:00:00', NULL, 'Alicia_RoybalCarrillo38@gmail.com', 'Leticia.CalderaCrespo@hotmail.com', '$2b$10$pCByT1U1WfPCU2QBwFQvOuAMvCIpsRBfP/spQb3tWJ29bwzAsTm1a', '991 734 234', NULL, '2025-02-18 08:59:42', '2025-02-18 08:59:42', NULL),
(39, 'ttDumqqqWX', 'Pelayo Arroyo', 'Alfonso', '735118', '53098102E', 'ZDX', '2008-03-12 00:00:00', 'H', 'Asociado de Programa Senior', 'Ronda Elsa Baca 3', 'Arrecife', '21881', 'País Vasco', '902.235.661', 'Productor', 'Ibarra Hermanos', 'Decoración', '2020-10-22 00:00:00', '2025-02-17 00:00:00', 'JoseMaria67@yahoo.com', 'Victoria_ReynosoPelayo85@hotmail.com', '$2b$10$EGajAGVEXtie0xC7C6KzD..MJ.JuICqOK3Kz5iTHUlSwDJKm9OjzS', '994298694', NULL, '2025-02-18 08:59:42', '2025-02-18 08:59:42', NULL),
(40, 'xe7T5Vp9OV', 'Ponce Caballero', 'Luis Miguel', '068814', '37774945M', 'FBH', '2006-01-07 00:00:00', 'O', 'Asistente de Usabilidad Interno', 'Riera Mercedes 9', 'Talavera de la Reina', '05871', 'País Vasco', '968748738', 'Supervisor', 'Méndez y Meza', 'Bricolaje', '2021-02-19 00:00:00', NULL, 'Timoteo.AranaAlcala@yahoo.com', 'MarcoAntonio_VillalpandoSevilla@hotmail.com', '$2b$10$c3xg2anz7oqsdlbnYxbxrOqgDAxLvZNNjdDizBJtjn00zVlSMeAKa', '999.532.338', NULL, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(41, 'LC0OuDjP0S', 'Suárez Madrid', 'Gonzalo', '351716', '03659515S', 'VYA', '2000-07-20 00:00:00', 'M', 'Productor de Creativo Senior', 'Glorieta Anita Atencio, 57', 'San Sebastián', '96805', 'Galicia', '983199645', 'Especialista', 'Sotelo y Garrido', 'Videojuegos', '2021-11-01 00:00:00', NULL, 'Claudio_MercadoRivero68@hotmail.com', 'Agustin50@gmail.com', '$2b$10$Abf/ChiqXrzAdyUOds/9Sea0ekFSKEkKepDD.hYGyQqCX.Pz.ZS/C', '951 664 820', NULL, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(42, 'iGuNgXWmFz', 'Serna Jáquez', 'Hugo', '798130', '21343749R', 'OBA', '1998-02-19 00:00:00', 'H', 'Ingeniero de Grupo Corporativo', 'Municipio Rosa s/n.', 'Badajoz', '59051', 'Baleares', '985 452 153', 'Oficial', 'Madrigal S.L.', 'Videojuegos', '2022-03-27 00:00:00', '2025-02-17 00:00:00', 'Maricarmen5@gmail.com', 'Benito.ColonSoliz6@gmail.com', '$2b$10$FqpkaNCSBKRaM9QIGX/ADujY1yfpIsk38PUKnhiB/C8CK9aYsJX1W', '973.164.328', NULL, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(43, 'LlewJxR4z8', 'Amaya Cordero', 'Alejandra', '362048', '51915880S', 'DPO', '2000-10-06 00:00:00', 'O', 'Director de Creativo Heredado', 'Pasaje Hermenegildo s/n.', 'Calahorra', '53375', 'La Rioja', '965.855.847', 'Productor', 'Crespo, Barrios y Cabrera Asociados', 'Parafarmacia', '2021-06-17 00:00:00', NULL, 'Jennifer64@yahoo.com', 'Susana4@gmail.com', '$2b$10$SXiS9zsRS24RCum2E6zeZuDqNU2t/A3FzwMN9DEsFv0GaE3yeZ1oG', '974.495.143', NULL, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(44, 'COhojNVG9I', 'Ferrer Báez', 'Juana', '843867', '36733334A', 'NKQ', '1997-09-08 00:00:00', 'O', 'Facilitador de Interacciones Futuro', 'Arrabal Victoria Suárez 3', 'Aýna', '94075', 'Extremadura', '914 840 273', 'Gerente', 'Cardona S.A.', 'Marroquinería', '2024-03-20 00:00:00', NULL, 'Josefina.MadrigalAlvarado99@gmail.com', 'Veronica.OquendoCarrasco@yahoo.com', '$2b$10$S8sUMO8WjgNaT4Gq94mN1.IfQ.BEqYIDB/Tnhh2OEI7RAKZ8dIR4W', '925 495 050', NULL, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(45, 'ESmiEabvD3', 'Quintero Maldonado', 'Elena', '433665', '79077937N', 'LZM', '2006-07-09 00:00:00', 'H', 'Desarrollador de Creativo Futuro', 'Puente Berta Jaime, 5', 'Tarragona', '41793', 'Baleares', '906.446.528', 'Administrador', 'Partida Partida Hermanos', 'Decoración', '2023-05-08 00:00:00', NULL, 'Julio18@yahoo.com', 'Pio_GarzaOrdonez77@gmail.com', '$2b$10$Yvl/nGv2J2Qi12vlYy.3beyCBU02HoMkEVBUXAOfOHtn7bdh2xiay', '985.595.825', NULL, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(46, 'ehMSOX96Y2', 'Velasco Carvajal', 'Josep', '692827', '64386957J', 'LVS', '2014-10-07 00:00:00', 'M', 'Diseñador de Infraestructura Corporativo', 'Sección Octavio Huerta s/n.', 'La Línea de la Concepción', '20583', 'Cantabria', '955 104 298', 'Relacciones', 'Rocha S.A.', 'Mascotas', '2023-11-22 00:00:00', '2025-02-17 00:00:00', 'Ramon70@gmail.com', 'Rosalia_BritoVelazquez@gmail.com', '$2b$10$j98wRYOkPdJruaLWZAh8c.Xzx3SBpAGc0xX7kHUNeuNhzMWzUJRWS', '995 805 924', NULL, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(47, 'Dl46MJAheU', 'Calderón Serrato', 'Lorena', '272087', '51582430S', 'ZOX', '2006-02-01 00:00:00', 'M', 'Especialista de Operaciones Nacional', 'Travesía Guadalupe Medina 57', 'Benidorm', '07573', 'Comunidad Valenciana', '960.079.942', 'Técnico', 'Lebrón Valentín Hermanos', 'Hogar', '2024-07-20 00:00:00', '2025-02-18 00:00:00', 'Conchita.HerediaAbeyta92@gmail.com', 'Alejandra61@yahoo.com', '$2b$10$oZjHCVOMtKG1ywXyLT5RTe4T3jtdcPLTFrGaXHN.MxD4qKJhhro3W', '952938394', NULL, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(48, 'Iuu4GXl8yZ', 'Prado Esparza', 'Concepción', '586724', '46038777X', 'RBF', '2000-06-01 00:00:00', 'H', 'Consultor de Datos Senior', 'Vía Pública Sara 64', 'San Sebastián', '29673', 'Andalucía', '913624728', 'Administrador', 'Solorzano Vela e Hijos', 'Decoración', '2023-06-23 00:00:00', NULL, 'Federico.AyalaAlcala@hotmail.com', 'Micaela12@yahoo.com', '$2b$10$2h/Hh.1enVRBDKsmintE7OIHjSqEMBLTUFqCx6E7YtXef8zJDX3D6', '919.875.443', NULL, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(49, 'WzNmIAU2f3', 'Marrero Deleón', 'Conchita', '422370', '15067544B', 'KHY', '2017-05-12 00:00:00', 'M', 'Facilitador de Contabilidad International', 'Carretera José María, 7', 'Gijón', '60619', 'Extremadura', '918 751 109', 'Relacciones', 'Loya, Delvalle y Bravo Asociados', 'Deportes', '2024-12-26 00:00:00', NULL, 'Esteban53@yahoo.com', 'Gloria.CerdaSalinas9@yahoo.com', '$2b$10$UTH3Ti6wHsjXCgqD9ReMTOGOIy4pycSicUeujxohhFsmV73/9sYka', '924.507.210', NULL, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(50, '73tXmTVpuJ', 'Benítez Domínguez', 'Ariadna', '958820', '50505163C', 'LQN', '2016-09-05 00:00:00', 'M', 'Representante de Funcionalidad Gerente', 'Monte Armando Botello 45', 'El Prat de LLobregat', '42282', 'País Vasco', '940.885.902', 'Relacciones', 'Fernández, Zamudio y Carrasco Asociados', 'Electrónica', '2021-02-26 00:00:00', NULL, 'Adela19@yahoo.com', 'Gloria.VegaNieves80@hotmail.com', '$2b$10$UB4ACLDN6zhQqrTyblAITuO75ZBbZWtqO7m1xXT2rrGgL2c2cFFIS', '902.291.865', NULL, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(51, '87ymaAvuDJ', 'Bustamante Delagarza', 'Mateo', '199169', '83189150H', 'OYB', '2016-10-18 00:00:00', 'O', 'Productor de Seguridada Director', 'Quinta Emilio 28', 'Algeciras', '78846', 'Andalucía', '909 971 351', 'Analista', 'Crespo, Valle y Garibay Asociados', 'Informática', '2023-07-17 00:00:00', '2025-02-17 00:00:00', 'Carlota47@gmail.com', 'Rosario92@yahoo.com', '$2b$10$9hXOc/hXYiRtxYe/fYDIC.yImf01eRerjMbrkX0VGr6U52veTTfEa', '995.403.254', NULL, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL);

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
(1, 1, 1, '2025-02-18 08:59:41', '2025-02-18 08:59:41', NULL),
(2, 2, 6, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(3, 3, 10, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(4, 4, 6, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(5, 5, 10, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(6, 6, 7, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(7, 7, 9, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(8, 8, 5, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(9, 9, 7, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(10, 10, 5, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(11, 11, 7, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(12, 12, 4, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(13, 13, 3, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(14, 14, 4, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(15, 15, 8, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(16, 16, 6, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(17, 17, 10, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(18, 18, 9, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(19, 19, 6, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(20, 20, 4, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(21, 21, 9, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(22, 22, 4, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(23, 23, 7, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(24, 24, 2, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(25, 25, 6, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(26, 26, 5, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(27, 27, 10, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(28, 28, 4, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(29, 29, 3, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(30, 30, 3, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(31, 31, 3, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(32, 32, 6, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(33, 33, 2, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(34, 34, 4, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(35, 35, 6, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(36, 36, 7, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(37, 37, 6, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(38, 38, 4, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(39, 39, 7, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(40, 40, 10, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(41, 41, 3, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(42, 42, 4, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(43, 43, 4, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(44, 44, 9, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(45, 45, 2, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(46, 46, 4, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(47, 47, 4, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(48, 48, 2, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(49, 49, 8, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(50, 50, 3, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL),
(51, 51, 6, '2025-02-18 08:59:43', '2025-02-18 08:59:43', NULL);

--
-- Índices para tablas volcadas
--

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
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `documents`
--
ALTER TABLE `documents`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `task_documents`
--
ALTER TABLE `task_documents`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `task_users`
--
ALTER TABLE `task_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

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
-- Filtros para la tabla `documents`
--
ALTER TABLE `documents`
  ADD CONSTRAINT `documents_ibfk_1` FOREIGN KEY (`id_subcategory`) REFERENCES `subcategories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

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
