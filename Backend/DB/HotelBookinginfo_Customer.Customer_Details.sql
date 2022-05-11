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
-- Table structure for table `Customer.Customer_Details`
--

DROP TABLE IF EXISTS `Customer.Customer_Details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Customer.Customer_Details` (
  `Customer_id` int NOT NULL AUTO_INCREMENT,
  `Customer_first_name` varchar(50) NOT NULL,
  `Customer_last_name` varchar(50) NOT NULL,
  `Customer_Phone` int DEFAULT NULL,
  `Customer_email_id` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`Customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Customer.Customer_Details`
--

LOCK TABLES `Customer.Customer_Details` WRITE;
/*!40000 ALTER TABLE `Customer.Customer_Details` DISABLE KEYS */;
INSERT INTO `Customer.Customer_Details` VALUES (1,'Avinash','Ramesh',1234567890,'test@gmail.com'),(2,'Avi','Ram',1234567890,'test@gmail.com'),(5,'qa','ws',1234567890,'edc@gmail.com'),(6,'Avi','Ramesh',1234567890,'qazwsxedc@gmail.com'),(7,'Pooja','NS',123,'abc'),(8,'Avinash','Ramesh',0,'avinash.ramesh@sjsu.edu'),(40,'Avinash','Ramesh',0,'avinashramesh2312@gmail.com'),(41,'Avinash','Ramesh',0,'rameshavinash94@gmail.com'),(42,'Avinash','Ramesh',0,'avigeth@gmail.com'),(45,'Pooja','NS',0,'poojasramaiah@gmail.com');
/*!40000 ALTER TABLE `Customer.Customer_Details` ENABLE KEYS */;
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

-- Dump completed on 2022-05-09 11:34:09
