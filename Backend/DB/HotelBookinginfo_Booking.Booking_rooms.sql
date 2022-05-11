CREATE DATABASE  IF NOT EXISTS "HotelBookinginfo" /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `HotelBookinginfo`;
-- MySQL dump 10.13  Distrib 8.0.28, for macos11 (x86_64)
--
-- Host: mysql-avinash-sjsu-adbc.aivencloud.com    Database: HotelBookinginfo
-- ------------------------------------------------------
-- Server version	8.0.27

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
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '0a13494f-b90e-11ec-8bfa-aacafbf6ba44:1-85,
478a2e53-b859-11ec-8aea-ce81c38edddc:1-102,
7f1fa08f-c7f4-11ec-a304-02b354ae1337:1-29176';

--
-- Table structure for table `Booking.Booking_rooms`
--

DROP TABLE IF EXISTS `Booking.Booking_rooms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Booking.Booking_rooms` (
  `Id` int NOT NULL,
  `Booking_id` int NOT NULL,
  `Room_type_id` int NOT NULL,
  `Allocated_room` int NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `fk_Booking_rooms_Booking_id` (`Booking_id`),
  KEY `fk_Allocated_rooms_info_Booking_id` (`Room_type_id`),
  CONSTRAINT `fk_Allocated_rooms_info_Booking_id` FOREIGN KEY (`Room_type_id`) REFERENCES `Booking.Booking_details` (`room_type_id`),
  CONSTRAINT `fk_Booking_rooms_Booking_id` FOREIGN KEY (`Booking_id`) REFERENCES `Booking.Booking_details` (`Booking_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Booking.Booking_rooms`
--

LOCK TABLES `Booking.Booking_rooms` WRITE;
/*!40000 ALTER TABLE `Booking.Booking_rooms` DISABLE KEYS */;
/*!40000 ALTER TABLE `Booking.Booking_rooms` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-09 11:34:03
