-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: db_peluqueria
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `citas`
--

DROP TABLE IF EXISTS `citas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `citas` (
  `id` varchar(20) NOT NULL,
  `dni_usuario` varchar(20) NOT NULL,
  `id_mascota` varchar(20) DEFAULT NULL,
  `id_empleado` varchar(20) NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `citas`
--

LOCK TABLES `citas` WRITE;
/*!40000 ALTER TABLE `citas` DISABLE KEYS */;
INSERT INTO `citas` VALUES ('C001','06296212P','M010','E001','2024-06-01','10:00:00'),('C002','12345678A','M001','E002','2024-06-02','11:00:00'),('C003','23456789B','M002','E003','2024-06-03','12:00:00'),('C004','34567890C','M003','E004','2024-06-04','13:00:00'),('C005','45678901D','M004','E005','2024-06-05','14:00:00'),('C006','56789012E','M005','E006','2024-06-06','15:00:00'),('C007','67890123F','M006','E007','2024-06-07','16:00:00'),('C008','78901234G','M007','E008','2024-06-08','17:00:00'),('C009','89012345H','M008','E009','2024-06-09','18:00:00'),('C010','90123456I','M009','E010','2024-06-10','19:00:00');
/*!40000 ALTER TABLE `citas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empleados`
--

DROP TABLE IF EXISTS `empleados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empleados` (
  `id` varchar(20) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `puesto` varchar(50) NOT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empleados`
--

LOCK TABLES `empleados` WRITE;
/*!40000 ALTER TABLE `empleados` DISABLE KEYS */;
INSERT INTO `empleados` VALUES ('E001','Laura','García','Veterinaria','600111222'),('E002','Pedro','Martínez','Peluquero','600222333'),('E003','Sara','López','Veterinaria','600333444'),('E004','Juan','Sánchez','Peluquero','600444555'),('E005','Marta','Díaz','Recepcionista','600555666'),('E006','Luis','Fernández','Veterinario','600666777'),('E007','Ana','Ruiz','Peluquera','600777888'),('E008','Carlos','Moreno','Veterinario','600888999'),('E009','Elena','Jiménez','Recepcionista','600999000'),('E010','Jorge','Castro','Peluquero','601000111');
/*!40000 ALTER TABLE `empleados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mascotas`
--

DROP TABLE IF EXISTS `mascotas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mascotas` (
  `id` varchar(20) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `especie` varchar(50) NOT NULL,
  `raza` varchar(50) DEFAULT NULL,
  `edad` int DEFAULT NULL,
  `dni_dueno` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mascotas`
--

LOCK TABLES `mascotas` WRITE;
/*!40000 ALTER TABLE `mascotas` DISABLE KEYS */;
INSERT INTO `mascotas` VALUES ('M001','Rocky','Perro','Labrador',5,'12345678A'),('M002','Misu','Gato','Siamés',3,'23456789B'),('M003','Toby','Perro','Bulldog',2,'34567890C'),('M004','Luna','Gato','Persa',4,'45678901D'),('M005','Max','Perro','Pastor Alemán',6,'56789012E'),('M006','Nala','Gato','Maine Coon',1,'67890123F'),('M007','Coco','Perro','Beagle',7,'78901234G'),('M008','Simba','Gato','Bengalí',2,'89012345H'),('M009','Thor','Perro','Golden Retriever',3,'90123456I'),('M010','Kiara','Gato','Angora',5,'06296212P');
/*!40000 ALTER TABLE `mascotas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `precio` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Champú Hipoalergénico','Champú suave para mascotas con piel sensible, sin fragancias ni colorantes.',9.99),(2,'Acondicionador de Aloe Vera','Hidrata el pelaje y facilita el cepillado, con extracto natural de aloe vera.',8.5),(3,'Cepillo Desenredante','Cepillo de cerdas suaves para eliminar nudos sin dañar la piel.',12),(4,'Cortaúñas Profesional','Cortaúñas de acero inoxidable con mango antideslizante.',7.75),(5,'Toallitas Húmedas para Mascotas','Toallitas suaves y sin alcohol para limpieza rápida de patas y pelaje.',5.25),(6,'Colonia para Perros','Fragancia ligera y duradera diseñada especialmente para perros.',6.99),(7,'Peine para Pulgas','Peine de dientes finos para eliminar pulgas y huevos del pelaje.',4.99),(8,'Champú Antipulgas','Champú medicado para eliminar pulgas y aliviar la picazón.',11.3),(9,'Secador de Mano para Mascotas','Secador de aire templado con boquillas ajustables.',35),(10,'Guante Quitapelo','Guante de silicona que elimina el pelo suelto mientras se acaricia al animal.',9),(11,'Acondicionador en Spray','Desenredante sin enjuague que deja el pelaje brillante y suave.',10.5),(12,'Champú en Espuma Seco','Limpieza rápida sin agua, ideal para viajes o entre baños.',7.8),(13,'Esmalte de Uñas para Mascotas','Esmalte no tóxico de secado rápido para decorar las uñas.',6.5),(14,'Tijeras de Peluquería Curvas','Tijeras de acero inoxidable con punta redondeada para mayor seguridad.',15.9),(15,'Máquina Cortapelo Profesional','Cortadora de pelo silenciosa y potente para uso doméstico o profesional.',49.99),(16,'Champú Blanqueador para Pelaje Claro','Realza el brillo natural del pelaje blanco o claro sin decolorar.',10.25),(17,'Bálsamo para Almohadillas','Protege e hidrata las almohadillas resecas o agrietadas.',6.8),(18,'Deslanador para Razas de Pelo Largo','Herramienta especial para retirar el subpelo muerto sin dañar el pelaje.',13.7),(19,'Spray Antinudos','Evita y elimina nudos fácilmente, ideal para razas de pelo largo.',9.95),(20,'Perfume Natural para Gatos','Fragancia delicada sin alcohol, especialmente formulada para gatos.',6.3);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-02 12:47:22
