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
-- Table structure for table `Booking.Booking_details`
--

DROP TABLE IF EXISTS `Booking.Booking_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Booking.Booking_details` (
  `Booking_id` int NOT NULL AUTO_INCREMENT,
  `Customer_id` int NOT NULL,
  `Booking_date` date NOT NULL,
  `Check_in_date` date NOT NULL,
  `Check_in_time` varchar(5) NOT NULL DEFAULT '14:00',
  `check_out_date` date DEFAULT NULL,
  `check_out_time` varchar(5) DEFAULT '14:00',
  `No_of_guest` int NOT NULL,
  `hotel_id` int NOT NULL,
  `room_type_id` int NOT NULL,
  `Amenities` varchar(45) DEFAULT NULL,
  `meal` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT 'created',
  PRIMARY KEY (`Booking_id`),
  KEY `fk_Booking_details_Customer_id` (`Customer_id`),
  KEY `fk_Booking_details_hotel_id` (`hotel_id`),
  KEY `fk_Booking_details_room_type_id` (`room_type_id`),
  CONSTRAINT `fk_Booking_details_Customer_id` FOREIGN KEY (`Customer_id`) REFERENCES `Customer.Customer_Details` (`Customer_id`),
  CONSTRAINT `fk_Booking_details_hotel_id` FOREIGN KEY (`hotel_id`) REFERENCES `Hotel.Hotels` (`Hotel_id`),
  CONSTRAINT `fk_Booking_details_room_type_id` FOREIGN KEY (`room_type_id`) REFERENCES `Hotel.Rooms_types` (`Room_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Booking.Booking_details`
--

LOCK TABLES `Booking.Booking_details` WRITE;
/*!40000 ALTER TABLE `Booking.Booking_details` DISABLE KEYS */;
INSERT INTO `Booking.Booking_details` VALUES (1,1,'2022-04-11','2022-06-04','14:50','2022-06-06','14:50',2,1,1,NULL,NULL,'created'),(10,1,'2022-04-12','2022-04-12','10.05','2022-04-12','10.05',10,1,1,NULL,NULL,'created'),(12,8,'2022-05-09','2022-05-21','14:00','2022-05-22','14:00',2,1,3,'fitness','breakfast','created'),(13,8,'2022-05-09','2022-05-21','14:00','2022-05-22','14:00',2,1,3,'fitness','breakfast','created'),(14,8,'2022-05-09','2022-05-21','14:00','2022-05-22','14:00',2,1,3,'fitness','breakfast','created');
/*!40000 ALTER TABLE `Booking.Booking_details` ENABLE KEYS */;
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

-- Dump completed on 2022-05-09 11:34:13
